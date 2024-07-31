// https://vitepress.dev/guide/custom-theme
import { createApp, defineComponent, h } from 'vue';
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import VueButton from '../../components/button/index.vue'
import ReactButton from '../../components/button/index.tsx'
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
    app.component('ReactButton', ReactComponentWrapper);
  }
} satisfies Theme
/*import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme';
import Button from '../../components/button/index.vue'
import { createApp, defineComponent, h } from 'vue';
import React from 'react';
import ReactDOM from 'react-dom';

const ReactComponentWrapper = defineComponent({
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    ReactDOM.render(
        React.createElement(this.component),
        this.$el
    );
  },
  render() {
    return h('div');
  },
});

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('demo-button', Button);
  }
} satisfies Theme;*/
