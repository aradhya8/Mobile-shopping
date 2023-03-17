<template>
<h1>Mobile Phone Store</h1>
  <div >
     <router-link :to="{name:'home'}">home</router-link> ||
     <router-link :to="{name:'contact'}">contact</router-link> || 
     <router-link :to="{name:'about'}">about</router-link> ||
     <router-link :to="{name:'brands'}">brands</router-link> || 
    <router-view />
  </div>
  
</template>

<style>
  #app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: rgb(37, 1, 1);
text-align: center;
color: rgb(0, 0, 0);
background-color: teal;
  background-position:center;
   background-repeat: no-repeat;
   background-size: cover;
margin-top: 10px;
}
</style>



