# React radar

A react radar which displays temperature through the week.
The metric names are inside-monday to inside-sunday and outside-monday to outside-sunday. Metric names can be changed in the custom properties.

![React radar](https://raw.githubusercontent.com/gapitio/htmlgraphics-react-radar/master/img/react-radar.png)

## Table of contents

- [React radar](#react-radar)
  - [Table of contents](#table-of-contents)
  - [Contains](#contains)
  - [Usage](#usage)
  - [Dev site](#dev-site)

## Contains

- [React](https://reactjs.org/)
- [rollup.js](https://rollupjs.org/)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- Local development server to run the code live in the browser.

## Usage

First you have to install the required dependencies

```bash
npm install
```

Then you start the development script

```bash
npm run dev
```

Go to <http://localhost:5000>. Change some code in `./src/on-init.ts`, `./src/on-render.ts`, and `./src/design/svg-data-inkscape.svg`, and the website will update.

When the code is ready to be uploaded to Grafana, start the build script

```bash
npm run build
```

Then go to `/dist` and copy the content of `panel-options.json` to the panels `Import/export` option.

## Dev site

`src/dev-site` is a folder where most of the configuration for the dev website is.

To add custom series go to `src/dev-site/data.ts` and add createSeries() in series.

Window has been used to get global variables like data, customProperties, ETC.
