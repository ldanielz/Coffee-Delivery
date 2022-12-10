import { forwardRef, InputHTMLAttributes } from 'react'
import {
  InputStyleContainer,
  InputStyled,
  InputWrapper,
  RightText,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <p>{error}</p>}
      </InputWrapper>
    )
  },
)
Input.displayName = 'Input'
