import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@brhcastro-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://source.unsplash.com/random/300×300/?profile',
    alt: 'random avatar profiles',
  },
  argTypes: {
    size: {
      options: ['default', 'small'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'default',
    },
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const small: StoryObj<AvatarProps> = {
  args: {
    size: 'small',
    src: 'https://github.com/brhcastro.png/',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
