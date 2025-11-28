import React from 'react'

const Glows = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
          {/* Wave 1 - Left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600 via-purple-600 to-transparent rounded-full blur-3xl opacity-60 animate-pulse"></div>
          
          {/* Wave 2 - Center (Cyan to Pink) */}
          <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          {/* Wave 3 - Right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-blue-500 via-purple-500 to-transparent rounded-full blur-3xl opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>
  )
}

export default Glows