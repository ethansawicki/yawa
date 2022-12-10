import React, { useEffect, useState } from 'react'

export const LocationHistory = ({lat, long}) => {
  const [history, setHistory] = useState([])

  const fetchHistory = async () => {
    const req = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?&aggregateHours=24&startDateTime=2019-06-13T00:00:00&endDateTime=2019-06-20T00:00:00&unitGroup=us&contentType=json&dayStartTime=0:0:00&dayEndTime=0:0:00&location=Nashville-Davidson,Tennessee,US&key=VXWFW7AVK6SL6F9QYNSB2PXTT`)
    const resp = await req.json()
    setHistory(resp)
  }

  useEffect(
    () => {
      fetchHistory()
    },
    []
  )
  console.log(history)
  return (
    <div className='current-location'>
      
    </div>
  )
}
