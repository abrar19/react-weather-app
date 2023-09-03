import React from 'react';

const Forecast = ({title}) => {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium uppercase'>{title}</p>
            </div>
            <hr className='my-2'/>
            <div className="flex flex-row justify-between items-center text-white">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:30 PM</p>
                    <img src="https://static-00.iconduck.com/assets.00/sun-symbol-emoji-1024x1024-ys649vi7.png" alt="SunImage" className='w-12' />
                    <p className="font-medium">22°</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:30 PM</p>
                    <img src="https://static-00.iconduck.com/assets.00/sun-symbol-emoji-1024x1024-ys649vi7.png" alt="SunImage" className='w-12' />
                    <p className="font-medium">22°</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:30 PM</p>
                    <img src="https://static-00.iconduck.com/assets.00/sun-symbol-emoji-1024x1024-ys649vi7.png" alt="SunImage" className='w-12' />
                    <p className="font-medium">22°</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:30 PM</p>
                    <img src="https://static-00.iconduck.com/assets.00/sun-symbol-emoji-1024x1024-ys649vi7.png" alt="SunImage" className='w-12' />
                    <p className="font-medium">22°</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:30 PM</p>
                    <img src="https://static-00.iconduck.com/assets.00/sun-symbol-emoji-1024x1024-ys649vi7.png" alt="SunImage" className='w-12' />
                    <p className="font-medium">22°</p>
                </div>
            </div>
        </div>
    );
}

export default Forecast;
