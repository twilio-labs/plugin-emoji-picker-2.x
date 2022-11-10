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
    width: "sizeSquare100",
    height: "sizeSquare100",
    borderRadius: "borderRadiusCircle",
    backgroundColor: isHighlighted ? "colorBackgroundStrong" : "transparent"
});
