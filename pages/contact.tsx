import { cormorantGaramond } from "@/utils/fonts"
import contactStyles from "../styles/contactStyles.module.css"

export default function Contact() {
    return <div className={contactStyles.container} id="contact_section">
        <h2 className={`${cormorantGaramond.variable} ${contactStyles.pageTitle}`}>Contact Me</h2>
        <div className={contactStyles.textContainer}>
            <p>I am currently looking for new opportunities! </p>
            <a href="mailto:gcho91@gmail.com" className={contactStyles.button}>Contact me</a>
        </div>
    </div>
}
