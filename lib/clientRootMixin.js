import nprogress from 'nprogress'
import './styles/nprogress.styl'

export default {
  mounted () {
    const loadedPages = Object.create(null)
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (!loadedPages[to.path]) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(to => {
      loadedPages[to.path] = true
      nprogress.done()
    })
  },
}
