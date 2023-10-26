import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from './Icon.tsx'

const args: React.ComponentProps<typeof Icon> = { name: undefined, onClick(): void {} }

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Icon> = {
  title: 'Shared/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args,
}

export default meta
type Story = StoryObj<typeof Icon>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ShowEye: Story = {
  args: {
    name: 'ShowEye',
    width: '60px',
    height: '60px',
  },
}

export const ThemeDark: Story = {
  args: {
    name: 'ThemeDark',
    width: '60px',
    height: '60px',
  },
}
