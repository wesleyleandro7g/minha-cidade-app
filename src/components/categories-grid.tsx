import {
  View,
  Text,
  ScrollView,
  useTheme,
  XStack,
  Button,
  Spinner,
} from 'tamagui'
import { Link } from 'expo-router'
import { ChevronDown } from 'lucide-react-native'
import { useQuery } from '@tanstack/react-query'

import { supabase } from '@/db/supabase'
import { Icon } from '@/components/icon'

interface CategoriesGridProps {
  seeAllCategories: () => void
}

type CategoryType = {
  id: number
  name: string
  icon_name: string
}

export function CategoriesGrid({ seeAllCategories }: CategoriesGridProps) {
  const theme = useTheme()

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

  function renderLine(position: 'top' | 'bottom') {
    const rest = position === 'top' ? 0 : 1

    const filteredCategories = data?.filter((_, index) => index % 2 === rest)

    return filteredCategories?.map((item) => (
      <Link key={item.id} href={`/store-by-category/${item.id}`} asChild>
        <View w='$8' jc='flex-start' ai='center' p='$1' gap='$3'>
          <Icon name={item.icon_name as any} color={theme.primary.val} />
          <Text
            fontSize='$1'
            fontWeight='600'
            textTransform='capitalize'
            color='$gray'
            textAlign='center'
            numberOfLines={2}
          >
            {item.name}
          </Text>
        </View>
      </Link>
    ))
  }

  if (isError) {
    return
  }

  return (
    <View gap='$4' mt='$2'>
      <XStack jc='space-between' ai='center' w='100%' px='$4'>
        <Text fontSize='$6' fontWeight='700' color='$gray'>
          Categorias
        </Text>
        <Button
          onPress={seeAllCategories}
          px='$2'
          h='$2'
          gap='$0.25'
          bg={`${theme.slate.val}12`}
        >
          <Text fontSize='$2' fontWeight='400' color='$slate'>
            Ver todas
          </Text>
          <ChevronDown size={12} color={theme.slate.val} />
        </Button>
      </XStack>

      {isLoading ? (
        <XStack w='100%' jc='center' ai='center'>
          <Spinner size='large' color={theme.primary.val} />
        </XStack>
      ) : (
        !isError && (
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 12 }}
            showsHorizontalScrollIndicator={false}
          >
            <View gap='$4'>
              <View flexDirection='row'>{renderLine('top')}</View>
              <View flexDirection='row'>{renderLine('bottom')}</View>
            </View>
          </ScrollView>
        )
      )}
    </View>
  )
}
