import '../../tamagui-web.css'

import { useCallback } from 'react'
import { View, useColorScheme } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { TamaguiProvider, Text } from 'tamagui'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'

import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'

import ContextProvider from '@/context'

import { config } from '../../tamagui.config'
import { ChevronLeft } from 'lucide-react-native'

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
          <ContextProvider>
            <SafeAreaProvider>
              <Stack>
                <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                <Stack.Screen
                  name='store/[storeId]'
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name='store-product/[productId]'
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name='store-by-category/[categoryId]'
                  options={{ headerShown: false }}
                />
              </Stack>
            </SafeAreaProvider>
          </ContextProvider>
        </ThemeProvider>
      </TamaguiProvider>
    </View>
  )
}
