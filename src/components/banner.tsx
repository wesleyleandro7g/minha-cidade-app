import { supabase } from '@/db/supabase'
import { useQuery } from '@tanstack/react-query'
import { View, Image, Button, XStack, useTheme } from 'tamagui'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react-native'

const defaultImage = require('@/assets/images/ads-001.png')

type BannerType = {
  id: string
  title: string
  description: string
  image: string
  company_id: string
  is_active: boolean
}

export function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const theme = useTheme()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['banners'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('banners')
        .select('*')
        .eq('is_active', true)

      if (error) {
        throw new Error(error.message)
      }

      return data as BannerType[]
    },
  })

  const dataLength = data?.length || 0

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        data && data.length ? (prevIndex + 1) % data.length : 0
      )
    }, 8000)

    return () => clearInterval(interval)
  }, [data])

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      data && dataLength ? (prevIndex + 1) % data.length : 0
    )
  }

  function handlePrev() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataLength - 1 : prevIndex - 1
    )
  }

  if (isLoading || isError) {
    return (
      <View w='100%' p='$3'>
        <Image
          source={defaultImage}
          w='100%'
          h={240}
          br='$6'
          resizeMode='cover'
        />
      </View>
    )
  }

  return (
    <View w='100%' p='$3' position='relative'>
      <Image
        key={data?.[0].id}
        source={{ uri: data?.[currentIndex].image }}
        w='100%'
        h={240}
        br='$6'
        resizeMode='cover'
      />
      <XStack
        w='100%'
        jc='space-between'
        ai='center'
        px='$2'
        position='absolute'
        transform={[{ translateY: 110 }, { translateX: 13 }]}
      >
        <Button onPress={handlePrev} bg='#00000050' p='0'>
          <ChevronLeft color={theme.white.val} />
        </Button>
        <Button onPress={handleNext} bg='#00000050' p='0'>
          <ChevronRight color={theme.white.val} />
        </Button>
      </XStack>
    </View>
  )
}
