import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid grid-flow-col-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REAKSI.</h1>
            <p className='py-4'>Are you ready to take the next step toward your future? And you struggling to get Rich Information from your data? Contact us to end your struggles.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare className='hover:scale-105 duration-300' size={30} />
            <FaInstagramSquare className='hover:scale-105 duration-300' size={30} />
            <FaTwitterSquare className='hover:scale-105 duration-300' size={30} />
            <FaGithubSquare className='hover:scale-105 duration-300' size={30} />
            <FaDribbbleSquare className='hover:scale-105 duration-300' size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Solution</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>
        <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentasion</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>Api Status</li>
            </ul>
        </div>
        <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>BLog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>
                <li className='py-2 text-sm'>Careers</li>
            </ul>
        </div>
        <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Tems</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer