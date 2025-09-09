import React from "react";
import heroStyles from "../styles/heroSectionStyles.module.css"
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkButton from "./LinkButton";

export default function HeroSection() {
    const classes = [heroStyles.animate, heroStyles.glow];

    return (<div className={heroStyles["hero-container"]}>
        <div className={heroStyles.hero}>
            <h1 className={[...classes, heroStyles.name, heroStyles.delay1].join(" ")}>Ria Cho</h1>
            <h2 className={[...classes, heroStyles.subtext, heroStyles.delay2].join(" ")}>I build things for the <span className="intro-highlight">web</span> and <span className="intro-highlight">	mobile </span></h2>
            <p className={[...classes, heroStyles.description, heroStyles.delay3].join(" ")}>I am a front-end engineer who loves building products with great UX, and is obsessed with high end-user empathy and usability. I am currently based in New Jersey and seeking opportunities in the NYC metropolitan area.</p>
            <div className={[...classes, heroStyles.delay4].join(" ")}>
                <LinkButton linkText="Contact Me" url="gcho91@gmail.com" />
            </div>

        </div>
        <div className={heroStyles["social-row"]}>
            <a href="https://www.linkedin.com/in/gloriacho1">
                <FontAwesomeIcon icon={faLinkedin} className={`${heroStyles['icon']} fa-lg`} />
            </a>
            <a href="https://www.github.com/gcho91">
                <FontAwesomeIcon icon={faGithub} className={`${heroStyles['icon']} fa-lg`} />
            </a>
            <a href="https://www.twitter.com/espresscho">
                <FontAwesomeIcon icon={faTwitter} className={`${heroStyles['icon']} fa-lg`} />
            </a>

        </div>
    </div>
    )
}