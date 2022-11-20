import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Heri Setiawan',
    description: 'Opini.',
    image: 'https://herisetiawan.vercel.app/favicon/heriswn.jpg'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@swnheri" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE" />
        <meta HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE" />
        <meta HTTP-EQUIV="EXPIRES" CONTENT="Mon, 22 Oct 2045 11:12:01 GMT" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
