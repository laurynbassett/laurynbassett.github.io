import React, { Component } from 'react'
import { List, ListItem } from '@material-ui/core'
import { Close, GitHub, Menu, LinkedIn } from '@material-ui/icons'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openDrawer: false,
      showFixedNav: false
    }
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
    this.setFixedNav = this.setFixedNav.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setFixedNav)
  }

  handleDrawerToggle = () => {
    this.setState({ openDrawer: !this.state.openDrawer })
  }

  setFixedNav = () => {
    if (window.scrollY <= 200) {
      this.setState({
        showFixedNav: false
      })
    } else {
      this.setState({
        showFixedNav: true
      })
    }
  }

  render() {
    const { aboutScroll, contactScroll, portfolioScroll, skillsScroll } = this.props

    return (
      <div id='nav' className={`nav-${this.state.showFixedNav ? 'fixed' : 'static'}`}>
        <div id='nav-bar'>
          {/* Nav Bar Logo */}
          <a href='/'>
            <div id='nav-logo'>
              <img className='logo' src='/images/full-logo.png' alt='logo' />
            </div>
          </a>

          {/* Drawer Toggle Icons */}
          {this.state.openDrawer ? (
            <div className='nav-toggle-icons'>
              <Close className='nav-icon' onClick={this.handleDrawerToggle} />
            </div>
          ) : (
            <div className='nav-toggle-icons'>
              <Menu className='nav-icon' onClick={this.handleDrawerToggle} />
            </div>
          )}

          {/* Nav Bar Links */}
          <div id='nav-links'>
            <a className='bar-item' onClick={aboutScroll}>
              About
            </a>
            <a className='bar-item' onClick={skillsScroll}>
              Skills
            </a>
            <a className='bar-item' onClick={portfolioScroll}>
              Portfolio
            </a>
            <a className='bar-item' href='/files/resume.pdf' target='_blank' rel='noopener noreferrer'>
              Resume
            </a>
            <a className='bar-item' onClick={contactScroll}>
              Contact
            </a>
            <div className='icons'>
              <a className='github' href='github.com/laurynbassett' target='_blank' rel='noopener noreferrer'>
                <GitHub />
              </a>
              <a
                className='linked-in'
                href='https://www.linkedin.com/in/laurynbassett/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedIn />
              </a>
            </div>
          </div>

          {/* Nav Bar Drawer */}
          {this.state.openDrawer && (
            <div id='nav-drawer'>
              <Drawer {...this.props} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

const Drawer = props => {
  const { aboutScroll, contactScroll, portfolioScroll, skillsScroll } = props

  return (
    <List component='nav' className='nav-drawer' aria-label='contacts'>
      <ListItem button className='drawer-item' onClick={aboutScroll}>
        About
      </ListItem>
      <ListItem button className='drawer-item' onClick={skillsScroll}>
        Skills
      </ListItem>
      <ListItem button className='drawer-item' onClick={portfolioScroll}>
        Portfolio
      </ListItem>
      <ListItem button>
        <a href='/files/resume.pdf' target='_blank' rel='noopener noreferrer'>
          Resume
        </a>
      </ListItem>
      <ListItem button className='drawer-item' onClick={contactScroll}>
        Contact
      </ListItem>
      <ListItem button className='drawer-item' className='icons'>
        <a className='github' href='github.com/laurynbassett' target='_blank' rel='noopener noreferrer'>
          <GitHub />
        </a>
        <a
          className='linked-in'
          href='https://www.linkedin.com/in/laurynbassett/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedIn />
        </a>
      </ListItem>
    </List>
  )
}
