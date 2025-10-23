import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { MarketingProject, getMarketingProjectById } from '../../data/portfolioData'
import Tag from '../../components/Tag'
import SvgIcon from '../../components/SvgIcon'
import styles from '../../styles/portfolioDetailStyles.module.css'
import nycxdesignimage from "../../public/IMG_0512.jpg"


interface MarketingProjectDetailProps {
    project: MarketingProject
}

export default function MarketingProjectDetail({ project }: MarketingProjectDetailProps) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    if (!project) {
        return <div>Marketing project not found</div>
    }

    return (
        <div className={styles.container}>
            {/* Back Navigation */}
            <div className={styles.backNavigation}>
                <Link href="/mkt" className={styles.backLink}>
                    ← Back to Marketing Projects
                </Link>
            </div>

            {/* Hero Section */}
            <div className={styles.heroSection}>
                <div className={styles.heroImage}>
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className={styles.image}
                    />
                </div>
                <div className={styles.heroContent}>
                    <div className={styles.tagContainer}>
                        {project.tags?.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </div>
                    <h1 className={styles.title}>{project.title}</h1>
                    <p className={styles.description}>{project.desc}</p>

                    {/* Project Links */}
                    {project.link && (
                        <div className={styles.linksContainer}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.linkButton}
                            >
                                <SvgIcon src="/link-icon.svg" height={20} width={20} alt="Link" />
                                View Project
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {/* Project Overview */}
            {project.overview && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Campaign Overview</h2>
                    <p className={styles.sectionContent}>{project.overview}</p>
                </section>
            )}

            {/* Project Details Grid */}
            <div className={styles.detailsGrid}>
                {project.role && (
                    <div className={styles.detailItem}>
                        <h3 className={styles.detailLabel}>Role</h3>
                        <p className={styles.detailValue}>{project.role}</p>
                    </div>
                )}
                {project.duration && (
                    <div className={styles.detailItem}>
                        <h3 className={styles.detailLabel}>Duration</h3>
                        <p className={styles.detailValue}>{project.duration}</p>
                    </div>
                )}
                {project.client && (
                    <div className={styles.detailItem}>
                        <h3 className={styles.detailLabel}>Client</h3>
                        <p className={styles.detailValue}>{project.client}</p>
                    </div>
                )}
                {project.industry && (
                    <div className={styles.detailItem}>
                        <h3 className={styles.detailLabel}>Industry</h3>
                        <p className={styles.detailValue}>{project.industry}</p>
                    </div>
                )}
            </div>

            {/* Challenges & Solutions */}
            {(project.challenges || project.solutions) && (
                <div className={styles.challengesSolutions}>
                    {project.challenges && (
                        <section className={styles.challengesSection}>
                            <h2 className={styles.sectionTitle}>Challenges</h2>
                            <ul className={styles.challengesList}>
                                {project.challenges.map((challenge, index) => (
                                    <li key={index} className={styles.challengeItem}>{challenge}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {project.solutions && (
                        <section className={styles.solutionsSection}>
                            <h2 className={styles.sectionTitle}>Solutions</h2>
                            <ul className={styles.solutionsList}>
                                {project.solutions.map((solution, index) => (
                                    <li key={index} className={styles.solutionItem}>{solution}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            )}

            {/* Strategies */}
            {project.strategies && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Marketing Strategies</h2>
                    <ul className={styles.solutionsList}>
                        {project.strategies.map((strategy, index) => (
                            <li key={index} className={styles.solutionItem}>{strategy}</li>
                        ))}
                    </ul>
                </section>
            )}

            { /* Instagram Takeovers */}
            {project.instagramTakeovers && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Campaign Images</h2>
                    <div className={styles.imageGrid}>
                        {project.instagramTakeovers.map((image, index) => {

                            return (
                                <div key={index} className={styles.imageWrapper}>
                                    <Image
                                        src={image.src}
                                        alt="NYCxdesign"
                                        width={1200}
                                        height={1800}
                                        className={styles.gridImage}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </section>
            )}

            {/* Results */}
            {project.results && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Results & Impact</h2>
                    <ul className={styles.solutionsList}>
                        {project.results.map((result, index) => (
                            <li key={index} className={styles.solutionItem}>{result}</li>
                        ))}
                    </ul>
                </section>
            )}

        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        { params: { id: 'nycxdesign-social-campaign' } },
        { params: { id: 'amalthea-coffee-digital-presence' } },
    ]

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string
    const project = getMarketingProjectById(id)

    if (!project) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            project,
        },
    }
}