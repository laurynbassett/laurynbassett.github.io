import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
    console.log('STATE CHANGED', this.state)
  }

  handleSubmit = () => {
    fetch('https://api.formik.com/submit/laurynbassett/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
  }

  render() {
    const { firstName, lastName, email, subject, message } = this.state
    const style = { fontFamily: 'Open Sans' }
    return (
      <div className='section-contact'>
        <div className='header'>Contact</div>
        <div>{`Let's Get In Touch!`}</div>
        <form onSubmit={this.handleSubmit} className='contact-form'>
          <StyledTextField
            required
            style={{ style }}
            className='form-field'
            type='text'
            name='firstName'
            label='First Name'
            value={firstName}
            variant='outlined'
            onChange={this.handleChange}
          />
          <StyledTextField
            required
            className='form-field'
            type='text'
            name='lastName'
            label='Last Name'
            value={lastName}
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
            type='message'
            name='message'
            label='Message'
            value={message}
            multiline
            rows={6}
            inputProps={{ style }}
            variant='outlined'
            onChange={this.handleChange}
          />
          <StyledButton className='submit' type='submit' value='Submit' variant='contained'>
            Send Message
          </StyledButton>
        </form>
      </div>
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

const StyledButton = withStyles(theme => ({
  root: {
    fontSize: 18,
    fontWeight: 400,
    color: 'white',
    border: '1px solid #c4e3cb',
    lineHeight: 1.5,
    backgroundColor: '#c4e3cb',
    fontFamily: 'Open Sans',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#c4e3cb',
      borderColor: '#c4e3cb',
      boxShadow: '#ececec'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#c4e3cb',
      borderColor: '#c4e3cb'
    }
  }
}))(Button)
