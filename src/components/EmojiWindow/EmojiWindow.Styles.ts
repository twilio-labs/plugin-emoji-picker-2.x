import { BoxStyleProps, TextStyleProps } from "@twilio-paste/core";

export const emojiRowContainerStyles: BoxStyleProps = {
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    marginLeft: "space20",
    marginRight: "space20"
}

export const emojiListContainerStyles: BoxStyleProps = {
    position: "absolute",
    bottom: "100%",
    marginBottom: "space140",
    backgroundColor: "colorBackgroundBody",
    boxShadow: "shadowCard",
    borderColor: "colorBorder",
    borderStyle: "solid",
    borderWidth: "borderWidth10",
    borderRadius: "borderRadius20",
    zIndex: "zIndex50"
}

export const searchInputContainerStyles: BoxStyleProps = {
    margin: "space30"
}

export const tabTextStyles: TextStyleProps = {
    color: "#606B85" as any,
    fontSize: "fontSize10"
}
