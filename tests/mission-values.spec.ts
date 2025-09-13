import { test, expect } from '@playwright/test';

test('Mission and Values buttons are present and accessible', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check that Mission and Values buttons are present
    const missionButton = page.getByRole('button', { name: /mission/i });
    const valuesButton = page.getByRole('button', { name: /values/i });
    
    await expect(missionButton).toBeVisible();
    await expect(valuesButton).toBeVisible();
    
    // Check accessibility attributes
    await expect(missionButton).toHaveAttribute('role', 'button');
    await expect(missionButton).toHaveAttribute('aria-haspopup', 'true');
    
    await expect(valuesButton).toHaveAttribute('role', 'button');
    await expect(valuesButton).toHaveAttribute('aria-haspopup', 'true');
});

test('Meet Our Leadership section is visible', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check that the Meet Our Leadership section is present
    const leadershipSection = page.getByRole('heading', { name: /meet our leadership/i });
    await expect(leadershipSection).toBeVisible();
    
    // Check that leadership cards are present
    const leadershipCards = page.locator('[class*="text-center group"]');
    await expect(leadershipCards).toHaveCount(3);
});

test('Mission content shows on desktop hover', async ({ page, browserName }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const missionButton = page.getByRole('button', { name: /mission/i });
    
    // Hover over the mission button
    await missionButton.hover();
    
    // Check that popover content appears
    const popoverContent = page.locator('[role="dialog"], [data-radix-popper-content-wrapper]').first();
    await expect(popoverContent).toBeVisible();
    
    // Check that mission text is present in the popover
    await expect(popoverContent).toContainText('empower organizations');
});

test('Values content shows on desktop hover', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const valuesButton = page.getByRole('button', { name: /values/i });
    
    // Hover over the values button
    await valuesButton.hover();
    
    // Check that popover content appears
    const popoverContent = page.locator('[role="dialog"], [data-radix-popper-content-wrapper]').last();
    await expect(popoverContent).toBeVisible();
    
    // Check that values text is present in the popover
    await expect(popoverContent).toContainText('foundation of everything');
});

test('Mission and Values expand as accordion on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check that accordion triggers are present
    const missionTrigger = page.getByRole('button', { name: /mission/i });
    const valuesTrigger = page.getByRole('button', { name: /values/i });
    
    await expect(missionTrigger).toBeVisible();
    await expect(valuesTrigger).toBeVisible();
    
    // Click on mission trigger to expand
    await missionTrigger.click();
    
    // Check that mission content is visible
    const missionContent = page.locator('[data-state="open"]').first();
    await expect(missionContent).toBeVisible();
    
    // Click on values trigger to expand
    await valuesTrigger.click();
    
    // Check that values content is visible
    const valuesContent = page.locator('[data-state="open"]').last();
    await expect(valuesContent).toBeVisible();
});

test('Responsive behavior switches between accordion and popover', async ({ page }) => {
    // Start with mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check that accordion is present on mobile
    const accordion = page.locator('[data-radix-accordion-root]');
    await expect(accordion).toBeVisible();
    
    // Switch to desktop viewport
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.waitForLoadState('networkidle');
    
    // Check that popover triggers are present on desktop
    const missionButton = page.getByRole('button', { name: /mission/i });
    const valuesButton = page.getByRole('button', { name: /values/i });
    
    await expect(missionButton).toBeVisible();
    await expect(valuesButton).toBeVisible();
    
    // Verify no accordion is visible on desktop
    await expect(accordion).not.toBeVisible();
});
