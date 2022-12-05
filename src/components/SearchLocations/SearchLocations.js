import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { openWeatherAPI } from '../../apiKeys'
import { SearchLocation } from './SearchLocation'
import './SearchLocations.css'

export const SearchLocations = () => {
    const [search, setSearch] = useState('')
    const [location, setLocation] = useState([])

    const fetchCoords = async () => {
      const req = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${openWeatherAPI}`)
      const res = await req.json()
      setLocation(res)
      setSearch('')
    }
    
  return (
    <div className='search-bar-container'>
        <TextField
          id="outlined-basic"
          className='search-bar'
          label="Search"
          variant="outlined" 
          value={search} 
          onChange={(event) => {
              setSearch(event.target.value)
          }} />
        <div><Button className='search-btn' variant='contained' onClick={() => {fetchCoords()}}>Search</Button></div>
        {
          location.map((locations, index) => {
            return (
              <SearchLocation key={`location--${index}`} locations={locations} id={index}/>
              )
            }
          )
        }
    </div>
  )
}
