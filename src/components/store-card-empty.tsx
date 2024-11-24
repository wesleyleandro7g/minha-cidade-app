import { YStack, XStack, View, Circle, useTheme } from 'tamagui'

export function StoreCardEmpty() {
  const theme = useTheme()

  return (
    <YStack flex={1} h='$15' bg='$white' br='$6'>
      <View w='100%' h='30%' btlr='$6' btrr='$6' bg={theme.slate.val + '40'} />
      <YStack flex={1} px='$2.5' pb='$2.5' jc='space-between'>
        <Circle
          size='$6'
          borderWidth='$0.5'
          borderColor='$white'
          mt='$-6'
          bg={theme.slate.val}
        />
        <YStack gap='$2'>
          <View br='$6' w='75%' h='$1' bg={`${theme.slate.val}70`} />
          <View br='$6' w='50%' h='$0.75' bg={`${theme.slate.val}80`} />
        </YStack>
        <XStack flexWrap='wrap' gap='$1.5'>
          {[0, 1, 2].map((_, index) => (
            <View
              key={index}
              br='$6'
              w={index === 0 ? '50%' : '30%'}
              h='$1'
              bg={`${theme.slate.val}30`}
            />
          ))}
        </XStack>
      </YStack>
    </YStack>
  )
}
