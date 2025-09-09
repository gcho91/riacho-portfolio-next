import Navbar from "@/components/Navbar";
import { inter } from "@/utils/fonts";

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={inter.className}>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}
