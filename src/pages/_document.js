import { Html, Head, Main, NextScript } from 'next/document'
import GoogleTagManager from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="es"
    >
      {/* <GoogleTagManager 
        gtmId='GTM-TKX27XQM'
        /> */}
     <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TKX27XQM');`,
            }}
          />
          {/* End Google Tag Manager */}
        
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKX27XQM"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-SD0K3WGGDH"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-SD0K3WGGDH');
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}
