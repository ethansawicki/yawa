import { Button } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import  ReactWeather, { useOpenWeather } from 'react-open-weather'
import { Link, useNavigate } from 'react-router-dom';
import { openWeatherAPI } from '../../apiKeys'
import './SavedLocation.css'

const customStyles = {
	fontFamily:  'Helvetica, sans-serif',
	gradientStart:  '#02386e',
	gradientMid:  '#00498d',
	gradientEnd:  '#0052a2',
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
	forecastIconColor:  '#0052a2',
};

export const SavedLocation = ({location, fetchUserLocations}) => {
    const { data } = useOpenWeather({
        key: openWeatherAPI,
        lat: location.locationLatitude,
        lon: location.locationLongitude,
        lang: 'en',
        unit: 'imperial', // values are (metric,us,uk)
      });

    const handleDelete = () => {
      const deleteSavedLocation = async () => {
        const res = await fetch(`http://localhost:8088/usersSavedLocations/${location.id}`, {
          method: "DELETE"
        })
        await res.json()
        fetchUserLocations()
      }
      deleteSavedLocation()
    }

    return (
      <div className='weather-widget'>
          <div><h2>{location.locationSavedName}</h2></div>
          <div className='widget-div'>
            <ReactWeather
                data={data}
                theme={customStyles}
                lang="en"
                locationLabel={`${location.locationName}`}
                unitsLabels={{temperature: "F", windSpeed: 'Mph'}}
                showForcast
                type='auto'
              />
          </div>
          <div className='btn-group-container'>
            <h3>Tag: {location.tags.tag}</h3>
            <Link to={`/SavedLocations/${location.id}`}><Button className='btn-group' variant='contained'>Edit</Button></Link>
            <Button variant='contained' onClick={() => {handleDelete()}} className='btn-group'>Delete</Button>
          </div>
      </div>
    )
}
