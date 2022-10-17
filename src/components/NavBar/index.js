//###IMPORTS###
import {React, useState} from 'react';

//Style:
import style from './navbar.module.scss'

//componentes:
import {
    AppBar,
    IconButton,
    Toolbar,
    Button,
} from '@mui/material/';
import More from '../More'
import Box from "@mui/material/Box"

//ícones:
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

//Imagens
import Logo from '../../img/preto.png'

export default function NavBar({menu, setMenu, ChangeMenu}) {
    const [search, setSearch] = useState('')
    
    return (
        <AppBar className={style['AppBar']} sx={{boxShadow: 'none', zIndex: 10000}} color='inherit'>
            <Toolbar style={{justifyContent: 'space-between'}}>
                {/* MENU */}
                <Box style={{display: "flex", alignItems: 'center'}}>
                    <IconButton 
                        className={style.icons} 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu" 
                        sx={{ mr: 2}}
                        onClick={ChangeMenu}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <img src={Logo} alt='logo' className={style.logo}/> {/* LOGO */}
                </Box>
                
                {/* BARRA DE PESQUISA */} 
                <div className={style['search-container']}>
                    <div className={style['search-box']}>
                        <input 
                            type='text' 
                            placeholder='Pesquisar' 
                            value={search} 
                            onChange={(e) => {setSearch(e.target.value)}}
                        />
                    </div>
                    
                    <button
                        aria-label='search' 
                        style={{ border:'none', color: '#000', backgroundColor: '#f6f6f6'}} 
                    > 
                        
                        <span className='material-symbols-rounded'>
                                search
                        </span>
                        
                    </button>
                    <div className={style["search-mic"]}>
                        <IconButton><KeyboardVoiceIcon sx={{color:'#000'}}/></IconButton>
                    </div>
                </div>
                
                <Box style={{display: "flex", alignItems: 'center'}}>
                    {/* BOTÃO "MORE" */}
                    <More/>

                    {/* BOTÃO DE LOGIN */}
                    <div className={style['login-button']}>
                        <Button variant='outlined'  startIcon={<AccountCircleOutlinedIcon/>}>
                            Fazer Login
                        </Button>
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    )
}