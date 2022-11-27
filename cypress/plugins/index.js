/// <reference types="cypress" />
import "./commands";
import addContext from "mochawesome/addContext";
/**
 * @type {Cypress.PluginConfig}
 */
Cypress.on("test:after:run", (test, runnable) => {
  let videoName = Cypress.spec.name;
  videoName = videoName.replace("/.js.*", ".js");
  const videoUrl = "videos/" + videoName + ".mp4";

  addContext({ test }, videoUrl);
});

let loginName;

module.exports = (on, config) => {
  on("task", {
    setLoginName: (val) => {
      return (loginName = val);
    },
    getLoginName: () => {
      return loginName;
    },
  });
};
