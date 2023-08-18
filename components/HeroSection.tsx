import { ibmPlexSansCond } from "../utils/fonts"
import menu from "../public/menu.png";
import Image from 'next/image'
import { useState } from "react";
import heroStyles from "../styles/heroSectionStyles.module.css"
import twitterIcon from "../public/twitter-icon.svg";
import linkedinIcon from "../public/linkedin-icon.svg";
import githubIcon from "../public/github-icon.svg";
import Navbar from "./Navbar";




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
        <Navbar />




        <div className={heroStyles.hero}>
            {/* <h1 className={ibmPlexSansCond.className} style={{ margin: 0 }}>Hello, my name is
                Ria Cho. </h1> */}
            {/* <h1 className={ibmPlexSansCond.className}> Ria Cho</h1> */}
            <h1 className={`${ibmPlexSansCond.className} ${heroStyles.name}`}>Ria Cho</h1>

            <h2>I build things for the <span className="intro-highlight">web</span> and <span className="intro-highlight">	mobile </span></h2>
            <p>I am a front-end engineer who loves building products with great UX, and is obsessed with high end-user empathy and usability. I am currently based in San Francisco.</p>
            <a href="mailto:gcho91@gmail.com" className={heroStyles['cta-button']}>Contact me</a>



        </div>
        <div className={heroStyles["social-row"]}>
            <a href="https://www.twitter.com/espresscho">

                <Image priority src={twitterIcon} alt="Follow me on twitter"
                    height={15}
                    width={15} />
            </a>
            <a href="https://www.linkedin.com/in/gloriacho1">
                <Image priority src={linkedinIcon} alt="Follow me on LinkedIn"
                    height={15}
                    width={15} />
            </a>
            <a href="https://www.github.com/gcho91">
                <Image priority src={githubIcon} alt="Follow me on Github"
                    height={15}
                    width={15} />
            </a>
        </div>
    </main>
    )
}