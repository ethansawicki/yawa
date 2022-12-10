import React from 'react'
import { ReactWeather } from 'react-open-weather';


export const LocationHistoryWidget = ({lat, long}) => {

  return (
    <div>
        <ReactWeather
        isLoading={lat === 0 ? true : false}
        data={data}
        lang="en"
        locationLabel=''
        unitsLabels={{temperature: "F", windSpeed: 'Mph'}}
      />
    </div>
  )
}
