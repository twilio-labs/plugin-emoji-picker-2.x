/**!
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import React from "react";
import { useUID } from "react-uid";
 
export interface CatIconProps {
    className?: string;
    size?: number;
    color?: string;
    title?: string;
    decorative?: boolean;
}
 
const CatIcon = React.memo(
    ({
        title = "Cat Icon",
        decorative = true,
        className,
        color,
        size,
    }: CatIconProps) => {
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
                    viewBox="0 0 14 14"
                    aria-labelledby={titleId}
                >
                    {title ? <title id={titleId}>{title}</title> : null}
                    <g
                        fill="currentColor"
                        stroke="#606B85"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path
                            fill="currentColor"
                            d="M6.5 10.25h1M.5 13.25l3.5-2M.5 8.25l4 1M7.48 2.28L12.87.77a.46.46 0 01.46.11.49.49 0 01.16.45l-1.1 5.61c-.06-.15-.12-.31-.17-.47A5.75 5.75 0 007 2.25a5.75 5.75 0 00-5.22 4.22c-.05.17-.11.32-.17.48L.51 1.33A.49.49 0 01.67.88a.46.46 0 01.46-.11l5.39 1.51M8.5 13.08a6.7 6.7 0 01-3 0M13.5 13.25l-3.5-2M13.5 8.25l-4 1"
                        />
                    </g>
                </svg>
            </span>
        );
    }
);
 
 export default CatIcon;