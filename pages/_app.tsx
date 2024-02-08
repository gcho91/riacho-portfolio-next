import type { AppProps } from 'next/app'
import '@/styles/globals.css';
import Layout from './layout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return <Layout >
    <Head>
      <title>Ria Cho - Front-End Software Engineer</title>
      <link rel="shortcut icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎤</text></svg>" />
    </Head>
    <Component {...pageProps} />
  </Layout>
}
