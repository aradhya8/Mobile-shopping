<template>
  <div id="app">
      <h2>Login</h2>
      <input v-model="email" placeholder="EMAIL" type="email" name="email"><br><br>
      <input v-model="password" placeholder="PASSWORD" type="password" name="password"><br><br>
      <button @click="register">SIGN IN</button>
  </div>
</template>
<script>
import {ref} from 'vue';
import firebase from 'firebase';

export default {
    name:'register',
   setup() {
        const email = ref("");
        const password = ref("");
        const register = () =>{
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .catch(err => alert(err.message));
            alert("Account Created Successfully")
            }
            return{
               register,
                email,
                password
            }
    }
          
}
</script>