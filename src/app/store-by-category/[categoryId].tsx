import { FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { View, useTheme } from 'tamagui'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalSearchParams } from 'expo-router'

import { StoreCard } from '@/components/store-card'

import { storesData, categories } from '@/temp'
import { StoreByCategoryHeader } from '@/components/store-by-category-header'

export default function StoreByCategory() {
  const theme = useTheme()

  const params = useGlobalSearchParams<{ categoryId: string }>()

  const categoryName = categories.find(
    (item) => item.id === params.categoryId
  )?.name

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View flex={1} bg='$background'>
        <StatusBar backgroundColor={theme.primary.val} style='light' />
        <StoreByCategoryHeader category={categoryName} />

        <FlatList
          data={storesData}
          keyExtractor={({ id }) => id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <StoreCard {...item} />}
          columnWrapperStyle={{ paddingHorizontal: 12, gap: 12 }}
          contentContainerStyle={{ gap: 12, paddingVertical: 12 }}
        />
      </View>
    </SafeAreaView>
  )
}
