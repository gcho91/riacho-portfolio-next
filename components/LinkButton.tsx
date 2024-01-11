import linkButtonStyles from "../styles/components/linkButtonStyles.module.css"

interface LinkButtonProps {
    linkText: string;
    url: string;
}
export default function LinkButton(props: LinkButtonProps){
    return <a href={"mailto:"+props.url} className={`${linkButtonStyles['cta-button']}`}>{props.linkText}</a>
}