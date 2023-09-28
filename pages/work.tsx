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
        title: "Fermat Commerce - Mobile App",
        desc: "React-Native mobile app for setting up distributed e-commerce shops for the influencer customers. Released to App Store in 2022."
    },
    {
        imageUrl: amaltheaMock,
        title: "Amalthea Coffee",
        desc: "A Squarespace-based coffee online ordering and subscription service."
    },
    {
        imageUrl: gmarketMock,
        title: "gMarket - e-commerce application",
        desc: "A mock e-commerce project using Angular and PostgreSQL."
    },
    {
        imageUrl: lynnsMock,
        title: "Lynn's NYC Supper Club",
        desc: "Client work for small NYC-based boutique supper club experience."
    }
]
export default function Portfolio() {
    return <div>
        <h2 className={workStyles.pageTitle}>Projects</h2>


        <div className={workStyles.portfolioContainer}>


            {portfolioItems.map(item => {
                return (
                    <div key={item.desc} className={workStyles.item} style={{ backgroundImage: `url(${item.imageUrl.src})` }}>
                        <div className={workStyles.textWrapper}>
                            <h2 className={workStyles.title}>{item.title}</h2>
                            <p className={workStyles.desc}>{item.desc}</p>
                        </div>
                    </div>
                    // </div>
                )

            })}













        </div>
    </div>


}



// items to add
// fermat
// ecommerce app
// nyc supper club
//random quote generator
// amalthea