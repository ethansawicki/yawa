import React from 'react'
import  ReactWeather,{ useOpenWeather } from 'react-open-weather'
import { openWeatherAPI } from '../../apiKeys'

export const CurrentLocationWidget = ({lat, long}) => {
    const { data } = useOpenWeather({
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
                locationLabel='Nashville'
                unitsLabels={{temperature: "F", windSpeed: 'Mph'}}
            />
    </div>
  )
}
