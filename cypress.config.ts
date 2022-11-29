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
    password: "pwd"
  },
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: [//'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      'cypress/e2e/uitTestPlayground-App.spec.js',
      'cypress/e2e/createUserswagAPI.spec.js'
    ]
  },
})
