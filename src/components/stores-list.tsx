import { FlatList } from 'react-native'
import { XStack, YStack, Text } from 'tamagui'

const storesData = [
  {
    id: '1',
    name: 'TecPort Telecom',
    description: 'A melhor internet da região na sua casa',
    logo: require('@/assets/images/tec-logo.png'),
    categories: [
      { id: '1', name: 'supermercado', iconName: 'ShoppingCart' },
      { id: '2', name: 'sorveteria', iconName: 'IceCream' },
      { id: '3', name: 'pizzaria', iconName: 'Pizza' },
    ],
  },
  {
    id: '2',
    name: 'Extra Bom Supermercado',
    description: 'A melhor internet da região na sua casa',
    logo: require('@/assets/images/extra-logo.png'),
    categories: [
      { id: '9', name: 'advogado', iconName: 'ShoppingCart' },
      { id: '10', name: 'moto-taxi', iconName: 'ShoppingCart' },
      { id: '11', name: 'vidraçaria', iconName: 'ShoppingCart' },
      { id: '12', name: 'pedreiro', iconName: 'ShoppingCart' },
    ],
  },
]

export function StoresList() {
  return (
    <FlatList
      data={storesData}
      keyExtractor={({ id }) => id}
      numColumns={2}
      renderItem={({ item }) => (
        <YStack key={item.id} w='100%' h='$16' bg='$white'>
          <Text fontWeight='700'>{item.name}</Text>
          <Text fontWeight='700'>{item.name}</Text>
        </YStack>
      )}
    />
  )
}
