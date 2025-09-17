import heroSection2Styles from "../styles/heroSection2Styles.module.css"
import Image from "next/image"

export default function HeroSection2() {
    return (
        <div className={heroSection2Styles.heroContainer}>
            <div className={heroSection2Styles.heroContent}>
                <div className={heroSection2Styles.heroText}>
                    {/* Circular icon with G */}


                    {/* Three-line heading */}
                    <h1 className={`${heroSection2Styles.greeting} ${heroSection2Styles.fadeInUp} ${heroSection2Styles.delay1}`}>Hello, I&apos;m Ria,</h1>
                    <h1 className={`${heroSection2Styles.profession} ${heroSection2Styles.fadeInUp} ${heroSection2Styles.delay2}`}>Software Engineer</h1>
                    <h1 className={`${heroSection2Styles.location} ${heroSection2Styles.fadeInUp} ${heroSection2Styles.delay3}`}>based in the USA.</h1>

                    {/* Description */}
                    <p className={`${heroSection2Styles.description} ${heroSection2Styles.fadeInUp} ${heroSection2Styles.delay4}`}>
                        I am a front-end software engineer crafting user-centered products with high empathy and usability.
                    </p>

                    {/* Button group */}
                    <div className={`${heroSection2Styles.buttonGroup} ${heroSection2Styles.fadeInUp} ${heroSection2Styles.delay5}`}>
                        <a href="mailto:riavcho@gmail.com" className={heroSection2Styles.contactButton}>CONTACT ME</a>
                        <a href="#work" className={heroSection2Styles.workButton}>VIEW MY WORK</a>
                    </div>
                </div>

                <div className={`${heroSection2Styles.heroImage} ${heroSection2Styles.fadeInUp} ${heroSection2Styles.delay3}`}>
                    <div className={heroSection2Styles.profileImageContainer}>
                        <Image
                            src="/portrait-circular.png"
                            alt="Ria Cho portrait"
                            width={415}
                            height={415}
                            className={heroSection2Styles.profileImage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}