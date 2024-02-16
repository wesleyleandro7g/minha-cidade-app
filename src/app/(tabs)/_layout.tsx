import Ionicons from '@expo/vector-icons/Ionicons'
import { getTokens } from '@tamagui/core'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'

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
          tabBarShowLabel: false,
          tabBarStyle: {
            width: '60%',
            height: 58,
            position: 'absolute',
            bottom: 18,
            marginHorizontal: '20%',
            borderRadius: 56,
            shadowColor: 'transparent',
          },
          tabBarItemStyle: {
            borderRadius: 56,
            margin: 4,
          },
          tabBarActiveBackgroundColor: `${primaryColor}20`,
          // tabBarBackground: () => (
          //   <BlurView
          //     experimentalBlurMethod='dimezisBlurView'
          //     intensity={50}
          //     style={{
          //       ...StyleSheet.absoluteFillObject,
          //       backgroundColor: '#ffffff95',
          //       borderRadius: 56,
          //       overflow: 'hidden',
          //     }}
          //   />
          // ),
        }}
      >
        <Tabs.Screen
          name='home/index'
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='shop/index'
          options={{
            title: 'Lojas',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? 'bag-handle' : 'bag-handle-outline'}
                size={25}
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
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
