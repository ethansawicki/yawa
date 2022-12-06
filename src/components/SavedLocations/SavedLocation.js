import { Button, ButtonGroup } from '@mui/material';
import React from 'react'
import  ReactWeather, { useVisualCrossing } from 'react-open-weather'
import { useNavigate } from 'react-router-dom';
import { visualCrossingAPI } from '../../apiKeys'

// Im sure i can reuse this on the current location page...
export const SavedLocation = ({location, userObj, fetchUserLocations}) => {
  const navigate = useNavigate()
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

    const handleDelete = () => {
      const deleteSavedLocation = async () => {
        const res = await fetch(`http://localhost:8088/usersSavedLocations/${location.id}`, {
          method: "DELETE"
        })
        await res.json()
      }
      deleteSavedLocation()
      fetchUserLocations()
      navigate('/')
    }

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
            <Button onClick={() => {handleDelete()}}>Delete</Button>
        </ButtonGroup>
        <h3>Tag: {location.tags.tag}</h3>
    </div>
  )} else {
    return null
  }
}
