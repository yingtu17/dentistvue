<template>
	<div>
		<div class="cotbg flex justify-center items-center">
			<form>
				<div class="w-9/12 h-3/4 gap-8 bg-white opacity-95 flex justify-center items-center flex-col">
					<h1 class="text-7xl font-medium">Contact us</h1>
					<p class="text-xl">Let him shun him in order to give him the least fault of the game</p>
					<div class="center content-inputs w-96">
						<vs-input class="vsname" name="email" type="email" label-placeholder="Name" />
					</div>
					<div class="center content-inputs w-96">
						<vs-input class="vsname" name="name" type="text" label-placeholder="Name" />
					</div>
					<textarea name="message" placeholder="your message" class="outline-none p-4 bg-gray-50 w-96 h-32"></textarea>
					<vs-button type="submit" size="large"> Submit </vs-button>
				</div>
			</form>
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
