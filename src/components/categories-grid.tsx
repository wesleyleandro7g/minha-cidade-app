import { View, Text, ScrollView, useTheme, XStack } from 'tamagui'
import { Icon } from '@/components/icon'

import { categories } from '@/temp'

export function CategoriesGrid() {
  const theme = useTheme()

  function renderLine(position: 'top' | 'bottom') {
    const rest = position === 'top' ? 0 : 1

    const filteredCategories = categories.filter(
      (_, index) => index % 2 === rest
    )

    return filteredCategories.map((item) => (
      <View key={item.id} w='$8' jc='flex-start' ai='center' p='$1' gap='$3'>
        <Icon name={item.iconName} color={theme.primary.val} />
        <Text
          fontSize='$1'
          fontWeight='600'
          textTransform='capitalize'
          color='$gray'
          textAlign='center'
          numberOfLines={2}
        >
          {item.name}
        </Text>
      </View>
    ))
  }

  return (
    <View gap='$4' mt='$2'>
      <XStack jc='space-between' ai='center' w='100%' px='$4'>
        <Text fontSize='$6' fontWeight='700' color='$gray'>
          Categorias
        </Text>
        <Text fontSize='$2' fontWeight='400' color='$slate'>
          Ver todas
        </Text>
      </XStack>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 12 }}
        showsHorizontalScrollIndicator={false}
      >
        <View gap='$4'>
          <View flexDirection='row'>{renderLine('top')}</View>
          <View flexDirection='row'>{renderLine('bottom')}</View>
        </View>
      </ScrollView>
    </View>
  )
}
