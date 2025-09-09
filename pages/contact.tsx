import contactStyles from "../styles/contactStyles.module.css"
import LinkButton from "@/components/LinkButton"

export default function Contact() {
    return <div className={contactStyles.container} id="contact_section">
        <h2 className={contactStyles.pageTitle}>Contact Me</h2>
        <div className={contactStyles.textContainer}>
            <p className={contactStyles.text}>I am currently looking for new opportunities!</p>
            <LinkButton linkText="Email Me" url="gcho91@gmail.com" />
        </div>
    </div>
}
