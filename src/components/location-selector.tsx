import { useContext } from 'react'
import { XStack, Text, Button, useTheme } from 'tamagui'
import { ChevronDown } from 'lucide-react-native'

import { AppContext } from '@/context'

interface LocationSelectorProps {
  dark?: boolean
  onPress: () => void
}

export function LocationSelector({ dark, onPress }: LocationSelectorProps) {
  const theme = useTheme()

  const { selectedCity } = useContext(AppContext)

  const color = dark ? theme.gray.val : theme.white.val

  return (
    <Button
      onPress={onPress}
      maxWidth='80%'
      p='0'
      bg='transparent'
      jc='flex-start'
    >
      <XStack ai='center' gap='$1.5'>
        <Text fontSize='$6' fontWeight='700' color={color} numberOfLines={1}>
          {selectedCity.name}
        </Text>
        <ChevronDown color={color} size={18} />
      </XStack>
    </Button>
  )
}
