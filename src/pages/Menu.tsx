import React, { useState, useEffect } from 'react'
import IconBurger from '../assets/icons/icn-burger.png'
import IconSalad from '../assets/icons/icn-salad.png'
import IconSoda from '../assets/icons/icn-soda.png'
import IconDessert from '../assets/icons/icn-dessert.png'
import IconBreakfast from '../assets/icons/icn-breakfast.png'
import { Types } from '../components/Types'
import { Card } from '../components/Card'
import { BURGER, BREAKFAST, DESSERT, SALAD, SODA } from '../data/data'
import { type ProductType, type IProduct } from '../interface/types'

interface IIconTypes {
  image: string
  name: ProductType
}

const IconTypes: IIconTypes[] = [
  {
    image: IconBurger,
    name: 'Rose'
  },
  {
    image: IconSalad,
    name: 'White'
  },
  {
    image: IconSoda,
    name: 'Sparkling'
  },
  {
    image: IconDessert,
    name: 'Dessert'
  },
  {
    image: IconBreakfast,
    name: 'Riesling'
  }
]

const enum PRODUCTS_ENUM {
  BURGER = 'Rose',
  SALAD = 'White',
  SODA = 'Sparkling',
  DESSERT = 'Dessert',
  BREAKFAST = 'Riesling'
}

export const Menu: React.FC = () => {
  const [type, setType] = useState<ProductType>('Rose')
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(BURGER)
  useEffect(() => {
    if (type === PRODUCTS_ENUM.BURGER) {
      setFilteredProducts(BURGER)
    } else if (type === PRODUCTS_ENUM.BREAKFAST) {
      setFilteredProducts(BREAKFAST)
    } else if (type === PRODUCTS_ENUM.DESSERT) {
      setFilteredProducts(DESSERT)
    } else if (type === PRODUCTS_ENUM.SALAD) {
      setFilteredProducts(SALAD)
    } else if (type === PRODUCTS_ENUM.SODA) {
      setFilteredProducts(SODA)
    }
  }, [type])
  return (
    <section className='menu'>
      <h2 className='subtitle'>Our Wines</h2>
      <div className='menu__types'>
        {
          IconTypes.map((type, index) => (
            <Types key={index} image={type.image} name={type.name} setType={setType} />
          ))
        }
      </div>
      <div className='menu__container'>
        {
          filteredProducts.map((product) => (
            <Card key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} information={product.information} />
          ))
        }
    </div>
    </section>
  )
}
