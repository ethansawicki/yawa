import React, { useEffect, useState } from 'react'
import { Box, Button, Modal, Radio, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

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

export const EditSavedLocation = () => {
    const navigate = useNavigate()
    const {locationId} = useParams()
    const [open, setOpen] = useState(true)
    const [editObj, setEdit] = useState({
        id: 0,
        locationSavedName: "",
        locationName: "",
        usersId: "",
        locationLatitude: 0,
        locationLongitude: 0,
        tagsId: 0
    })

    const handleClose = () => {
        setOpen(false)
        navigate('/SavedLocations')
    }

    const fetchLocationEdit = async () => {
        const req = await fetch(`http://localhost:8088/usersSavedLocations/${locationId}`)
        const resp = await req.json()
        setEdit(resp)
    }
    
    const handleUpdateBtn = () => {
        const updateLocation = async () => {
            const put = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editObj)
            }
            const response = await fetch(`http://localhost:8088/usersSavedLocations/${editObj.id}`, put)
            await response.json()
            handleClose()
        }
        updateLocation()
    }

    useEffect(
        () => {
            fetchLocationEdit()
        },
        []
    )

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>Edit your saved location</div>
                    <div>
                        <TextField
                            className='user-name-input'
                            label="Enter Name for Location"
                            variant='standard'
                            value={editObj.locationSavedName}
                            onChange={
                                (event) => {
                                    const copy = { ...editObj }
                                    copy.locationSavedName = event.currentTarget.value
                                    setEdit(copy)
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
                                    const copy = { ...editObj }
                                    copy.tagsId = +event.target.value
                                    setEdit(copy)
                                }
                            }
                            checked={editObj.tagsId === 1}
                        >
                        </Radio>
                        <label name='vacation'>Vacation</label>
                        <Radio
                            value="2"
                            name='hometown'
                            id='hometown'
                            onChange={
                                (event) => {
                                    const copy = { ...editObj }
                                    copy.tagsId = +event.target.value
                                    setEdit(copy)
                                }
                            }
                            checked={editObj.tagsId === 2}
                        >
                        </Radio>
                        <label name='vacation'>Hometown</label>
                        <Radio
                            value="3"
                            name='2cold4me'
                            id='vacation'
                            onChange={
                                (event) => {
                                    const copy = { ...editObj }
                                    copy.tagsId = +event.target.value
                                    setEdit(copy)
                                }
                            }
                            checked={editObj.tagsId === 3}
                        >
                        </Radio>
                        <label name='vacation'>2cold4me</label>
                        <Radio
                            value="4"
                            name='dream-spot'
                            id='dream-spot'
                            onChange={
                                (event) => {
                                    const copy = { ...editObj }
                                    copy.tagsId = +event.target.value
                                    setEdit(copy)
                                }
                            }
                            checked={editObj.tagsId === 4}
                        >
                        </Radio>
                        <label name='vacation'>Dream Spot</label>
                    </div>
                    <Button variant='contained' onClick={() => {handleUpdateBtn()}}>Update Location</Button>
                </Box>
            </Modal>
        </div>
    )
}
