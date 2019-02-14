import Vue from "vue";
import Router from "vue-router";
import first from "../content/first";
import second from "../content/second";
import third from "../content/third";
import fourth from "../content/fourth";
import teacherRoom from "../content/teacherRoom";
import sixth from "../content/sixth";
import seventh from "../content/seventh";
import eighth from "../content/eighth";
import ninth from "../content/ninth";
import tenth from "../content/tenth";
import eleventh from "../content/eleventh";
import twelfth from "../content/twelfth";
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
			name: "second",
			component: second
		},
		{
			path: "/third",
			component: third
		},
		{
			path: "/fourth",
			component: fourth
		},
		{
			path: "/teacherRoom",
			component: teacherRoom
		},
		{
			path: "/sixth",
			component: sixth
		},
		{
			path: "/seventh",
			component: seventh
		},
		{
			path: "/eighth",
			component: eighth
		},
		{
			path: "/ninth",
			component: ninth
		},
		{
			path: "/tenth",
			component: tenth
		},
		{
			path: "/eleventh",
			component: eleventh
		},
		{
			path: "/twelfth",
			component: twelfth
		}
	]
});
