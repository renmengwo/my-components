import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
// @ts-ignore
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  vite: {
    resolve: {
      alias: {
        'vue-components': fileURLToPath(new URL('../../vue-components/dist/vue-components.es.js', import.meta.url)),
        'react-components': fileURLToPath(new URL('../../react-components/dist/react-components.es.js', import.meta.url))
      }
    }
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/index' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button' }
    ],
    sidebar: {
      '/guide/': [
        { text: '快速开始', link: '/guide/getting-started' }
      ],
      '/components/': [
        { text: 'Button 按钮', link: '/components/button' }
      ]
    }
  }
})
