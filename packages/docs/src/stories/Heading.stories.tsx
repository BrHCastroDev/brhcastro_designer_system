import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@brhcastro-ui/react'

export default {
  title: 'Typograph/Heading',
  component: Heading,
  args: {
    children: 'Custom Title.',
  },
  argTypes: {
    children: {
      name: 'Heading',
      defaultValue: 'Custom Title.',
      description: 'Typograph text description for heading component',
      type: 'string',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the header will always be an `h2`. But we can change this with the `as` property.',
      },
    },
  },
}
