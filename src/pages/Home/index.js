//###IMPORTS###
import {React, useState} from 'react';

//Style:
import style from './home.module.scss'
//import { makeStyles } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

//componentes:
import {
    AppBar,
    Box, 
    IconButton,
    Toolbar,
    Button,
    Hidden,
} from '@mui/material/';
import MenuLateral from '../../components/MenuLateral'
import Conteudo from '../../components/Conteudo';

//ícones:
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
//Imagens
import Logo from '../../img/preto.png'

export default function Home() {
    return (
        <div className={style.home}>
            {/* NAVBAR */}
            <AppBar className={style['AppBar']} color='inherit'>
                <Toolbar>
                    {/* MENU */}
                    <IconButton className={style.icons} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
                        <MenuIcon/>
                    </IconButton>

                    <img src={Logo} alt='logo' className={style.logo}/> {/* LOGO */}
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
            
            <Box display='flex'>
               <Hidden mdDown>
                    <MenuLateral/> {/* MENU LATERAL */}
               </Hidden>
                <Conteudo/> {/* CONTEÚDO (VÍDEOS) */}
            </Box>
        </div>
    )
}