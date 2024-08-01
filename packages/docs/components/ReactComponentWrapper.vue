<template>
  <div ref="reactRoot"></div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import React from 'react';
import ReactDOM from 'react-dom/client';

export default defineComponent({
  name: 'ReactComponentWrapper',
  props: {
    component: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const reactRoot = ref(null);

    onMounted(async () => {
      const container = reactRoot.value;
      if (container) {
        const {default: ReactComponent} = await props.component(); // 确保获得默认导出组件
        const root = ReactDOM.createRoot(container);
        root.render(React.createElement(ReactComponent));
      }
    });

    return {reactRoot};
  },
});
</script>
