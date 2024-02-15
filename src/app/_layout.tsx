import '../../tamagui-web.css'

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { SplashScreen, Stack } from 'expo-router'
import { TamaguiProvider } from 'tamagui'
import { useColorScheme } from 'react-native'
import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'

import { config } from '../../tamagui.config'

export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
  initialRouteName: '(tabs)',
}

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontsError])

  if (!fontsLoaded && !fontsError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
          </Stack>
        </SafeAreaProvider>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
