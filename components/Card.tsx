import { StaticImageData } from "next/image"
import styles from "../styles/components/cardStyles.module.css"
import { PortfolioItem } from "@/pages/work"
import Tag from "./Tag"
import Image from "next/image"
import { cormorantGaramond } from "@/utils/fonts"

interface CardProps {
    item: PortfolioItem;
}

export default function Card(props: CardProps) {
    const { item } = props;
    return <div className={styles.container}>


        <div className={styles.image} style={{ position: "relative" }}>
            <Image src={item.imageUrl.src} className={styles.image} alt="Picture of web/mobile app" fill />
        </div>

        <div className={styles.cardDetails}>
            <div className={styles.tagContainer}>
                {item.tags && item.tags.map((tag, i) => {
                    return (<Tag key={i}>{tag}</Tag>)
                })}
            </div>
            <h2 className={`${styles.cardh2} ${cormorantGaramond.className}`}>{item.title}</h2>
            <p className={styles.p}>{item.desc}</p>

            <div className={styles.linksButtonsContainer}>

                <a href="" className={styles.projectLink} target="_blank">Live Project</a>
                <a href="" className={styles.projectLink} target="_blank">Github</a>

            </div>
        </div>

        {(item.github || item.link) &&
            <div className={styles.iconsContainer}>
                {item.link &&
                    <a href={item.link} target="_blank">
                    </a>
                }
            </div>
        }

    </div>
}