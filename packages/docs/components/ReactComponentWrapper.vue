<template>
  <div ref="reactRoot"></div>
</template>

<script>
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import ReactDOM from 'react-dom';
import React from 'react';

export default defineComponent({
  name: 'ReactComponentWrapper',
  props: {
    component: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    let root = null;

    onMounted(() => {
      root = document.createElement('div');
      const ReactComponent = props.component;
      ReactDOM.render(React.createElement(ReactComponent), root);
      document.querySelector('[ref="reactRoot"]').appendChild(root);
    });

    onBeforeUnmount(() => {
      if (root) {
        ReactDOM.unmountComponentAtNode(root);
      }
    });

    return {};
  },
});
</script>
