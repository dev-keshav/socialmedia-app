import styled from '@emotion/styled'
import { Android, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",

})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
    width: "30%"
}))

const IconSearch = styled(Box)(({ theme }) => ({
    backgroundColor: "while",
    display: "flex",
    gap: "20px",
    alignItems: "center",
    // [theme.breakpoints.up("sm")]: {
    //     display: "none"
    // }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "10px",
    // [theme.breakpoints.up("sm")]: {
    //     display: "flex"
    // }
}))


const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyleToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>keshav</Typography>
                <Android sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='search' /></Search>
                <IconSearch>
                    <Badge badgeContent={4} color="error" sx={{ display: { xs: "none", sm: "flex" } }}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={7} color="error" sx={{ display: { xs: "none", sm: "flex" } }}>
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ display: { xs: "none", sm: "flex" }, width: 30, height: 30 }} src="/broken-image.jpg" 
                    onClick={(e)=>setOpen(true)}
                    />
                    <UserBox sx={{ display: { xs: "flex", sm: "none" } }} onClick={(e)=>setOpen(true)} >
                        <Avatar sx={{ width: 30, height: 30 }} src="/broken-image.jpg" />
                        <Typography variant='span'>Keshav</Typography>
                    </UserBox>
                </IconSearch>
            </StyleToolbar>


        
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClick={(e)=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar