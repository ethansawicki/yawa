import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { openWeatherAPI } from '../../apiKeys'
import { SearchLocation } from './SearchLocation'
import './SearchLocations.css'

export const SearchLocations = () => {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState([])

  const handleSearchClick = () => {
    const fetchCoords = async () => {
      const req = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${openWeatherAPI}`)
      const res = await req.json()
      setLocation(res)
    }
    fetchCoords()
  }

  return (
    <>
    <div className='search-bar-container'>
      <TextField
        id="outlined-basic"
        className='search-bar'
        label="Search by city..."
        variant="outlined"
        value={search}
        onChange={(event) => {
          let copy = { ...search }
          copy = event.target.value
          setSearch(copy)
        }} />
        </div>
      <div className='search-btn'><Button className='search-btn' variant='contained' onClick={() => { handleSearchClick() }}>Search</Button></div>
      <div className='weather-widget'>
        {
          location.map((locations, index) => {
            return (
              <SearchLocation key={`location--${index}`} locations={locations} id={index} />
            )
          }
          )
        }
        </div>
    </>
  )
}
