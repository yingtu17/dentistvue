<template>
	<div class="center examplex">
		<vs-navbar target-scroll="#padding-scroll-content" :color="bgcolor" padding-scroll center-collapsed v-model="active">
			<template #left>
				<img class="h-14" src="../assets/img/logo3.png" alt="" />
			</template>

			<vs-navbar-item :active="active == 'tental'" id="tental">
				<router-link to="/"> Dental clinic </router-link>
			</vs-navbar-item>
			<vs-navbar-item :active="active == 'team'" id="team">
				<router-link to="/team"> team </router-link>
			</vs-navbar-item>
			<vs-navbar-item :active="active == 'services'" id="services">
				<router-link to="/services"> services </router-link>
			</vs-navbar-item>
			<vs-navbar-item :active="active == 'contact'" id="contact"> contact </vs-navbar-item>
			<vs-navbar-item :active="active == 'emergency'" id="emergency"> emergency </vs-navbar-item>
			<template #right>
				<Login></Login>
				<vs-button>Register</vs-button>
			</template>
		</vs-navbar>
	</div>
</template>
<script>
	import Login from "../components/Login.vue";
	import router from "../router/index";

	export default {
		name: "Home",
		components: {
			Login,
		},
		data: () => ({
			active: "",
			bgcolor: "#efefef",
		}),
	};
</script>
<style lang=""></style>
