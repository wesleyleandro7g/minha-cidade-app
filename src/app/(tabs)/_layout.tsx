import { Text } from 'tamagui'
import { getTokens } from '@tamagui/core'
import { Tabs } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  UserRound,
  Search,
  Bookmark,
  GalleryVerticalEnd,
} from 'lucide-react-native'

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
          tabBarShowLabel: true,
          tabBarStyle: {
            // width: '90%',
            height: 58,
            // shadowColor: 'transparent',
            // position: 'absolute',
            // bottom: 12,
            // marginHorizontal: '5%',
            // borderRadius: 64,
          },
          tabBarItemStyle: {
            borderRadius: 56,
            margin: 4,
            padding: 2,
          },
          tabBarActiveBackgroundColor: `${primaryColor}20`,
        }}
      >
        <Tabs.Screen
          name='home/index'
          options={{
            title: 'Início',
            tabBarIcon: ({ color }) => (
              <GalleryVerticalEnd size={24} color={color} />
            ),
            tabBarLabel: ({ color, focused, children }) => (
              <Text
                color={color}
                fontWeight={focused ? '700' : '500'}
                fontSize='$1'
              >
                {children}
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name='explorer/index'
          options={{
            title: 'Explorar',
            tabBarIcon: ({ color }) => <Search size={25} color={color} />,
            tabBarLabel: ({ color, focused, children }) => (
              <Text
                color={color}
                fontWeight={focused ? '700' : '500'}
                fontSize='$1'
              >
                {children}
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name='favorites/index'
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ color }) => <Bookmark size={25} color={color} />,
            tabBarLabel: ({ color, focused, children }) => (
              <Text
                color={color}
                fontWeight={focused ? '700' : '500'}
                fontSize='$1'
              >
                {children}
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name='profile/index'
          options={{
            title: 'Eu',
            tabBarIcon: ({ color }) => <UserRound size={24} color={color} />,
            tabBarLabel: ({ color, focused, children }) => (
              <Text
                color={color}
                fontWeight={focused ? '700' : '500'}
                fontSize='$1'
              >
                {children}
              </Text>
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
