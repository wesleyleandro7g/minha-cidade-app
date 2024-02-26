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
  id?: string
  name?: string
}

type CategoryType = {
  id?: string
  name?: string
}

type ContextProps = {
  selectedCity: CityType
  setSelectedCity: Dispatch<SetStateAction<CityType>>
  selectedCategory: CityType
  setSelectedCategory: Dispatch<SetStateAction<CityType>>
}

export const AppContext = createContext<ContextProps>({
  selectedCity: {} as CityType,
  setSelectedCity: {} as Dispatch<SetStateAction<CityType>>,
  selectedCategory: {} as CategoryType,
  setSelectedCategory: {} as Dispatch<SetStateAction<CategoryType>>,
})

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [selectedCity, setSelectedCity] = useState<CityType>({} as CityType)
  const [selectedCategory, setSelectedCategory] = useState<CityType>(
    {} as CityType
  )

  async function getLocationData() {
    try {
      const jsonValue = await AsyncStorage.getItem('current-city')

      if (jsonValue != null) {
        const storedData = JSON.parse(jsonValue) as { id: string; name: string }

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
