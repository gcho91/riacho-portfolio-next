import navbarStyles from "../styles/navbarStyles.module.css"
import Link from 'next/link';

export default function Navbar() {
    return <nav className={navbarStyles.nav}>
        <ul className={navbarStyles['ul-list']}>
            <li>
                <Link href="/" className={navbarStyles.linktext}>Home</Link>
            </li>
            <li>
                <Link href="#work" className={navbarStyles.linktext}>Projects</Link>
            </li>
            <li>
                <Link href="#contact_section" className={navbarStyles.linktext}>Contact</Link>
            </li>
            <li className={navbarStyles.resumeLink}>
                <Link href="/resume.pdf" target="_blank" className={navbarStyles.resumeBtn}>Resume</Link>
            </li>
        </ul>
    </nav>
}