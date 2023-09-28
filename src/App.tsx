import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HolidayMap from './HolidayMap'
import Table from './Table'


function App() {
  return (
    <div className='flex flex-col w-full bg-green-300 lg:flex-row'>
      <div className='h-screen bg-red-500'>
        <div className="w-full fixed lg:relative bg-orange-200 h-full p-5">
            <HolidayMap/>
        </div>
      </div>
      <div className='flex-grow -mt-20 lg:mt-0 h-screen lg:overflow-y-auto bg-purple-200 relative z-index-100'>
        <Table></Table>
      </div>
    </div>
  )
}

export default App
