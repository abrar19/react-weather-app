import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

const Inputs = ({setQuery, units, setUnits}) => {
    const [city, setCity] = useState('');
    const handleSearchClick = () => {
        if(city !== ''){
            setQuery({q: city})
        }
    }

    const handleLocationClick = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon
                });
            });
        }
    }

    const handleUnitChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if(units !== selectedUnit){
            setUnits(selectedUnit);
        }
    }

    return (
        <div className='inputs flex flex-row justify-center my-6'>
            <div className="search flex flex-row w-3/4 items-center justify-center space-x-4">
                <input type="text"
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    placeholder='Search for your city...'
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded'/>
                <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleSearchClick}/>
                <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleLocationClick}/>
            </div>
            <div className="celfar flex flex-row w-1/4 items-center justify-center">
                <button name="metric" className='text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125' onClick={handleUnitChange}>°C</button>
                <p className='text-xl text-white mx-1'>|</p>
                <button name="imperial" className='text-xl text-white font-light cursor-pointer transition ease-out hover:scale-125' onClick={handleUnitChange}>°F</button>
            </div>
        </div>
    );
}

export default Inputs;
