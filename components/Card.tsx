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
        <div className={styles.image} style={{ position: "relative" }}>
            <Image src={item.imageUrl.src} className={styles.image} alt="Picture of web/mobile app" fill />
        </div>

        <div className={styles.cardDetails}>
            <div className={styles.tagContainer}>
                {item.tags && item.tags.map((tag, i) => {
                    return (<Tag key={i}>{tag}</Tag>)
                })}
            </div>
            <h2 className={styles.cardh1}>{item.title}</h2>
            <p className={styles.p}>{item.desc}</p>
        </div>
        {(item.github || item.link) &&
            <div className={styles.iconsContainer}>
                {item.github &&
                    <a href={item.github} target="_blank">
                        <Image priority src={githubIcon} alt="Follow me on Github"
                            height={20}
                            width={20} />
                    </a>
                }
                {item.link &&
                    <a href={item.link} target="_blank">
                        <Image priority src={linkIcon} alt="link to project"
                            height={25}
                            width={25} />
                    </a>
                }
            </div>
        }

    </div>
}