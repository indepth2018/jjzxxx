import Vue from "vue";
import App from "./App.vue";

import iview from "iview";
Vue.use(iview);
import "iview/dist/styles/iview.css";

import symbol from "@/public/components/symbol";
import tabs from "@/public/components/tabs/tabs";
Vue.component("jx-symbol", symbol);
Vue.component("jx-tabs", tabs);
new Vue({
	render: h => h(App)
}).$mount("#app");
