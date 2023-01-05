module.exports = {
  stories: ["./src/**/*.stories.vue"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/vue",
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      type: "javascript/auto",
      test: /\.mjs$/,
      include: /node_modules/,
    })
    return config
  },
}
