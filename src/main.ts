import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

import Menubar from "primevue/menubar";
import Button from "primevue/button";
import Card from "primevue/card";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.component("Menubar", Menubar);
app.component("Button", Button);
app.component("Card", Card);

app.mount("#app");
