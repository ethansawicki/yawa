import React, { useEffect, useState } from 'react'
import { SavedLocation } from './SavedLocation'
import { Box } from '@mui/material';


export const SavedLocations = () => {
  const [savedLocation, setSavedLocation] = useState([])

  const fetchUserLocations = async () => {
    const req = await fetch(`http://localhost:8088/usersSavedLocations`)
    const resp = await req.json()
    setSavedLocation(resp)
  }

  useEffect(
    () => {
      fetchUserLocations()
    },
    []
  )

  return (
    <Box>
      {
        savedLocation.map((location) => {
          return (
            <SavedLocation key={location.id} location={location} />
          )
        })
      }
    </Box>
  )
}
