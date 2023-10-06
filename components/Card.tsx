import { StaticImageData } from "next/image"
import styles from "../styles/components/cardStyles.module.css"
import { PortfolioItem } from "@/pages/work"
import Button from "./Button"
import Tag from "./Tag"
import githubIcon from "../public/github-icon.svg"
import Image from "next/image"
import linkIcon from "../public/link-icon.svg";
interface CardProps {
    item: PortfolioItem;
}

export default function Card(props: CardProps) {
    const { item } = props;
    return <div className={styles.container}>
        <img className={styles.image} src={item.imageUrl.src} alt="Lago di Braies" />

        <div className={styles.cardDetails}>
            <div className={styles.tagContainer}>
                {item.tags && item.tags.map((tag, i) => {
                    return (<Tag key={i}>{tag}</Tag>)
                })}
            </div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

        </div>
        <div className={styles.iconsContainer}>
            <Image priority src={githubIcon} alt="Follow me on Github"
                height={15}
                width={15} />
            <Image priority src={linkIcon} alt="link to project"
                height={20}
                width={20} />

        </div>

    </div>
}