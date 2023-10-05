import { StaticImageData } from "next/image"
import styles from "../styles/cardStyles.module.css"
import { PortfolioItem } from "@/pages/work"

interface CardProps {
    imageUrl: StaticImageData

    item: PortfolioItem

}

export default function Card(props: CardProps) {
    return <div className={styles.container}>
        {/* <img className={styles.image} src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="Lago di Braies" /> */}
        <img className={styles.image} src={props.imageUrl.src} alt="Lago di Braies" />

        <div className={styles.cardDetails}>
            <span>React</span>
            <span>HTML/CSS</span>
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
        </div>
    </div>
}