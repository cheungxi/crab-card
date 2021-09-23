import * as VueRouter from "vue-router";
import HomeVideoBG from "../components/HomeVideoBG.vue";
import Exchange from "../components/Exchange.vue";

const routes = [
  {
    path: "/exchange",
    name: "Exchange",
    component: Exchange,
  },
  {
    path: "/",
    name: "Home",
    component: HomeVideoBG,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
