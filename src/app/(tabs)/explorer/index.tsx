import { useState, useContext } from 'react'
import { FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { View, useTheme } from 'tamagui'

import { storesData } from '@/temp'
import { ExplorerHeader } from '@/components/explorer-header'
import { SelectCity } from '@/components/select-city'
import { SelectCategory } from '@/components/select-category'
import { StoreCard } from '@/components/store-card'
import { AppContext } from '@/context'

export default function Explorer() {
  const theme = useTheme()

  const { selectedCategory, setSelectedCategory } = useContext(AppContext)

  const [selectCityIsOpen, setSelectCityIsOpen] = useState(false)
  const [selectCategoryIsOpen, setSelectCategoryIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <>
      <View flex={1} bg='$background'>
        <StatusBar backgroundColor={theme.primary.val} style='light' />

        <FlatList
          data={storesData}
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
        />
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
