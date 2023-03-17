import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase';
const app = createApp(App)
app.directive("size",{
    beforeMount: (e1, binding) => {
        if(binding.value=='small')
        {
            e1.style.fontSize = "20px";
            e1.style.color= "maroon";
        }
        else
         {
            e1.style.fontSize = "50px";
            e1.style.color= "black";
        }
    }
});
const firebaseConfig = {
    apiKey: "AIzaSyBov3eMv2vyJ_oq8NwJT1tDTZq3H3bVBEI",
    authDomain: "mobile-web-47ddf.firebaseapp.com",
    projectId: "mobile-web-47ddf",
    storageBucket: "mobile-web-47ddf.appspot.com",
    messagingSenderId: "1028976418981",
    appId: "1:1028976418981:web:15dc81a31f697b0fa06d4c"
};
firebase.initializeApp(firebaseConfig);
app.use(router).mount('#app')