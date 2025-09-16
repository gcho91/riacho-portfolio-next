import styles from "@/styles/footerStyles.module.css";

export default function Footer() {
    return (
        <footer className={styles.footerRoot}>
            <div className={styles.footerInner}>
                <div className={styles.brand}>
                    <h2 className={styles.name}>Ria Cho</h2>
                    <p className={styles.tagline}>
                        Product-oriented software engineer passionate about building responsive, accessible applications.
                    </p>
                    <div className={styles.socials}>
                        <a
                            className={styles.iconLink}
                            href="https://www.linkedin.com/in/gloriacho1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <img src="/linkedin-icon.svg" height={24} width={24} alt="LinkedIn" />
                        </a>
                        <a
                            className={styles.iconLink}
                            href="https://github.com/gcho91"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <img src="/github-mark.svg" height={24} width={24} alt="GitHub" />
                        </a>
                        <a
                            className={styles.iconLink}
                            href="https://twitter.com/espresscho"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <img src="/twitter-icon.svg" height={24} width={24} alt="Twitter" />
                        </a>
                    </div>
                    <a
                        href="#top"
                        className={styles.backToTop}
                        onClick={(e) => {
                            e.preventDefault();
                            if (typeof window !== "undefined") {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }}
                    >
                        <span className={styles.chevronUp}>^</span>
                        Back to top
                    </a>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Ria Cho
                    </p>
                </div>

            </div>
        </footer >
    );
}