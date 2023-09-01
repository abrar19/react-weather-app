import React from 'react';

const TemperatureAndDetails = () => {
    return (
        <div>
            <div className='text-xl text-cyan-300 flex items-center justify-center py-6'>
                <p>Cloudy</p>
            </div>
            <div className='flex flex-row items-center justify-between text-white py-3'>
                <img src="https://static-00.iconduck.com/assets.00/sun-symbol-emoji-1024x1024-ys649vi7.png" alt="SunImage" className='w-20' />
                <p className='text-5xl'>34°</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center"></div>
                </div>
            </div>
        </div>
    );
}

export default TemperatureAndDetails;
