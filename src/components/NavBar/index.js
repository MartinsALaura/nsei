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

//ícones:
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';

//Imagens
import Logo from '../../img/preto.png'

export default function NavBar() {
    const [search, setSearch] = useState('')
    
    return (
        <AppBar className={style['AppBar']} color='inherit' style={{zIndex: 10}}>
            <Toolbar>
                {/* MENU */}
                <IconButton className={style.icons} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
                    <MenuIcon/>
                </IconButton>

                <img src={Logo} alt='logo' className={style.logo}/> {/* LOGO */}
                <div className={style['grow']}/> {/*--> Espaçamento */}
                
                {/* BARRA DE PESQUISA */} 
                <div className={style['search-container']}>
                    <div className={style['search-box']}>
                        <input 
                            type='text' 
                            placeholder='pesquisar' 
                            value={search} 
                            onChange={(e) => {setSearch(e.target.value)}}
                        />
                        {search !== "" && <span className="material-symbols-rounded" onClick={()=> setSearch("")}>
                            close
                        </span>}
                    </div>
                    <div className={style['search-button']}>
                        <span className='material-symbols-rounded'>
                            search
                        </span>
                    </div>
                    <div className={style["search-mic"]}>
                        <span className={'material-symbols-rounded active'}>
                            mic
                        </span>
                    </div>
                </div>
                    
                {/* BOTÃO "MORE" */}
                <More/>

                {/* BOTÃO DE LOGIN */}
                <div className={style['login-button']}>
                    <Button variant='outlined'  startIcon={<AccountCircleOutlinedIcon/>}>
                        Fazer Login
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}