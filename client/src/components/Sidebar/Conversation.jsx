import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className='flex items-center gap-4'>
          <div className='avatar online w-12 h-12 rounded-full ml-2'>
              <img src='https://avatar.iran.liara.run/public/boy' alt="Profile"/>
          </div>
          <div>Jimmy Anderson</div>
        
        </div>
        <div className="divider divider-neutral m-2"></div>
    </>
  )
}

export default Conversation
