import React, { useEffect, useState } from 'react'
import  ReactWeather,{ useVisualCrossing } from 'react-open-weather'
import { openWeatherAPI, visualCrossingAPI } from '../../apiKeys'

export const CurrentLocation = () => {
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)
    const [location, setLocation] = useState([])


    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })
    }
    
    const { data } = useVisualCrossing({
        key: visualCrossingAPI,
        lat: lat,
        lon: long,
        lang: 'en',
        unit: 'us', // values are (metric,us,uk)
      });
      
    const fetchCityName = async () => {
        const req = await fetch(`http://www.mapquestapi.com/geocoding/v1/reverse?key=zJgcD4nX9nVKXutQFQF4yua4gCINKsdM&location=${lat},${long}&outFormat=json`)
        const resp = await req.json()
        setLocation(resp)
        
    }
    useEffect(
        () => {
            //This is going to be used to get the actual city name from coordinates
            
            fetchCityName()
        },
        []
    )
    getLocation()
    console.log(location)
  return (
    <div>
        <ReactWeather 
            data={data}
            lang="en"
            locationLabel='Nashville'
            unitsLabels={{temperature: "F", windSpeed: 'Mph'}}
            showForcast
            type='auto'
        />
    </div>
  )
}
