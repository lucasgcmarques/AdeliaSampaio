import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
interface CarouselProps {
  gallery: string[]
}

export const Carousel = ({ gallery }: CarouselProps) => {
  const carousel = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  return (
    <motion.div
      ref={carousel}
      className="cursor-grab overflow-hidden my-6"
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        className="flex items-center overflow-hidden min-w-max"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {gallery.map((image) => (
          <motion.div className="p-2 h-full" key={image}>
            <img
              src={image}
              alt="Imagem"
              className="pointer-events-none h-80 w-auto"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
