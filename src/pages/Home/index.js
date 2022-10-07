//###IMPORTS###
import React from 'react';

//Style:
import style from './home.module.scss'

//componentes:
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'; 

//ícones:
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Home() {
    return (
        <div className={style.home}>
            {/* NAVBAR */}
            <AppBar position="static" color='inherit'>
                <Toolbar>
                    {/* MENU */}
                    <IconButton className={style.icons} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
                        <MenuIcon/>
                    </IconButton>

                    <div className={style['grow']}/> {/*--> Espaçamento */}

                    {/* BOTÃO "MORE" */}
                    <IconButton color="inherit" sx={{ mr: 1 }}>
                        <MoreVertIcon fontSize="small"/>
                    </IconButton>

                    {/* BOTÃO DE LOGIN */}
                    <div className={style['login-button']}>
                        <Button variant='outlined'  startIcon={<AccountCircleOutlinedIcon/>}>
                            Fazer Login
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}