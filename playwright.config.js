/* global require, module, process */
const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: 'e2e-tests',
  webServer: {
    command: 'npm run build && npm run start',
    port: 5001,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000
  }
})