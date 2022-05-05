import Vue from "vue";
import VueRouter from "vue-router";
//
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";
import Emergency from "../views/Emergency.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/team",
		name: "Team",
		component: Team,
	},
	{
		path: "/services",
		name: "Services",
		component: Services,
	},
	{
		path: "/contact",
		name: "Contact",
		component: Contact,
	},
	{
		path: "/emergency",
		name: "Emergency",
		component: Emergency,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
