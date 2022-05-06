<template>
	<div class="center examplex">
		<vs-navbar target-scroll="#padding-scroll-content" :color="bgcolor" padding-scroll center-collapsed v-model="active">
			<template #left>
				<router-link to="/">
					<img class="h-14" src="../assets/img/logo3.png" alt="Dental" />
				</router-link>
			</template>

			<vs-navbar-item :active="active == 'tental'" id="tental">
				<router-link to="/"> Home </router-link>
			</vs-navbar-item>
			<vs-navbar-item :active="active == 'team'" id="team">
				<router-link to="/team"> team </router-link>
			</vs-navbar-item>
			<vs-navbar-item :active="active == 'services'" id="services">
				<router-link to="/services"> services </router-link>
			</vs-navbar-item>
			<vs-navbar-item :active="active == 'contact'" id="contact">
				<router-link to="/contact"> contact </router-link>
			</vs-navbar-item>
			<vs-navbar-item :active="active == 'emergency'" id="emergency">
				<router-link to="/emergency"> emergency </router-link>
			</vs-navbar-item>

			<template #right>
				<div v-if="username" class="flex items-center">
					<vs-avatar history history-gradient circle>
						<img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" />
					</vs-avatar>
					<p class="mx-4 font-bold">{{ username }}</p>
					<vs-button flat @click="logout" >Logout</vs-button>
				</div>
				<div v-else class="flex">
					<Login></Login>
					<Register></Register>
				</div>
			</template>
		</vs-navbar>
	</div>
</template>
<script>
	import Login from "../components/Login.vue";
	import Register from "../components/Register.vue";
	import router from "../router/index";

	export default {
		name: "Home",
		components: {
			Login,
			Register,
		},
		data: () => ({
			active: "",
			bgcolor: "#efefef",
			username: '',
		}),
		 methods: {
			logout() {
				document.cookie = "username=;expires=Thu, 01 Jan 1970 00:00:01 GMT";
				alert("Signing out!")
				router.go(0)
			},
		},
		mounted() {
			this.username = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		},
	};
</script>
<style lang=""></style>
