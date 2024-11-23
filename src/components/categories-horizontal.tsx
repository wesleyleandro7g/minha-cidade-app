import { useContext } from 'react'
import { View, Text, ScrollView, useTheme, Spinner, XStack } from 'tamagui'
import { useQuery } from '@tanstack/react-query'

import { Icon } from '@/components/icon'

import { AppContext } from '@/providers/ContextProvider'

import { supabase } from '@/db/supabase'

type CategoryType = {
  id: number
  name: string
  icon_name: string
}

export function CategoriesHorizontal() {
  const theme = useTheme()

  const { selectedCategory, setSelectedCategory } = useContext(AppContext)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase.from('categories').select('*')

      if (error) {
        throw error
      }

      return data as CategoryType[]
    },
  })

  if (isError) {
    return
  }

  return (
    <View gap='$4' mt='$2'>
      {isLoading ? (
        <XStack w='100%' jc='center' ai='center'>
          <Spinner size='large' color={theme.primary.val} />
        </XStack>
      ) : (
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 12, gap: 8 }}
          showsHorizontalScrollIndicator={false}
        >
          {data?.map((item) => (
            <View
              key={item.id}
              w='$8'
              jc='center'
              ai='center'
              px='$1'
              py='$2'
              gap='$2'
              br='$6'
              bg={
                item.id === selectedCategory.id
                  ? theme.primary.val
                  : `${theme.primary.val}40`
              }
              onPress={() =>
                setSelectedCategory({ id: item.id, name: item.name })
              }
            >
              <Icon
                name={item.icon_name as any}
                color={
                  item.id === selectedCategory.id
                    ? theme.white.val
                    : theme.primary.val
                }
              />
              <Text
                fontSize='$1'
                fontWeight='600'
                textTransform='capitalize'
                color={
                  item.id === selectedCategory.id
                    ? theme.white.val
                    : theme.primary.val
                }
                textAlign='center'
                numberOfLines={2}
              >
                {item.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  )
}
