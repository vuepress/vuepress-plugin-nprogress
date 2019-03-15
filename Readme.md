# Vuepress Plugin - nprogress

Use [nprogress](https://github.com/rstacruz/nprogress) in Vuepress.

This plugin will show progress bar on the top when navigating to another page.

## Installation

```sh
npm install vuepress-plugin-nprogress
```

## Usage

### Use this plugin

Add `vuepress-plugin-nprogress` in your __site__ or __theme__ config file.

> See [official docs](https://v1.vuepress.vuejs.org/plugin/using-a-plugin.html)

```js
// .vuepress/config.js
// or
// .vuepress/theme/index.js

module.exports = {
  plugins: [
    'vuepress-plugin-nprogress',
  ],
}
```

### Custom color

Set `$nprogressColor` in your __site__ or __theme__ `palette.styl` file to change the color of the progress bar. If not set, the color is set to `$accentColor` of Vuepress.

> See [official docs](https://v1.vuepress.vuejs.org/config/#palette-styl)

```stylus
// .vuepress/styles/palette.styl
// or
// .vuepress/theme/styles/palette.styl

$nprogressColor = red

// by default:
// $nprogressColor ?= $accentColor
```
