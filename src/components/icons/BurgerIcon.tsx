/**!
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import React from "react";
import { useUID } from "react-uid";

export interface BurgerIconProps {
    className?: string;
    size?: number;
    color?: string;
    title?: string;
    decorative?: boolean;
}

const BurgerIcon = React.memo(
    ({
        title = "Burger Icon",
        decorative = true,
        className,
        color,
        size,
    }: BurgerIconProps) => {
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
                            d="M4 .5h6A3.5 3.5 0 0113.5 4v0a1 1 0 01-1 1h-11a1 1 0 01-1-1v0A3.5 3.5 0 014 .5zM.5 7.5h13M13 10H7l-1.5 1.5-3-1.5H1a.5.5 0 00-.5.5h0a3 3 0 003 3h7a3 3 0 003-3h0a.5.5 0 00-.5-.5z"
                        />
                    </g>
                </svg>
            </span>
        );
    }
);

export default BurgerIcon;