/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import { VueConstructor } from 'vue/types';
import Button from './button';
import Lazyload from './lazyload';
import Locale from './locale';

declare global {
  interface Window {
    Vue?: VueConstructor;
  }
}

const version = '0.0.1-beta.0';
const components = [
  Button
];

const install = (Vue: VueConstructor) => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Button,
  Lazyload,
  Locale
};

export default {
  install,
  version
};
