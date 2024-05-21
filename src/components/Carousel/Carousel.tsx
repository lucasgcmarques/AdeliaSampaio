import {useState, useEffect, useRef} from 'react'
import { motion } from "framer-motion"

interface CarouselProps {
  images: string[];
}

export const Carousel = ({images}: CarouselProps) => {
  const carousel = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] =useState(0)
  useEffect(() => { 
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  return (
    <div>
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing"}}>
        <motion.div 
          className="carousel-inner"
          drag="x"
          dragConstraints={{ right: 0, left: - width}}

        >
          {images.map(image => (
            <motion.div className="carousel-item" key={image}>
              <img src={image} alt="Imagem"/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}