/**!
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import React from "react";
import { useUID } from "react-uid";

export interface TravelIconProps {
    className?: string;
    size?: number;
    color?: string;
    title?: string;
    decorative?: boolean;
}

const TravelIcon = React.memo(
    ({
        title = "Travel Icon",
        decorative = true,
        className,
        color,
        size,
    }: TravelIconProps) => {
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
                            d="M10.5 8.5a5 5 0 11-8.25-3.8M5.28 6.65a1.6 1.6 0 00-.16.7 1.52 1.52 0 001.53 1.53.77.77 0 01.77.77v3.47"
                        />
                        <path
                            fill="currentColor"
                            d="M.57 9.27h1.85A1.54 1.54 0 014 10.81v2.45M13.26 1.87l-1-.34a.34.34 0 00-.39.13l-.73 1.13-4-2A2.49 2.49 0 003.53 2.1.68.68 0 004 3l2.61.84.26.09.49 1.68a.36.36 0 00.24.25l1.18.38a.37.37 0 00.48-.41L9 4.58h.17l2.55.83a.67.67 0 00.85-.41l.9-2.77a.34.34 0 00-.21-.36z"
                        />
                    </g>
                </svg>
            </span>
        );
    }
);

export default TravelIcon;