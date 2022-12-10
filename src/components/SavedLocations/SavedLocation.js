import { Button } from '@mui/material';
import React from 'react'
import  ReactWeather, { useOpenWeather } from 'react-open-weather'
import { Link, useNavigate } from 'react-router-dom';
import { openWeatherAPI } from '../../apiKeys'
import './SavedLocation.css'

export const SavedLocation = ({location, fetchUserLocations}) => {

  const navigate = useNavigate()
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
      }
      deleteSavedLocation()
      fetchUserLocations()
      navigate('/')
    }

    return (
      <div className='weather-widget'>
          <div><h1>{location.locationSavedName}</h1></div>
          <div className='widget-div'>
            <ReactWeather
                data={data}
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
