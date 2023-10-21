import Image, { StaticImageData } from 'next/image'
import fermatMock from "../public/fermat-mock.png"
import amaltheaMock from "../public/amalthea-mock.png"
import workStyles from "../styles/workStyles.module.css"
import gmarketMock from "../public/gmarket-mock.png"
import lynnsMock from "../public/lynns-mock.png"
import Card from '@/components/Card'
import { } from "@/utils/fonts"

export interface PortfolioItem {
    imageUrl: StaticImageData
    title: string;
    desc: string;
    tags?: Tags[];
    github?: string;
    link?: string;
}

type Tags = "React" | "React-Native" | "HTML/CSS" | "TypeScript" | "WordPress" | "Squarespace" | "Angular" | "PostgreSQL"

const portfolioItems: PortfolioItem[] = [
    {
        imageUrl: fermatMock,
        title: "Fermat Commerce – Mobile App",
        desc: "React-Native mobile app for setting up distributed e-commerce shops for the influencer customers. Released to App Store in 2022.",
        tags: ["React-Native", "HTML/CSS", "TypeScript"],
        link: "https://www.fermatcommerce.com/"
    },
    {
        imageUrl: amaltheaMock,
        title: "Amalthea Coffee",
        desc: "A Squarespace-based coffee online ordering and subscription service.",
        tags: ["HTML/CSS", "Squarespace"],
        link: "https://amaltheacoffee.com/"
    },
    {
        imageUrl: gmarketMock,
        title: "GMarket – e-commerce application",
        desc: "A mock e-commerce project using Angular and PostgreSQL.",
        tags: ["HTML/CSS", "Angular", "PostgreSQL"],
        github: "https://github.com/gcho91/gMarket"
    },
    {
        imageUrl: lynnsMock,
        title: "Lynn's NYC Supper Club",
        desc: "Client work for small NYC-based boutique supper club experience.",
        tags: ["HTML/CSS", "WordPress"],
        link: "https://lynnsnycsupperclub.com/"
    }
]
export default function Portfolio() {
    return <div id="work">
        <h2 className={workStyles.pageTitle}>Projects</h2>
        <div className={workStyles.portfolioContainer}>

            {portfolioItems.map(item => {
                return (
                    <Card key={item.desc}
                        item={item} />
                )
            })}
        </div>
    </div>
}
