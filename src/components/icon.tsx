import { icons } from 'lucide-react-native'

type IconName<T extends string> = T extends infer U ? U : never

export type ExtractedIconNames = IconName<keyof typeof icons>

interface IconProps {
  name: ExtractedIconNames
  color?: string
  size?: number
}

export function Icon({ name, color = '#000', size = 24 }: IconProps) {
  const LucideIcon = icons[name]

  return <LucideIcon color={color} size={size} />
}
