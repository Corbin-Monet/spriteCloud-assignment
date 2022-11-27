/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
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
