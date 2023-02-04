// import '../src/index.css';
import { DEFAULT_THEME, withTailwindStatus } from './withTailwindTheme.decorator';

export const globalTypes = {
  tailwindStatus: {
    name: 'tailwindStatus',
    description: 'Global theme for components',
    defaultValue: DEFAULT_THEME,
    toolbar: {
      // icon: 'paintbrush',
      icon: 'component',
      // Array of plain string values or MenuItem shape
      items: [
        { value: 'enable-tailwind', title: 'Enable tailwind css', left: '✔️' },
        { value: 'disable-tailwind', title: 'Disable tailwind css', left: '❌' },
      ],
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const decorators = [withTailwindStatus];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}