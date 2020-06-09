import React, { Component } from 'react'
export default class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transition: false
    }
    this.setTransition = this.setTransition.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setTransition)
  }

  setTransition = () => {
    if (window.scrollY <= 200) {
      this.setState({
        transition: false
      })
    } else {
      this.setState({
        transition: true
      })
    }
  }

  render() {
    return (
      <div className='section-welcome'>
        <div className='text large'>Hi There, I'm Lauryn</div>
        <img className={`profile ${this.state.transition && 'transition'}`} src='/images/welcome.jpg' alt='welcome' />
        <div className='text medium'>Full Stack Developer</div>
        <a href='/#about'>
          <img className='arrow' src='/images/down-arrow.png' alt='welcome' />
        </a>
      </div>
    )
  }
}
