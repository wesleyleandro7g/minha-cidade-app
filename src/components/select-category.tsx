import { useState, useContext, Dispatch, SetStateAction } from 'react'
import { X } from 'lucide-react-native'
import { Button, Sheet, XStack, YStack, Text, useTheme, View } from 'tamagui'

import { AppContext } from '@/context'
import { categories } from '@/temp'
import { Icon } from './icon'

interface SelectCategoryProps {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function SelectCategory({ isOpen, setOpen }: SelectCategoryProps) {
  const theme = useTheme()
  const { selectedCategory, setSelectedCategory } = useContext(AppContext)

  const [position, setPosition] = useState(0)

  const NUM_COLUMNS = 3
  const NUM_LINES = Math.ceil(categories.length / NUM_COLUMNS)

  function generateMatrix() {
    const matriz = Array.from(Array(NUM_LINES), () => new Array(NUM_COLUMNS))

    for (let i = 0, k = 0; i < NUM_LINES; i++) {
      for (let j = 0; j < NUM_COLUMNS; j++, k++) {
        if (k < categories.length) {
          matriz[i][j] = categories[k]
        }
      }
    }

    return matriz
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
              O que você está procurando?
            </Text>

            <Button onPress={() => setOpen(false)} p='0'>
              <X color={theme.gray.val} size={24} />
            </Button>
          </XStack>

          <Sheet.ScrollView showsVerticalScrollIndicator={false}>
            <YStack gap='$2' flex={1} w='100%'>
              {generateMatrix().map((categoryRow, index) => (
                <XStack key={index} gap='$2' flex={1} w='100%'>
                  {categoryRow.map((categoryItem) => (
                    <View
                      key={categoryItem.id}
                      w='32%'
                      h='$9'
                      jc='center'
                      ai='center'
                      px='$2'
                      py='$4'
                      gap='$2'
                      br='$6'
                      bg={
                        categoryItem.id === selectedCategory.id
                          ? theme.primary.val
                          : `${theme.primary.val}40`
                      }
                      onPress={() =>
                        setSelectedCategory({
                          id: categoryItem.id,
                          name: categoryItem.name,
                        })
                      }
                    >
                      <Icon
                        name={categoryItem.iconName}
                        color={
                          categoryItem.id === selectedCategory.id
                            ? theme.white.val
                            : theme.primary.val
                        }
                      />
                      <Text
                        fontSize='$1'
                        fontWeight='600'
                        textTransform='capitalize'
                        color={
                          categoryItem.id === selectedCategory.id
                            ? theme.white.val
                            : theme.primary.val
                        }
                        textAlign='center'
                        numberOfLines={2}
                      >
                        {categoryItem.name}
                      </Text>
                    </View>
                  ))}
                </XStack>
              ))}
              {/* {categories.map((item, index) => {
                return (
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
                      name={item.iconName}
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
                )
              })} */}
            </YStack>
          </Sheet.ScrollView>
        </YStack>
      </Sheet.Frame>
    </Sheet>
  )
}
