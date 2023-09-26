import Navbar from "@/components/Navbar";
import { IBM_Plex_Sans } from 'next/font/google'
const ibmPlexSans = IBM_Plex_Sans({
    weight: '400',
    subsets: ['latin']
})

type LayoutProps = {
    children: React.ReactNode;

}
export default function Layout({ children }: LayoutProps) {
    return (
        <div className={ibmPlexSans.className}>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}