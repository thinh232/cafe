import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createStore } from "vuex";
import configStore from "./store/index";

const app = createApp(App);
app.use(router);
const store = createStore(configStore);
app.use(store);
app.mount("#app");
