import React from 'react'
import burger from '../assets/burger/burger5.png'
import Atropos from 'atropos/react'
import { OurProducts } from '../layout/OurProducts'
import { Menu } from './Menu'

export const Home: React.FC = () => {
  return (
    <>
      <div className='home'>
        <div className='home__info'>
          <h1 className='home__info__title'>
            The <span> Greatest Wine </span>, For <span>Horse Racing</span>
          </h1>
          <p className='home__info__paragraph'>
           Our website features a collection of premium wines known for their quality, taste, and ability to complement the thrilling atmosphere of horse racing. Whether you are a seasoned wine connoisseur or someone who simply appreciates a good glass of wine, we offer recommendations and information to help you discover the perfect wine for your next horse racing event.
          </p>
          <a href='#' className='home__info__cta'>
            Order Now
          </a>
        </div>
        <div className='home__image'>
          <Atropos
            shadow={false}
            style={{ width: '60%', height: 'auto', margin: 'auto' }}
          >
            <img src={burger} alt="Burger Burger Time" loading='lazy' className='home__image-img'/>
          </Atropos>
          <div className='home__image-effect' />
        </div>
      </div>
      <OurProducts />
      <Menu />
    </>
  )
}
