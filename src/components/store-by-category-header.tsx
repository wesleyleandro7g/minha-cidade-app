import { Text, XStack, useTheme } from 'tamagui'
import { ChevronLeft } from 'lucide-react-native'
import { useRouter } from 'expo-router'

interface StoreByCategoryHeaderProps {
  category?: string
}

export function StoreByCategoryHeader({
  category,
}: StoreByCategoryHeaderProps) {
  const theme = useTheme()
  const router = useRouter()

  return (
    <XStack
      w='100%'
      p='$3'
      gap='$3'
      ai='center'
      bg='$primary'
      onPress={() => router.back()}
    >
      <ChevronLeft size={24} color={theme.white.val} />
      <Text
        fontWeight='600'
        fontSize='$6'
        textTransform='capitalize'
        color='$white'
      >
        {category || 'Voltar'}
      </Text>
    </XStack>
  )
}
