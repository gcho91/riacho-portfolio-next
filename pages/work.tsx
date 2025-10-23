import workStyles from "../styles/workStyles.module.css"
import Card from '@/components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { portfolioItems } from '../data/portfolioData'
export default function Portfolio() {
    return <div id="work">
        <h2 className={workStyles.pageTitle}>
            <FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '8px' }} />
            Projects
        </h2>
        <p className={workStyles.tagLine}>Some projects I&apos;ve worked on as a front-end developer</p>
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
