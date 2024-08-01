// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import VueButton from '../../components/button/index.vue'
// @ts-ignore
import ReactComponentWrapper from '../../components/ReactComponentWrapper.vue';


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('VueButton', VueButton);
    app.component('ReactComponentWrapper', ReactComponentWrapper);
  }
} satisfies Theme
