import React, { Component } from 'react'
import { ExpandMore } from '@material-ui/icons'

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
        <p>{process.env.FORMIK_ENDPOINT}</p>
        <div className='text large'>Hi There, I'm Lauryn</div>
        <img className={`profile ${this.state.transition && 'transition'}`} src='/images/welcome.jpg' alt='welcome' />
        <div className='text medium'>Full Stack Developer</div>
        <div className='round-container'>
          <a onClick={this.props.aboutScroll}>
            <div className='round'>
              <ExpandMore className={`arrow one ${this.state.transition && 'transition'}`} />
              <ExpandMore className={`arrow two ${this.state.transition && 'transition'}`} />
            </div>
            {/* <img
            className={`arrow ${this.state.transition && 'transition'}`}
            src='/images/down-arrow.png'
            alt='welcome'
          /> */}
          </a>
        </div>
      </div>
    )
  }
}
