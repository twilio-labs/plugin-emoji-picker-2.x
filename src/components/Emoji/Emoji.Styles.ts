import { BoxStyleProps, TextStyleProps } from "@twilio-paste/core";

const FONTS = `
    "Twemoji Mozilla",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Android Emoji",
    "Noto Color Emoji",
    "EmojiOne Color",
    sans-serif
`;

export const emojiContainerStyles: BoxStyleProps = {
    marginLeft: "space30",
    marginRight: "space30",
    marginTop: "space20",
    marginBottom: "space20"
}

export const emojiButtonContainerStyles: BoxStyleProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "sizeSquare80",
    height: "sizeSquare80",
    userSelect: "none",
    borderRadius: "borderRadius20",
    _hover: {
        backgroundColor: "colorBackground",
        cursor: "pointer"
    }
}

export const emojiTextStyles: TextStyleProps = {
    fontFamily: FONTS as any,
    fontSize: "fontSize60"
}