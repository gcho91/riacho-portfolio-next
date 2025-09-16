import { StaticImageData } from "next/image"
import styles from "../styles/components/cardStyles.module.css"
import { PortfolioItem } from "@/pages/work"
import Tag from "./Tag"
import Image from "next/image"
import SvgIcon from "./SvgIcon"

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
            <h3 className={styles.cardh3}>{item.title}</h3>
            <p className={styles.p}>{item.desc}</p>
        </div>

        <div className={styles.iconsContainer}>
            {item.links?.github && (
                <a
                    href={item.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5em" }}
                >
                    <SvgIcon src="/github-icon.svg" height={30} width={30} alt="GitHub icon" />
                </a>
            )}
            {item.links?.live_project && (
                <a
                    href={item.links.live_project}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live project"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5em" }}
                >
                    <SvgIcon src="/link-icon.svg" height={30} width={30} alt="Live project icon" />
                </a>
            )}

        </div>


    </div>
}