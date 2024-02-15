import { Stack } from 'expo-router'
import { View } from 'tamagui'

export default function HomeLayout() {
  return (
    <View flex={1} px={12}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='home/index' />
        <Stack.Screen name='search/index' />
        <Stack.Screen name='store/index' />
        <Stack.Screen name='item/index' />
      </Stack>
    </View>
  )
}
