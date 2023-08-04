import { ibmPlexSansCond } from "../pages/utils/fonts"
import menu from "../public/menu.png";
import Image from 'next/image'
import { useState } from "react";
import heroStyles from "../styles/heroSectionStyles.module.css"

export default function HeroSection() {

    const [open, SetOpen] = useState(false);
    const activeClass = open ? heroStyles.active : "";

    const onClickBurger = () => {
        console.log('clicked on burger')
        SetOpen(!open);
        // add active to container-head
        // on hamburger click, add active class to navbar-list class
    }
    return (<main className={heroStyles["hero-container"]}>
        <header style={{ display: "none" }} className={heroStyles['header-section']}>
            <div className={`${heroStyles['container-head']} ${activeClass}`}>
                <div>
                    <span>Ria Cho</span>
                </div>
                <nav>
                    <ul className={open ? "navbar-list active" : "navbar-list"}>
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
                <span style={{}} className='hamburger-toggle' onClick={onClickBurger}>
                    <Image src={menu}
                        alt="hamburger menu"
                        width={10}
                    />
                </span>
            </div>


        </header>

        <div className={heroStyles.hero}>
            <h1 className={ibmPlexSansCond.className} style={{ margin: 0 }}>Hello, my name is <br />
                Ria Cho. </h1>
            <h2>I build things for the <span className="intro-highlight">web</span> and <span className="intro-highlight">	mobile </span></h2>
            <p>I am a front-end engineer who loves building products with great UX, and is obsessed with high end-user empathy and usability. I am currently based in San Francisco.</p>
            <a href="mailto:gcho91@gmail.com" className={heroStyles['cta-button']}>Contact me</a>
        </div>
    </main>
    )
}