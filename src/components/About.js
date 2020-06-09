import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import { GetApp } from '@material-ui/icons'

const About = props => {
  console.log('POSITION', props.position)
  return (
    <div className='section-about'>
      <div className='header'>About Me</div>
      <div className='row'>
        <Card className='col 1'>
          <h3>Overview</h3>
          <CardContent className='text'>
            I'm a Full Stack Developer with a degree in Psychology and Sociology. Through my background in Ecommerce and
            Data Analysis, I was exposed to coding and became fascinated with the freedom and possibilities that
            technology afforded. Throughout my non-technical experience, I always looked for ways to improve existing
            processes through technological implementations.
            <div className='paragraph'>
              In 2019, I took the leap to becoming a professional developer and learned JavaScript before joining
              Fullstack Academy in Chicago, where I completed their 16-week immersive programming course.
            </div>
            <div className='paragraph'>
              As an avid problem solver, being a developer gives me the opportunity to challenge myself in ways I never
              thought possible. Since I was a child, I have always gravitated towards DIY projects and crafts, so one of
              the biggest rewards of development is being able to see a project through from inception to completion.
            </div>
          </CardContent>
        </Card>
        <Card className='col right'>
          <h3>Objective</h3>
          <CardContent className='text'>
            <div className='paragraph'>
              I would like to leverage my knowledge of consumer needs and understanding of how users interact with
              technology in designing products and services that provide value in both functionality and UI/UX.
            </div>

            <div className='paragraph'>
              {' '}
              I'm looking to build on my existing development experience and grow with a company where I can contribute
              to and be a part of a bigger picture.
            </div>
            <div className='button'>
              <a className='download-btn' href='/files/resume.pdf' target='_blank'>
                <GetApp />
                <span>Download Resume</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default About
