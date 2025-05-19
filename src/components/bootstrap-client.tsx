'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(({ Tooltip }) => {
      const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
      );
      [...tooltipTriggerList].forEach((tooltipTriggerEl) => {
        new Tooltip(tooltipTriggerEl);
      });
    });
  }, []);

  return null;
}
