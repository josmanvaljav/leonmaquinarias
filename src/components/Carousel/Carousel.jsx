import React, { useEffect, useState } from 'react'
import { slidesData } from '../../Static/staticData'
import './carousel.css'
// import { MdChevronLeft } from "react-icons/md"
// import { MdChevronRight } from "react-icons/md"
// import { ChevronLeft, ChevronRight } from 'react-feather'

const Carousel = () => {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== slidesData.length) {
      setSlideIndex(slideIndex + 1)
    } else {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else {
      setSlideIndex(slidesData.length)
    }
  }

  const goToSlide = (slideIndex) => {
    setSlideIndex(slideIndex)
  }

  useEffect(() => {
    setTimeout(() => {
      nextSlide()
    }, 4000);
  })

  return (
    <>
      <div className='container-slider flex'>
        {
          slidesData && slidesData.map((slide) => (
              <div key={slide.index} className={slideIndex === slide.index ? 'slide active-anim' : 'slide'}>
                  <img src={slide.image} alt={slide.name} />
              </div>
          ))
        }
        {/* Buttons */}
        <div className="btn-slide next" onClick={nextSlide}>&#10093;</div>
        <div className="btn-slide prev" onClick={prevSlide}>&#10092;</div>
      </div>
      {/* Dots */}
      <div className='dots-container flex'>
        {
          slidesData && slidesData.map((slide) => (
            <div key={slide.index} 
              className={`dot-container-item flex ${slide.index === slideIndex ? "active" : ""}`}
              onClick={() => goToSlide(slide.index)}
            >&#9865;</div>
          ))
        }
      </div>
    </>
  )
}

export default Carousel