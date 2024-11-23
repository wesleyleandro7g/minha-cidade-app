import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type CityType = {
  id?: number
  name?: string
}

type CategoryType = {
  id?: number
  name?: string
}

type ContextProps = {
  selectedCity: CityType
  setSelectedCity: Dispatch<SetStateAction<CityType>>
  selectedCategory: CategoryType
  setSelectedCategory: Dispatch<SetStateAction<CategoryType>>
}

export const AppContext = createContext<ContextProps>({
  selectedCity: {} as CityType,
  setSelectedCity: {} as Dispatch<SetStateAction<CityType>>,
  selectedCategory: {} as CategoryType,
  setSelectedCategory: {} as Dispatch<SetStateAction<CategoryType>>,
})

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [selectedCity, setSelectedCity] = useState<CityType>({} as CityType)
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(
    {} as CategoryType
  )

  async function getLocationData() {
    try {
      const jsonValue = await AsyncStorage.getItem('current-city')

      if (jsonValue != null) {
        const storedData = JSON.parse(jsonValue) as { id: number; name: string }

        setSelectedCity({
          id: storedData.id,
          name: storedData.name,
        })
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getLocationData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
