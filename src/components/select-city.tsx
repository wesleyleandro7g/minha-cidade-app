import { useState, useContext, Dispatch, SetStateAction } from 'react'
import { X, Search } from 'lucide-react-native'
import { Button, Sheet, XStack, YStack, Text, useTheme } from 'tamagui'

import { CustomRadioItem } from '@/components/radio-group'
import { Input } from '@/components/input'

import { AppContext } from '@/context'
import { cities } from '@/temp'

interface SelectCityProps {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function SelectCity({ isOpen, setOpen }: SelectCityProps) {
  const theme = useTheme()
  const { selectedCity, setSelectedCity } = useContext(AppContext)

  const [position, setPosition] = useState(0)
  const [search, setSearch] = useState('')

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
                  isSelected={selectedCity.id === item.id}
                  onSelect={() =>
                    setSelectedCity({ id: item.id, name: item.name })
                  }
                />
              ))}
            </YStack>
          </Sheet.ScrollView>
        </YStack>
      </Sheet.Frame>
    </Sheet>
  )
}
