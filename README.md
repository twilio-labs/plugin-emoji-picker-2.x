# Emoji Picker Plugin for Flex UI 2.x

A Flex Plugin for Twilio Flex Programmable Contact Center.
![emoji-picker-gif](https://user-images.githubusercontent.com/46298027/178002392-eb126cac-1ac9-49fb-9094-64a9cb73a84b.gif)

## About the project
The emoji picker component was built from scratch using [Twilio Paste](https://paste.twilio.design/). This means that it will blend in with Flex UI styling and look the part when Flex UI is in dark mode. For customizing styling please refer to the Paste [design tokens](https://paste.twilio.design/tokens/list).

<img width="724" alt="Screenshot 2022-07-08 at 14 26 00" src="https://user-images.githubusercontent.com/46298027/178002612-d4adbe33-79ad-41cb-ac15-83bcd2af4614.png">

To add/remove emojis from the rendered list, simply modify the `src/emojis.json` file. If adding an emoji, please make sure to specify the category as one of the following. "Smileys & People", "Animals & Nature", "Food & Drink", "Activity", "Travel & Places", "Objects", "Symbols", "Flags".

It is also worth noting that Flex UI uses the 'Inter' font for displaying messages which is not compatible with all emojis. To avoid having a mis-rendered emoji appear in chat, these unsupported emojis have been removed from the picker.

## Setup


Clone the repository and enter the main directory:

```bash
cd emoji-picker-2.x-plugin
```

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). We support Node >= 10.12 (and recommend the _even_ versions of Node). Afterwards, install the dependencies by running:

```bash
# If you use npm
npm install
```

Make a copy of the example appConfig.js file.
```bash
cp public/appConfig.example.js public/appConfig.js
```

Next, please install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) by running:

```bash
brew tap twilio/brew && brew install twilio
```

Finally, install the [Flex Plugin extension](https://github.com/twilio-labs/plugin-flex/tree/v1-beta) for the Twilio CLI:

```bash
twilio plugins:install @twilio-labs/plugin-flex@beta
```

To run the plugin locally (for testing purposes) run:

```bash
twilio flex:plugins:start
```

To deploy the plugin run:

```bash
twilio flex:plugins:deploy --changelog "WRITE YOUR CHANGELOG HERE"
```

For further details on Flex Plugins refer to our documentation on the [Twilio Docs](https://www.twilio.com/docs/flex/developer/plugins/cli) page.

## Contributing

Any contributions are welcome to this project. Create a pull request, get it approved and make the project better :)

### Code of Conduct

Please read the [Code of Conduct](https://github.com/twilio-labs/.github/blob/main/CODE_OF_CONDUCT.md) for further details.