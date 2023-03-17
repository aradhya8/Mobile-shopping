import { createWebHistory, createRouter } from "vue-router";
import home from "@/components/home.vue";
import contact from "@/components/contact.vue";
import about from "@/components/about.vue";
import brands from "@/components/brands.vue";
import signin from "@/components/signin.vue";
import price from "@/components/price.vue";
import oneplus from "@/components/oneplus.vue";
import apple from "@/components/apple.vue";
import samsung from "@/components/samsung.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
      path: "/about",
      name: "about",
      component: about,
      children:[
        {
          path: "/signin",
          name: "signin",
          component: signin,
         },]
  },
  {
      path: "/brands",
      name: "brands",
      component: brands,
      children:[
        {
          name:"oneplus",
          path:"/oneplus",
          component:oneplus,
          },
        {
          name:"apple",
          path:"/apple",
          component:apple,
        },
        {
          name:"samsung",
          path:"/samsung",
          component:samsung,
        },
        {
          name:"price",
          path:"/price",
          component:price
          },]
      
  }      
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;