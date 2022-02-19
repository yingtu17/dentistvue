<template>
	<div>
		<Header></Header>
		<div class="py-24 font-sans">
			<div class="bgimg flex flex-row-reverse items-center">
				<div class="pr-40 font-sans">
					<h1 class="text-right text-9xl">Dental clinic</h1>
					<p class="text-right text-4xl">in Lille since 2022</p>
				</div>
			</div>
			<div class="teethbox">
				<div class="bgteeth flex justify-center items-center">
					<div class="px-96 font-sans text-white">
						<h1 class="mb-8 text-center text-7xl">Welcome</h1>
						<p class="mb-8 text-center text-4xl">The Dental Office welcomes you! Our office is modern and is equipped with the latest dental technologies</p>
						<p class="mb-8 text-center text-4xl">Rest assured of the strong involvement of all the practice's practitioners and assistants in the care of our patients.</p>
						<p class="mb-8 text-center text-4xl">To make an appointment, please send us a message or call us directly on 8776 000 0000.</p>
					</div>
				</div>
			</div>
			<div class="servicesbox">
				<div class="services flex flex-col justify-center px-10 py-20 text-white items-center">
					<h1 class="text-center text-9xl font-bold">Our services</h1>
					<div class="pt-32 flex gap-72">
						<div class="flex flex-col items-center">
							<img src="../assets/img/service-1.svg" alt="" srcset="" />
							<div class="text-center">
								<p class="text-3xl my-8">Care</p>
								<p class="w-64">sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							</div>
						</div>
						<div class="flex flex-col items-center">
							<img src="../assets/img/service-2.svg" alt="" srcset="" />
							<div class="text-center">
								<p class="text-3xl my-8">A team at your service</p>
								<p class="w-64">sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							</div>
						</div>
						<div class="flex flex-col items-center">
							<img src="../assets/img/service-3.svg" alt="" srcset="" />
							<div class="text-center">
								<p class="text-3xl my-8">Consultation</p>
								<p class="w-64">sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							</div>
						</div>
					</div>
					<!--  -->
					<div class="pt-32 flex gap-72">
						<div class="flex flex-col items-center">
							<img src="../assets/img/service-4.svg" alt="" srcset="" />
							<div class="text-center">
								<p class="text-3xl my-8">Implants and Crowns</p>
								<p class="w-64">sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							</div>
						</div>
						<div class="flex flex-col items-center">
							<img src="../assets/img/service-5.svg" alt="" srcset="" />
							<div class="text-center">
								<p class="text-3xl my-8">Orthodontics</p>
								<p class="w-64">sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							</div>
						</div>
						<div class="flex flex-col items-center">
							<img src="../assets/img/service-6.svg" alt="" srcset="" />
							<div class="text-center">
								<p class="text-3xl my-8">Dental care</p>
								<p class="w-64">sunt in culpa qui officia deserunt mollit anim id est laborum</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="Accessbox">
				<div class="Access flex flex-col justify-center py-20">
					<h1 class="text-7xl font-bold">Access</h1>
					<div class="pt-32 flex">
						<div class="w-1/2 flex flex-col items-center">
							<div class="">
								<p class="text-3xl my-8 text-center font-bold">Contact us</p>
								<div class="text-left">
									<div class="flex">
										<img class="text-black" src="../assets/img/bxs-map.svg" alt="" />
										<p class="ml-4">Turar Ryskulov St 6, Nur-Sultan</p>
									</div>
									<div class="my-4 flex">
										<img src="../assets/img/bxs-phone-call.svg" alt="" />
										<p class="ml-4">8776 000 0000</p>
									</div>
									<div class="flex">
										<img src="../assets/img/bxs-message-alt-edit.svg" alt="" />
										<p class="ml-4">hello@dentist.com</p>
									</div>
								</div>
							</div>
						</div>
						<div class="w-1/2 flex flex-col items-center">
							<div class="text-center">
								<div class="">
									<div class="flex">
										<img src="../assets/img/bxs-time-five.svg" alt="" />
										<p class="text-3xl ml-4 my-8 text-center font-bold">Our Schedules</p>
									</div>
									<div>
										<p class="text-left mb-4">Monday - Friday: 9:30 a.m. - 7 p.m.</p>
										<p class="text-left">Saturday: 10 a.m. - 1 p.m.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!--  -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "../components/Header.vue";
	export default {
		name: "Home",
		components: {
			Header,
		},
	};
</script>
<style>
	.bgimg {
		opacity: 0.8;
		background: url("../assets/img/bgimg.jpeg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0;
		height: 600px;
		padding: 0;
	}
	.teethbox {
		height: 700px;
		width: 100%;
		background: rgba(16, 165, 255, 0.7);
	}
	.bgteeth {
		background: url("../assets/img/teeth.jpeg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0;
		height: 700px;
	}
	.servicesbox {
		height: 1000px;
		width: 100%;
		background: #0072bb;
	}
	.services {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 0;
	}
</style>
