import React, { useEffect, useState } from 'react'
import { CurrentLocationWidget } from './CurrentLocationWidget'
import './CurrentLocation.css'
import { openWeatherAPI } from '../../apiKeys'


export const CurrentLocation = ({lat, long}) => {
    const [locationName, setLocationName] = useState([])

    const fetchLocationName = async () => {
        const req = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${openWeatherAPI}`)
        const resp = await req.json()
        setLocationName(resp)
      }

    useEffect(
        () => {
            fetchLocationName()
        },
        [lat, long]
    )

    return (
        <div className='current-location'>
            <CurrentLocationWidget lat={lat} long={long} locationName={locationName}/>
        </div>
    )
}