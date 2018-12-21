import Vue from "vue";
import App from "./App.vue";

import iview from "iview";
Vue.use(iview);
import "iview/dist/styles/iview.css";

new Vue({
	render: h => h(App)
}).$mount("#app");
