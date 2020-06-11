import React, { Component } from 'react'
import FsLightbox from 'fslightbox-react'
import { GitHub } from '@material-ui/icons'

const images = [
  { src: '/images/banter/splash.png', alt: 'splash' },
  { src: '/images/banter/contacts.png', alt: 'contacts' },
  { src: '/images/banter/new-chat.png', alt: 'new-chat' },
  { src: '/images/banter/chats.png', alt: 'chats' },
  { src: '/images/banter/translation.png', alt: 'translation' },
  { src: '/images/banter/voice.png', alt: 'voice' }
]

const lightboxImages = [
  '/images/banter/splash.png',
  '/images/banter/contacts.png',
  '/images/banter/new-chat.png',
  '/images/banter/chats.png',
  '/images/banter/translation.png',
  '/images/banter/voice.png'
]

export default class Banter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
      lightboxIsOpen: false
    }
    this.toggleLightbox = this.toggleLightbox.bind(this)
  }

  toggleLightbox = selectedIndex => {
    this.setState({ lightboxIsOpen: !this.state.lightboxIsOpen, selectedIndex })
  }

  render() {
    const { selectedIndex, lightboxIsOpen } = this.state
    console.log('WINDOW', window)
    return (
      <div className='project-container'>
        <a href='https://github.com/laurynbassett/banter-app' target='_blank' rel='noopener noreferrer'>
          <GitHub />
        </a>
        <Gallery>
          {images.map(({ src, alt }, j) => (
            <Image onClick={() => this.toggleLightbox(j)} key={alt}>
              <img alt={alt} src={src} className='image' />
            </Image>
          ))}
        </Gallery>
        <FsLightbox toggler={lightboxIsOpen} sources={lightboxImages} />
        {/* <ModalGateway>
          {lightboxIsOpen ? (
            <Modal onClose={this.toggleLightbox}>
              <Carousel views={images} currentIndex={selectedIndex} styles={customStyles} />
            </Modal>
          ) : null}
        </ModalGateway> */}
      </div>
    )
  }
}

const Gallery = props => <div className='gallery' {...props} />

const Image = props => <div className='image-container' {...props} />

const customStyles = {
  // header: (base, state) => ({
  //   ...base,
  //   borderBottom: '1px dotted pink',
  //   color: state.isFullscreen ? 'red' : 'blue',
  //   padding: 20
  // }),
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
