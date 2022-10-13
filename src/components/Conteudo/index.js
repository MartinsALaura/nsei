//Componentes MUI:
import { 
    Box,
    Typography,
    Toolbar,
    Grid,
} from "@mui/material"

//Array de objetos (vídeos):
import videos from './videos'

export default function Content() {
    return (
        <Box p={8}>
            <Toolbar/>
            <Typography
                variant='h5'
                color='#000'
                style={{fontWeight: 600}}
            >
                Recomendados
            </Typography>
            <Grid container spacing={4}>
                {videos.map((item, index) => (
                    <Grid item key={index} lg={3} md={4} xs={12}>
                        <Box>
                            <img
                                style={{width: '100%'}}
                                alt={item.title}    
                                src={item.thumb}
                            />
                            <Box>
                                <Typography
                                    style={{fontWeight:600}}
                                    gutterBottom
                                    variant='body1'
                                    color='textPrimary'
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    display='block'
                                    variant='body2'
                                    color='textSecondary'
                                >
                                    {item.channel}
                                </Typography>
                                <Typography variant='body2' color='textSecondary'>
                                    {`${item.views} . ${item.date}`}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}