import { ReactNode } from "react";
import tagStyles from "../styles/tagStyles.module.css"
import { dmSans } from "@/utils/fonts"

interface TagProps {
    children: ReactNode
}

export default function Tag(props: TagProps) {
    return <span className={` ${dmSans.className} ${tagStyles.pill}`}>{props.children}</span>
}