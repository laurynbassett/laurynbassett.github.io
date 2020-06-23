import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = props => {
  return (
    <div className='section-portfolio' ref={props.portfolioRef}>
      <div className='header'>Portfolio</div>
      {/* <div className='subheader'>Click any Project for More Info</div> */}
      <div className='row'>
        <div className='col left'>
          <div className='text-header left'>
            <a href='https://github.com/laurynbassett/banter-app' target='_blank' rel='noopener noreferrer'>
              {/* <Link to='/banter'> */}
              <h3>Banter</h3>
              <div className='subheader'>Mobile App</div>
              {/* </Link> */}
            </a>
          </div>
          <div className='text-body left'>
            <div className='row'>
              <a href='https://github.com/laurynbassett/banter-app' target='_blank' rel='noopener noreferrer'>
                <img src='/images/banter/splash.png' alt='banter-splash' />
                <img src='/images/banter/contacts.gif' alt='banter-contacts' />
                <img src='/images/banter/voice-note.gif' alt='banter-chat' />
              </a>
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
              <a href='https://github.com/laurynbassett/graze-app' target='_blank' rel='noopener noreferrer'>
                <img src='/images/graze/profile.png' alt='graze-profile' />
                <img src='/images/graze/post.gif' alt='graze-edit' />
                <img src='/images/graze/feed.gif' alt='graze-feed' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col left'>
          <div className='text-header left'>
            <a
              href='https://github.com/laurynbassett/grace-shopper-covid-store'
              target='_blank'
              rel='noopener noreferrer'
            >
              {/* <Link to='/grace-shopper'> */}
              <h3>Grace Shopper</h3>
              <div className='subheader'>Ecommerce Site</div>
              {/* </Link> */}
            </a>
          </div>
          <div className='text-body left'>
            <div className='row'>
              <a
                href='https://github.com/laurynbassett/grace-shopper-covid-store'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/images/grace-shopper/home.png' alt='grace-shopper-home' />
              </a>
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
              <a href='https://github.com/laurynbassett/orderista' target='_blank' rel='noopener noreferrer'>
                <img src='/images/orderista/home.png' alt='orderista-home' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
