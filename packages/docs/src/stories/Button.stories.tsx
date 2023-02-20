import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@brhcastro-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      name: 'Button',
      defaultValue: 'Submit',
      description: 'Button title',
      type: 'string',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
