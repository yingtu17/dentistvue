<template>
	<div>
		<div class="cotbg flex justify-center items-center">
			<div class="w-9/12 h-3/4 gap-8 bg-white opacity-95 flex justify-center items-center flex-col">
				<h1 class="text-7xl font-medium">Contact us</h1>
				<p class="text-xl">Let him shun him in order to give him the least fault of the game</p>
				<div class="center content-inputs w-96">
					<vs-input class="vsname" label-placeholder="Name" v-model="fullname" />
				</div>
				<div class="center content-inputs w-96">
					<vs-input
						class="vspassword"
						type="password"
						v-model="password"
						label-placeholder="Password"
						:progress="getProgress"
						:visiblePassword="hasVisiblePassword"
						icon-after
						@click-icon="hasVisiblePassword = !hasVisiblePassword"
					>
						<template #icon>
							<i v-if="!hasVisiblePassword">
								<img src="../assets/img/bx-show.png" alt="" />
							</i>
							<i v-else>
								<img src="../assets/img/bx-hide.png" alt="" />
							</i>
						</template>

						<template v-if="getProgress >= 100" #message-success> Secure password </template>
					</vs-input>
				</div>
				<textarea placeholder="your message" class="outline-none p-4 bg-gray-50 w-96 h-32"></textarea>
				<vs-button size="large"> Submit </vs-button>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
	import Footer from "../components/Footer.vue";
	export default {
		name: "Contact",
		components: {
			Footer,
		},
		data: () => ({
			password: "",
			fullname: "",
			hasVisiblePassword: false,
		}),
		computed: {
			getProgress() {
				let progress = 0;

				if (/\d/.test(this.password)) {
					progress += 20;
				}

				if (/(.*[A-Z].*)/.test(this.password)) {
					progress += 20;
				}

				if (/(.*[a-z].*)/.test(this.password)) {
					progress += 20;
				}

				if (this.password.length >= 6) {
					progress += 20;
				}

				if (/[^A-Za-z0-9]/.test(this.password)) {
					progress += 20;
				}

				return progress;
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
