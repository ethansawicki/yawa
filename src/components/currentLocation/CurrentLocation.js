import React from 'react'
import { CurrentLocationWidget } from './CurrentLocationWidget'
import './CurrentLocation.css'


export const CurrentLocation = ({lat, long}) => {

    return (
        <div className='current-location'>
            <CurrentLocationWidget lat={lat} long={long}/>
        </div>
    )
}
