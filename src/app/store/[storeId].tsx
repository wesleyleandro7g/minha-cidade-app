import { View, Text } from 'tamagui'
import { useGlobalSearchParams } from 'expo-router'

export default function Store() {
  const { storeId } = useGlobalSearchParams<{ storeId: string }>()

  return (
    <View>
      <Text fontWeight='600'>Store: {storeId}</Text>
    </View>
  )
}
