<template>
	<div class="emebg">
		<div class="flex flex-row-reverse">
			<div class="w-1/2 pt-24 px-32 gap-20 opacity-95 bg-gray-50 flex flex-col justify-center items-center h-screen">
				<h1 class="text-5xl font-medium">In case of emergency!</h1>
				<div>
					<p class="text-red-500 text-2xl">DAYCARE SERVICE: 8776 000 000</p>
					<p class="text-red-500">Sunday and off days</p>
					<p class="text-red-500 text-2xl">DENTAL PRACTICE: 8776 111 111</p>
					<p class="text-red-500">Monday to Friday until 6 p.m.</p>
				</div>
				<p>You can reach us on 03 21 65 00 01, during our opening hours. In case of emergency, contact the dental department of the nearest hospital.</p>
				<h1 class="text-5xl font-medium">Guard Service</h1>
				<p>A duty service is provided by the department's dental surgeons on Sundays and public holidays from 9 a.m. to 12 p.m. Reachable on 03 21 71 33 33</p>
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
	};
</script>
<style>
	.emebg {
		width: 100%;
		height: 100vh;
		background: url("../assets/img/emeimg.jpeg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0;
		margin: 0;
	}
</style>
