
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/rsdmu/Desktop/rsdmu/rsdmu-website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/rsdmu/Desktop/rsdmu/rsdmu-website/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/rsdmu/Desktop/rsdmu/rsdmu-website/src/pages/index.js")),
  "component---src-templates-publication-template-js": preferDefault(require("/Users/rsdmu/Desktop/rsdmu/rsdmu-website/src/templates/publicationTemplate.js")),
  "component---src-templates-work-template-js": preferDefault(require("/Users/rsdmu/Desktop/rsdmu/rsdmu-website/src/templates/workTemplate.js"))
}

