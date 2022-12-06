import { ButtonGroup, Button } from '@mui/material';
import React from 'react'
import  ReactWeather, { useVisualCrossing } from 'react-open-weather'
import { Link, useNavigate } from 'react-router-dom';
import { visualCrossingAPI } from '../../apiKeys'

export const SavedLocation = ({location, fetchUserLocations}) => {
  const navigate = useNavigate()
    const { data } = useVisualCrossing({
        key: visualCrossingAPI,
        lat: location.locationLatitude,
        lon: location.locationLongitude,
        lang: 'en',
        unit: 'us', // values are (metric,us,uk)
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
          <h1>{location.locationSavedName}</h1>
          <ReactWeather
                data={data}
                lang="en"
                locationLabel={`${location.locationName}`}
                unitsLabels={{temperature: "F", windSpeed: 'Mph'}}
                showForcast
                type='auto'
              />
          <ButtonGroup variant='contained'className='btn-group'>
            <Link to={`/SavedLocations/${location.id}`}><Button>Edit</Button></Link>
            <Button onClick={() => {handleDelete()}}>Delete</Button>
          </ButtonGroup>
          <h3>Tag: {location.tags.tag}</h3>
      </div>
    )
}
