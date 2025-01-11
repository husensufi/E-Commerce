import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
      <div className="news-letter">
          <h1>Get Exclusive Offers On Email</h1>
          <p>Subscribe Here</p>
          <div>
              <input type='email' placeholder='Enter Your E-Mail' />
              <button>Subscribe</button>
          </div>
          
    </div>
  )
}

export default NewsLetter