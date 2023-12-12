import type { Meta, StoryObj } from '@storybook/react'
import { RegistryForm } from './RegistryForm.tsx'

const meta = {
  title: 'Components/RegistryForm',
  component: RegistryForm,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof RegistryForm>
export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
}
