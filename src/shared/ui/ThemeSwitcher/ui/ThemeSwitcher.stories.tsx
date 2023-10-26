import type { Meta, StoryObj } from '@storybook/react'

import { ThemeSwitcher } from './ThemeSwitcher.tsx'

const args: React.ComponentProps<typeof ThemeSwitcher> = {}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Shared/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args,
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ThemeSwitcherDefault: Story = {
  args: {},
}
