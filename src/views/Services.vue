<template>
	<div>
		<div class="py-40 font-sans">
			<div class="flex justify-center">
				<div class="">
					<h1 class="text-6xl">Dental care and prostheses</h1>
					<p class="text-center text-2xl my-10 ptext">Please find here all our services offered. For more information, do not hesitate to contact us directly</p>
					<p class="text-center text-2xl">Download the list of our services here</p>
				</div>
			</div>
			<div class="px-96 my-20 text-4xl">
				<vs-table>
					<template #thead>
						<vs-tr>
							<vs-th> Dental care </vs-th>
							<vs-th> Rates of fees charged </vs-th>
							<vs-th> Basis of reimbursement Health insurance </vs-th>
							<vs-th> Health insurance reimbursement (70%) </vs-th>
						</vs-tr>
					</template>

					<template #tbody>
						<vs-tr :key="i" v-for="(tr, i) in users" :data="tr">
							<vs-td>
								{{ tr.Dental }}
							</vs-td>
							<vs-td>
								{{ tr.Rates }}
							</vs-td>
							<vs-td>
								{{ tr.Basis }}
							</vs-td>
							<vs-td>
								{{ tr.Health }}
							</vs-td>
						</vs-tr>
					</template>
				</vs-table>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
	import "vuesax/dist/vuesax.css";
	import Footer from "../components/Footer.vue";
	export default {
		name: "Team",
		components: {
			Footer,
		},
		data: () => ({
			users: [
				{
					Dental: "Dental x-ray examinations/Radiographie Panoramique",
					Rates: "20 €",
					Basis: "20 €",
					Health: "14 €",
				},
				{
					Dental: "Dental x-ray examinations/Radiographie Panoramique",
					Rates: "20 €",
					Basis: "20 €",
					Health: "14 €",
				},
				{
					Dental: "Dental x-ray examinations/Radiographie Panoramique",
					Rates: "20 €",
					Basis: "20 €",
					Health: "14 €",
				},
				{
					Dental: "Dental x-ray examinations/Radiographie Panoramique",
					Rates: "20 €",
					Basis: "20 €",
					Health: "14 €",
				},
				{
					Dental: "Dental x-ray examinations/Radiographie Panoramique",
					Rates: "20 €",
					Basis: "20 €",
					Health: "14 €",
				},
				{
					Dental: "Dental x-ray examinations/Radiographie Panoramique",
					Rates: "20 €",
					Basis: "20 €",
					Health: "14 €",
				},
				{
					Dental: "Dental x-ray examinations/Radiographie Panoramique",
					Rates: "20 €",
					Basis: "20 €",
					Health: "14 €",
				},
				{
					Dental: "Dental x-ray examinations/Radiographie Panoramique",
					Rates: "20 €",
					Basis: "20 €",
					Health: "14 €",
				},
			],
		}),
	};
</script>
<style>
	.ptext {
		width: 760px;
	}
</style>
