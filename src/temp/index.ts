import { type ExtractedIconNames } from '@/components/icon'

type CategoriesType = {
  id: string
  name: string
  iconName: ExtractedIconNames
}

export const storesData = [
  {
    id: '1',
    name: 'TecPort Telecom',
    description: 'A melhor internet da região na sua casa',
    logo: require('@/assets/images/tec-logo.png'),
    bannerColor: '#000061',
    categories: [
      { id: '1', name: 'supermercado', iconName: 'ShoppingCart' },
      { id: '2', name: 'sorveteria', iconName: 'IceCream' },
      { id: '3', name: 'pizzaria', iconName: 'Pizza' },
    ],
  },
  {
    id: '2',
    name: 'Extra Bom Supermercado',
    description: 'A melhor internet da região na sua casa',
    logo: require('@/assets/images/extra-logo.png'),
    bannerColor: '#EE2D31',
    categories: [
      { id: '9', name: 'advogado', iconName: 'ShoppingCart' },
      { id: '10', name: 'moto-taxi', iconName: 'ShoppingCart' },
      { id: '11', name: 'vidraçaria', iconName: 'ShoppingCart' },
      { id: '12', name: 'pedreiro', iconName: 'ShoppingCart' },
    ],
  },
  {
    id: '3',
    name: 'Extra Bom Supermercado',
    description: 'A melhor internet da região na sua casa',
    logo: require('@/assets/images/extra-logo.png'),
    bannerColor: '#cc33ff',
    categories: [
      { id: '9', name: 'advogado', iconName: 'ShoppingCart' },
      { id: '10', name: 'moto-taxi', iconName: 'ShoppingCart' },
      { id: '11', name: 'vidraçaria', iconName: 'ShoppingCart' },
      { id: '12', name: 'pedreiro', iconName: 'ShoppingCart' },
    ],
  },
  {
    id: '4',
    name: 'TecPort Telecom',
    description: 'A melhor internet da região na sua casa',
    logo: require('@/assets/images/tec-logo.png'),
    bannerColor: '#ff6600',
    categories: [
      { id: '1', name: 'supermercado', iconName: 'ShoppingCart' },
      { id: '2', name: 'sorveteria', iconName: 'IceCream' },
      { id: '3', name: 'pizzaria', iconName: 'Pizza' },
    ],
  },
  {
    id: '5',
    name: 'TecPort Telecom',
    description: 'A melhor internet da região na sua casa',
    logo: require('@/assets/images/tec-logo.png'),
    bannerColor: '#66ff99',
    categories: [
      { id: '1', name: 'supermercado', iconName: 'ShoppingCart' },
      { id: '2', name: 'sorveteria', iconName: 'IceCream' },
      { id: '3', name: 'pizzaria', iconName: 'Pizza' },
    ],
  },
  {
    id: '6',
    name: 'Extra Bom Supermercado',
    description: 'A melhor internet da região na sua casa',
    logo: require('@/assets/images/extra-logo.png'),
    bannerColor: '#339933',
    categories: [
      { id: '9', name: 'advogado', iconName: 'ShoppingCart' },
      { id: '10', name: 'moto-taxi', iconName: 'ShoppingCart' },
      { id: '11', name: 'vidraçaria', iconName: 'ShoppingCart' },
      { id: '12', name: 'pedreiro', iconName: 'ShoppingCart' },
    ],
  },
  {
    id: '7',
    name: 'TecPort Telecom',
    description: 'A melhor internet da região na sua casa',
    logo: require('@/assets/images/tec-logo.png'),
    bannerColor: '#cc3300',
    categories: [
      { id: '1', name: 'supermercado', iconName: 'ShoppingCart' },
      { id: '2', name: 'sorveteria', iconName: 'IceCream' },
      { id: '3', name: 'pizzaria', iconName: 'Pizza' },
    ],
  },
  {
    id: '8',
    name: 'Extra Bom Supermercado',
    description: 'A melhor internet da região na sua casa',
    logo: require('@/assets/images/extra-logo.png'),
    bannerColor: '#006699',
    categories: [
      { id: '9', name: 'advogado', iconName: 'ShoppingCart' },
      { id: '10', name: 'moto-taxi', iconName: 'ShoppingCart' },
      { id: '11', name: 'vidraçaria', iconName: 'ShoppingCart' },
      { id: '12', name: 'pedreiro', iconName: 'ShoppingCart' },
    ],
  },
]

export const cities = [
  { id: '1', name: 'Porteirinha', slug: 'porteirinha' },
  { id: '2', name: 'Montes Claros', slug: 'montes-claros' },
  { id: '3', name: 'Belo Horizonte', slug: 'belo-horizonte' },
  { id: '4', name: 'Rio de Janeiro', slug: 'rio-de-janeiro' },
  { id: '5', name: 'São Paulo', slug: 'sao-paulo' },
  { id: '6', name: 'Brasília', slug: 'brasilia' },
  { id: '7', name: 'Salvador', slug: 'salvador' },
  { id: '8', name: 'Fortaleza', slug: 'fortaleza' },
  { id: '9', name: 'Recife', slug: 'recife' },
  { id: '10', name: 'Curitiba', slug: 'curitiba' },
  { id: '11', name: 'Manaus', slug: 'manaus' },
  { id: '12', name: 'Porto Alegre', slug: 'porto-alegre' },
  { id: '13', name: 'Goiânia', slug: 'goiania' },
  { id: '14', name: 'Belém', slug: 'belem' },
  { id: '15', name: 'Campinas', slug: 'campinas' },
  { id: '16', name: 'São Luís', slug: 'sao-luis' },
  { id: '17', name: 'Natal', slug: 'natal' },
  { id: '18', name: 'Teresina', slug: 'teresina' },
  { id: '19', name: 'João Pessoa', slug: 'joao-pessoa' },
  { id: '20', name: 'Florianópolis', slug: 'florianopolis' },
]

export const categories: CategoriesType[] = [
  { id: '1', name: 'supermercado', iconName: 'ShoppingCart' },
  { id: '2', name: 'sorveteria', iconName: 'IceCream' },
  { id: '3', name: 'pizzaria', iconName: 'Pizza' },
  { id: '4', name: 'restaurante', iconName: 'UtensilsCrossed' },
  { id: '5', name: 'hotel', iconName: 'BedDouble' },
  { id: '7', name: 'roupas', iconName: 'Shirt' },
  { id: '8', name: 'informática', iconName: 'ShoppingCart' },
  { id: '9', name: 'advogado', iconName: 'ShoppingCart' },
  { id: '10', name: 'moto-taxi', iconName: 'ShoppingCart' },
  { id: '11', name: 'vidraçaria', iconName: 'ShoppingCart' },
  { id: '12', name: 'pedreiro', iconName: 'ShoppingCart' },
  { id: '13', name: 'Aluguel de roupas', iconName: 'ShoppingCart' },
  {
    id: '14',
    name: 'Professor particular',
    iconName: 'ShoppingCart',
  },
  { id: '15', name: 'pedreiro', iconName: 'ShoppingCart' },
  { id: '16', name: 'pedreiro', iconName: 'ShoppingCart' },
  { id: '17', name: 'pedreiro', iconName: 'ShoppingCart' },
  { id: '18', name: 'pedreiro', iconName: 'ShoppingCart' },
]
