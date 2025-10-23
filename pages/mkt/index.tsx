import workStyles from "../../styles/workStyles.module.css"
import Card from '@/components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { marketingProjects } from '../../data/portfolioData'

export default function MarketingProjects() {
    return <div id="marketing">
        <h2 className={workStyles.pageTitle}>
            <FontAwesomeIcon icon={faBullhorn} style={{ marginRight: '8px' }} />
            Marketing Projects
        </h2>
        <p className={workStyles.tagLine}>Case studies and campaigns showcasing my marketing strategy and execution expertise</p>
        <div className={workStyles.portfolioContainer}>
            {marketingProjects.map(project => {
                return (
                    <Card key={project.desc}
                        item={project}
                        type="marketing" />
                )
            })}
        </div>
    </div>
}
