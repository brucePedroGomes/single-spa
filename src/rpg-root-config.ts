import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@rpg/navbar",
//   app: () => System.import("@rpg/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
