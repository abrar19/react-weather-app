import React from 'react';
import { UilTemperature, UilArrowUp, UilArrowDown, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'

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
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1"/>
                        Real feel:
                        <span className='font-medium ml-1'>32°</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1"/>
                        Humidity:
                        <span className='font-medium ml-1'>65%</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1"/>
                        Wind:
                        <span className='font-medium ml-1'>11 km/h</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <UilSun />
                <p className='font-light'>Rise: <span className='font-medium ml-1'>06:45 AM</span></p>
                <p className='font-light'>|</p>
                <UilSunset />
                <p className='font-light'>Set: <span className='font-medium ml-1'>05:45 PM</span></p>
                <p className='font-light'>|</p>
                <UilArrowUp />
                <p className='font-light'>High: <span className='font-medium ml-1'>42°</span></p>
                <p className='font-light'>|</p>
                <UilArrowDown />
                <p className='font-light'>Low: <span className='font-medium ml-1'>28°</span></p>
            </div>
        </div>
    );
}

export default TemperatureAndDetails;
