import { XStack, Text, Button } from 'tamagui'
import { ChevronDown } from 'lucide-react-native'

interface LocationSelectorProps {
  location: string
  onPress: () => void
}

export function LocationSelector({ location, onPress }: LocationSelectorProps) {
  return (
    <Button
      onPress={onPress}
      maxWidth='80%'
      p='0'
      bg='transparent'
      jc='flex-start'
    >
      <XStack ai='center' gap='$1.5'>
        <Text fontSize='$6' fontWeight='700' color='$white' numberOfLines={1}>
          {location}
        </Text>
        <ChevronDown color='#fff' size={18} />
      </XStack>
    </Button>
  )
}
