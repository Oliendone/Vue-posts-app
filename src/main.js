import { createApp } from "vue";
// import App from "./App.vue";
import AppSec from "./AppSec.vue";
import components from "@/components/UI";
import "./index.css";

const app = createApp(AppSec);
console.log(components);

components.forEach((component) => {
  app.component(component.name, component);
});
// createApp(App).mount("#app");
app.mount("#app");
