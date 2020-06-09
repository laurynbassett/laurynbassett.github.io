import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from '@material-ui/core'
import { Close, Menu } from '@material-ui/icons'

const drawer = (
  <List component='nav' className='nav-drawer' aria-label='contacts'>
    <ListItem button>
      <Link to='/#about'>About Me</Link>
    </ListItem>
    <ListItem button>
      <Link to='/#skills'>Skills</Link>
    </ListItem>
    <ListItem button>
      <Link to='/#education'>Education</Link>
    </ListItem>
    <ListItem button>
      <Link to='/#portfolio'>Portfolio</Link>
    </ListItem>
    <ListItem button>
      <Link to='/#contact'>Contact</Link>
    </ListItem>
  </List>
)

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
    return (
      <div id='nav' className={`nav-${this.state.showFixedNav ? 'fixed' : 'static'}`}>
        <div id='nav-bar'>
          <a href='/'>
            <div id='nav-logo'>
              <img className='logo' src='/images/full-logo.png' alt='logo' />
            </div>
          </a>
          {this.state.openDrawer ? (
            <div id='nav-icons'>
              <Close className='nav-icon' onClick={this.handleDrawerToggle} />
            </div>
          ) : (
            <div className='nav-icons'>
              <Menu className='nav-icon' onClick={this.handleDrawerToggle} />
            </div>
          )}
          <div id='nav-links'>
            <Link to='/#about'>About Me</Link>
            <Link to='/#skills'>Skills</Link>
            <Link to='/#portfolio'>Portfolio</Link>
            <Link to='/#contact'>Contact</Link>
          </div>
          {this.state.openDrawer && <div id='nav-drawer'>{drawer}</div>}
        </div>
      </div>
    )
  }
}
