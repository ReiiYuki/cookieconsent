const fs = require('fs')
const path = require('path')
const fg = require('fast-glob')
const { SitemapStream, streamToPromise } = require('sitemap')

console.log('Start building sitemap..')

const linksStream = fg.stream(['./docs/**/*.md'])
  .map((filePath) => ({ url: filePath.replace('docs/', '').replace(/\.md$/, '.html') }))

const sitemapStream = new SitemapStream({ hostname: 'https://cookieconsent.orestbida.com' })

// Return a promise that resolves with your XML string
streamToPromise(linksStream.pipe(sitemapStream)).then((sitemap) => {
  fs.writeFileSync(
    path.resolve(__dirname, './public/sitemap.xml'),
    sitemap,
  )
})