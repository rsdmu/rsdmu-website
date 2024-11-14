
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/rsdmu/Desktop/rsdmu-website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/rsdmu/Desktop/rsdmu-website/src/pages/404.js")),
  "component---src-pages-bio-js": preferDefault(require("/Users/rsdmu/Desktop/rsdmu-website/src/pages/bio.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/rsdmu/Desktop/rsdmu-website/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/rsdmu/Desktop/rsdmu-website/src/pages/index.js")),
  "component---src-pages-papers-js": preferDefault(require("/Users/rsdmu/Desktop/rsdmu-website/src/pages/papers.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/rsdmu/Desktop/rsdmu-website/src/pages/projects.js")),
  "component---src-templates-blog-template-js": preferDefault(require("/Users/rsdmu/Desktop/rsdmu-website/src/templates/blogTemplate.js"))
}

