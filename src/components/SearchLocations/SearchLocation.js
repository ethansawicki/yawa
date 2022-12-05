import React, { useState } from 'react'
import { openWeatherAPI } from '../../apiKeys';
import  ReactWeather, { useOpenWeather } from 'react-open-weather'
import { Box, Button, Modal, Radio, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const SearchLocation = ({locations}) => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [objToDB, setObjToDB] = useState({
        locationSavedName: "",
        locationName: "",
        usersId: "",
        locationLatitude: "",
        locationLongitude: "",
        tagsId: 0
    })
    const userStorage = localStorage.getItem('capstone_user')
    const userObj = JSON.parse(userStorage)
    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
        setObjToDB({
            locationSavedName: "",
            locationName: "",
            usersId: "",
            locationLatitude: "",
            locationLongitude: "",
            tagsId: 0
        })
    }

    const { data, isloading } = useOpenWeather({
        key: openWeatherAPI,
        lat: locations.lat,
        lon: locations.lon,
        lang: 'en',
        unit: 'imperial', // values are (metric,imperial)
      });

    const handleSubmitClick = () => {
        const newLocation = {
            locationSavedName: objToDB.locationSavedName,
            locationName: locations.name,
            usersId: userObj.uid,
            locationLatitude: locations.lat,
            locationLongitude: locations.lon,
            tagsId: objToDB.tagsId
        }
        const submitLocation = async () => {
            const post = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newLocation)
            }
            const res = await fetch(`http://localhost:8088/usersSavedLocations`, post)
            await res.json()
        }
        submitLocation()
    }  
  return (
    <div className='weather-container'>
        <ReactWeather
              data={data}
              lang="en"
              isloading={isloading}
              locationLabel={`${locations.name}, ${locations.state}`}
              unitsLabels={{temperature: "F", windSpeed: 'Mph'}}
              type='auto'
            />
        <div><Button variant='contained'onClick={() => {handleOpen()}}>Add to Saved Locations</Button></div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                    <div>
                        <TextField 
                            className='user-name-input' 
                            label="Enter Name for Location" 
                            variant='standard'
                            value={objToDB.locationSavedName}
                            onChange={
                                (event) => {
                                    const copy = {...objToDB}
                                    copy.locationSavedName = event.currentTarget.value
                                    setObjToDB(copy)
                                }
                            }
                            ></TextField>
                    </div>
                    <div>
                    <Radio
                        value="1"
                        name='vacation'
                        id='vacation'
                        onChange={
                            (event) => {
                                const copy = {...objToDB}
                                copy.tagsId = +event.target.value
                                setObjToDB(copy)
                            }
                        }
                        checked={objToDB.tagsId === 1}
                    >    
                    </Radio>
                    <label name='vacation'>Vacation</label>
                    <Radio
                    value="2"
                    name='hometown'
                    id='hometown'
                    onChange={
                        (event) => {
                            const copy = {...objToDB}
                            copy.tagsId = +event.target.value
                            setObjToDB(copy)
                        }
                    }
                    checked={objToDB.tagsId === 2}
                    >    
                    </Radio>
                    <label name='vacation'>Hometown</label>
                    <Radio
                    value="3"
                    name='2cold4me'
                    id='vacation'
                    onChange={
                        (event) => {
                            const copy = {...objToDB}
                            copy.tagsId = +event.target.value
                            setObjToDB(copy)
                        }
                    }
                    checked={objToDB.tagsId === 3}
                    >
                    </Radio>
                    <label name='vacation'>2cold4me</label>
                    <Radio
                    value="4"
                    name='dream-spot'
                    id='dream-spot'
                    onChange={
                        (event) => {
                            const copy = {...objToDB}
                            copy.tagsId = +event.target.value
                            setObjToDB(copy)
                        }
                    }
                    checked={objToDB.tagsId === 4}
                    >
                    </Radio>
                    <label name='vacation'>Dream Spot</label>
                    </div>
                <Button variant='contained' onClick={() => {handleSubmitClick()}}>Add Location</Button>
            </Box>
        </Modal>
    </div>
  )
}
