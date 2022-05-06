<template lang="">
    <div class="center">
      <vs-button flat @click="active=!active" >Login</vs-button>
      <vs-dialog prevent-close blur v-model="active">
        <template #header>
          <h4 class="not-margin">
            Welcome to <b>Dentist</b>
          </h4>
        </template>

        <div class="con-form">
          <vs-input v-model="logemail" placeholder="Email">
            <template #icon>
              @
            </template>
          </vs-input>
          <vs-input type="password" v-model="logpassword" placeholder="Password">
            <template #icon>
              <img src="../assets/img/bxs-lock.png">
            </template>
          </vs-input>
          <div class="flex">
            <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
            <a href="#">Forgot Password?</a>
          </div>
        </div>

        <template #footer>
          <div class="footer-dialog">
            <vs-button block @click="signin">
              Sign In
            </vs-button>
          </div>
        </template>
      </vs-dialog>
    </div>
</template>
<script>

import axios from "axios"
export default {
    data:() => ({
        active: false,
        logemail: '',
        logpassword: '',
        checkbox1: '',
      }),
      methods: {
			signin() {
				axios.post("http://127.0.0.1:8000/register/lookUp/",{
					logemail:this.logemail,
					logpassword:this.logpassword,
				}).then(response => {
					alert("123")
				})
				console.log(123);
			}
		},
}
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