import { View, Text, ScrollView, useTheme, XStack } from 'tamagui'
import { Icon, type ExtractedIconNames } from '@/components/icon'

type CategoriesType = {
  id: string
  name: string
  iconName: ExtractedIconNames
}

export function CategoriesGrid() {
  const theme = useTheme()

  const categories: CategoriesType[] = [
    { id: '1', name: 'supermercado', iconName: 'ShoppingCart' },
    { id: '2', name: 'sorveteria', iconName: 'IceCream' },
    { id: '3', name: 'pizzaria', iconName: 'Pizza' },
    { id: '4', name: 'restaurante', iconName: 'UtensilsCrossed' },
    { id: '5', name: 'hotel', iconName: 'BedDouble' },
    { id: '7', name: 'roupas', iconName: 'Shirt' },
    { id: '8', name: 'informática', iconName: 'ShoppingCart' },
    { id: '9', name: 'advogado', iconName: 'ShoppingCart' },
    { id: '10', name: 'moto-taxi', iconName: 'ShoppingCart' },
    { id: '11', name: 'vidraçaria', iconName: 'ShoppingCart' },
    { id: '12', name: 'pedreiro', iconName: 'ShoppingCart' },
    { id: '13', name: 'Aluguel de roupas', iconName: 'ShoppingCart' },
    {
      id: '14',
      name: 'Professor particular',
      iconName: 'ShoppingCart',
    },
    { id: '15', name: 'pedreiro', iconName: 'ShoppingCart' },
    { id: '16', name: 'pedreiro', iconName: 'ShoppingCart' },
    { id: '17', name: 'pedreiro', iconName: 'ShoppingCart' },
    { id: '18', name: 'pedreiro', iconName: 'ShoppingCart' },
  ]

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
