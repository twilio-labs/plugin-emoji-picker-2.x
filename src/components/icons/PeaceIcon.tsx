/**!
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import React from "react";
import { useUID } from "react-uid";

export interface PeaceIconProps {
    className?: string;
    size?: number;
    color?: string;
    title?: string;
    decorative?: boolean;
}

const PeaceIcon = React.memo(
    ({
        title = "Peace Icon",
        decorative = true,
        className,
        color,
        size,
    }: PeaceIconProps) => {
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
                        <circle fill="currentColor" cx={7} cy={7} r={6.5} />
                        <path fill="currentColor" d="M7 .5v13M1.93 11.07L7 6l5.07 5.07" />
                    </g>
                </svg>
            </span>
        );
    }
);

export default PeaceIcon;