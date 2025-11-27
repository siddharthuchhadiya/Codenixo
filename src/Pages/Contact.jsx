import React from 'react'
import Breadcrumbs from '../Components/Breadcrumbs'

export default function Contact() {
  return (
    <div
          className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/public/assets/8f16998be686d81d1578edd571b09464.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
            <div className="mb-3">
              <Breadcrumbs />
            </div>
    
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
              Contact Us
            </h1>
          </div>
        </div>
  )
}
