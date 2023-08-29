import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const Inputs = () => {
    return (
        <div className='inputs flex flex-row justify-center my-6'>
            <div className="search flex flex-row w-3/4 items-center justify-center space-x-4">
                <input type="text" 
                    placeholder='Search for your city...'
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'/>
                <UilSearch />
                <UilLocationPoint />
            </div>
            <div className="celfar">

            </div>
        </div>
    );
}

export default Inputs;
