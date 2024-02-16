import Ionicons from '@expo/vector-icons/Ionicons'
import { View, Text, useTheme } from 'tamagui'
import { FlatList } from 'react-native'
import { LinearGradient } from 'tamagui/linear-gradient'
import { Link } from 'expo-router'

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

export function StatusList() {
  const theme = useTheme()

  return (
    <FlatList
      data={tempData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={({ id }) => id}
      contentContainerStyle={{ paddingHorizontal: 12, gap: 12 }}
      renderItem={({ index, item }) => (
        <Link key={index} href={`/store/${item.id}`} asChild>
          <View maxWidth='$6'>
            <LinearGradient
              colors={['#F57228', '#FF6347']}
              start={[1, 0]}
              end={[0, 0]}
              br='$10'
              p='$1'
              w='$6'
              h='$6'
            >
              <View flex={1} br='$10' ai='center' jc='center' bg='$gray5Light'>
                <Ionicons name='person' size={24} color={theme.slate.val} />
              </View>
            </LinearGradient>

            <Text
              fontSize={10}
              fontWeight='500'
              color='$gray'
              textAlign='center'
              numberOfLines={1}
            >
              {item.companyName}
            </Text>
          </View>
        </Link>
      )}
    />
  )
}
