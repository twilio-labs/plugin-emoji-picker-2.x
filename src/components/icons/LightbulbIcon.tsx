/**!
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import React from "react";
import { useUID } from "react-uid";

export interface LightbulbIconProps {
    className?: string;
    size?: number;
    color?: string;
    title?: string;
    decorative?: boolean;
}

const LightbulbIcon = React.memo(
    ({
        title = "Lightbulb Icon",
        decorative = true,
        className,
        color,
        size,
    }: LightbulbIconProps) => {
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
                            d="M11.5 5A4.5 4.5 0 105 9v1.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V9a4.48 4.48 0 002.5-4zM5 13.5h4"
                        />
                    </g>
                </svg>
            </span>
        );
    }
);

export default LightbulbIcon;