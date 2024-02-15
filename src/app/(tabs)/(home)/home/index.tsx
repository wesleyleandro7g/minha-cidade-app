import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'
import { View, Text, Button } from 'tamagui'

export default function Home() {
  return (
    <View flex={1} bg='$background'>
      <View w='full' flexDirection='row' jc='space-between'>
        <Text>Minha Cidade</Text>
        <Ionicons name='search' size={20} />
      </View>
    </View>
  )
}
