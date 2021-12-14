import "./app.scss";
import "@abraham/reflection";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
