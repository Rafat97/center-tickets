module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-a11y",
    "storybook-addon-designs",
    "storybook-dark-mode",
    "@storybook/addon-storysource",
    "@storybook/addon-viewport",
    "@storybook/addon-actions",
    "@storybook/addon-toolbars",
    "@storybook/addon-controls"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
};
