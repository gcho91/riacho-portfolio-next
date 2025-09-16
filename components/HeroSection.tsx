import React from "react";
import heroStyles from "../styles/heroSectionStyles.module.css"
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkButton from "./LinkButton";
import Button from "./Button";
import image from "../public/fermat portrait.png"

export default function HeroSection() {
    return (
        <div className={heroStyles["hero-container"]}>
            <div className={heroStyles["hero-content"]}>
                <div className={heroStyles["hero-text"]}>
                    <h1 className={heroStyles.greeting}>
                        Hello, I&apos;m Ria Cho,
                    </h1>
                    <h1 className={heroStyles.profession}>
                        Software Engineer
                    </h1>
                    <h1 className={heroStyles.location}>
                        based in the USA.
                    </h1>
                    <p className={heroStyles.description}>
                        I am a front-end software engineer crafting user-centered products with high empathy and usability.
                    </p>
                    <div className={heroStyles["button-group"]}>
                        <button className={heroStyles["contact-button"]}>CONTACT ME</button>
                        <button className={heroStyles["work-button"]}>VIEW MY WORK</button>
                    </div>
                </div>
                <div className={heroStyles["hero-image"]}>
                    <div className={heroStyles["profile-image-container"]}>
                        {/* Placeholder for profile image - you can replace this with your actual image */}
                        <div className={heroStyles["profile-placeholder"]}>
                            <span>Profile Image</span>
                        </div>
                    </div>
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