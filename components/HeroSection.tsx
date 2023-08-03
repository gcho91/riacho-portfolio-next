import { ibmPlexSansCond } from "../pages/utils/fonts"

export default function HeroSection() {
    return (<main className='hero'>
        <header className="header-section">
            <div className='container-head'>
                <span style={{ display: "none" }} className='hambuger-icon'></span>
                <div>
                    <span>Ria Cho</span>
                </div>
                <nav>
                    <ul className='navbar-list'>
                        <li>
                            <a href="index.html" className="nav-links">Home</a>
                        </li>
                        <li>
                            <a href="about.html" className="nav-links">About</a>
                        </li>
                        <li>
                            <a href="work.html" className="nav-links">Work</a>
                        </li>
                        <li>
                            <a href="./img/Gloria-Cho_August-2019-vC1.pdf" className="nav-links">Resume</a>
                        </li>
                    </ul>
                </nav>
            </div>


        </header>

        <div className='left'>
            <h1 className={ibmPlexSansCond.className} style={{ margin: 0 }}>Hello, my name is <br />
                Ria Cho. </h1>
            <h2>I build things for the <span className="intro-highlight">	&nbsp; web 	&nbsp;</span> and <span className="intro-highlight">	&nbsp; mobile 	&nbsp;</span></h2>
            <p>I am a front-end engineer who loves building products with great UX, and is obsessed with high end-user empathy and usability.</p>
            <a className="cta-button">Contact me</a>
        </div>
    </main>
    )
}