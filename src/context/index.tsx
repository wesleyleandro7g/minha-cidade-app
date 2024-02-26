import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

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
