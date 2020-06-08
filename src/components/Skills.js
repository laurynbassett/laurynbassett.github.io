import React from 'react'
import { AccountTree, Build, Code } from '@material-ui/icons'
const Skills = () => {
  return (
    <div className='section-skills'>
      <div className='header'>Skills</div>
      <div className='row'>
        <div className='col left'>
          <div className='text-header left'>
            <Code />
            <h3>Languages | Technologies</h3>
          </div>
          <div className='text-body left'>
            JavaScript/ES6 ∙ HTML/HTML5<br />
            CSS/CSS3 ∙ Node.js<br />PostgreSQL ∙ Firebase
          </div>
        </div>
        <div className='col middle'>
          <div className='text-header middle'>
            <AccountTree />
            <h3>Frameworks | Libraries</h3>
          </div>
          <div className='text-body middle'>
            React ∙ Redux ∙ React Native<br />
            Express.js ∙ Sequelize ∙ Material-UI<br />Jasmine ∙ Mocha ∙ Chai ∙ Enzyme
          </div>
        </div>
        <div className='col right'>
          <div className='text-header right'>
            <Build />
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
  )
}

export default Skills
