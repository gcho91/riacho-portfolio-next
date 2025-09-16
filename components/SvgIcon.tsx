import React from "react";
import Image from "next/image";

interface SvgIconProps {
    src: string; // path to svg in public folder, e.g. "/github-icon.svg"
    height?: number | `${number}`;
    width?: number | `${number}`;
    alt?: string;
    className?: string;
    link?: string; // optional link URL
    linkTarget?: string; // optional target for link
    linkRel?: string; // optional rel for link
}

const SvgIcon: React.FC<SvgIconProps> = ({ src, height = 24, width = 24, alt = "icon", className, link, linkTarget = "_blank", linkRel = "noopener noreferrer" }) => {
    const icon = (
        <Image
            src={src}
            height={height}
            width={width}
            alt={alt}
            className={className}
            style={{ display: "inline-block" }}
        />
    );
    if (link) {
        return (
            <a href={link} target={linkTarget} rel={linkRel} style={{ display: "inline-block" }}>
                {icon}
            </a>
        );
    }
    return icon;
};

export default SvgIcon;
