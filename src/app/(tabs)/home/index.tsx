import { useState } from 'react'
import {
  View,
  useTheme,
  ScrollView,
  XStack,
  YStack,
  Sheet,
  Text,
  Button,
} from 'tamagui'
import { StatusBar } from 'expo-status-bar'
import { UserRound, Search, ChevronRight, X } from 'lucide-react-native'

import { Input } from '@/components/input'
import { Banner } from '@/components/banner'
import { CategoriesGrid } from '@/components/categories-grid'
import { LocationSelector } from '@/components/location-selector'
import { CustomRadioItem } from '@/components/radio-group'
import { OffersCard } from '@/components/offers-card'

const cities = [
  { id: '1', name: 'Porteirinha', slug: 'porteirinha' },
  { id: '2', name: 'Montes Claros', slug: 'montes-claros' },
  { id: '3', name: 'Belo Horizonte', slug: 'belo-horizonte' },
  { id: '4', name: 'Rio de Janeiro', slug: 'rio-de-janeiro' },
  { id: '5', name: 'São Paulo', slug: 'sao-paulo' },
  { id: '6', name: 'Brasília', slug: 'brasilia' },
  { id: '7', name: 'Salvador', slug: 'salvador' },
  { id: '8', name: 'Fortaleza', slug: 'fortaleza' },
  { id: '9', name: 'Recife', slug: 'recife' },
  { id: '10', name: 'Curitiba', slug: 'curitiba' },
  { id: '11', name: 'Manaus', slug: 'manaus' },
  { id: '12', name: 'Porto Alegre', slug: 'porto-alegre' },
  { id: '13', name: 'Goiânia', slug: 'goiania' },
  { id: '14', name: 'Belém', slug: 'belem' },
  { id: '15', name: 'Campinas', slug: 'campinas' },
  { id: '16', name: 'São Luís', slug: 'sao-luis' },
  { id: '17', name: 'Natal', slug: 'natal' },
  { id: '18', name: 'Teresina', slug: 'teresina' },
  { id: '19', name: 'João Pessoa', slug: 'joao-pessoa' },
  { id: '20', name: 'Florianópolis', slug: 'florianopolis' },
]

export default function Home() {
  const theme = useTheme()

  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const [selected, setSelected] = useState('')

  return (
    <>
      <View flex={1} bg='$background'>
        <StatusBar backgroundColor={theme.primary.val} style='light' />
        <ScrollView contentContainerStyle={{ paddingBottom: 12 }}>
          <View bg='$primary'>
            <YStack gap='$3' p='$3' jc='space-between'>
              <XStack w='100%' jc='space-between' ai='center'>
                <LocationSelector
                  location='Porteirinha, MG'
                  onPress={() => setOpen(true)}
                />

                <View
                  w='$3.5'
                  h='$3.5'
                  br='$12'
                  bg='$white'
                  jc='center'
                  ai='center'
                  onPress={() => alert('Pressed!')}
                >
                  <UserRound color={theme.primary.val} size={20} />
                </View>
              </XStack>

              <Input.Root>
                <Input.Addons>
                  <Search size={24} color={theme.primary.val} />
                </Input.Addons>

                <Input.Field
                  placeholder='Busque por restaurantes'
                  onChangeText={(e) => setSearch(e)}
                />

                {search.length > 2 && (
                  <Input.Addons>
                    <View p='$1.5' br='$8' bg={`${theme.primary.val}20`}>
                      <ChevronRight size={24} color={theme.primary.val} />
                    </View>
                  </Input.Addons>
                )}
              </Input.Root>
            </YStack>
          </View>

          <Banner />
          <CategoriesGrid />
          <OffersCard />
        </ScrollView>
      </View>

      <Sheet
        forceRemoveScrollEnabled={open}
        modal={true}
        open={open}
        onOpenChange={setOpen}
        snapPoints={[95]}
        snapPointsMode='percent'
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation='medium'
      >
        <Sheet.Overlay
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          backgroundColor='#00000090'
        />
        <Sheet.Handle />
        <Sheet.Frame
          padding='$4'
          justifyContent='flex-start'
          alignItems='center'
          backgroundColor='$background'
          btlr='$8'
          btrr='$8'
        >
          <YStack flex={1} ai='flex-start' gap='$4'>
            <XStack w='100%' jc='space-between' ai='center'>
              <Text fontSize='$6' fontWeight='700' color='$gray'>
                Selecione uma cidade
              </Text>

              <Button onPress={() => setOpen(false)} p='0'>
                <X color={theme.gray.val} size={24} />
              </Button>
            </XStack>

            <Input.Root>
              <Input.Addons>
                <Search size={24} color={theme.primary.val} />
              </Input.Addons>

              <Input.Field
                placeholder='Pesquisar'
                onChangeText={(e) => setSearch(e)}
              />
            </Input.Root>

            <Sheet.ScrollView showsVerticalScrollIndicator={false}>
              <YStack gap='$2'>
                {cities.map((item) => (
                  <CustomRadioItem
                    key={item.id}
                    label={item.name}
                    isSelected={selected === item.slug}
                    onSelect={() => setSelected(item.slug)}
                  />
                ))}
              </YStack>
            </Sheet.ScrollView>
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
