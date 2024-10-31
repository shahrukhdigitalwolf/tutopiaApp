"use client"
import MenuItem from '@mui/material/MenuItem';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Avatar, Divider, IconButton, ListItemIcon, Menu, Tooltip } from '@mui/material'
import { useState } from 'react';

function ProfileDropdown() {

    const [profileDropdown, setProfileDropdown] = useState(null);
    const open = Boolean(profileDropdown);
    const profileDropdownClick = (event) => {
        setProfileDropdown(event.currentTarget);
    };
    const profileDropdownClose = () => {
        setProfileDropdown(null);
    };

  return (
    <>
        <Tooltip title="Account settings">
          <IconButton
            onClick={profileDropdownClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
        <Menu
        anchorEl={profileDropdown}
        id="account-menu"
        open={open}
        onClose={profileDropdownClose}
        onClick={profileDropdownClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
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
        <MenuItem onClick={profileDropdownClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={profileDropdownClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={profileDropdownClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={profileDropdownClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={profileDropdownClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

export default ProfileDropdown