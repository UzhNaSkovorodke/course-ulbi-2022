import type { Meta, StoryObj } from '@storybook/react'

import { InputPassword } from './InputPassword.tsx'

const args: React.ComponentProps<typeof InputPassword> = {}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof InputPassword> = {
  title: 'Shared/InputPassword',
  component: InputPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args,
}

export default meta
type Story = StoryObj<typeof InputPassword>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputPasswordDefault: Story = {
  args: {},
}
