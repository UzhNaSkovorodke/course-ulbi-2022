import type { Preview } from '@storybook/react'
import '../src/app/styles/variables/global.scss'
import '../src/app/styles/themes/normal.scss'
import withThemeProvider from './providers/WithThemeProvider'
import themeProvider from './providers/ThemeProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeProvider, themeProvider],
}

export default preview
