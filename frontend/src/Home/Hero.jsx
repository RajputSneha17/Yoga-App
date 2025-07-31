import React from 'react'

const Hero = () => {
  return (
    <div className="">
      <img src="yoga1.jpg" alt="yoga" className="img-fluid w-100" />
      <div className="bg-success p-3 fs-5 text-white">
        <marquee behavior="scroll" direction="left">
          Yoga wellness is a holistic practice that unites the body, mind, and breath to promote physical health, mental clarity, reduced stress, and a deeper sense of inner peace and well-being.
        </marquee>
      </div>
    </div>
  )
}

export default Hero
