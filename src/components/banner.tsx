import { View, Image } from 'tamagui'

const image = require('@/assets/images/ads-001.png')

export function Banner() {
  return (
    <View w='100%' h='$16' p='$3'>
      <Image
        source={{ uri: image }}
        w='100%'
        h='100%'
        br='$6'
        resizeMode='cover'
      />
    </View>
  )
}
