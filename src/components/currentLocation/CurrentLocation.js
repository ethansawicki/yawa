import React, { useEffect, useState } from 'react'
import  ReactWeather,{ useOpenWeather } from 'react-open-weather'
import { openWeatherAPI } from '../../apiKeys'

export const CurrentLocation = () => {
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })
    }

    useEffect(
        () => {
            getLocation()
        },
        []
    )

    const { data, isLoading } = useOpenWeather({
        key: openWeatherAPI,
        lat: lat,
        lon: long,
        lang: 'en',
        unit: 'imperial', // values are (metric,imperial)
      });
    
    return (
        <div>
            <ReactWeather 
                data={data}
                lang="en"
                isLoading={isLoading}
                locationLabel='Nashville'
                unitsLabels={{temperature: "F", windSpeed: 'Mph'}}
            />
        </div>
    )
}
