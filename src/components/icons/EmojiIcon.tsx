/**!
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import { IconWrapperProps } from "@twilio-paste/icons/esm/helpers/IconWrapper";
import React from "react";
import { useUID } from "react-uid";
 
export interface EmojiIconProps {
    className?: string;
    size?: number;
    color?: string;
    title?: string;
    decorative?: boolean;
    strokeColor?: string;
}

const EmojiIcon = React.memo(
    ({
        title = "Emoji Icon",
        decorative = true,
        className,
        color,
        size,
        strokeColor
    }: EmojiIconProps) => {
        const titleId = useUID();
        return (
            <span
                style={{ color, width: size, height: size, display: "inline-block" }}
                className={className}
            >
                <svg
                    role="img"
                    aria-hidden={decorative}
                    height="100%"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    aria-labelledby={titleId}
                >
                    {title ? <title id={titleId}>{title}</title> : null}
                    <path
                        fill="currentColor"
                        stroke={strokeColor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 13.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
                    />
                    <path
                        fill="currentColor"
                        stroke={strokeColor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.7 8c.5 1.8 2.5 2.9 4.3 2.4 1.1-.4 2-1.3 2.3-2.4M4.8 5.45a.25.25 0 010-.5M4.8 5.45a.25.25 0 000-.5"
                    />
                    <g
                        fill="currentColor"
                        stroke={strokeColor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path
                            fill="currentColor"
                            d="M9.2 5.45a.25.25 0 010-.5M9.2 5.45a.25.25 0 000-.5"
                        />
                    </g>
                </svg>
            </span>
        );
    }
);

export default EmojiIcon;