import { IBM_Plex_Sans, Cormorant_Garamond, Raleway, Arimo, Inter } from 'next/font/google'
import { IBM_Plex_Sans_Condensed } from 'next/font/google'

export const ibmPlexSans = IBM_Plex_Sans({
    weight: '400',
    subsets: ['latin']
})

export const ibmPlexSansCond = IBM_Plex_Sans_Condensed({
    weight: '600',
    subsets: ['latin']
});

export const cormorantGaramond = Cormorant_Garamond({
    weight: ['300', '600'],
    // weight: 'variable',
    subsets: ['latin'],
    variable: "--cormorant-garamond"
})

export const raleway = Raleway({
    weight: '400',
    subsets: ['latin']
})

export const arimo = Arimo({
    weight: 'variable',
    subsets: ['latin']
});