import { IBM_Plex_Sans } from 'next/font/google'
import { IBM_Plex_Sans_Condensed } from 'next/font/google'

export const ibmPlexSans = IBM_Plex_Sans({
    weight: '400',
    subsets: ['latin']
})

export const ibmPlexSansCond = IBM_Plex_Sans_Condensed({
    weight: '600',
    subsets: ['latin']
})


console.log(ibmPlexSans)


// https://blog.logrocket.com/next-js-font-optimization-custom-google-fonts/#adding-google-fonts-next-font