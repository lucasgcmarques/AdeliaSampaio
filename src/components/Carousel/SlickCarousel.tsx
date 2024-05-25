import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gallery2018 } from '../../utils/linha/gallery2018'

const images = gallery2018

export const SlickCarousel = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const nextSlide = () => {
    setCurrentIndex([
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
      1,
    ])
  }

  const prevSlide = () => {
    setCurrentIndex([
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
      -1,
    ])
  }

  return (
    <div className="carousel">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          style={{ height: '300px', width: 'auto', margin: '0 auto' }}
        />
      </AnimatePresence>
      <div className="controls">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  )
}
