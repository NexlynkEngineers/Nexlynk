import React from 'react'
import Stay from './StayOnTop/Stay'
import FromSignup from './FromSignup/FromSignup'
import Hero from './JimPages/Hero'

const Landing = () => {
  return (
    <div>
    <Hero/>
      <Stay/>
      <FromSignup/>
    </div>
  )
}

export default Landing
