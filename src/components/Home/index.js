//###IMPORTS###
import {React, useState} from 'react';

//Style:
import style from './home.module.scss'

//componentes:
import {
    Box, 
    Hidden,
} from '@mui/material/';
import MenuLateral from '../MenuLateral'
import Conteudo from '../Conteudo';
import NavBar from '../NavBar'

export default function Home() {
    const [menu, setMenu] = useState(true)

    function ChangeMenu(){
        menu?setMenu(false):setMenu(true)
        console.log(menu)
    }

    return (
        <div className={style.home}>      
            <NavBar menu={menu} setMenu={setMenu} ChangeMenu={ChangeMenu}/> {/* NAVBAR */}
            
            <Box display='flex'>
               <Hidden mdDown>
                    <MenuLateral menu={menu}/> {/* MENU LATERAL */}
               </Hidden>
                <Conteudo/> {/* CONTEÚDO (VÍDEOS) */}
            </Box>
        </div>
    )
}