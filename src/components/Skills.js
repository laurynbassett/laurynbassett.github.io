import React, { Component } from 'react'
import { AccountTree, Build, Code } from '@material-ui/icons'
const VisibilitySensor = require('react-visibility-sensor').default
export default class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange = isVisible => {
    if (isVisible) {
      this.setState({ isVisible: true })
    } else {
      this.setState({ isVisible: false })
    }
  }

  render() {
    return (
      <VisibilitySensor onChange={this.onChange}>
        <div className='section-skills'>
          <div className='header'>Skills</div>
          <div className='row'>
            <div className='col left'>
              <div className='text-header left'>
                <Code className={`section-skills-icon ${this.state.isVisible ? 'in-view' : ''}`} />
                <h3>Languages | Technologies</h3>
              </div>
              <div className='text-body left'>
                JavaScript/ES6 ∙ HTML/HTML5<br />
                CSS/CSS3 ∙ Node.js<br />PostgreSQL ∙ Firebase
              </div>
            </div>
            <div className='col middle'>
              <div className='text-header middle'>
                <AccountTree className={`section-skills-icon ${this.state.isVisible ? 'in-view' : ''}`} />
                <h3>Frameworks | Libraries</h3>
              </div>
              <div className='text-body middle'>
                React ∙ Redux ∙ React Native<br />
                Express.js ∙ Sequelize ∙ Material-UI<br />Jasmine ∙ Mocha ∙ Chai ∙ Enzyme
              </div>
            </div>
            <div className='col right'>
              <div className='text-header right'>
                <Build className={`section-skills-icon ${this.state.isVisible ? 'in-view' : ''}`} />
                <h3>Creative Suites | Build Tools</h3>
              </div>
              <div className='text-body right'>
                Git ∙ Webpack<br />
                Socket.io ∙ Heroku <br />
                Travis CI
              </div>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}
