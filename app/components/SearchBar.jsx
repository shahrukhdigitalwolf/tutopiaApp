import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton, Tooltip } from '@mui/material'

function SearchBar() {
  return (
    <>
    <Tooltip title="Search">
        <IconButton
            sx={{ color:'black' }}
            >
            <SearchOutlinedIcon/>
        </IconButton>  
    </Tooltip>
    </>
  )
}

export default SearchBar