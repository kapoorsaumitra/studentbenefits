import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <strong>Student Benefits</strong>,
  project: {
    link: 'https://github.com/kapoorsaumitra/studentbenefits'
  },
  docsRepositoryBase:'https://github.com/kapoorsaumitra/studentbenefits/tree/main/',
  darkMode : true,
  primaryHue: Math.round(Math.random() * 360),
  faviconGlyph:"📝",
  search:{
    placeholder:"Search"
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Student Benefits'
    }
  }
}

export default config
