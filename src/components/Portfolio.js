import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = props => {
  return (
    <div className='section-portfolio' ref={props.portfolioRef}>
      <div className='header'>Portfolio</div>
      <div className='row'>
        <div className='col left'>
          <div className='text-header left'>
            <a href='https://github.com/fsa-capstone-team-red/banter' target='_blank' rel='noopener noreferrer'>
              {/* <Link to='/banter'> */}
              <h3>Banter</h3>
              <div className='subheader'>Mobile App</div>
              {/* </Link> */}
            </a>
          </div>
          <div className='text-body left'>
            <div className='row'>
              <img src='/images/banter/splash.png' alt='banter-splash' />
              <img src='/images/banter/contacts.png' alt='banter-contacts' />
              <img src='/images/banter/chats.png' alt='banter-chats' />
            </div>
          </div>
        </div>
        <div className='col right'>
          <div className='text-header right'>
            <a href='https://github.com/laurynbassett/graze-app' target='_blank' rel='noopener noreferrer'>
              {/* <Link to='/graze'> */}
              <h3>Graze</h3>
              <div className='subheader'>Mobile App</div>
              {/* </Link> */}
            </a>
          </div>
          <div className='text-body right'>
            <div className='row'>
              <img src='/images/graze/edit.png' alt='graze-edit' />
              <img src='/images/graze/profile.png' alt='graze-profile' />
              <img src='/images/graze/feed.png' alt='graze-feed' />
            </div>
          </div>
        </div>
        <div className='col left'>
          <div className='text-header left'>
            <a href='https://github.com/sjli-grace-shopper/covid-store' target='_blank' rel='noopener noreferrer'>
              {/* <Link to='/grace-shopper'> */}
              <h3>Grace Shopper</h3>
              <div className='subheader'>Ecommerce Site</div>
              {/* </Link> */}
            </a>
          </div>
          <div className='text-body left'>
            <div className='row'>
              <img src='/images/grace-shopper/home.png' alt='grace-shopper-home' />
            </div>
          </div>
        </div>
        <div className='col right'>
          <div className='text-header right'>
            <a href='https://github.com/laurynbassett/orderista' target='_blank' rel='noopener noreferrer'>
              {/* <Link to='/orderista'> */}
              <h3>Orderista</h3>
              <div className='subheader'>Restaurant Site</div>
              {/* </Link> */}
            </a>
          </div>
          <div className='text-body right'>
            <div className='row'>
              <img src='/images/orderista/home.png' alt='orderista-home' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
