import Image, { StaticImageData } from 'next/image'
import fermatMock from "../public/fermat-mock.png"
import amaltheaMock from "../public/amalthea-mock.png"
import workStyles from "../styles/workStyles.module.css"
import gmarketMock from "../public/gmarket-mock.png"
import lynnsMock from "../public/lynns-mock.png"

interface PortfolioItem {
    imageUrl: StaticImageData
    title: string;
    desc: string;
}

const portfolioItems: PortfolioItem[] = [
    {
        imageUrl: fermatMock,
        title: "Fermat Mock",
        desc: "Some description text"
    },
    {
        imageUrl: amaltheaMock,
        title: "Amalthea Mock",
        desc: "Amalthea coffee website"
    },
    {
        imageUrl: gmarketMock,
        title: "Ecom app",
        desc: "Mock ecomm app"
    },
    {
        imageUrl: lynnsMock,
        title: "Lynn's NYC Supper Club",
        desc: "Supper club wordpress site"
    }
]
export default function Portfolio() {
    console.log(fermatMock, 'mock')
    return <div className={workStyles.portfolioContainer}>

        {portfolioItems.map(item => {
            return <div key={item.desc} className={workStyles.item} style={{ backgroundImage: `url(${item.imageUrl.src})` }}>
                <div className={workStyles.textWrapper}>
                    <h2 className={workStyles.title}>{item.title}</h2>
                    <p className={workStyles.desc}>{item.desc}</p>
                </div>
            </div>
        })}













    </div>
}


// items to add
// fermat
// ecommerce app
// nyc supper club
//random quote generator
// amalthea