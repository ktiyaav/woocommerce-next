import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from './emblaCarousel'
import './main.css';

const Carousel = ({
  slides
}: {
  slides : any[]
}) => {
  console.log(slides)
  const OPTIONS: EmblaOptionsType = { loop: true }
    return (
      <EmblaCarousel slides={slides} options={OPTIONS} />
    )
}

export default Carousel;