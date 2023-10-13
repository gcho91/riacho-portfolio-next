import { ReactNode } from "react";
import tagStyles from "../styles/tagStyles.module.css"
import { IBM_Plex_Sans, Cormorant_Garamond, Raleway, Arimo, Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin']
})

interface TagProps {
    children: ReactNode
}

export default function Tag(props: TagProps) {
    return <span className={` ${inter.className} ${tagStyles.pill}`}>{props.children}</span>
}