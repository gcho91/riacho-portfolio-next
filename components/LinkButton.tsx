import { ReactNode } from "react";
import linkButtonStyles from "../styles/components/linkButtonStyles.module.css"

interface LinkButtonProps {
    linkText: string;
    url: string;
}
export default function LinkButton(props: LinkButtonProps, children: ReactNode) {
    return <a href={"mailto:" + props.url} className={`${linkButtonStyles['cta-button']}`}>
        {props.linkText}
    </a>
}

// https://css-tricks.com/a-handy-little-system-for-animated-entrances-in-css/
// do animation