import React from 'react'
import Searchbar from './Searchbar'
import People from './People'

const Sidebar = () => {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 mt-4">
      <div>
        <Searchbar/>
      </div>
      <div>
        <People/>
      </div>
    </div>
  )
}

export default Sidebar
