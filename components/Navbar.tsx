import navbarStyles from "../styles/navbarStyles.module.css"
import Link from 'next/link';


export default function Navbar() {
    return <nav className={navbarStyles.nav}>
        <ul className={navbarStyles['ul-list']}>
            <li>
                <Link href="/" className={navbarStyles.linktext}>Home</Link>
            </li>
            <li>
                <Link href="/work" className={navbarStyles.linktext}>Work</Link>
            </li>
            <li>
                <a href="" className={navbarStyles.linktext}>Contact</a>

            </li>
        </ul>
    </nav>
}