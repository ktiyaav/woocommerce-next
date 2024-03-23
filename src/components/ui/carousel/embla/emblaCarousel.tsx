import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'

type PropType = {
  slides: any[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  console.log(slides)
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item,index) => {
            if(item.image?.src){
                return (
                <div className="embla__slide" key={index}>
                    <div className="group embla__slide__number rounded-lg shadow-md  overflow-hidden bg-cover object-fill h-[200px] md:h-[550px]">
                        <Link href="" className=' w-full group flex justify-center relative overflow-hidden  object-fill bg-cover'>
                            <img className=" w-full rounded-lg overflow-hidden  object-fit bg-cover" src={item.image?.src} alt="" title=""/>
                            <div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                        </Link>
                    </div>
                </div>
                )
            } else {
                return null
            }
        })}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
