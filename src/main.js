import Vue from "vue";
import App from "./App.vue";

import iview from "iview";
Vue.use(iview);

import "iview/dist/styles/iview.css";

import symbol from "@/public/components/symbol";
import tabs from "@/public/components/tabs/tabs";
import carousel from "@/public/components/carousel/carousel";
// import "@/public/css/stylus.styl";
import "@/public/css/style.css";
Vue.component("jx-symbol", symbol);
Vue.component("jx-tabs", tabs);
Vue.component("jx-carousel", carousel);

new Vue({
	render: h => h(App)
}).$mount("#app");
