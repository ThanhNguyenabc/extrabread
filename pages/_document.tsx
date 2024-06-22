import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { DOMAIN } from '../constants';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* FAVICON */}
        <link rel="icon" href={`${DOMAIN}/favicon.ico`} type="image/x-icon" />
        <link rel="icon" href={`${DOMAIN}/favicon-16x16.png`} type="image/png" sizes="16x16" />
        <link rel="icon" href={`${DOMAIN}/favicon-32x32.png`} type="image/png" sizes="32x32" />

        {/* // BOOKMARK ICON */}
        <link rel="apple-touch-icon" href={`${DOMAIN}/apple-touch-icon.png`} />
        <link rel="apple-touch-icon" href={`${DOMAIN}/apple-touch-icon.png`} sizes="180x180" />
        <Script
          src="//code.tidio.co/qdbq3bk4yponnps9btlc4ouz4gfpunie.js"
          async
          strategy="afterInteractive"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W5ZGDT8');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W5ZGDT8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}
