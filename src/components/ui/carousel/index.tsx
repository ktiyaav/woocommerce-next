"use client"
import React from 'react'
import useEmblaCarousel , { UseEmblaCarouselType } from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from './emblaCarousel'
import './main.css';

export function App() {

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    const [emblaRef] = useEmblaCarousel()
    return (
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    )
}