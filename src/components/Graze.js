import React, { Component } from 'react'
import { GitHub } from '@material-ui/icons'
import { Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import FsLightbox from 'fslightbox-react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Gallery } from '.'

const useStyles = theme => ({
  root: {
    margin: 20,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white'
  }
})

const techStack = [
  { src: '/images/tech-stack/react-native.png', alt: 'react-native' },
  { src: '/images/tech-stack/expo.png', alt: 'expo' },
  { src: '/images/tech-stack/firebase.png', alt: 'firebase' },
  { src: '/images/tech-stack/react-nav.png', alt: 'react-nav' },
  { src: '/images/tech-stack/native-elements-1.png', alt: 'native-elements' }
]

const galleryImages = [
  { src: '/images/graze/login.png', alt: 'login' },
  { src: '/images/graze/feed.png', alt: 'feed' },
  { src: '/images/graze/explore.png', alt: 'explore' },
  { src: '/images/graze/profile.png', alt: 'profile' },
  { src: '/images/graze/select.png', alt: 'select' },
  { src: '/images/graze/edit.png', alt: 'edit' },
  { src: '/images/graze/settings.png', alt: 'settings' }
]

const lightboxImages = [
  '/images/graze/login.png',
  '/images/graze/feed.png',
  '/images/graze/explore.png',
  '/images/graze/profile.png',
  '/images/graze/select.png',
  '/images/graze/edit.png',
  '/images/graze/settings.png'
]

const galleryGifs = [
  {
    src: '/images/graze/feed.gif',
    alt: 'feed'
  },
  {
    src: '/images/graze/explore.gif',
    alt: 'explore'
  },
  {
    src: '/images/graze/post.gif',
    alt: 'post'
  },
  {
    src: '/images/graze/settings.gif',
    alt: 'settings'
  }
]

const lightboxGifs = [
  '/images/graze/feed-1.gif',
  '/images/graze/explore-1.gif',
  '/images/graze/post-1.gif',
  '/images/graze/settings-1.gif'
]

class Graze extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifSlide: 0,
      gifLightboxIsOpen: false,
      imgSlide: 0,
      imgLightboxIsOpen: false
    }
    this.toggleGifLightbox = this.toggleGifLightbox.bind(this)
    this.toggleImgLightbox = this.toggleImgLightbox.bind(this)
  }

  toggleGifLightbox = gifSlide => {
    this.setState({ gifLightboxIsOpen: !this.state.gifLightboxIsOpen, gifSlide })
  }

  toggleImgLightbox = imgSlide => {
    this.setState({ imgLightboxIsOpen: !this.state.imgLightboxIsOpen, imgSlide })
  }

  render() {
    const { gifSlide, gifLightboxIsOpen, imgSlide, imgLightboxIsOpen } = this.state
    const { classes } = this.props

    return (
      <div className='project-container'>
        {/* <div className='row'> */}
        <div className='header'>Graze</div>
        {/* </div> */}
        <div className='row'>
          <div className='column'>
            {/* <Gallery images={galleryImages} toggleLightbox={this.toggleImgLightbox} /> */}
            <Carousel showArrows={true}>
              {galleryImages.map(({ src, alt }, idx) => (
                <div className='' onClick={() => this.toggleImgLightbox(idx + 1)} key={alt}>
                  <img alt={alt} src={src} />
                </div>
              ))}
            </Carousel>
            <FsLightbox toggler={imgLightboxIsOpen} slide={imgSlide} sources={lightboxImages} />
            <div className='filled gray-fill'>
              <div className='subheader gray'>Data Management</div>
              <div className='text'>
                At Fullstack, we focused on Express, Sequelize, and Postgres for the backend of our projects so I wanted
                to work with a NoSQL database for Graze.
              </div>
              <div className='text'>
                I used Firebase, Google’s mobile and web app development platform, for all of the app's data management.
                For authenticating users, Firebase Authentication provides a number of out-of-the-box integrations with
                popular providers and uses a token-based auth system. For user data, including profile info and posts, I
                used Cloud Firestore, a NoSQL document database, paired with Cloud Storage, to store user photos.
              </div>
            </div>
          </div>
          <div className='column filled green-fill padded'>
            <div className='subheader white'>Overview</div>

            <div className='text'>
              Graze is the product of a 3-day solo hackathon at Fullstack Academy. I wanted to extend my React
              experience into mobile apps so I decided to build an Instagram clone with React Native.
            </div>
            <div className='text'>
              For its ease-of-use and quick setup, I used Expo, a toolchain built around React Native that helps with
              developing native iOS and Android projects with JavaScript and React.
            </div>
            <Divider className={classes.root} />

            <div className='subheader white'>Tech Stack</div>
            <div className='text '>
              React Native • Expo • React Navigation<br />
              Firebase Firestore • Firebase Authentication<br />
              Cloud Storage • React Native Elements
            </div>
            <div className='tech-stack'>{techStack.map(i => <img src={i.src} alt={i.alt} />)}</div>
            <Divider className={classes.root} />
            <a className='icon' href='https://github.com/laurynbassett/graze' target='_blank' rel='noopener noreferrer'>
              <GitHub />
            </a>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <div className='filled gray-fill'>
              <div className='subheader white'>Navigation</div>
              <div className='text'>
                I used the React Navigation module to push screens in the app. At the root, the app consists of two
                flows, the authentication flow and the app flow. These flows are conditionally rendered based on whether
                a user is logged in or not.
              </div>{' '}
              <div className='text'>
                If a user is not logged in, they are shown the Authentication stack containing the Login and Sign Up
                screens. If a user is logged in, they are directed to the Home Tab, where they can then navigate to
                different tabs, such as the Post tab and the Profile tab.
              </div>
            </div>
            <br />
            <div className='filled gray-fill'>
              <div className='subheader white'>Posting Media</div>
              <div className='text'>
                The Post tab consists of two stack screens: Select, where users can choose an image, either through
                their camera roll or by taking a photo, and Edit, where users add a caption and post their image to
                their profile.
              </div>
              <div className='text'>
                I used <code>Expo.Permissions</code> API, which triggers a modal that asks users for permission to use{' '}
                <code>CAMERA</code> or <code>CAMERA_ROLL</code>. After the user selects the image they want to share,
                they are pushed to the EditPost screen, where they enter a caption.
              </div>
            </div>
          </div>
          <div className='column gallery'>
            <Gallery images={galleryGifs} toggleLightbox={this.toggleGifLightbox} />
            <FsLightbox toggler={gifLightboxIsOpen} slide={gifSlide} sources={lightboxGifs} />
          </div>
        </div>

        <div className='row' />
      </div>
    )
  }
}

export default withStyles(useStyles)(Graze)

const customStyles = {
  container: () => ({
    justifyContent: 'center',
    alignItems: 'center'
  }),
  view: () => ({
    // none of react-images styles are passed to <View />
    height: window.innerHeight / 2,
    marginLeft: window.innerWidth * 0.4
  }),
  footer: (base, state) => {
    const opacity = state.interactionIsIdle ? 0 : 1
    const transition = 'opacity 300ms'

    return { ...base, opacity, transition }
  }
}
