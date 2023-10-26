import React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
const TopSection = ({ topSection }) => {
    return (
        <div ref={topSection} className='top-section mx-auto flex justify-between'>
            <div className="top-left mt-3">
                <h1 className='text-5xl font-bold py-3 text-gray-900'>
                    Elevate Your Culinary Journey with Our <span className='dark'>Premium Spices</span>
                </h1>
                <p className='text-xl font-semibold text-gray-800'>
                    At [Your Spice Brand], we invite you to embark on a remarkable culinary adventure filled with the finest, hand-selected spices and seasonings.
                </p>
            </div>
            <div className="top-right">
                <motion.img
                    fluid
                    src='/images/sideImage.png'
                    className='mt-5'
                />
            </div>
        </div>
    )
}

export default TopSection
