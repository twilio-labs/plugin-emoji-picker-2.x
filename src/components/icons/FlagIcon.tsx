/**!
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import React from "react";
import { useUID } from "react-uid";

export interface FlagIconProps {
    className?: string;
    size?: number;
    color?: string;
    title?: string;
    decorative?: boolean;
}

const FlagIcon = React.memo(
    ({
        title = "Flag Icon",
        decorative = true,
        className,
        color,
        size,
    }: FlagIconProps) => {
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
                        <path fill="currentColor" d="M2.5.5v13M2.5.5h9v7h-9" />
                    </g>
                </svg>
            </span>
        );
    }
);

export default FlagIcon;