import { XStack, Text } from 'tamagui'

export function ErrorComponent() {
  return (
    <XStack w='100%' jc='center' ai='center'>
      <Text fontSize='$6' fontWeight='700' color='$gray' textAlign='center'>
        Desculpe, houve um erro ao carregar os dados. Tente novamente mais
        tarde.
      </Text>
    </XStack>
  )
}
