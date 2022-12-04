import React from 'react'
import  ReactWeather, { useVisualCrossing } from 'react-open-weather'
import { visualCrossingAPI } from '../../apiKeys'

// Im sure i can reuse this on the current location page...
export const SavedLocation = ({location}) => {
    const { data } = useVisualCrossing({
        key: visualCrossingAPI,
        lat: location.locationLatitude,
        lon: location.locationLongitude,
        lang: 'en',
        unit: 'us', // values are (metric,us,uk)
      });

  return (
    <div>
        <h1>{location.locationSavedName}</h1>
        <ReactWeather
              data={data}
              lang="en"
              locationLabel={`${location.locationName}`}
              unitsLabels={{temperature: "F", windSpeed: 'Mph'}}
              showForcast
              type='auto'
            />
    </div>
  )
}
