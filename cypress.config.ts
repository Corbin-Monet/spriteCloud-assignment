import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '123456',
  chromeWebSecurity: false,
  scrollBehavior: "center",
  reporter: "cypress-multi-reporters",
  reporterOptions: {
      configFile: "reporter-config.json"
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  env: {
    userName: "Corbin",
    password: "pwd",
    UITestURL: "http://www.uitestingplayground.com"
  },
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: [//'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    //UI:
      'cypress/e2e/UI/uitTestPlayground-sampleApp.spec.js',
      'cypress/e2e/UI/uitTestPlayground-textInput.spec.js',
      'cypress/e2e/UI/uitTestPlayground-clientSideDelay.spec.js',
    //API:
      'cypress/e2e/API/createUserswagAPI.spec.js'
    ]
  },
})
