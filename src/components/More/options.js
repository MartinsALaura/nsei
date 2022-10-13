//Icones:
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';

const options = [
    {
        text:'Seus dados no Youtube',
        icon:<SecurityOutlinedIcon/>,
    },
    {
        text:'Aparência: tema do dispositivo',
        icon: <Brightness3OutlinedIcon/>,
    },
    {
        text:'Idioma: Português',
        icon: <TranslateOutlinedIcon/>,
    },
    {
        text:'Modo Restrito: desativado',
        icon: <AdminPanelSettingsOutlinedIcon/>,
    },
    {
        text:'Local: Brasil',
        icon: <LanguageOutlinedIcon/>,
    },
    {
        text:'Atalhos do teclado',
        icon: <KeyboardAltOutlinedIcon/>,
    },
    {
        text:'Configurações',
        icon: <SettingsOutlinedIcon/>, 
    },
    {
        text:'Ajuda',
        icon: <HelpOutlineOutlinedIcon/>,
    },
    {
        text:'Enviar feedback',
        icon: <AnnouncementOutlinedIcon/>,
    },
]
export default options