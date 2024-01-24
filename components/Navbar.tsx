import navbarStyles from "../styles/navbarStyles.module.css"
import Link from 'next/link';
import { cormorantGaramond, dmSans } from '@/utils/fonts';
import { inter } from "@/utils/fonts"

export default function Navbar() {
    return <nav className={`${navbarStyles.nav} ${inter.className}`}>
        <ul className={navbarStyles['ul-list']}>
            <li>
                <Link href="/" className={navbarStyles.linktext}>Home</Link>
            </li>
            <li>
                <Link href="#work" className={navbarStyles.linktext}>Projects</Link>
            </li>
            <li>
                <a href="#contact_section" className={navbarStyles.linktext}>Contact</a>
            </li>
        </ul>
    </nav>
}