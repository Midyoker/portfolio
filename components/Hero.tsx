import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function ({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, It's Mohit Sharma here!",
            "Welcome to my Portfolio",
            "I'm a Full Stack Developer",
            "And a passionate programmer",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div>
            <BackgroundCircles />
            <h1>
            <span >{text}</span>
            <Cursor cursorColor='green'/>      
            </h1>
        </div>
    );
}
