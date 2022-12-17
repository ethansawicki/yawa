import React, { Suspense, useEffect, useState } from 'react'
import { CurrentLocationWidget } from './CurrentLocationWidget'
import './CurrentLocation.css'
import { openWeatherAPI } from '../../apiKeys'
import { fetchComments, fetchDefaultComment } from '../API/FetchCalls'


export const CurrentLocation = ({lat, long}) => {
    const [locationName, setLocationName] = useState([])
    const [comment, setComment] = useState([])

    const fetchLocationName = async () => {
        const req = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${openWeatherAPI}`)
        const resp = await req.json()
        setLocationName(resp)
      }

    useEffect(
        () => {
            fetchLocationName()
        },
        [lat, long]
    )
    
    useEffect(
        () => {
          if(localStorage.getItem('capstone_user')){
          const getComment = async () => {
            const number = Math.floor(Math.random() * 13) + 1
            const comments = await fetchComments(number)
            setComment(comments)
            } 
            getComment()
          } else {
            const getDefaultComment = async () => {
                const comments = await fetchDefaultComment()
                setComment(comments)
            }
            getDefaultComment()
          }
        },
        []
      )
        console.log(comment)
    return (
        <div className='current-location'>
            <h2>Current Conditions</h2>
            <CurrentLocationWidget lat={lat} long={long} locationName={locationName}/>
            <h2>Yawa AI: {comment.comment}</h2>
        </div>
    )
}