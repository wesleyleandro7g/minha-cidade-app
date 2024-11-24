import { useState, useContext, useEffect } from 'react'
import { FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Text, View, YStack, useTheme, Image } from 'tamagui'
import { useQuery } from '@tanstack/react-query'

import { AppContext } from '@/providers/ContextProvider'
import { supabase } from '@/db/supabase'

import { ExplorerHeader } from '@/components/explorer-header'
import { SelectCity } from '@/components/select-city'
import { SelectCategory } from '@/components/select-category'
import { StoreCard } from '@/components/store-card'
import { StoreCardEmpty } from '@/components/store-card-empty'

const emptyImage = require('@/assets/images/woman-empty.png')

type CompanyType = {
  id: string
  name: string
  description: string
  slogan: string
  instagram: string
  whatsapp: string
  website: string
  logo: string
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

export default function Explorer() {
  const theme = useTheme()

  const { selectedCategory, setSelectedCategory, selectedCity } =
    useContext(AppContext)

  const [selectCityIsOpen, setSelectCityIsOpen] = useState(false)
  const [selectCategoryIsOpen, setSelectCategoryIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  const { data, isLoading, isError } = useQuery({
    queryKey: ['companies', selectedCity.id, selectedCategory.id],
    queryFn: async () => {
      let query = supabase
        .from('companies')
        .select(
          `*,
          city (
            id,
            name
          ),
          company_category!inner (
            id,
            category (
              id, 
              name
            )
          )`
        )
        .eq('is_active', true)
        .eq('city', selectedCity.id)

      if (selectedCategory.id) {
        query = query.eq('company_category.category', selectedCategory.id)
      }

      const { data, error } = await query

      if (error) {
        console.log(error)
        throw error
      }

      return data as CompanyType[]
    },
  })

  useEffect(() => {
    setSelectCityIsOpen(false)
  }, [selectedCity])

  return (
    <>
      <View flex={1} bg='$background'>
        <StatusBar backgroundColor={theme.primary.val} style='light' />

        {isLoading ? (
          <FlatList
            data={[0, 1, 2, 3, 4, 5]}
            keyExtractor={(item) => String(item)}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={() => <StoreCardEmpty />}
            columnWrapperStyle={{ paddingHorizontal: 12, gap: 12 }}
            contentContainerStyle={{ gap: 12, paddingBottom: 12 }}
            ListHeaderComponent={() => (
              <ExplorerHeader
                search={search}
                setOpenLocationSelector={() => setSelectCityIsOpen(true)}
                setSearch={setSearch}
                setOpenAllCategories={() => setSelectCategoryIsOpen(true)}
              />
            )}
          />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <StoreCard {...item} />}
            columnWrapperStyle={{ paddingHorizontal: 12, gap: 12 }}
            contentContainerStyle={{ gap: 12, paddingBottom: 12 }}
            ListHeaderComponent={() => (
              <ExplorerHeader
                search={search}
                setOpenLocationSelector={() => setSelectCityIsOpen(true)}
                setSearch={setSearch}
                setOpenAllCategories={() => setSelectCategoryIsOpen(true)}
              />
            )}
            ListEmptyComponent={() => (
              <YStack flex={1} jc='center' ai='center' p='$5'>
                <Image
                  source={{ uri: emptyImage }}
                  w='100%'
                  h={300}
                  resizeMode='contain'
                />
                <Text
                  fontWeight='700'
                  fontSize='$4'
                  color='$gray'
                  textAlign='center'
                >
                  Ooops... Não encontramos{' '}
                  <Text
                    fontWeight='700'
                    fontSize='$4'
                    color={selectedCategory.name !== '' ? '$primary' : '$gray'}
                    textAlign='center'
                  >
                    {selectedCategory.name !== ''
                      ? selectedCategory.name
                      : 'nada'}
                  </Text>{' '}
                  em{' '}
                  <Text
                    fontWeight='700'
                    fontSize='$4'
                    color='$primary'
                    textAlign='center'
                  >
                    {selectedCity.name}
                  </Text>
                  , tente com outra cidade
                  {selectedCategory.name !== '' ? ' ou categoria' : ''}.
                </Text>
              </YStack>
            )}
          />
        )}
      </View>

      <SelectCity isOpen={selectCityIsOpen} setOpen={setSelectCityIsOpen} />
      <SelectCategory
        isOpen={selectCategoryIsOpen}
        setOpen={setSelectCategoryIsOpen}
        selectedCategory={selectedCategory}
        setSelectedCategory={(params) => {
          setSelectedCategory(params)
          setSelectCategoryIsOpen(false)
        }}
      />
    </>
  )
}
