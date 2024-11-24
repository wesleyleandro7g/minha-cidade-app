import { YStack, XStack, View, Circle, Text, Image, useTheme } from 'tamagui'
import { Link } from 'expo-router'

interface StoreCardProps {
  id: string
  name: string
  description: string
  slogan: string
  instagram: string
  whatsapp: string
  website: string
  logo?: string
  email: string
  address: string
  banner: string
  phone: string
  created_at: string
  city: {
    id: string
    name: string
  }
  company_category: {
    id: string
    category: {
      id: string
      name: string
    }
  }[]
}

function randomColor() {
  const colors = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#B34D4D',
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

function getFirstLetter(name?: string) {
  return name?.charAt(0).toUpperCase()
}

const color = randomColor()

export function StoreCard(company: StoreCardProps) {
  const theme = useTheme()

  return (
    <Link href={`/store/${company.id}`} asChild>
      <YStack key={company.id} flex={1} h='$15' bg='$white' br='$6'>
        <View w='100%' h='30%' btlr='$6' btrr='$6' bg={color + '90'}></View>
        <YStack flex={1} px='$2.5' pb='$2.5' jc='space-between'>
          <Circle
            size='$6'
            borderWidth='$0.5'
            borderColor='$white'
            mt='$-6'
            bg={color}
          >
            {company.logo ? (
              <Image
                source={company.logo as any}
                w='100%'
                h='100%'
                br='$12'
                resizeMode='cover'
              />
            ) : (
              <Text fontWeight='700' fontSize='$7' color='$gray'>
                {getFirstLetter(company.name)}
              </Text>
            )}
          </Circle>
          <YStack>
            <Text
              fontWeight='700'
              fontSize='$4'
              color='$gray'
              numberOfLines={1}
            >
              {company.name}
            </Text>
            <Text
              fontWeight='500'
              fontSize='$2'
              color='$slate'
              numberOfLines={2}
            >
              {company.description}
            </Text>
          </YStack>
          <XStack flexWrap='wrap' gap='$1.5'>
            {company.company_category.map((category) => (
              <View
                key={category.id}
                px='$2'
                py='$1'
                br='$6'
                bg={`${theme.slate.val}30`}
              >
                <Text fontWeight='500' fontSize='$1' color='$slate'>
                  {category?.category?.name}
                </Text>
              </View>
            ))}
          </XStack>
        </YStack>
      </YStack>
    </Link>
  )
}
