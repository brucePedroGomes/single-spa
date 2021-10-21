import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@rpg/react-single",
  app: () => System.import("@rpg/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@rpg/react-multiples",
  app: () => System.import("@rpg/react-multiples"),
  activeWhen: ["/react-multiples"],
});

// registerApplication({
//   name: "@rpg/react-parcel",
//   app: () => System.import("@rpg/react-parcel"),
//   activeWhen: (location) => location.pathname === "/react-parcel",
// });

registerApplication({
  name: "@rpg/react-parcel-bro",
  app: () => System.import("@rpg/react-parcel-bro"),
  activeWhen: (location) => location.pathname === "/react-parcel-bro",
});

registerApplication({
  name: "@rpg/react-lazy",
  app: () => System.import("@rpg/react-lazy"),
  activeWhen: ["/react-lazy"],
});

start({
  urlRerouteOnly: true,
});
