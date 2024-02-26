import {
  View,
  Text,
  YStack,
  XStack,
  Button,
  useTheme,
  Image,
  Circle,
  ScrollView,
} from 'tamagui'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  ArrowRight,
  Bookmark,
  ChevronLeft,
  Clock,
  MapPin,
  Phone,
  Share,
} from 'lucide-react-native'

function CompanyDetail() {
  const theme = useTheme()

  return (
    <XStack ai='center' h='$3' p='$1' pr='$2' gap='$2' bg='$white' br='$8'>
      <Circle size='$2.5' bg={`${theme.primary.val}30`}>
        <Phone size={14} color={theme.primary.val} />
      </Circle>
      <Text fontSize='$2' fontWeight='400' color='$slate'>
        Contato
      </Text>
      <View transform='rotate(-45deg)'>
        <ArrowRight size={14} color={theme.slate.val} />
      </View>
    </XStack>
  )
}

export default function Store() {
  const { storeId } = useGlobalSearchParams<{ storeId: string }>()

  const theme = useTheme()
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack flex={1} bg='$background'>
        <View w='100%' h='$16' bg='$blue10Dark'>
          <XStack w='100%' jc='space-between' ai='center' p='$3'>
            <Button
              w='$4'
              h='$4'
              br='$8'
              bg='#00000070'
              onPress={() => router.back()}
            >
              <ChevronLeft size={24} color={theme.white.val} />
            </Button>

            <XStack gap='$3'>
              <Button w='$4' h='$4' br='$8' bg='#00000070'>
                <Share size={24} color={theme.white.val} />
              </Button>
              <Button w='$4' h='$4' br='$8' bg='#00000070'>
                <Bookmark size={24} color={theme.white.val} />
              </Button>
            </XStack>
          </XStack>
        </View>

        <XStack px='$3'>
          <Circle size='$10' borderWidth='$1' borderColor='$white' mt='$-8'>
            <Image
              source={{ uri: require('@/assets/images/tec-logo.png') }}
              w='100%'
              h='100%'
              br='$12'
              resizeMode='cover'
            />
          </Circle>
        </XStack>

        <YStack p='$3'>
          <Text fontSize='$8' fontWeight='900' color='$gray'>
            TecPort Telecom
          </Text>
          <XStack ai='center' gap='$2'>
            <MapPin size={13} color={theme.primary.val} />
            <Text fontSize='$2' fontWeight='400' color='$slate'>
              Rua Belo Horizonte 313 C - Centro, Porteirinha
            </Text>
          </XStack>
        </YStack>

        <View w='100%'>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 12, gap: 8 }}
          >
            <CompanyDetail />
            <CompanyDetail />
            <CompanyDetail />
            <CompanyDetail />
          </ScrollView>
        </View>

        <View w='100%' p='$3'>
          <XStack w='100%' p='$3' br='$6' bg='$white' ai='center' gap='$2'>
            <View
              w='$2.5'
              h='$2.5'
              bg={`${theme.primary.val}20`}
              jc='center'
              ai='center'
              br='$4'
            >
              <Clock size={18} color={theme.primary.val} />
            </View>
            <Text fontWeight='600' fontSize='$4' color='$slate'>
              Aberto agora - Fecha às 18h
            </Text>
          </XStack>
        </View>
      </YStack>
    </SafeAreaView>
  )
}
