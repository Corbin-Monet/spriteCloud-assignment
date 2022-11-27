import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '123456',
  chromeWebSecurity: false,
  scrollBehavior: "center",
  retries: {
    runMode: 0,
    openMode: 0,
  },
  video: false,
  env: {
    userName: "Corbin",
    password: "pwd"
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: [//'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      'cypress/e2e/uitTestPlayground-App.spec.js',
    ]
  },
})
