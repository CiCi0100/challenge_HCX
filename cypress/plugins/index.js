const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    "compilerOptions": {
    "allowJs": true
  },
  "include": ["**/*.js"]
  },
});

