import { addDecorator } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import ThemeProvider, { ThemeNames } from "../src/styles/ThemeProvider";
import GlobalStyleComposed from "../src/styles/GlobalStyle";
import { BreakpointSize } from "../src/styles/Breakpoints";

addDecorator((storyFn) => (
  <>
    <ThemeProvider theme={select("Theme", ThemeNames, ThemeNames.ocean)}>
      <GlobalStyleComposed />
      {storyFn()}
    </ThemeProvider>
  </>
));

const customViewports = {
  extraSmall: {
    name: "Portrait phone (default)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  small: {
    name: "Landscape phone (sm)",
    styles: {
      width: "640px",
      height: "360px",
    },
  },
  medium: {
    name: "Tablet (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  large: {
    name: "Laptop (lg)",
    styles: {
      width: "1024px",
      height: "768px",
    },
  },
  extraLarge: {
    name: "Desktop (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
};
