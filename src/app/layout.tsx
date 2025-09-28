// ./src/app/layout.tsx
import Script from "next/script";
import type { ReactNode } from "react";

// Import local CSS directly (no <link> tags)
import "../../public/styles/bootstrap.min.css";
import "../../public/styles/style.css";
import "../../public/lib/animate/animate.min.css";
import "../../public/lib/lightbox/css/lightbox.min.css";
import "../../public/lib/owlcarousel/assets/owl.carousel.min.css";

export const metadata = {
  title: "Rotaract FST Fès",
  description: "Converted Next.js App Router Template",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* External CSS OK as <link> */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>

      <body>
        {children}
      <div className="container-fluid bg-dark text-light footer pt-3 pb-3"/>

        {/* Scripts */}
        <Script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/lib/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/lib/wow/wow.min.js" strategy="lazyOnload" />
        <Script src="/lib/easing/easing.min.js" strategy="lazyOnload" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="lazyOnload" />
        <Script src="/lib/counterup/counterup.min.js" strategy="lazyOnload" />
        <Script src="/lib/lightbox/js/lightbox.min.js" strategy="lazyOnload" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
