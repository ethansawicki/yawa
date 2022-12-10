import React from 'react'
import  ReactWeather,{ useOpenWeather } from 'react-open-weather'
import { openWeatherAPI } from '../../apiKeys'

export const CurrentLocationWidget = ({lat, long, locationName}) => {

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
        isLoading={lat === 0 ? true : false}
        data={data}
        lang="en"
        locationLabel={`${locationName.map((name) => {return name.name})}`}
        unitsLabels={{temperature: "F", windSpeed: 'Mph'}}
      />
    </div>
  )
}
