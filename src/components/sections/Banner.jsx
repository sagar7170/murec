import React from 'react'

function Banner() {
  return (
    <div className="banner">
      <video
        src="/videos/vid2.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="banner-content">
          <h1>
           <span>78+</span>
            YEARS OF LEGACY
          </h1>
          <div className="madhusudan-logo">
            <img src="/images/madhusudan.webp" alt="" />
          </div>
          <a className='learnmore' href="">Learn more <img src="/images/image.png" alt="" /></a>
      </div>
    </div>
  )
}

export default Banner
