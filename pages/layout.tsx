import Navbar from "@/components/Navbar";
import { dmSans, cormorantGaramond } from "@/utils/fonts";



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