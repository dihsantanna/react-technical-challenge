'use client';

import { api } from "@/libs/axios/api"
import { CategoryType } from "@/types/category-type"
import { ColorType } from "@/types/color-type"
import { FiltersTypes } from "@/types/filters-types";
import { useQuery } from "@tanstack/react-query"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

const getCategories = async () => {
  const { data: { data } } = await api.get('/categories')
  return data as CategoryType[]
}

const getColors = async () => {
  const { data: { data } } = await api.get('/colors')
  return data as ColorType[]
}

const parseCategories = ({id, name}: CategoryType) => {
  return {
    label: name,
    value: id
  }
}

const parseColors = ({id, name}: ColorType) => {
  return {
    label: name,
    value: id
  }
}

const getFilters = async () => {
  const [categories, colors] = await Promise.all([getCategories(), getColors()])

  const prices = {
    name: 'Preço',
    options: [
    { label: 'R$ 0,01 - R$ 50,00', value: '0.01-50' },
    { label: 'R$ 50,01 - R$ 100,00', value: '50.01-100' },
    { label: 'R$ 100,01 - R$ 500,00', value: '100.01-500' },
  ]
  }

  return {
    categories: {
      name: 'Categoria',
      options: categories.map(parseCategories)
    },
    colors: {
      name: 'Cor',
      options: colors.map(parseColors)
    },
    prices,
  }
}

export const useFilters = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const { data: filters, isLoading } = useQuery(['categories'], {
    queryFn: async () => {
      return await getFilters()
    },
    initialData: {
      categories: {
        name: 'Categoria',
        options: []
      },
      colors: {
        name: 'Cor',
        options: []
      },
      prices: {
        name: 'Preço',
        options: []
      }
    }
  })

  const onChangeFilter = useCallback((type: FiltersTypes, value: string | number) => {
    const params = new URLSearchParams(searchParams as unknown as URLSearchParams)

    let filter = JSON.parse(params.get(type) || '[]')

    const valueExist = filter.includes(value.toString())

    if (valueExist) {
      filter = filter.filter((item: string) => item !== value.toString())
    } else {
      filter.push(value.toString());
    }

    if (filter.length > 0) {
      params.set(type, JSON.stringify(filter))
    } else {
      params.delete(type)
    }

    router.push(`${pathname}${params.toString().length ? `?${params.toString()}` : ''}`, {

    })
  }, [searchParams])

  const clearAllFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams as unknown as URLSearchParams)
    params.delete('categories')
    params.delete('colors')
    params.delete('prices')
    router.push(`${pathname}${params.toString().length ? `?${params.toString()}` : ''}`, {
      scroll: false
    })
  }, [searchParams])

  const selectedFilters = useMemo(() => {
    const params = new URLSearchParams(searchParams as unknown as URLSearchParams)
    return {
      [FiltersTypes.CATEGORIES]: (JSON.parse(params.get('categories') || '[]')) as string[],
      [FiltersTypes.COLORS]: (JSON.parse(params.get('colors') || '[]')) as string[],
      [FiltersTypes.PRICES]: (JSON.parse(params.get('prices') || '[]')) as string[],
    }
  }, [searchParams])

  return (
    {
      filters,
      isLoading,
      onChangeFilter,
      selectedFilters,
      clearAllFilters
    }
  )
}
