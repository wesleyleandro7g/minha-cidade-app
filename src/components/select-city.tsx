import { useState, useContext, Dispatch, SetStateAction } from 'react'
import { X, Search } from 'lucide-react-native'
import { Button, Sheet, XStack, YStack, Text, useTheme, Spinner } from 'tamagui'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery } from '@tanstack/react-query'

import { CustomRadioItem } from '@/components/radio-group'
import { Input } from '@/components/input'
import { ErrorComponent } from '@/components/error'

import { AppContext } from '@/providers/ContextProvider'
import { supabase } from '@/db/supabase'

interface SelectCityProps {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

type CityType = {
  id: number
  name: string
  slug: string
  zip_code: string
  state: string
  is_active: boolean
}

export function SelectCity({ isOpen, setOpen }: SelectCityProps) {
  const theme = useTheme()
  const { selectedCity, setSelectedCity } = useContext(AppContext)

  const [position, setPosition] = useState(0)
  const [search, setSearch] = useState('')

  const { data, isLoading, isError } = useQuery({
    queryKey: ['cities'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cities')
        .select('*')
        .eq('is_active', true)

      if (error) {
        throw error
      }

      return data as CityType[]
    },
  })

  async function handleChangeLocation(value: { id: number; name: string }) {
    setSelectedCity({ id: value.id, name: value.name })

    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('current-city', jsonValue)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Sheet
      forceRemoveScrollEnabled={isOpen}
      modal={true}
      open={isOpen}
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

          {isError && <ErrorComponent />}

          {isLoading ? (
            <XStack w='100%' jc='center' ai='center'>
              <Spinner size='large' color={theme.primary.val} />
            </XStack>
          ) : (
            !isError && (
              <>
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
                    {data?.map((item) => (
                      <CustomRadioItem
                        key={item.id}
                        label={item.name}
                        isSelected={selectedCity.id === item.id}
                        onSelect={() =>
                          handleChangeLocation({ id: item.id, name: item.name })
                        }
                      />
                    ))}
                  </YStack>
                </Sheet.ScrollView>
              </>
            )
          )}
        </YStack>
      </Sheet.Frame>
    </Sheet>
  )
}
