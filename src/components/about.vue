<template>
<router-link :to="{name:'signin'}">signin</router-link>|
<router-view />
<h1> {{message}} </h1>
<div>
<img src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1611669697000/photosp/a9a1c2d5-ab82-4dc0-ac1f-0460d153e954/stock-photo-business-profile-information-design-company-web-contact-website-internet-a9a1c2d5-ab82-4dc0-ac1f-0460d153e954.jpg" height="200" width="250">
</div>
<h2> {{message1}} </h2>
<h3>{{message2}}</h3>
<h3>{{message3}}</h3>
<h3>{{message4}}</h3>
<h2>{{message5}}</h2>
<h3>{{message6}}</h3>
</template>
<script>
export default {
name: 'App',
data(){
return{
message:"",
message1:"WELCOME TO MOBILES SHOPPING!",
message2:" Mobiles Shopping Pvt. Ltd. is South India's leading multi-brand retail chain dealing in international and Indian brands of mobile handsets and mobiles accessories",
message3:"Headquartered in Bengaluru, the company has stores in 6 states including most of the districts in Karnataka, Telangana, Andhra Pradesh and Tamil Nadu.",
message4:"Founded by Mr Narayan Reddy in 1974 in Bangalore by selling gramophone records, we have travelled a long way over the last 43 years to be synonymous with mobile phones. Today, we continue that journey under the dynamic leadership of Mr Subhash Chandra, Managing Director.",
message5:"Wide Range Best Brands",
message6:"Our ever-expanding product range includes the latest releases from global brands in:Personal Devices: Mobile Phones.Cameras and Accessories: DSLR cameras and Accessories - all at affordable prices. Our stores and website offer over 5000 products and more than 200 brands with year-round promotional offers and even No Cost EMI options. Our in-store sales team makes sure to understand every customer's personal needs and budgets while assisting them to make the best choice while buying their tech.",
}
}
}
</script>
<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: black;
margin-top: 60px;
}
</style>
