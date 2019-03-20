const path = require('path')

module.exports = {
  name: 'vuepress-plugin-nprogress',

  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
}
