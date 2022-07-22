import React from "react";
import * as Flex from "@twilio/flex-ui";
import { FlexPlugin } from "@twilio/flex-plugin";
import { CustomizationProvider, PasteCustomCSS, CustomizationProviderProps } from "@twilio-paste/core/customization"

import EmojiPicker from "./components/EmojiPicker/EmojiPicker";

const PLUGIN_NAME = "EmojiPickerPlugin";

export default class EmojiPickerPlugin extends FlexPlugin {
    constructor() {
        super(PLUGIN_NAME);
    }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
    init(flex: typeof Flex, manager: Flex.Manager) {
        const appendToInputText = async (conversationSid: string, body: string) => {
            const currentInputText = manager.store.getState().flex.chat.conversationInput[conversationSid].inputText;
            await flex.Actions.invokeAction("SetInputText", { conversationSid, body: currentInputText + body });
        };

        flex.setProviders({
            CustomProvider: (RootComponent) => (props) => {
                const pasteProviderProps: CustomizationProviderProps & { style: PasteCustomCSS } = {
                    baseTheme: props.theme?.isLight ? "default" : "dark",
                    theme: props.theme?.tokens,
                    style: { minWidth: "100%", height: "100%" },
                    elements: {
                        HORIZONTAL_TAB_LIST_CHILD: {
                            marginBottom: "space0"
                        },
                        HORIZONTAL_TAB: {
                            minWidth: "sizeSquare50",
                            paddingTop: "space20",
                            paddingBottom: "space20"
                        },
                        INPUT_PREFIX: {
                            backgroundColor: "transparent",
                            borderRightWidth: "borderWidth0",
                            paddingRight: "space0"
                        }
                    }
                };

                return (
                    <CustomizationProvider {...pasteProviderProps}>
                        <RootComponent {...props} />
                    </CustomizationProvider>
                );
            }
        });

        const options: Flex.ContentFragmentProps = { sortOrder: 1 };
        flex.MessageInputActions.Content.add(
            /* @ts-ignore */ 
            <EmojiPicker
                key="EmojiPicker"
                appendToInputText={appendToInputText} />,
            options
        );
    }
}
