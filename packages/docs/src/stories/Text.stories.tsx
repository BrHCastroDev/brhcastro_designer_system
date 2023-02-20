import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@brhcastro-ui/react'

export default {
  title: 'Typograph/Text',
  component: Text,
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
      defaultValue: 'md',
    },
    children: {
      name: 'Text',
      defaultValue:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magnam modi fuga sed ipsa quam dolorem aspernatur officiis at mollitia sequi nam quae.',
      description: 'Typograph text description for the text component',
      type: 'string',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the header will always be an `p`. But we can change this with the `as` property.',
      },
    },
  },
}
