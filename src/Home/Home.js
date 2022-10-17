import React from 'react';
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
    return (
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-full h-[100vh] flex items-center justify-center'>
            <h1 className='text-white font-extrabold text-9xl'>
                <Typewriter
                    words={['Eat', 'Sleep', 'Code', 'Repeat', 'Passionate!']}
                    loop={10}
                    cursor
                    cursorStyle='_'
                    typeSpeed={90}
                    deleteSpeed={60}
                    delaySpeed={1000}
                />
            </h1>
        </div>
    );
};

export default Home;