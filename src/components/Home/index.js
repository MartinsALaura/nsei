//###IMPORTS###
import {React} from 'react';

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
    return (
        <div className={style.home}>      
            <NavBar/> {/* NAVBAR */}
            
            <Box display='flex'>
               <Hidden mdDown>
                    <MenuLateral/> {/* MENU LATERAL */}
               </Hidden>
                <Conteudo/> {/* CONTEÚDO (VÍDEOS) */}
            </Box>
        </div>
    )
}