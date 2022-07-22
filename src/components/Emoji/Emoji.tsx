import { Box, Button, Text } from "@twilio-paste/core";

import { emojiButtonContainerStyles, emojiContainerStyles, emojiTextStyles } from "./Emoji.Styles";

export interface EmojiDetails {
    id: number;
    native: string;
    description: string;
    category?: string;
}

interface EmojiProps {
    emoji: EmojiDetails;
    onClick: (nativeEmoji: string) => void;
}

const Emoji = ({ emoji, onClick }: EmojiProps) => {
    return (
        <Box {...emojiContainerStyles}>
            <Button variant="reset" onClick={() => onClick(emoji.native)} title={emoji.description}>
                <Box {...emojiButtonContainerStyles}>
                    <Text {...emojiTextStyles} as="span">{emoji.native}</Text>
                </Box>
            </Button>
        </Box>
    );
};

export default Emoji;
