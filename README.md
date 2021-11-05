# terminal-codes-to-html

Convert text that contains [ANSI/VT100 color terminal
codes](https://wiki.bash-hackers.org/scripting/terminalcodes) to HTML or plain
text.

## History and Status

This package implements enough functionality to convert colored syntax error
output from [esprima](https://esprima.org/index.html), into HTML that can be
displayed in a web page.

It was developed for use in
[osteele/p5-server](https://github.com/osteele/p5-server). That package now uses
[`@babel/parser](https://babel.dev/docs/en/babel-parser) instead of Esprima, so
it no longer uses this code.

## Install

```sh
npm install --save-dev terminal-codes-to-html
```

```sh
yarn add -D terminal-codes-to-html
```

## Usage

### Convert codes to HTML

```js
import { terminalCodesToHtml } from "terminal-codes-to-html";

const html = terminalCodesToHtml(
        "\x1b[0m \x1b[90m 5 |\x1b[39m \x1b[36mfunction\x1b[39m draw() {\x1b[0m"
      );
// =>
`  5 | <span style="color: cyan">function</span> draw() {`
```

### Remove terminal codes

```js
import { removeTerminalCodes } from "terminal-codes-to-html";

const text = removeTerminalCodes(
        "\x1b[0m \x1b[90m 5 |\x1b[39m \x1b[36mfunction\x1b[39m draw() {\x1b[0m"
      );
// =>
`  5 | function draw() {`
```

## License

MIT
