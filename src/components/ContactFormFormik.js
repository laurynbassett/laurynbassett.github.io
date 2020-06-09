import React from 'react'
import { Send } from '@material-ui/icons'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import axios from 'axios'
import { Formik, Form, FastField, ErrorMessage } from 'formik'
import Recaptcha from 'react-google-recaptcha'
import * as Yup from 'yup'

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        '&&&&:hover:before': {
          borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
        }
      }
    }
  }
})

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
        recaptcha: '',
        success: false
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Fullname field is required'),
        email: Yup.string().email('Invalid email').required('Email field is required'),
        subject: Yup.string().required('Subject field is required'),
        message: Yup.string().required('Message field is required'),
        recaptcha: Yup.string().required('Robots are not welcome yet!')
      })}
      onSubmit={async ({ name, email, subject, message }, { setSubmitting, resetForm, setFieldValue }) => {
        try {
          console.log('SUBMIT PRESSED', name, email, subject, message)
          if (name === '') {
            alert('Full Name field cannot be blank')
          } else if (email === '') {
            alert('Email field cannot be blank')
          } else if (subject === '') {
            alert('Subject field cannot be blank')
          } else if (message === '') {
            alert('Message field cannot be blank')
          } else {
            await axios({
              method: 'POST',
              // url: `${process.env.FORMIK_ENDPOINT}`,
              url: 'https://api.formik.com/submit/laurynbassett/contact',
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
            setSubmitting(false)
            setFieldValue('success', true)
            setTimeout(() => resetForm(), 6000)
          }
        } catch (err) {
          setSubmitting(false)
          setFieldValue('success', false)
          alert('Something went wrong, please try again!') // eslint-disable-line
          console.error(err)
        }
      }}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form className='contact-form'>
          <MuiThemeProvider theme={theme}>
            <FastField
              className='form-field'
              type='text'
              name='name'
              aria-label='name'
              placeholder='Full Name*'
              error={touched.name && errors.name}
            />
            <FastField
              className='form-field'
              id='email'
              aria-label='email'
              as={FastField}
              type='email'
              name='email'
              placeholder='Email*'
              error={touched.email && errors.email}
            />
            <FastField
              className='form-field'
              aria-label='subject'
              id='subject'
              rows='8'
              type='text'
              name='subject'
              placeholder='Subject*'
              error={touched.subject && errors.subject}
            />
            <FastField
              aria-label='message'
              className='form-field'
              id='message'
              rows='8'
              type='text'
              name='message'
              placeholder='Message*'
              error={touched.subject && errors.subject}
            />
            {values.name &&
            values.email &&
            values.message && (
              <div className='formik-input'>
                <FastField
                  component={Recaptcha}
                  sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                  // sitekey={process.env.RECAPTCHA_SECRET_KEY}
                  name='recaptcha'
                  onChange={value => setFieldValue('recaptcha', value)}
                />
                <ErrorMessage component={Error} name='recaptcha' />
              </div>
            )}
            {values.success && (
              <div className='formik-input'>
                <div className='formik-center'>
                  <h4>Your message has been successfully sent!</h4>
                </div>
              </div>
            )}
            {/* <div className='submit-btn' onClick={this.handleSubmit}>
          <Send />
          <span> Send Message</span>
        </div> */}
            <button className='submit-btn' type='submit'>
              <Send />
              <span>Send Message</span>
            </button>
          </MuiThemeProvider>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm

const styles = {
  root: {
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
}
