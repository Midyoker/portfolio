import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { GetStaticPaths } from 'next'

type Props = {}

export default function header({ }: Props) {
    return (
        <header className='sticky flex-0 flex item-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
            <motion.div
                initial={{
                    opacity: 0,
                    x: -500,
                    scale: 0.5
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.3
                }}
                className='flex flex-row items-center '>
                <SocialIcon url="https://www.linkedin.com/mohit-sharma-643508227/"
                    fgColor="gray"
                    bgColor="transparent" />
                <SocialIcon url="https://www.instagram.com/cycloid.exe/"
                    fgColor="gray"
                    bgColor="transparent" />
                <SocialIcon url="https://github.com/Midyoker"
                    fgColor="gray"
                    bgColor="transparent" />
                <SocialIcon url="https://www.linkedin.com/in/alexander-lee-1b1b1b1b1/"
                    fgColor="gray"
                    bgColor="transparent" />

            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                    x: 500,
                    scale: 0.5
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.3
                }}
                className='flex flex-row items-center text-gray-400 cursor-pointer'>
                <SocialIcon
                    
                    className='cursor-pointer'
                    network='email'
                    fgColor="gray"
                    bgColor="transparent">

                </SocialIcon>
                <p className='uppercase  font-sans hidden md:inline-flex text-sm text-gray-400'> Reach Out!!</p>
            </motion.div>
            

        </header>
    )
}
