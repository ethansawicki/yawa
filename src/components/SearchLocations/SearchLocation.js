import React, { useState } from 'react'
import { openWeatherAPI } from '../../apiKeys';
import  ReactWeather, { useOpenWeather } from 'react-open-weather'
import { Box, Button, Modal, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const SearchLocation = ({locations}) => {
    const [open, setOpen] = useState(false)
    // const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleOpen = () => {
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    }

    const { data, isloading } = useOpenWeather({
        key: openWeatherAPI,
        lat: locations.lat,
        lon: locations.lon,
        lang: 'en',
        unit: 'imperial', // values are (metric,imperial)
      });

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
        <div><Button variant='contained' onClick={() => {handleOpen()}}>Add to Saved Locations</Button></div>
    </div>
  )
}
