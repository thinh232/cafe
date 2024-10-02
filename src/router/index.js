import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/home/homePage.vue";
import Detail from "../components/products/detail.vue";
import category from "../components/home/category.vue";
import login from "../components/login/LoginRegisterSocial.vue";
import Qlsp from "@/components/admin/qlsp.vue";
import Qltk from "@/components/admin/qltk.vue";
import Qlnv from "@/components/admin/qlnv.vue";
import Qldt from "@/components/admin/qldt.vue";
import Contact from "@/components/home/contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/detail", component: Detail },
  { path: "/category", component: category },
  { path: "/login", component: login },
  { path: "/quanlysanpham", component: Qlsp },
  { path: "/quanlytaikhoan", component: Qltk },
  { path: "/quanlynhanvien", component: Qlnv },
  { path: "/quanlydoanhthu", component: Qldt },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});
export default router;
