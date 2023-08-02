import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, IBM_Plex_Sans } from 'next/font/google'

const ibmPlexSans = IBM_Plex_Sans({
  weight: '400',
  subsets: ['latin']
})

console.log(ibmPlexSans)
// https://blog.logrocket.com/next-js-font-optimization-custom-google-fonts/#adding-google-fonts-next-font

export default function App({ Component, pageProps }: AppProps) {
  return <main className={ibmPlexSans.className}>
    <Component {...pageProps} />
  </main>
}
