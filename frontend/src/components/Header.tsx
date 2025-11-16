import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Logo from './shared/Logo'
import { useAuth } from '../context/AuthContext';


const Header = () => {

  const auth = useAuth();
  return (
    <AppBar 
        sx={{bgcolor:"transparent", position:"static", boxShadow:"none"}}
        >

        <Toolbar sx={{display:"flex"}}>
            <Logo />
            <div>/////////

            </div>
        </Toolbar>
        
    </AppBar>
  )
};

export default Header