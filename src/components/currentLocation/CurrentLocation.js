import React, { useEffect, useState } from 'react'
import { CurrentLocationWidget } from './CurrentLocationWidget'

export const CurrentLocation = () => {
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        })
    }

    useEffect(
        () => {
            getLocation()
        },
        []
    )
    
    return (
        <div>
            <CurrentLocationWidget lat={lat} long={long}/>
        </div>
    )
}
