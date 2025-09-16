import Image, { StaticImageData } from 'next/image'
import fermatMock from "../public/fermat-mock.png"
import amaltheaMock from "../public/amalthea-mock.png"
import workStyles from "../styles/workStyles.module.css"
import gmarketMock from "../public/gmarket-mock.png"
import lynnsMock from "../public/lynns-mock.png"
import wrexxmock from "../public/wrexx-mockup-s.png"
import Card from '@/components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

export interface PortfolioItem {
    imageUrl: StaticImageData
    title: string;
    desc: string;
    tags?: Tags[];
    github?: string;
    link?: string;
    links?: {
        github?: string;
        live_project?: string;

    }
}

type Tags = "React" | "React-Native" | "HTML/CSS" | "TypeScript" | "WordPress" | "Squarespace" | "Angular" | "PostgreSQL" | "Design" | "Figma"

const portfolioItems: PortfolioItem[] = [
    {
        imageUrl: fermatMock,
        title: "Fermat Commerce – Mobile App",
        desc: "React-Native mobile app for setting up distributed e-commerce shops for the influencer customers. Released to App Store in 2022.",
        tags: ["React-Native", "HTML/CSS", "TypeScript"],
        link: "https://www.fermatcommerce.com/",

    },
    {
        imageUrl: amaltheaMock,
        title: "Amalthea Coffee",
        desc: "A Squarespace-based coffee online ordering and subscription service.",
        tags: ["HTML/CSS", "Squarespace"],
        link: "https://amaltheacoffee.com/",
        links: {
            live_project: "https://amaltheacoffee.com/",

        }
    },
    {
        imageUrl: gmarketMock,
        title: "GMarket – e-commerce application",
        desc: "A mock e-commerce project using Angular and PostgreSQL.",
        tags: ["HTML/CSS", "Angular", "PostgreSQL"],
        github: "https://github.com/gcho91/gMarket",
        links: {
            github: "https://github.com/gcho91/gMarket"
        }
    },
    {
        imageUrl: lynnsMock,
        title: "Lynn's NYC Supper Club",
        desc: "Client work for small NYC-based boutique supper club experience.",
        tags: ["HTML/CSS", "WordPress"],
        link: "https://lynnsnycsupperclub.com/",
        links: {
            live_project: "https://lynnsnycsupperclub.com/",
        }
    },
    {
        imageUrl: wrexxmock,
        title: "Wrexx Dance - iOS App Design Mockup",
        desc: "A reimagined Figma mockup and live prototype of Moment Fitness Client App, a white-label application for fitness and dance studios. ",
        tags: ["Design", "Figma"],
        links: {
            live_project: "https://www.figma.com/proto/WKOOJkJEP1hE43HBqA37j8/Wrexx-Redesign---Bottom-Tab?node-id=189-1134&starting-point-node-id=189%3A748&t=ToqxyoVYqZHF25xQ-1"
        }
    },

]
export default function Portfolio() {
    return <div id="work">
        <h2 className={workStyles.pageTitle}>
            <FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '8px' }} />
            Projects
        </h2>
        <p className={workStyles.tagLine}>Some projects I've worked on as a front-end developer</p>
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
