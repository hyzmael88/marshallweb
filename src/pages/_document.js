import { GoogleTagManager } from '@next/third-parties/google'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <Main />
        <GoogleTagManager gtmId="GTM-TKX27XQM" />
      
        <NextScript />
      </body>
    </Html>
  )
}
