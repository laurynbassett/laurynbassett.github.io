import React from 'react'

const Portfolio = () => {
  return (
    <div className='section-portfolio'>
      <div className='header'>Portfolio</div>
      <div className='row'>
        <div className='col left'>
          <div className='text-header left'>
            <h3>Banter Mobile App</h3>
          </div>
          <div className='text-body left'>Capstone Description</div>
        </div>
        <div className='col right'>
          <div className='text-header right'>
            <h3>Graze Mobile App</h3>
          </div>
          <div className='text-body right'>Graze Description</div>
        </div>
      </div>
      <div className='row'>
        <div className='col left'>
          <div className='text-header left'>
            <h3>Grace Shopper Ecommerce Site</h3>
          </div>
          <div className='text-body left'>Grace Shopper Description</div>
        </div>
        <div className='col right'>
          <div className='text-header right'>
            <h3>Orderista Restaurant Mapper</h3>
          </div>
          <div className='text-body right'>Orderista Description</div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
