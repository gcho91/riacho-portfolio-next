import navbarStyles from "../styles/navbarStyles.module.css"

export default function Navbar() {
    return <nav className={navbarStyles.nav}>
        <ul className={navbarStyles['ul-list']}>
            <li>
                <a href="" className={navbarStyles.linktext}>Home</a>
            </li>
            <li>
                <a href="" className={navbarStyles.linktext}>Work</a>

            </li>
            <li>
                <a href="" className={navbarStyles.linktext}>Contact</a>

            </li>
        </ul>
    </nav>
}