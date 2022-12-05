import { Button, ButtonGroup } from '@mui/material';
import React from 'react'
import  ReactWeather, { useVisualCrossing } from 'react-open-weather'
import { visualCrossingAPI } from '../../apiKeys'

// Im sure i can reuse this on the current location page...
export const SavedLocation = ({location, userObj}) => {
    const { data } = useVisualCrossing({
        key: visualCrossingAPI,
        lat: location.locationLatitude,
        lon: location.locationLongitude,
        lang: 'en',
        unit: 'us', // values are (metric,us,uk)
      });

      const customStyles = {
        fontFamily:  'Helvetica, sans-serif',
        gradientStart:  '#0181C2',
        gradientMid:  '#04A7F9',
        gradientEnd:  '#4BC4F7',
        locationFontColor:  '#FFF',
        todayTempFontColor:  '#FFF',
        todayDateFontColor:  '#B5DEF4',
        todayRangeFontColor:  '#B5DEF4',
        todayDescFontColor:  '#B5DEF4',
        todayInfoFontColor:  '#B5DEF4',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#FFF',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#777',
        forecastDescColor:  '#777',
        forecastRangeColor:  '#777',
        forecastIconColor:  '#4BC4F7',
    };

    if (location.usersId === userObj.uid) {
  return (
    <div className='weather-widget'>
        <h1>{location.locationSavedName}</h1>
        <ReactWeather
              data={data}
              theme={customStyles}
              lang="en"
              locationLabel={`${location.locationName}`}
              unitsLabels={{temperature: "F", windSpeed: 'Mph'}}
              showForcast
              type='auto'
            />
        <ButtonGroup variant='contained'className='btn-group'>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </ButtonGroup>
        <h3>Tag: {location.tags.tag}</h3>
    </div>
  )} else {
    return null
  }
}
