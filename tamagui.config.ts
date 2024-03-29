import { config as configBase } from '@tamagui/config'
import { config as configV2 } from '@tamagui/config/v2'
import { createTamagui, createTokens, createFont } from 'tamagui'
import {
  color as tamaguiColors,
  radius,
  space,
  size,
  zIndex,
} from '@tamagui/themes'

const nunitoFace = {
  // normal: { normal: 'Nunito_400Regular' },
  // bold: { normal: 'Nunito_700Bold' },
  300: { normal: 'Nunito_300Light' },
  400: { normal: 'Nunito_400Regular' },
  500: { normal: 'Nunito_500Medium' },
  600: { normal: 'Nunito_600SemiBold' },
  700: { normal: 'Nunito_700Bold' },
}

const headingFont = createFont({
  size: configV2.fonts.heading.size,
  lineHeight: configV2.fonts.heading.lineHeight,
  weight: configV2.fonts.heading.weight,
  letterSpacing: configV2.fonts.heading.letterSpacing,
  face: nunitoFace,
})

const bodyFont = createFont({
  size: configV2.fonts.body.size,
  lineHeight: configV2.fonts.body.lineHeight,
  weight: configV2.fonts.body.weight,
  letterSpacing: configV2.fonts.body.letterSpacing,
  face: nunitoFace,
})

const tokens = createTokens({
  color: {
    primary: '#F57228',
    orange: '#FF6347',
    black: '#0C0C0C',
    gray: '#121212',
    white: '#ffffff',
    slate: '#939697',
    background: '#F2F2F2',
    background2: '#E6E6E6',
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
  // defaultFont: 'body',
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes: {
    light: {
      background: tokens.color.background,
      background2: tokens.color.background2,
      primary: tokens.color.primary,
      slate: tokens.color.slate,
      gray: tokens.color.gray,
      white: tokens.color.white,
    },
    dark: {
      background: tokens.color.black,
      background2: tokens.color.gray10Dark,
      primary: tokens.color.primary,
      slate: tokens.color.slate,
      gray: tokens.color.gray,
      white: tokens.color.white,
    },
  },
})

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
