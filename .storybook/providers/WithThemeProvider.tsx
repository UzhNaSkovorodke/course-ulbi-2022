import { BrowserRouter } from 'react-router-dom'

const withThemeProvider = (Story: any, context: any) => {
  return (
    <BrowserRouter>
      <Story {...context} />
    </BrowserRouter>
  )
}

export default withThemeProvider
