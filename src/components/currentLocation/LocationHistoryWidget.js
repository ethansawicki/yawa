import React from 'react'
import { ReactWeather, useVisualCrossing } from 'react-open-weather';
import { visualCrossingAPI } from '../../apiKeys';

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
