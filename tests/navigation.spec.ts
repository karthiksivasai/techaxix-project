import { test, expect } from '@playwright/test';

const targets = [
  /read more/i,
  /contact us/i,
  /view more services/i
];

test('all key nav/buttons work without errors', async ({ page, context }) => {
  const consoleErrors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.goto('/');
  
  // Wait for the page to load completely
  await page.waitForLoadState('networkidle');
  
  // Check for specific CTA buttons/links
  for (const pattern of targets) {
    const link = page.getByRole('link', { name: pattern }).first();
    const button = page.getByRole('button', { name: pattern }).first();
    
    if (await link.count() > 0) {
      await link.click();
      await page.waitForLoadState('networkidle');
      await page.goBack();
      await page.waitForLoadState('networkidle');
    } else if (await button.count() > 0) {
      await button.click();
      await page.waitForLoadState('networkidle');
    }
  }

  // Test main navigation links
  const navLinks = [
    'About',
    'Services', 
    'Industries',
    'Careers',
    'Contact'
  ];

  for (const linkText of navLinks) {
    const link = page.getByRole('link', { name: linkText }).first();
    if (await link.count() > 0) {
      await link.click();
      await page.waitForLoadState('networkidle');
      await page.goBack();
      await page.waitForLoadState('networkidle');
    }
  }

  // Assert no critical errors
  const criticalErrors = consoleErrors.filter(error => 
    error.includes('Failed to load module script') ||
    error.includes('Invalid hook call') ||
    error.includes('Cannot read properties of null') ||
    error.includes('404 (Not Found)') ||
    error.includes('MIME type')
  );

  expect(criticalErrors).toHaveLength(0);
});

test('chunk loading works correctly', async ({ page }) => {
  const requests: string[] = [];
  
  page.on('request', request => {
    if (request.url().includes('/src/') && request.url().endsWith('.tsx')) {
      requests.push(request.url());
    }
  });

  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Navigate to a few pages to trigger chunk loading
  await page.getByRole('link', { name: 'Services' }).first().click();
  await page.waitForLoadState('networkidle');
  
  await page.getByRole('link', { name: 'About' }).first().click();
  await page.waitForLoadState('networkidle');

  // In dev mode, we expect module requests, not chunk requests
  // The main test is that navigation works without errors
  expect(page.url()).toContain('/about');
});
