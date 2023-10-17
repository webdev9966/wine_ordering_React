import { type IProduct } from '../interface/types'

import burger1 from '../assets/burger/burger1.png'
import burger2 from '../assets/burger/burger2.png'
// import burger3 from '../assets/burger/burger3.png'
import burger4 from '../assets/burger/burger4.png'
// import burger5 from '../assets/burger/burger5.png'
// import burger6 from '../assets/burger/burger6.png'
import burger7 from '../assets/burger/burger7.png'
import burger8 from '../assets/burger/burger8.png'
import burger9 from '../assets/burger/burger9.png'
// import burger10 from '../assets/burger/burger10.png'

import breakfast1 from '../assets/breakfast/breakfast1.png'
import breakfast2 from '../assets/breakfast/breakfast2.png'

import dessert1 from '../assets/dessert/dessert1.png'
import dessert2 from '../assets/dessert/dessert2.png'
import dessert3 from '../assets/dessert/dessert3.png'
import dessert4 from '../assets/dessert/dessert4.png'

import salad1 from '../assets/salad/salad1.png'
import salad2 from '../assets/salad/salad2.png'
import salad3 from '../assets/salad/salad3.png'
import salad4 from '../assets/salad/salad4.png'

import soda1 from '../assets/soda/soda1.png'
import soda2 from '../assets/soda/soda2.png'
import soda3 from '../assets/soda/soda3.png'

export const BURGER: IProduct[] = [
  {
    id: 1,
    name: 'Les Terrasses',
    image: burger1,
    price: 22.00,
    information: 'Made in a light Provençal style, pale in colour and crisp and mineral in character. Light red berries of cranberry and redcurrant and a crisp, refreshing finish.'
  }
]

export const BREAKFAST: IProduct[] = [
  {
    id: 11,
    name: 'Simple Food',
    image: breakfast1,
    price: 13.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 12,
    name: 'Full breakfast',
    image: breakfast2,
    price: 25.00,
    information: 'Lorem ipsum dolor'
  }
]

export const DESSERT: IProduct[] = [
  {
    id: 21,
    name: 'Nutella filled cone',
    image: dessert1,
    price: 5.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 22,
    name: 'Chocolate Brownies',
    image: dessert2,
    price: 7.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 23,
    name: 'Milk shake',
    image: dessert3,
    price: 3.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 24,
    name: 'Chocolate pie',
    image: dessert4,
    price: 10.00,
    information: 'Lorem ipsum dolor'
  }
]

export const SALAD: IProduct[] = [
  {
    id: 31,
    name: 'Alba',
    image: salad1,
    price: 21.00,
    information: 'A zingy sauvignon with signature lime and fresh cut grass flavours. A crisp clean finish rounds the wine off beautifully.'
  },
  {
    id: 32,
    name: 'Crooked Mick',
    image: salad2,
    price: 22.00,
    information: 'Dry but ripe and fruity with rich apricot, pear & citrus notes plus a hint of almond.'
  },
  {
    id: 33,
    name: 'La Delfina',
    image: salad3,
    price: 23.00,
    information: 'Everybody loves Pinot Grigio with its soft texture and pear and nutty aromas. '
  },
  {
    id: 34,
    name: 'Valdepalacios',
    image: salad4,
    price: 27.00,
    information: 'An intense and fruity aroma denotes the youthful exuberance of this Viura. The light and balanced palate is very tasty with greengage and pear fruits.'
  }
]

export const SODA: IProduct[] = [
  {
    id: 41,
    name: 'l’Universelle',
    image: soda1,
    price: 46.00,
    information: 'A family owned champagne house ran by three sisters who each run a separate strand of the business.'
  },
  {
    id: 42,
    name: 'Cuvée Royale',
    image: soda2,
    price: 56.00,
    information: 'A remarkable and noble Champagne house still under family ownership.'
  },
  {
    id: 43,
    name: 'La Delfina',
    image: soda3,
    price: 28.00,
    information: 'Gentle playful bubbles and lemon and pear fruit. Delicious anytime!'
  }
]

export const OURPRODUCTS: IProduct[] = [
  {
    id: 51,
    name: 'Simple Food',
    image: breakfast1,
    price: 13.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 52,
    name: 'Rose Wine',
    image: burger1,
    price: 15.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 53,
    name: 'Orange juice',
    image: soda1,
    price: 3.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 54,
    name: 'Rose Wine',
    image: burger7,
    price: 32.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 55,
    name: 'Chocolate Brownies',
    image: dessert2,
    price: 7.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 56,
    name: 'Milk shake',
    image: dessert3,
    price: 3.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 57,
    name: 'Rose Wine',
    image: burger8,
    price: 25.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 58,
    name: 'Rose Wine',
    image: burger9,
    price: 40.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 59,
    name: 'Rose Wine',
    image: burger4,
    price: 27.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 60,
    name: 'American coffee',
    image: soda3,
    price: 5.00,
    information: 'Lorem ipsum dolor'
  },
  {
    id: 61,
    name: 'Rose Wine',
    image: burger2,
    price: 25.00,
    information: 'Lorem ipsum dolor'
  }
]
