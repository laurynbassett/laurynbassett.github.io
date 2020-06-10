import React, { Component, Fragment } from 'react'
import { Snackbar, TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import MuiAlert from '@material-ui/lab/Alert'
import { Send } from '@material-ui/icons'
import axios from 'axios'
import Recaptcha from 'react-google-recaptcha'

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  recaptcha: '',
  success: false,
  error: false
}

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
    console.log('STATE CHANGED', this.state)
  }

  handleSubmit = async () => {
    try {
      const { name, email, subject, message, recaptcha } = this.state
      console.log('SUBMIT PRESSED', name, email, subject, message)
      if (name === '') {
        alert('Full Name field cannot be blank')
      } else if (email === '') {
        alert('Email field cannot be blank')
      } else if (subject === '') {
        alert('Subject field cannot be blank')
      } else if (message === '') {
        alert('Message field cannot be blank')
      } else if (recaptcha === '') {
        alert('Please complete recaptcha')
      } else {
        console.log('RECAP', this.state.recaptcha)

        await axios({
          method: 'POST',
          url: `${process.env.REACT_APP_FORMIK_ENDPOINT}`,
          headers: {
            'Content-Type': 'application/json'
          },
          data: JSON.stringify({
            name,
            email,
            subject,
            message
          })
        })

        this.setState({ success: true })
        setTimeout(() => this.setState(initialState), 6000)
      }
    } catch (err) {
      this.setState({ error: true })
      alert('Something went wrong, please try again!') // eslint-disable-line
      console.error(err)
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ success: false })
  }

  render() {
    const { name, email, subject, message } = this.state
    const style = { fontFamily: 'Open Sans' }
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className='contact-form'>
          <StyledTextField
            required
            className='form-field'
            type='text'
            name='name'
            label='Name'
            value={name}
            inputProps={{ style }}
            variant='outlined'
            onChange={this.handleChange}
          />
          <StyledTextField
            required
            className='form-field'
            type='text'
            name='email'
            label='Email'
            value={email}
            inputProps={{ style }}
            variant='outlined'
            onChange={this.handleChange}
          />
          <StyledTextField
            required
            className='form-field'
            type='text'
            name='subject'
            label='Subject'
            value={subject}
            inputProps={{ style }}
            variant='outlined'
            onChange={this.handleChange}
          />
          <StyledTextField
            required
            className='form-field'
            type='text'
            name='message'
            label='Message'
            value={message}
            multiline
            rows={6}
            inputProps={{ style }}
            variant='outlined'
            onChange={this.handleChange}
          />
          <div className='submit-row'>
            <div className='submit-btn' onClick={this.handleSubmit}>
              <Send />
              <span>Send Message</span>
            </div>
            {name &&
            email &&
            message && (
              <Recaptcha
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                name='recaptcha'
                onChange={value => this.setState({ recaptcha: value })}
              />
            )}
          </div>
        </form>

        <Snackbar
          open={this.state.success}
          autoHideDuration={6000}
          onClose={this.handleClose}
          bodyStyle={{ backgroundColor: '#c4e3cb' }}
        >
          <Alert onClose={this.handleClose} severity='success'>
            Your message has been successfully sent!
          </Alert>
        </Snackbar>
        <Snackbar open={this.state.error} autoHideDuration={6000} onClose={this.handleClose}>
          <Alert onClose={this.handleClose} severity='success'>
            There was an error sending your message.
          </Alert>
        </Snackbar>
      </Fragment>
    )
  }
}

const StyledTextField = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    },
    '& label.Mui-focused': {
      color: '#c4e3cb'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ececec'
      },
      '&:hover fieldset': {
        borderColor: '#c4e3cb'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#c4e3cb'
      }
    }
  }
}))(TextField)
