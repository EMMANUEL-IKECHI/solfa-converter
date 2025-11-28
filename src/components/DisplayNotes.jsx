import React from 'react'

const DisplayNotes = ({ notes }) => {
  return (
    <div className='bg-sky-100 w-full md:max-w-7/12 p-6'>
        <h2 className='text-center w-full'>Converted letter names</h2>
        <p className='text-center mt-3'>{ notes ? notes : "Let's turn those solfas to letters!"}</p>
    </div>
  )
}

export default DisplayNotes