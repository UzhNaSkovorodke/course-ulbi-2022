import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button.tsx'

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    theme: ThemeButton.PRIMARY,
    children: 'Button',
    type: 'submit',
    width: '100%',
    radius: '10px',
  },
}

export const Secondary: Story = {
  args: {
    theme: ThemeButton.SECONDARY,
    children: 'Button',
    type: 'submit',
    width: '100%',
    radius: '10px',
  },
}
