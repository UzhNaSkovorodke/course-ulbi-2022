import { ThemeProvider } from '../../src/app/providers/ThemeProvider'

const withThemeProvider = (Story: any, context: any) => {
  return (
    <ThemeProvider>
      <Story {...context} />
    </ThemeProvider>
  )
}

export default withThemeProvider
