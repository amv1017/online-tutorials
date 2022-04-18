/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: [
    '**/node_modules/**/*',
    '**/.git/**/*',
  ],
  devOptions: {
    port: 3000
  }
}
