import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  backgroundColor: '$ignite300',
  color: '$white',
  border: 0,
  borderRadius: '$sm',
  fontFamily: '$default',
  fontWeight: 'bold',

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$md',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}
