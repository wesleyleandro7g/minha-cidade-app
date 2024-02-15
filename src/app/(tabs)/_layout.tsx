import Ionicons from '@expo/vector-icons/Ionicons'
import { getTokens } from '@tamagui/core'
import { Tabs } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function TabLayout() {
  const primaryColor = getTokens().color.primary.val

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: '#797979',
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarLabelStyle: {
            padding: 0,
            marginBottom: 4,
          },
          tabBarIconStyle: {
            marginBottom: -4,
          },
        }}
      >
        <Tabs.Screen
          name='(home)'
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'bag-handle' : 'bag-handle-outline'}
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='stores/index'
          options={{
            title: 'Lojas',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'storefront' : 'storefront-outline'}
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='adverts/index'
          options={{
            title: 'Anuncios',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'document-text' : 'document-text-outline'}
                size={22}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='profile/index'
          options={{
            title: 'Eu',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={22}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
