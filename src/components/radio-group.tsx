import { MapPin } from 'lucide-react-native'
import { XStack, Text } from 'tamagui'

interface CustomRadioItemProps {
  label: string
  isSelected?: boolean
  onSelect?: () => void
}

export function CustomRadioItem({
  label,
  isSelected,
  onSelect,
}: CustomRadioItemProps) {
  return (
    <XStack
      w='100%'
      ai='center'
      jc='space-between'
      gap='$3'
      p='$3'
      br='$6'
      bg={isSelected ? '$primary' : '$white'}
      onPress={onSelect}
    >
      <Text
        fontSize='$4'
        fontWeight='600'
        color={isSelected ? 'white' : '$gray'}
      >
        {label}
      </Text>
      <MapPin color='#fff' size={18} />
    </XStack>
  )
}
