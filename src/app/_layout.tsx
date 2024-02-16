import '../../tamagui-web.css'

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { SplashScreen, Stack } from 'expo-router'
import { TamaguiProvider } from 'tamagui'
import { View, useColorScheme } from 'react-native'
import { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'

import { config } from '../../tamagui.config'

export { ErrorBoundary } from 'expo-router'

// export const unstable_settings = {
//   initialRouteName: '(tabs)',
// }

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()

  const [fontsLoaded, fontsError] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontsError])

  if (!fontsLoaded && !fontsError) {
    return null
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <SafeAreaProvider>
            <Stack>
              <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
              <Stack.Screen
                name='search/index'
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='store/[storeId]'
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='store-product/[productId]'
                options={{ headerShown: false }}
              />
            </Stack>
          </SafeAreaProvider>
        </ThemeProvider>
      </TamaguiProvider>
    </View>
  )
}
