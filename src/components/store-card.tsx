import { YStack, XStack, View, Circle, Text, Image, useTheme } from 'tamagui'
import { Link } from 'expo-router'

interface StoreCardProps {
  id: string
  name: string
  description: string
  bannerColor: string
  logo: any
  categories: {
    id: string
    name: string
    iconName: string
  }[]
}

export function StoreCard({
  id,
  logo,
  name,
  description,
  bannerColor,
  categories,
}: StoreCardProps) {
  const theme = useTheme()

  return (
    <Link href={`/store/${id}`} asChild>
      <YStack key={id} flex={1} h='$15' bg='$white' br='$6'>
        <View w='100%' h='30%' btlr='$6' btrr='$6' bg={bannerColor}></View>

        <YStack flex={1} px='$2.5' pb='$2.5' jc='space-between'>
          <Circle size='$6' borderWidth='$0.5' borderColor='$white' mt='$-6'>
            <Image
              source={logo}
              w='100%'
              h='100%'
              br='$12'
              resizeMode='cover'
            />
          </Circle>
          <YStack>
            <Text
              fontWeight='700'
              fontSize='$4'
              color='$gray'
              numberOfLines={1}
            >
              {name}
            </Text>
            <Text
              fontWeight='500'
              fontSize='$2'
              color='$slate'
              numberOfLines={2}
            >
              {description}
            </Text>
          </YStack>
          <XStack flexWrap='wrap' gap='$1.5'>
            {categories.map((category) => (
              <View
                key={category.id}
                px='$2'
                py='$1'
                br='$6'
                bg={`${theme.slate.val}30`}
              >
                <Text fontWeight='500' fontSize='$1' color='$slate'>
                  {category.name}
                </Text>
              </View>
            ))}
          </XStack>
        </YStack>
      </YStack>
    </Link>
  )
}
