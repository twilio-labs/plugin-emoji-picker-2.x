import { useEffect, useRef, useState } from "react";
import { Box, Button } from "@twilio-paste/core";
import { useTheme } from '@twilio-paste/theme';

import { emojiPickerContainerStyles, emojiIconContainerStyles } from "./EmojiPicker.Styles";
import EmojiIcon from "../icons/EmojiIcon";
import EmojiWindow from "../EmojiWindow/EmojiWindow";

interface EmojiPickerProps {
    conversationSid: string;
    injectEmoji: (conversationSid: string, emoji: string) => Promise<void>;
}

const EmojiPicker = (props: EmojiPickerProps) => {
    const theme = useTheme();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [emojiButtonHighlighted, setEmojiButtonHighlighted] = useState<boolean>(false);
    const emojiPickerRef = useRef<HTMLDivElement>(null);

    // Hide emoji window when clicking outside it
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [emojiPickerRef]);

    const onEmojiClick = (nativeEmoji: string) => {
        props.injectEmoji(props.conversationSid, nativeEmoji);
        setIsOpen(false);
    };

    return (
        <Box {...emojiPickerContainerStyles} borderRadius={"borderRadiusCircle"} ref={emojiPickerRef}>
            <Button
                variant="secondary_icon"
                size="reset"
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setEmojiButtonHighlighted(true)}
                onMouseLeave={() => setEmojiButtonHighlighted(false)}
                onFocus={() => setEmojiButtonHighlighted(true)}
                onBlur={() => setEmojiButtonHighlighted(false)}
            >
                <Box {...emojiIconContainerStyles(emojiButtonHighlighted)}>
                    <EmojiIcon
                        decorative={false}
                        title="Add an emoji"
                        size={16}
                        color="transparent"
                        strokeColor={
                            (emojiButtonHighlighted || isOpen) ?
                            theme.textColors.colorText :
                            theme.textColors.colorTextIconInverse
                        }
                    />
                </Box>
            </Button>
            {isOpen && <EmojiWindow onEmojiClick={onEmojiClick} />}
        </Box>
    );
};

export default EmojiPicker;
