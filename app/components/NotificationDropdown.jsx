"use client"
import MenuItem from '@mui/material/MenuItem';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar, Badge, Divider, IconButton, ListItemIcon, Menu, Tooltip } from '@mui/material'
import { useState } from 'react';

const ITEM_HEIGHT = 100;

function NotificationDropdown() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ color:'black' }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Badge color="success" variant="dot">
                <NotificationsNoneOutlinedIcon  />
            </Badge>     
          </IconButton>
        </Tooltip>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '30rem',
              },
            sx: {
              overflowY: 'scroll',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
         <ul className='px-3'>
            <li className='border-b border-slate-200 py-3'>
                <p className='text-xl font-semibold mb-2'>Material UI v6 is out now</p>
                <p className='text-[14.5px]'>This major release includes CSS variables support, experimental opt-in CSS extraction, and many more improvements. Check out the announcement blog post.</p>
            </li>
            <li className='border-b border-slate-200 py-3'>
                <p className='text-xl font-semibold mb-2'>Material UI v6 is out now</p>
                <p className='text-[14.5px]'>This major release includes CSS variables support, experimental opt-in CSS extraction, and many more improvements. Check out the announcement blog post.</p>
            </li>
            <li className='border-b border-slate-200 py-3'>
                <p className='text-xl font-semibold mb-2'>Material UI v6 is out now</p>
                <p className='text-[14.5px]'>This major release includes CSS variables support, experimental opt-in CSS extraction, and many more improvements. Check out the announcement blog post.</p>
            </li>
            <li className='border-b border-slate-200 py-3'>
                <p className='text-xl font-semibold mb-2'>Material UI v6 is out now</p>
                <p className='text-[14.5px]'>This major release includes CSS variables support, experimental opt-in CSS extraction, and many more improvements. Check out the announcement blog post.</p>
            </li>
            <li className='border-b border-slate-200 py-3'>
                <p className='text-xl font-semibold mb-2'>Material UI v6 is out now</p>
                <p className='text-[14.5px]'>This major release includes CSS variables support, experimental opt-in CSS extraction, and many more improvements. Check out the announcement blog post.</p>
            </li>
        </ul>
      </Menu>
    </>
  )
}

export default NotificationDropdown;