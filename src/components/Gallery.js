import React from 'react'

const Gallery = props => {
  const { images, toggleLightbox } = props

  return (
    <div className='gallery'>
      {images.map(({ src, alt }, j) => (
        <div className='image-container' onClick={toggleLightbox} key={alt}>
          <img alt={alt} src={src} className='image' />
        </div>
      ))}
    </div>
  )
}

export default Gallery
