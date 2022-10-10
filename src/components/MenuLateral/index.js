//###IMPORTS###
//Style:
import style from './MenuLateral.module.scss'

//Componentes:
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

//Icones:
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

//itens do menu
import itensMenuLateral from './itens';
import { Button } from '@mui/material';

export default function MenuLateral() {
    const drawerWidth = 240;
    const itensMenuLateral1 = []
    const itensMenuLateral2 = []
    function dividir() {
        itensMenuLateral.filter(item => {
            item.index<4 ? itensMenuLateral1.push(item)
            : itensMenuLateral2.push(item)
        })
    }
    return(
        <Drawer
            className={style.drawer}
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                borderRight: 'none',
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {dividir()}
                    {itensMenuLateral1.map((item) => (
                        <ListItem key={item.text} sx={{padding:0.2}} >
                            <ListItemButton selected={item.index === 0}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText 
                                    classes={{primary: style.listItemText}}
                                    primary={item.text} 
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <Divider/>
                    {itensMenuLateral2.map((item) => (
                        <ListItem key={item.text} sx={{padding:0.2}}>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText 
                                    classes={{primary: style.listItemText}}
                                    primary={item.text} 
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <Divider/>
                </List>
            </Box>
            <Box p={5}>
                <Typography variant='body2'>
                    Faça login para curtir vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                    <Button
                        sx={{}}
                        size='small'
                        variant='outlined'
                        startIcon={<AccountCircleOutlinedIcon/>}
                    >
                    Fazer login
                    </Button>
                </Box>  
            </Box>
            <Divider/>
            
        </Drawer>
    )
}