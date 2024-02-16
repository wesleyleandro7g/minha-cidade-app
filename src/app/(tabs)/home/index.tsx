import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'
import { FlatList } from 'react-native'
import { View, Text, useTheme, Image } from 'tamagui'

import { AdvertsCard } from '@/components/adverts-card'
import { StatusList } from '@/components/status-list'

const tempData = [
  { id: '0', companyName: 'Renove Interiores' },
  { id: '1', companyName: 'Tuany Miranda' },
  { id: '2', companyName: 'Tec Port' },
  { id: '3', companyName: 'Extra Bom' },
  { id: '4', companyName: 'Speakr' },
  { id: '5', companyName: 'Tec Midea' },
  { id: '6', companyName: 'Global Tec' },
  { id: '7', companyName: 'Aciport' },
  { id: '8', companyName: 'Arte Turismo' },
  { id: '9', companyName: 'Lojas Carvalho' },
  { id: '10', companyName: 'Lojas Carvalho' },
  { id: '11', companyName: 'Lojas Carvalho' },
  { id: '12', companyName: 'Lojas Carvalho' },
  { id: '13', companyName: 'Lojas Carvalho' },
  { id: '14', companyName: 'Lojas Carvalho' },
  { id: '15', companyName: 'Lojas Carvalho' },
  { id: '16', companyName: 'Lojas Carvalho' },
]

function ListHeaderComponent() {
  return (
    <View>
      <View mt='$3'>
        <StatusList />
      </View>

      <View px='$3'>
        <AdvertsCard />
      </View>

      <View mt='$3' px='$3'>
        <Text fontSize={18} fontWeight='700' color='$gray'>
          Destaques na região
        </Text>
      </View>
    </View>
  )
}

export default function Home() {
  const theme = useTheme()

  return (
    <View flex={1} bg='$background'>
      <View w='100%' flexDirection='row' jc='space-between' ai='center' p='$3'>
        <Image
          src={require('@/assets/images/minha-cidade.png')}
          h='$2'
          w='$12'
          resizeMode='contain'
        />
        <Link href='/search/' asChild>
          <Ionicons name='search' size={24} color={theme.gray.val} />
        </Link>
      </View>

      <View>
        <FlatList
          data={tempData}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={ListHeaderComponent}
          renderItem={({ index, item }) => (
            <View
              key={index}
              flex={1}
              w='full'
              height='$14'
              borderRadius='$4'
              bg='$purple11Dark'
            >
              <Text fontWeight='600'>Ola</Text>
            </View>
          )}
          numColumns={2}
          contentContainerStyle={{ gap: 12 }}
          columnWrapperStyle={{ gap: 12, paddingHorizontal: 12 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
