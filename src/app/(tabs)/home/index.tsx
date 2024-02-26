import { useState, useContext, useEffect } from 'react'
import { View, useTheme, ScrollView, XStack, YStack } from 'tamagui'
import { StatusBar } from 'expo-status-bar'
import { UserRound, Search, ChevronRight } from 'lucide-react-native'
import { useRouter } from 'expo-router'

import { Input } from '@/components/input'
import { Banner } from '@/components/banner'
import { CategoriesGrid } from '@/components/categories-grid'
import { LocationSelector } from '@/components/location-selector'
import { OffersCard } from '@/components/offers-card'
import { SelectCity } from '@/components/select-city'
import { SelectCategory } from '@/components/select-category'

import { AppContext } from '@/context'

export default function Home() {
  const theme = useTheme()
  const router = useRouter()

  const { selectedCity } = useContext(AppContext)

  const [search, setSearch] = useState('')
  const [selectCityIsOpen, setSelectCityIsOpen] = useState(false)
  const [selectCategoryIsOpen, setSelectCategoryIsOpen] = useState(false)

  useEffect(() => {
    setSelectCityIsOpen(false)
  }, [selectedCity])

  return (
    <>
      <View flex={1} bg='$background'>
        <StatusBar backgroundColor={theme.primary.val} style='light' />
        <ScrollView contentContainerStyle={{ paddingBottom: 12 }}>
          <View bg='$primary'>
            <YStack gap='$3' p='$3' jc='space-between'>
              <XStack w='100%' jc='space-between' ai='center'>
                <LocationSelector onPress={() => setSelectCityIsOpen(true)} />

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
          <CategoriesGrid
            seeAllCategories={() => setSelectCategoryIsOpen(true)}
          />
          <OffersCard />
        </ScrollView>
      </View>

      <SelectCity isOpen={selectCityIsOpen} setOpen={setSelectCityIsOpen} />
      <SelectCategory
        isOpen={selectCategoryIsOpen}
        setOpen={setSelectCategoryIsOpen}
        setSelectedCategory={({ id, name }) => {
          router.navigate(`/store-by-category/${id}`)
          setSelectCategoryIsOpen(false)
        }}
      />
    </>
  )
}
