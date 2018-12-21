import Vue from "vue";
import Router from "vue-router";
import first from "../content/first";
import second from "../content/second";
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			component: first
		},
		{
			path: "/first",
			component: first
		},
		{
			path: "/second",
			component: second
		}
	]
});
