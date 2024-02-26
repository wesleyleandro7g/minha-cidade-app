import { useContext } from 'react'
import { View, Text, ScrollView, useTheme } from 'tamagui'

import { Icon } from '@/components/icon'

import { AppContext } from '@/context'

import { categories } from '@/temp'

export function CategoriesHorizontal() {
  const theme = useTheme()

  const { selectedCategory, setSelectedCategory } = useContext(AppContext)

  return (
    <View gap='$4' mt='$2'>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 12, gap: 8 }}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((item) => (
          <View
            key={item.id}
            w='$8'
            jc='center'
            ai='center'
            px='$1'
            py='$2'
            gap='$2'
            br='$6'
            bg={
              item.id === selectedCategory.id
                ? theme.primary.val
                : `${theme.primary.val}40`
            }
            onPress={() =>
              setSelectedCategory({ id: item.id, name: item.name })
            }
          >
            <Icon
              name={item.iconName}
              color={
                item.id === selectedCategory.id
                  ? theme.white.val
                  : theme.primary.val
              }
            />
            <Text
              fontSize='$1'
              fontWeight='600'
              textTransform='capitalize'
              color={
                item.id === selectedCategory.id
                  ? theme.white.val
                  : theme.primary.val
              }
              textAlign='center'
              numberOfLines={2}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
