import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { PortfolioItem, getPortfolioItemById } from '../../data/portfolioData'
import Tag from '../../components/Tag'
import SvgIcon from '../../components/SvgIcon'
import styles from '../../styles/portfolioDetailStyles.module.css'

interface PortfolioDetailProps {
    item: PortfolioItem
}

export default function PortfolioDetail({ item }: PortfolioDetailProps) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    if (!item) {
        return <div>Portfolio item not found</div>
    }

    return (
        <div className={styles.container}>
            {/* Back Navigation */}
            <div className={styles.backNavigation}>
                <Link href="/work" className={styles.backLink}>
                    ← Back to Projects
                </Link>
            </div>

            {/* Hero Section */}
            <div className={styles.heroSection}>
                <div className={styles.heroImage}>
                    <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className={styles.image}
                    />
                </div>
                <div className={styles.heroContent}>
                    <div className={styles.tagContainer}>
                        {item.tags?.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </div>
                    <h1 className={styles.title}>{item.title}</h1>
                    <p className={styles.description}>{item.desc}</p>

                    {/* Project Links */}
                    <div className={styles.linksContainer}>
                        {item.links?.github && (
                            <a
                                href={item.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.linkButton}
                            >
                                <SvgIcon src="/github-icon.svg" height={20} width={20} alt="GitHub" />
                                View Code
                            </a>
                        )}
                        {item.links?.live_project && (
                            <a
                                href={item.links.live_project}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.linkButton}
                            >
                                <SvgIcon src="/link-icon.svg" height={20} width={20} alt="Live Project" />
                                View Live
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Project Overview */}
            {item.overview && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Project Overview</h2>
                    <p className={styles.sectionContent}>{item.overview}</p>
                </section>
            )}

            {/* Project Details Grid */}
            <div className={styles.detailsGrid}>
                {item.role && (
                    <div className={styles.detailItem}>
                        <h3 className={styles.detailLabel}>Role</h3>
                        <p className={styles.detailValue}>{item.role}</p>
                    </div>
                )}
                {item.duration && (
                    <div className={styles.detailItem}>
                        <h3 className={styles.detailLabel}>Duration</h3>
                        <p className={styles.detailValue}>{item.duration}</p>
                    </div>
                )}
                {item.technologies && (
                    <div className={styles.detailItem}>
                        <h3 className={styles.detailLabel}>Technologies</h3>
                        <div className={styles.technologiesList}>
                            {item.technologies.map((tech, index) => (
                                <span key={index} className={styles.technologyTag}>{tech}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Challenges & Solutions */}
            {(item.challenges || item.solutions) && (
                <div className={styles.challengesSolutions}>
                    {item.challenges && (
                        <section className={styles.challengesSection}>
                            <h2 className={styles.sectionTitle}>Challenges</h2>
                            <ul className={styles.challengesList}>
                                {item.challenges.map((challenge, index) => (
                                    <li key={index} className={styles.challengeItem}>{challenge}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {item.solutions && (
                        <section className={styles.solutionsSection}>
                            <h2 className={styles.sectionTitle}>Solutions</h2>
                            <ul className={styles.solutionsList}>
                                {item.solutions.map((solution, index) => (
                                    <li key={index} className={styles.solutionItem}>{solution}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            )}

        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        { params: { id: 'fermat-commerce' } },
        { params: { id: 'amalthea-coffee' } },
        { params: { id: 'gmarket-ecommerce' } },
        { params: { id: 'lynns-supper-club' } },
        { params: { id: 'wrexx-dance-design' } },
    ]

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string
    const item = getPortfolioItemById(id)

    if (!item) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            item,
        },
    }
}
