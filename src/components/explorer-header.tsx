import { Dispatch, SetStateAction } from 'react'
import { YStack, XStack, View, Button, useTheme } from 'tamagui'
import { SquareStack, Search, ChevronRight } from 'lucide-react-native'

import { LocationSelector } from '@/components/location-selector'
import { Input } from '@/components/input'
import { CategoriesHorizontal } from '@/components/categories-horizontal'

interface ExplorerHeaderProps {
  search: string
  setOpenLocationSelector: () => void
  setSearch: Dispatch<SetStateAction<string>>
  setOpenAllCategories: () => void
}

export function ExplorerHeader({
  search,
  setSearch,
  setOpenLocationSelector,
  setOpenAllCategories,
}: ExplorerHeaderProps) {
  const theme = useTheme()

  return (
    <YStack>
      <YStack gap='$3' p='$3' jc='space-between'>
        <LocationSelector dark onPress={setOpenLocationSelector} />

        <XStack w='100%' gap='$2'>
          <View flex={1}>
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
          </View>

          <Button
            w='$4'
            h='$4'
            br='$6'
            bg='$primary'
            onPress={setOpenAllCategories}
          >
            <SquareStack color={theme.white.val} size={24} />
          </Button>
        </XStack>
      </YStack>

      <CategoriesHorizontal />
    </YStack>
  )
}
