import type { AppProps } from 'next/app'
import '@/styles/globals.css';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { inter } from '@/utils/fonts';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Script from 'next/script';

const googleAnalyticsCode = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-EBEGTDS6N5');
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.variable}>
      <Layout>
        <Head>
          <title>Ria Cho - Front-End Software Engineer</title>
          <link rel="shortcut icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎤</text></svg>" />
        </Head>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EBEGTDS6N5"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: googleAnalyticsCode }}
        />

        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
