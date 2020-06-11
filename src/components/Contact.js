import React from 'react'

import { ContactForm } from '.'

const Contact = props => {
  return (
    <div className='section-contact' ref={props.contactRef}>
      <div className='header'>Contact</div>
      <div className='subheader'>{`Let's Get In Touch!`}</div>
      <ContactForm />
    </div>
  )
}

export default Contact
