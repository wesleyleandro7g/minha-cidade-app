import { config as configBase } from '@tamagui/config'
import { createTamagui, createTokens, createFont } from 'tamagui'
import {
  color as tamaguiColors,
  radius,
  space,
  size,
  zIndex,
} from '@tamagui/themes'

const NunitoFonts = createFont({
  family: 'Nunito',
  size: {
    1: 14,
    2: 16,
    3: 18,
    4: 22,
    5: 28,
    6: 32,
  },
  weight: {
    3: '300',
    4: '400',
    5: '500',
    6: '600',
    7: '700',
  },
  face: {
    300: { normal: 'Nunito_300Light' },
    400: { normal: 'Nunito_400Regular' },
    500: { normal: 'Nunito_500Medium' },
    600: { normal: 'Nunito_600SemiBold' },
    700: { normal: 'Nunito_700Bold' },
  },
})

const tokens = createTokens({
  color: {
    primary: '#F57228',
    orange: '#FF6347',
    black: '#0C0C0C',
    gray: '#121212',
    white: '#F1F0F3',
    slate: '#939697',
    ...tamaguiColors,
  },
  size,
  space,
  radius,
  zIndex,
})

export const config = createTamagui({
  ...configBase,
  tokens,
  defaultFont: 'body',
  fonts: {
    body: NunitoFonts,
    heading: NunitoFonts,
  },
  themes: {
    light: {
      background: tokens.color.white,
    },
    dark: {
      background: tokens.color.black,
    },
  },
})

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
