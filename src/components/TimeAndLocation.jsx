import React from 'react';

const TimeAndLocation = () => {
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-xl text-white font-extralight'>Saturday, 02 Sep 2023 | Local time: 02:15 AM</p>
            </div>

            <div className='flex items-center justify-center my-3'>
                <p className='text-3xl text-white font-medium'>Berlin, DE</p>
            </div>
        </div>
    );
}

export default TimeAndLocation;
