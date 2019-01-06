> [Deprecated] This plugin has been maintained as a Vuepress official plugin (@vuepress/plugin-nprogress) since https://github.com/vuejs/vuepress/commit/25db1ba4ae5a023669fdb48e6d13f6580e09ec99

# Vuepress Plugin - nprogress

> This plugin is for vuepress `1.x`

Use [nprogress](https://github.com/rstacruz/nprogress) in Vuepress's custom theme quickly.

This plugin is extracted from vuepress's default theme.

## Installation

```sh
yarn add vuepress-plugin-nprogress
# or
npm install vuepress-plugin-nprogress
```

## Usage

### Use this plugin

Add `vuepress-plugin-nprogress` in your __site__ or __theme__ config file.

> See [official docs](https://vuepress.vuejs.org/plugin/using-a-plugin.html)

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

Set `$nprogressColor` in your __site__ or __theme__ `palette.styl` file to change the color of the progress bar (default is `#3eaf7c`).

> See [official docs](https://vuepress.vuejs.org/config/#palette-styl)

```stylus
// .vuepress/styles/palette.styl
// or
// .vuepress/theme/styles/palette.styl

$nprogressColor = red
```
