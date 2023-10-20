import { cormorantGaramond } from "@/utils/fonts"
import contactStyles from "../styles/contactStyles.module.css"

export default function Contact() {
    return <div className={contactStyles.container} id="contact_section">
        <h2 className={`${cormorantGaramond.variable} ${contactStyles.pageTitle}`}>Contact Me</h2>
        <div className={contactStyles.textContainer}>
            <p>I am currently looking for new opportunities! Regardless, my inbox is always open to chat about front-end development, mental health in tech, music, and anything else!
            </p>
            <a href="mailto:gcho91@gmail.com" className={contactStyles.ctaButton}>Email Me</a>
        </div>
    </div>
}
