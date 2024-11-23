import { supabase } from '@/db/supabase'
import { useQuery } from '@tanstack/react-query'

type CategoryType = {
  id: number
  name: string
  icon_name: string
}

export const useCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase.from('categories').select('*')

      if (error) {
        throw error
      }

      return data as CategoryType[]
    },
  })
