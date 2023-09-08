import React from 'react'
import ReactTyped from 'react-typed'
import Timer from './Timer'
const Hero = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='h-[40vh] text-white p-[10vw] flex flex-col gap-10'>
                <h1 className='text-7xl font-black text-center'>Hacktopia</h1>
                <h3 className='text-4xl bg-clip-text text-center'>
                    <ReactTyped
                        strings={['Collaborate', 'Code', 'Create']}
                        typeSpeed={60}
                        backSpeed={60}
                        loop
                    />
                </h3>
            </div>
            <div className='flex gap-2 flex-col items-center p-10'>
                {/* <h4 className='text-white text-4xl font-bold'>The Hackathon begins in</h4> */}
                <Timer />
            </div>
        </div>
    )
}

export default Hero;