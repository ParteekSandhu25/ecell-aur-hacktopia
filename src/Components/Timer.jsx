import React from 'react';
import { useState, useEffect } from 'react';
import Card from './UI/Card';

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "October, 10, 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bg-transparent w-fit p-3 flex gap-4 rounded-md'>
            <Card className='text-white flex flex-col items-center'>
                <h5 className='text-2xl'>{days}</h5>
                <h5 className='text-2xl'>Days</h5>
            </Card>
            <Card className='text-white flex flex-col items-center'>
                <h5 className='text-2xl'>{hours}</h5>
                <h5 className='text-2xl'>Hours</h5>
            </Card>
            <Card className='text-white flex flex-col items-center'>
                <h5 className='text-2xl'>{minutes}</h5>
                <h5 className='text-2xl'>Minutes</h5>
            </Card>
            <Card className='text-white flex flex-col items-center'>
                <h5 className='text-2xl'>{seconds}</h5>
                <h5 className='text-2xl'>Seconds</h5>
            </Card>
            
        </div>
    );
};

export default Timer;