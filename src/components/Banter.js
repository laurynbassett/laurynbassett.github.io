import React, { Component } from 'react'
import { GitHub } from '@material-ui/icons'
import { Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import FsLightbox from 'fslightbox-react'
// import ReactPlayer from 'react-player'

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

class Banter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slide: 0,
      lightboxIsOpen: false
    }
    this.toggleLightbox = this.toggleLightbox.bind(this)
  }

  toggleLightbox = slide => {
    console.log('SLIDE', slide)
    this.setState({ lightboxIsOpen: !this.state.lightboxIsOpen, slide })
  }

  render() {
    const { slide, lightboxIsOpen } = this.state
    const { classes } = this.props

    return (
      <div className='project-container'>
        {/* <div className='row'> */}
        <div className='header'>Banter</div>
        {/* </div> */}
        <div className='row'>
          <div className='column'>
            <Gallery images={galleryImages} toggleLightbox={this.toggleLightbox} />
            <FsLightbox toggler={lightboxIsOpen} slide={slide} sources={lightboxImages} />
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
              React Native ∙ Redux<br />
              Firebase Realtime Database • Firebase Authentication<br />Firebase Storage • Cloud Functions<br />
              Cloud Translate API • Cloud Speech-to-Text API<br />
              Expo
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
          <div className='column filled gray-fill'>
            <div className='subheader gray'>My Role</div>
            <div className='text'>
              The main screens that I was responsible for were the Single Chat screen, Contacts screen, and Add Contact
              screen.
            </div>
            <div className='text'>
              In each screen, I used the <code>connect()</code> function from the React Redux library, which provided
              each screen with access to our Redux store. This allows us to extract data with{' '}
              <code>mapStateToProps</code> and dispatch actions with <code>mapDispatchToProps</code> from a component
              level without having to pass them .
            </div>
            <h3>Single Chat Screen</h3>
            <div className='text'>
              The Single Chat Screen shows an individual text conversation between the current user and a single
              contact.
            </div>
            <div className='text'>For new conversations, </div>
            <div className='text'>For existing conversations, messages are fetched from the </div>

            <h3>Contacts Screen</h3>
            <div className='text'>
              When a logged in user opens the app, they are directed to the All Chats screen, where the initial user
              data is loaded. This includes their existing chats, first 20 messages for each chat, contacts, and other
              relevant user data, like personal settings. The contacts are loaded through a dispatch function called{' '}
              <code>fetchContacts()</code>, which reads contact data from the path <code>/users/$uid/contacts</code> and
              listens for changes using the <code>on()</code> method of <code>firebase.database.Reference</code> to
              observe events.
            </div>
            <div className='text'>
              Because the contacts data is stored in our Redux store on the initial load, all we have to do is map the
              contacts from our user reducer in the Redux store to our Contact List component props. This allowed the
              component to access all the contacts for the current user.
            </div>
            <h3>Add Contact Screen</h3>
            <div className='text'>For the contacts screen, I</div>
          </div>
          <div className='column'>
            <div className='video'>
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/TDe3Sa-4f2I'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
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
