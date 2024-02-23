import { ReactNode } from 'react'
import { Input as InputComponent, InputProps, XStack, useTheme } from 'tamagui'

function Addons({ children }: { children: ReactNode }) {
  return children
}

function Field(props: InputProps) {
  const theme = useTheme()

  return (
    <InputComponent
      flex={1}
      borderWidth={0}
      p='0'
      cursorColor={theme.slate.val}
      selectionColor={`${theme.primary.val}60`}
      color='$gray'
      fontWeight='500'
      fontSize='$5'
      backgroundColor='$white'
      {...props}
    />
  )
}

function Root({ children }: { children: ReactNode }) {
  return (
    <XStack ai='center' br='$6' px='$3' gap='$2' bg='$white'>
      {children}
    </XStack>
  )
}

export const Input = { Root, Field, Addons }
