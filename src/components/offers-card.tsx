import { View, Text, ScrollView, YStack, XStack, Image } from 'tamagui'
import { useWindowDimensions } from 'react-native'

const offers = [
  {
    id: '1',
    title: 'Internet para toda a familia',
    description:
      'Aproveite nossos planos de iternet e navegue com seguranca e velocidade',
    image: require('@/assets/images/offer-1.png'),
  },
  {
    id: '2',
    title: 'Internet para toda a familia',
    description:
      'Aproveite nossos planos de iternet e navegue com seguranca e velocidade',
    image: require('@/assets/images/offer-2.png'),
  },
]

export function OffersCard() {
  const { width } = useWindowDimensions()

  const sixtyPercentOfTheScreen = width * 0.7

  return (
    <YStack w='100%' gap='$4' mt='$4'>
      <XStack jc='space-between' ai='center' px='$4'>
        <Text fontSize='$6' fontWeight='700' color='$gray'>
          Ofertas na região
        </Text>
        <Text fontSize='$2' fontWeight='400' color='$slate'>
          Ver todas
        </Text>
      </XStack>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 12 }}
      >
        {offers.map((offer) => (
          <View key={offer.id} w={sixtyPercentOfTheScreen} h='$16'>
            <Image
              source={{ uri: offer.image }}
              w='100%'
              h='100%'
              br='$6'
              resizeMode='cover'
            />
          </View>
        ))}
      </ScrollView>
    </YStack>
  )
}
