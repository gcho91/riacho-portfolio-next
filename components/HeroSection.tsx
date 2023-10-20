import { cormorantGaramond } from "../utils/fonts"
import Image from 'next/image'
import heroStyles from "../styles/heroSectionStyles.module.css"
import twitterIcon from "../public/twitter-icon.svg";
import linkedinIcon from "../public/linkedin-icon.svg";

export default function HeroSection() {

    return (<div className={heroStyles["hero-container"]}>
        <div className={heroStyles.hero}>
            <h1 className={` ${cormorantGaramond.className} ${heroStyles.name}`}>Ria Cho</h1>
            <h2 className={` ${heroStyles.subtext} }`}>I build things for the <span className="intro-highlight">web</span> and <span className="intro-highlight">	mobile </span></h2>
            <p className={`${cormorantGaramond.className} ${heroStyles.description}`}>I am a front-end engineer who loves building products with great UX, and is obsessed with high end-user empathy and usability. I am currently based in San Francisco.</p>
            <a href="mailto:gcho91@gmail.com" className={`${heroStyles['cta-button']}`}>Contact me</a>
        </div>
        <div className={heroStyles["social-row"]}>
            <a href="https://www.linkedin.com/in/gloriacho1">
                <Image priority src={linkedinIcon} alt="Follow me on LinkedIn"
                    height={20}
                    width={20} />
            </a>
            <a href="https://www.twitter.com/espresscho">
                <Image priority src={twitterIcon} alt="Follow me on Twitter"
                    height={20}
                    width={20} />
            </a>
            <a href="https://www.github.com/gcho91">
                <Image
                    src="/github-mark.svg"
                    alt="GITHUB icon"
                    width={20}
                    height={20}
                />
            </a>
        </div>
    </div>
    )
}