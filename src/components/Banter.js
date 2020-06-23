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

const galleryImages = [
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

const galleryGifs = [
  { src: '/images/banter/add-contact.gif', alt: 'add-contact' },
  { src: '/images/banter/contacts.gif', alt: 'contacts' },
  { src: '/images/banter/voice-note.gif', alt: 'voice-note' }
]

const lightboxGifs = [
  '/images/banter/add-contact-1.gif',
  '/images/banter/contacts-1.gif',
  '/images/banter/voice-note-1.gif'
]

class Banter extends Component {
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
        <div className='header'>Banter</div>
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
            <div className='video'>
              <iframe
                width='100%'
                height='168%'
                src='https://www.youtube.com/embed/TDe3Sa-4f2I'
                borderRa
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
          <div className='column filled green-fill'>
            <div className='subheader white'>Overview</div>

            <div className='text'>
              Banter is a React Native app with realtime text and voice messaging and translation capabilities.
            </div>
            <div className='text'>
              This app was built with two teammates for our final Capstone project at Fullstack Academy. We built Banter
              with React Native and Expo, a framework and platform built around React Native that helps build native iOS
              and Android projects using JavaScript and React.
            </div>
            <div className='text'>
              To manage our data, we chose to use the Firebase JavaScript SDK, which supports Authentication, Database,
              Storage, and Functions on React Native. We leveraged the Firebase Realtime Database to store all our user
              and chat data in a flattened data structure. This allowed for data to be efficiently downloaded in
              separate calls, as opposed to a nested structure, where iterating children requires potentially
              downloading hundreds of megabytes of data.
            </div>
            <Divider className={classes.root} />

            <div className='subheader white'>Tech Stack</div>
            <div className='text'>
              React Native ∙ Redux • Expo • React Navigation<br />
              Firebase Realtime Database • Firebase Authentication<br />Firebase Storage • Cloud Functions<br />
              Cloud Translate API • Cloud Speech-to-Text API
            </div>
            <Divider className={classes.root} />
            <a
              className='icon'
              href='https://github.com/laurynbassett/banter-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHub />
            </a>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <div className='filled gray-fill'>
              <div className='subheader gray'>Data Management</div>
              <div className='text'>
                App data was managed in Firebase using the Realtime Database and Cloud Storage. To maximize data
                retrieval efficiency and simplify queries, we used a flattened data structure, which splits data into
                separate paths, as opposed to nesting data. We stored data under three main nodes, users, messages, and
                chats.
              </div>
            </div>
            <div className='filled gray-fill'>
              <h3>Screens</h3>
              <div className='text'>
                My focus was centred around the Single Chat, Contacts, and Add Contact screens. Each screen was
                connected to our Redux store, allowing them to access/extract state data and dispatch actions at the
                component level.
              </div>

              <h4>Single Chat Screen</h4>
              <div className='text'>
                The Single Chat Screen displayed one-to-one chats between the current user and a single contact. A new
                chat was stored in our Realtime Database once the first message was sent, which would dispatch a
                postMessage function that set off a chain of events, including creating a new chat ID and updating the
                three main database nodes. Existing chat messages were fetched in groups of 25 at a time to limit the
                amount of downloaded data. On fetch, a child-added event listener was set on the specific chat path
                under the messages node, which is triggered once for each existing child and then again every time a new
                child is added to the specified path, updating the Single Chat screen in realtime.
              </div>
              <div className='text'>
                I also added voice recording and voice-to-text translation functionality within the chat screen. To
                handle the recording and audio playback I used the AV package from the Expo library. Once a voice note
                was sent, I stored the local audio in Cloud Storage and passed the download URL to a Cloud Function that
                used Cloud Speech-to-Text API to transcribe the recording. The audio and transcription were then stored
                in our Realtime Database to be fetched and appended to the messages in the Single Chat screen.
              </div>

              <h4>Contacts & Add Contact Screen</h4>
              <div className='text'>
                To display contacts data, I used a sectioned list to sort and section contacts alphabetically. To filter
                contacts, I implemented a search function, which{' '}
              </div>
            </div>
            <div className='filled gray-fill'>
              <h3>Front-End</h3>
              <div className='text'>
                I was responsible for the UI of the All Chats, Single Chat, Group Chat, and Contacts screens, as well as
                their nested screens. I also designed the app logo and splash screen, bottom tab navigation bar and chat
                screen headers. For each screen, I used React Native StyleSheets to customize the appearance at the
                component level. I also used two libraries, React Native Elements, to style the search bar in the
                Contacts screen, and GiftedChat, which provided the basic message UI.
              </div>
            </div>
          </div>
          <div className='column'>
            <Gallery images={galleryGifs} toggleLightbox={this.toggleGifLightbox} />
            <FsLightbox toggler={gifLightboxIsOpen} slide={gifSlide} sources={lightboxGifs} />
            {/* <div className='gif'>
              <img className='image' src='/images/banter/add-contact.gif' alt='add-contact' />
            </div>
            <div className='gif'>
              <img className='image' src='/images/banter/contacts.gif' alt='contacts' />
            </div>
            <div className='gif'>
              <img className='image' src='/images/banter/voice-note.gif' alt='voice-note' />
            </div> */}
          </div>
        </div>

        <div className='row' />
      </div>
    )
  }
}

export default withStyles(useStyles)(Banter)

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
