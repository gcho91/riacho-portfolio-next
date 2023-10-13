import Navbar from "@/components/Navbar";
import { raleway, arimo, cormorantGaramond } from "@/utils/fonts";
import { IBM_Plex_Sans, Cormorant_Garamond } from 'next/font/google'



type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={cormorantGaramond.className}>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}