
// gatsby-browser.js
import "prismjs/themes/prism-okaidia.css"
import "./src/styles/global.scss"
import "typeface-roboto" // Or any font you choose

export const onClientEntry = () => {
  // Polyfill for older browsers if needed
}

export const onInitialClientRender = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = window.localStorage.getItem('theme') || 'light'
    document.body.classList.add(savedTheme)
  }
}
