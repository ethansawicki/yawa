import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './SearchLocations.css'

export const SearchLocations = () => {
    const [search, setSearch] = useState('')
    

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
        <Button className='search-btn' variant='contained'>Search</Button>
    </div>
  )
}
