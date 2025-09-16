import { ReactNode } from "react";
import tagStyles from "../styles/tagStyles.module.css"

interface TagProps {
    children: ReactNode
}

export default function Tag(props: TagProps) {
    return <span className={tagStyles.pill}>{props.children}</span>
}