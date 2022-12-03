import React, { useState } from 'react'
import  ReactWeather,{ useOpenWeather } from 'react-open-weather'
import { weatherAPI } from '../../apiKeys'

export const CurrentLocation = () => {
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })
    }

    const {data} = useOpenWeather({
        key: weatherAPI,
        lat: lat,
        lon: long,
        lang: 'en',
        unit: 'us'
    })

  return (
    <div>
        {getLocation()}
        <ReactWeather 
            data={data}
            lang="en"
            locationLabel="Nashville"
            unitsLabels={{temperature: "F", windSpeed: 'Mph'}}
            showForcast
        />
    </div>
  )
}
