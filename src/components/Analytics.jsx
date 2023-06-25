import React from 'react'
import Laptop from '../assests/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto-grid md:grid-cols-2'>
            <img className='w-[650px] flex flex-col p-4 rounded-lg hover:scale-105 duration-300 mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS MANAGE</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>
                Store, manage, secure and unlock the hidden value of your data and databases with purpose-built technologies for cloud, hybrid and on-premises deployments. Design a modern data foundation to support all data, analytics and AI use cases.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics