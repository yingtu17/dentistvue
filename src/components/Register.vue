<template>
	<div class="center">
		<vs-button flat @click="active = !active">Register</vs-button>
		<vs-dialog prevent-close blur v-model="active">
			<template #header>
				<h4 class="not-margin">Welcome to <b>Dentist</b></h4>
			</template>

			<div class="con-form">
				<vs-input v-model="email" placeholder="Email">
					<template #icon> @ </template>
				</vs-input>
				<vs-input type="password" v-model="Password" placeholder="Password">
					<template #icon>
						<img src="../assets/img/bxs-lock.png" />
					</template>
				</vs-input>
				<vs-input type="password" v-model="conpassword" placeholder="confirm password">
					<template #icon>
						<img src="../assets/img/bxs-lock.png" />
					</template>
				</vs-input>
				<div class="flex"></div>
			</div>

			<template #footer>
				<div class="footer-dialog">
					<vs-button @click="register" block> Register </vs-button>
				</div>
			</template>
		</vs-dialog>
	</div>
</template>
<script>
	import axios from "axios"

	export default {
		data: () => ({
			active: false,
			email: "",
			password: "",
			conpassword: "",
			checkbox1: false,
		}),
		methods: {
			register() {
				axios.post("http://127.0.0.1:8000/register",{
					email:this.email,
					password:this.password,
					conpassword:this.conpassword,
				}).then(response => {
					alert("123")
				})
				console.log(123);
			}
		},
		// mounted() {
		// 	this.axios.post("http://127.0.0.1:8000/register").then(body => {
		// 		// this.email = body.email;
		// 		// this.password = body.password;
		// 		// this.conpassword = body.conpassword;
		// 	})
		// }
	};
</script>
<style>
	.not-margin {
		margin: 0px;
		font-weight: normal;
		padding: 10px;
	}
	.con-form {
		width: 100%;
	}
	.con-form .flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.con-form .flex a {
		font-size: 0.8rem;
		opacity: 0.7;
	}
	.con-form .flex a:hover {
		opacity: 1;
	}
	.con-form .vs-checkbox-label {
		font-size: 0.8rem;
	}
	.con-form .vs-input-content {
		margin: 10px 0px;
		width: calc(100%);
	}
	.con-form .vs-input-content .vs-input {
		width: 100%;
	}
	.footer-dialog {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: calc(100%);
	}
	.footer-dialog .new {
		margin: 0px;
		margin-top: 20px;
		padding: 0px;
		font-size: 0.7rem;
	}
	.footer-dialog .new a {
		color: rgba(var(--vs-primary), 1) !important;
		margin-left: 6px;
	}
	.footer-dialog .new a:hover {
		text-decoration: underline;
	}
	.footer-dialog .vs-button {
		margin: 0px;
	}
</style>
