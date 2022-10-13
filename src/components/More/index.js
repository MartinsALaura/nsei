//###IMPORTS###
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography } from '@mui/material';

//Opções/itens do menu:
import options from './options'

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </IconButton>
      <Menu
          anchorEl={anchorEl}
          id="more-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
        >
          <MenuItem key={options[0].text} onClick={handleClose}>
            <ListItemIcon>{options[0].icon}</ListItemIcon>
            <ListItemText>{options[0].text}</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem key={options[1].text} onClick={handleClose}>
            <ListItemIcon>{options[1].icon}</ListItemIcon>
            <ListItemText>{options[1].text}</ListItemText>
            <Typography variant="body2" color="text.secondary">
              <ChevronRightIcon/>
            </Typography>
          </MenuItem>
          <MenuItem key={options[2].text} onClick={handleClose}>
            <ListItemIcon>{options[2].icon}</ListItemIcon>
            <ListItemText>{options[2].text}</ListItemText>
            <Typography variant="body2" color="text.secondary">
              <ChevronRightIcon/>
            </Typography>
          </MenuItem>
          <MenuItem key={options[3].text} onClick={handleClose}>
            <ListItemIcon>{options[3].icon}</ListItemIcon>
            <ListItemText>{options[3].text}</ListItemText>
            <Typography variant="body2" color="text.secondary">
              <ChevronRightIcon/>
            </Typography>
          </MenuItem>
          <MenuItem key={options[4].text} onClick={handleClose}>
            <ListItemIcon>{options[4].icon}</ListItemIcon>
            <ListItemText>{options[4].text}</ListItemText>
            <Typography variant="body2" color="text.secondary">
              <ChevronRightIcon/>
            </Typography>
          </MenuItem>
          <MenuItem key={options[5].text} onClick={handleClose}>
            <ListItemIcon>{options[5].icon}</ListItemIcon>
            <ListItemText>{options[5].text}</ListItemText>
          </MenuItem>
          <Divider/>
          <MenuItem key={options[6].text} onClick={handleClose}>
            <ListItemIcon>{options[6].icon}</ListItemIcon>
            <ListItemText>{options[6].text}</ListItemText>
          </MenuItem>
          <Divider/>
          <MenuItem key={options[7].text} onClick={handleClose}>
            <ListItemIcon>{options[7].icon}</ListItemIcon>
            <ListItemText>{options[7].text}</ListItemText>
          </MenuItem>
          <MenuItem key={options[8].text} onClick={handleClose}>
            <ListItemIcon>{options[8].icon}</ListItemIcon>
            <ListItemText>{options[8].text}</ListItemText>
          </MenuItem>
      </Menu>
    </div>
  );
}
