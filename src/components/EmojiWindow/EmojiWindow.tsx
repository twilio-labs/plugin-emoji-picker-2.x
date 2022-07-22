import { CSSProperties, useEffect, useState } from "react";
import { Box, Input, Tab, TabList, Tabs, Text } from "@twilio-paste/core";
import { List } from "react-virtualized";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";

import {
  emojiRowContainerStyles,
  emojiListContainerStyles,
  searchInputContainerStyles,
  tabTextStyles
} from "./EmojiWindow.Styles";
import Emoji, { EmojiDetails } from "../Emoji/Emoji";
import emojiData from "../../emojis.json";
import { EMOJIS_PER_ROW, EMOJI_HEIGHT, PICKER_WIDTH, PICKER_HEIGHT } from "../../constants";
import SmileyIcon from "../icons/SmileyIcon";
import CatIcon from "../icons/CatIcon";
import BurgerIcon from "../icons/BurgerIcon";
import BallIcon from "../icons/BallIcon";
import TravelIcon from "../icons/TravelIcon";
import LightbulbIcon from "../icons/LightbulbIcon";
import PeaceIcon from "../icons/PeaceIcon";
import FlagIcon from "../icons/FlagIcon";

interface EmojiWindowProps {
    onEmojiClick: (nativeEmoji: string) => void;
}

enum EmojiCategory {
    all = "All",
    smileysPeople = "Smileys & People",
    animalsNature = "Animals & Nature",
    foodDrink = "Food & Drink",
    activity = "Activity",
    travelPlaces = "Travel & Places",
    objects = "Objects",
    symbols = "Symbols",
    flags = "Flags"
}

const categoryIconProps = {
    decorative: true,
    size: 10,
    color: "transparent"
};

const EmojiWindow = (props: EmojiWindowProps) => {
    const [filteredEmojis, setFilteredEmojis] = useState(emojiData);
    const [rowCount, setRowCount] = useState(Math.ceil(emojiData.length / EMOJIS_PER_ROW));
    const [selectedCategory, setSelectedCategory] = useState(EmojiCategory.all);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        setRowCount(Math.ceil(filteredEmojis.length / EMOJIS_PER_ROW));
    }, [filteredEmojis]);

    // Re-compute emoji list after search input or category tab changes
    useEffect(() => {
        setFilteredEmojis(
            emojiData.filter(emoji =>
                (selectedCategory === EmojiCategory.all || emoji.category === selectedCategory) &&
                emoji.description.toLowerCase().includes(searchInput)
            )
        );
    }, [searchInput, selectedCategory]);

    const rowRenderer = ({ key, index, style }: { key: string; index: number; style: CSSProperties }) => {
        const items = [];
        let startIndex = index * EMOJIS_PER_ROW;
        const endIndex = Math.min((index + 1) * EMOJIS_PER_ROW, filteredEmojis.length);

        for (let currentIndex = startIndex; currentIndex < endIndex; currentIndex++) {    
            const emoji = filteredEmojis[currentIndex] as EmojiDetails;
            items.push(
                <Emoji emoji={emoji} onClick={props.onEmojiClick} />
            );
        }

        return <Box {...emojiRowContainerStyles} key={key} style={style}>{items}</Box>;
    };

    return (
        <Box {...emojiListContainerStyles}>
            <Tabs selectedId={selectedCategory} variant="fitted">
                <TabList aria-label="State hook tabs">
                    <Tab
                        id={EmojiCategory.all}
                        onClick={() => setSelectedCategory(EmojiCategory.all)}
                        title="All emojis"
                    >
                        <Text {...tabTextStyles} as="span">All</Text>
                    </Tab>
                    <Tab
                        id={EmojiCategory.smileysPeople}
                        onClick={() => setSelectedCategory(EmojiCategory.smileysPeople)}
                        title={EmojiCategory.smileysPeople}
                    >
                        <SmileyIcon {...categoryIconProps}  />
                    </Tab>
                    <Tab
                        id={EmojiCategory.animalsNature}
                        onClick={() => setSelectedCategory(EmojiCategory.animalsNature)}
                        title={EmojiCategory.animalsNature}
                    >
                        <CatIcon {...categoryIconProps} />
                        </Tab>
                    <Tab
                        id={EmojiCategory.foodDrink}
                        onClick={() => setSelectedCategory(EmojiCategory.foodDrink)}
                        title={EmojiCategory.foodDrink}
                    >
                        <BurgerIcon {...categoryIconProps} />
                        </Tab>
                    <Tab
                        id={EmojiCategory.activity}
                        onClick={() => setSelectedCategory(EmojiCategory.activity)}
                        title={EmojiCategory.activity}
                    >
                        <BallIcon {...categoryIconProps} />
                    </Tab>
                    <Tab
                        id={EmojiCategory.travelPlaces}
                        onClick={() => setSelectedCategory(EmojiCategory.travelPlaces)}
                        title={EmojiCategory.travelPlaces}
                    >
                        <TravelIcon {...categoryIconProps} />
                    </Tab>
                    <Tab
                        id={EmojiCategory.objects}
                        onClick={() => setSelectedCategory(EmojiCategory.objects)}
                        title={EmojiCategory.objects}
                    >
                        <LightbulbIcon {...categoryIconProps} />
                    </Tab>
                    <Tab
                        id={EmojiCategory.symbols}
                        onClick={() => setSelectedCategory(EmojiCategory.symbols)}
                        title={EmojiCategory.symbols}
                    >
                        <PeaceIcon {...categoryIconProps} />
                    </Tab>
                    <Tab
                        id={EmojiCategory.flags}
                        onClick={() => setSelectedCategory(EmojiCategory.flags)}
                        title={EmojiCategory.flags}
                    >
                        <FlagIcon {...categoryIconProps} />
                    </Tab>
                </TabList>
            </Tabs>
            <Box {...searchInputContainerStyles}>
                <Input
                    insertBefore={<SearchIcon color="colorTextIcon" decorative={true} />}
                    aria-label="Search emojis"
                    placeholder="Search"
                    type="search"
                    onChange={(event) => setSearchInput(event.target.value)}
                />
            </Box>
            <List
                width={PICKER_WIDTH}
                height={PICKER_HEIGHT}
                rowHeight={EMOJI_HEIGHT}
                rowCount={rowCount}
                rowRenderer={rowRenderer}
                overscanRowCount={10}
            />
        </Box>
    );
};

export default EmojiWindow;