import { BoxStyleProps } from "@twilio-paste/core";

export const emojiPickerContainerStyles: BoxStyleProps = {
    display: "flex",
    position: "relative",
    alignItems: "center",
    marginLeft: "space20"
}

export const emojiIconContainerStyles = (isHighlighted: boolean): BoxStyleProps => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "sizeSquare90",
    height: "sizeSquare90",
    backgroundColor: isHighlighted ? "colorBackgroundInverseStrong" : "transparent"
});
