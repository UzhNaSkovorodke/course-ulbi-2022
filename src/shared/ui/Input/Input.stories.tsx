import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input.tsx'

const args: React.ComponentProps<typeof Input> = {}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args,
}

export default meta
type Story = StoryObj<typeof Input>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputDefault: Story = {
  args: {},
}
