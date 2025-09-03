import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Service worker handling
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.getRegistrations().then(regs => {
    regs.forEach(r => r.update());
  });
}

// Performance monitoring
if (process.env.NODE_ENV === 'production') {
  // Google Analytics (replace with your GA ID)
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');

  // Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(gtag);
    getFID(gtag);
    getFCP(gtag);
    getLCP(gtag);
    getTTFB(gtag);
  });
}

createRoot(document.getElementById("root")!).render(<App />);
