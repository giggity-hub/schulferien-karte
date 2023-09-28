import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HolidayMap from './HolidayMap'
import Table from './Table'

function App() {
  return (
    <div className='flex flex-col w-full bg-green-300 lg:flex-row'>
      <div className='w-full h-screen bg-red-500'>
        <div className="fixed lg:relative bg-orange-200 w-full h-full">
          hello boiiiisss
        </div>
      </div>
      <div className='-mt-20 lg:mt-0 w-full h-screen lg:overflow-y-auto bg-purple-200 relative z-index-100'>
        <div className='bg-green-200 h-500'>asdfasd</div>
      </div>
      {/* <div className="mopedschmoped bg-blue-200 relative z-index-100 h-500" style={{marginTop: `calc(100vh - 10rem)`}} >tabbel</div>
      <div className="bg-orange-500 h-screen fixed top-0 w-full">kardde</div> */}
    </div>
  )
}

export default App
