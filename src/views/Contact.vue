<template>
	<div>
		<div class="cotbg flex justify-center items-center">
			<div class="w-9/12 h-3/4 gap-8 bg-white opacity-95 flex justify-center items-center flex-col">
				<h1 class="text-7xl font-medium">Contact us</h1>
				<p class="text-xl">Let him shun him in order to give him the least fault of the game</p>
				<div class="center content-inputs w-96">
					<vs-input class="vsname" v-model="email"  type="email" label-placeholder="email" />
				</div>
				<div class="center content-inputs w-96">
					<vs-input class="vsname" v-model="name"  type="text" label-placeholder="Name" />
				</div>
				<textarea v-model="message" placeholder="your message" class="outline-none p-4 bg-gray-50 w-96 h-32"></textarea>
				<vs-button type="submit" @click="sendEmail" size="large"> Submit </vs-button>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
	import Footer from "../components/Footer.vue";
	import axios from "axios"
	export default {
		name: "Contact",
		components: {
			Footer,
		},
		data: () => ({
			email: "",
			name: "",
			message: "",
		}),
		methods: {
			sendEmail() {
				axios
					.post("http://127.0.0.1:8000/email/send", {
						email: this.email,
						name: this.name,
						message: this.message,
					})
					.then((response) => {
						if (this.email == ''| this.name == ''| this.message == '' ) {
							alert("Can't be empty!")
						} else {
							alert(this.name + " 's message has been sent!");
						}
					});
			},
		},
	};
</script>
<style>
	.cotbg {
		width: 100%;
		height: 100vh;
		background: url("../assets/img/cotbg.jpeg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0;
		margin: 0;
	}
	.vsname div input {
		width: 100%;
	}
	.vspassword div input {
		width: 100%;
	}
</style>
