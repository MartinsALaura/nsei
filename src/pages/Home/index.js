//###IMPORTS###
import React from 'react';

//Style:
import style from './home.module.scss'

//componentes:
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'; 
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


//ícones:
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemIcon from '@mui/material/ListItemIcon';

//Imagens
import Logo from '../../img/preto.png'

export default function Home() {
    const drawerWidth = 240;

    return (
        <div className={style.home}>
            {/* NAVBAR */}
            <AppBar className={style.AppBar} color='inherit'>
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
            
            {/* MENU LATERAL */}
            <Drawer
                variant="permanent"
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}