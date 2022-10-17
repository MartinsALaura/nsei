//###IMPORTS###
//Componentes:
import {
    ListSubheader,
    Typography,
    Divider,
    Toolbar,
    ListItemButton,
    ListItem,
    List,
    Box,
    Drawer,
    Button
} from '@mui/material';

//Icones:
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

//itens do menu
import itensMenuLateral from './itens';

export default function MenuLateral({menu}) {
    const itensMenuLateral1 = itensMenuLateral.filter(item => {
        if(item.index <4){return item}
        else{return ''}
    })
    const itensMenuLateral2 = itensMenuLateral.filter(item => {
        if(item.index >=4 && item.index<6){return item}
        else{return ''}
    })
    const itensMenuLateral3 = itensMenuLateral.filter(item => {
        if(item.index >=6 && item.index<14){return item}
        else{return ''}
    })
    const itensMenuLateral4 = itensMenuLateral.filter(item => {
        if(item.index >=15 && item.index<19){return item}
        else{return ''}
    })
    const itensMenuLateral5 = itensMenuLateral.filter(item => {
        if(item.index >=19 && item.index<23){return item}
        else{return ''}
    })
    const itensMenuLateralSmall= itensMenuLateral.filter(item => {
        if(item.index <6){return item}
        else{return ''}
    })

    return(
        <div>
            {menu === true?
                <Drawer
                    variant="permanent"
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
                        borderRight: "none",
                        zIndex: 5 
                    }}
                >
                    <Toolbar />
                    <Box>
                        <List sx={{ color: '#030303'}}>
                            {itensMenuLateral1.map((item) => (
                                <ListItem
                                    key={item.text}
                                    sx={{ paddingBottom: 0.2, paddingTop: 0.2 }}
                                >
                                    <ListItemButton selected={item.index === 0}>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <Typography
                                            sx={{fontSize: '14px', color: '#030303'}}
                                        >{item.text}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <Divider />
                            {itensMenuLateral2.map((item) => (
                                <ListItem
                                    key={item.text}
                                    sx={{ paddingBottom: 0.2, paddingTop: 0.2 }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <Typography
                                            sx={{fontSize: '14px', color: '#030303'}}
                                        >{item.text}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <Divider />
                        </List>
                        <Box p={5}>
                            <Typography variant="body2">
                                Faça login para curtir vídeos, comentar e se inscrever.
                            </Typography>
                            <Box mt={2}>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    startIcon={<AccountCircleOutlinedIcon />}
                                >
                                    Fazer login
                                </Button>
                            </Box>
                        </Box>
                        <Divider />
                        <List>
                            <ListSubheader>EXPLORAR</ListSubheader>
                            {itensMenuLateral3.map((item) => (
                                <ListItem
                                    key={item.text}
                                    sx={{ paddingBottom: 0.2, paddingTop: 0.2 }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <Typography
                                            sx={{fontSize: '14px', color: '#030303'}}
                                        >{item.text}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <Divider />
                            <ListItem
                                key={itensMenuLateral[15].text}
                                sx={{ paddingBottom: 0.2, paddingTop: 0.2 }}
                            >
                                <ListItemButton>
                                    <ListItemIcon>{itensMenuLateral[15].icon}</ListItemIcon>
                                    <Typography
                                            sx={{fontSize: '14px', color: '#030303'}}
                                        >{itensMenuLateral[15].text}
                                        </Typography>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListSubheader>MAIS DO YOUTUBE</ListSubheader>
                            {itensMenuLateral4.map((item) => (
                                <ListItem
                                    key={item.text}
                                    sx={{ paddingBottom: 0.2, paddingTop: 0.2 }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <Typography
                                            sx={{fontSize: '14px', color: '#030303'}}
                                        >{item.text}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <Divider />
                            {itensMenuLateral5.map((item) => (
                                <ListItem
                                    key={item.text}
                                    sx={{ paddingBottom: 0.2, paddingTop: 0.2 }}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <Typography
                                            sx={{fontSize: '14px', color: '#030303'}}
                                        >{item.text}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>            
            :
                <Drawer
                    variant="permanent"
                    sx={{
                        width: 70,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: 70, boxSizing: "border-box" },
                        borderRight: "none",
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: "auto" }}>
                        <List>
                            {itensMenuLateralSmall.map((item) => (
                                <ListItem
                                    key={item.text}
                                    sx={{ paddingBottom: 0.2, paddingTop: 0.2, paddingLeft: 0, paddingRight: 0}}
                                >
                                    <ListItemButton selected={item.index === 0} sx={{display: 'block'}}>
                                        <ListItemIcon 
                                            sx={{
                                                paddingRight:0,
                                                minWidth:0,
                                                align: 'center',
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <Typography
                                            sx={{fontSize: '10px'}}
                                        >
                                            {item.text}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            
            }
        </div>
    )
}