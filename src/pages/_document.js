import { Html, Head, Main, NextScript } from 'next/document'
import GoogleTagManager from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="es"
    >
      <GoogleTagManager 
        gtmId='GTM-TKX27XQM'
        />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
