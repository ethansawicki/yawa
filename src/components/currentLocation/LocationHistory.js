import React, { useEffect, useState } from 'react'
import { openWeatherAPI } from '../../apiKeys'
import { CurrentLocationWidget } from './CurrentLocationWidget'

export const LocationHistory = ({lat, long}) => {
  const [coords, setCoords] = useState([])
  const [cityName, setCityName] = useState([])

  const fetchCoords = async () => {
    const req = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=5&appid=${openWeatherAPI}`)
    const res = await req.json()
    setCoords(res)
  }

  const fetchCityHistory = async () => {
    const req = await fetch(``)
    const res = await req.json()
  }

  useEffect(
    () => {
      fetchCoords()
    },
    []
  )
  
  useEffect(
    () => {
      const getCityName = coords.map((coors) => {return coors.name && coors.country})
      setCityName(getCityName)
    },
    [coords]
  )
  console.log(cityName)

  return (
    <div className='current-location'>
      <CurrentLocationWidget />
    </div>
  )
}
