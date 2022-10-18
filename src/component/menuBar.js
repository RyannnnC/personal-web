import * as React from 'react';
import { Container, Drawer, List, ListItem, ListItemText, ListItemIcon, ListItemButton, Button  } from '@mui/material';
import { 
  Menu,
  Home,
  Info,
  MenuBook,
  Work,
  SpeakerNotes,
  SportsEsports,
  Call
} from '@mui/icons-material';
import './component.scss'
import useWidth from '../helpers/detectWidth';

const menuOptions = {
    home: {
        name: 'Home',
        icon: <Home />,
    },
    about: {
        name: 'About',
        icon: <Info />,
    },
    skills: {
        name: 'Skills',
        icon: <SpeakerNotes />,
    },
    career: {
        name: 'Career',
        icon: <Work />,
    },
    blogs: {
        name: 'Blogs',
        icon: <MenuBook />,
    },
    games: {
        name: 'Games',
        icon: <SportsEsports />,
    },
    contacts: {
        name: 'Contacts',
        icon: <Call />,
    }
}

function MenuBar (props) {
    const [open, setOpen] = React.useState(false);
    const c_width = useWidth();
    const [selected, setSelected] = React.useState('home');

    React.useEffect(() => {
      console.log('scroll to', window.scrollY);
    },[window.scrollY])

    return (
      <React.Fragment key='left'>
          { c_width === 'xs' ? 
            <Drawer 
              anchor='left'
              open={open}
              onClose={() => setOpen(false)}
            >
              <List sx={{paddingTop: '100px'}}>
                {Object.values(menuOptions).map((option,index) => {
                    return (
                      <ListItem key={"menuItem" + index}>
                        <ListItemButton>
                          <ListItemIcon>
                            {option.icon}
                          </ListItemIcon>
                          <ListItemText primary={option.name} />
                        </ListItemButton>
                      </ListItem>
                    )
                })}
              </List>
            </Drawer>
          : 
            <Drawer anchor='top' variant="permanent" maxWidth='false'>
              <List 
                sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingLeft: '100px', paddingTop:0, paddingBottom:0 }}
              >
                {Object.values(menuOptions).map((option,index) => {
                    return (
                      <ListItem key={"menuItem" + index} sx={{display: open ? "flex" : "none" }}>
                        <ListItemButton sx={{flexDirection:"column"}}>
                          <ListItemIcon>
                            {option.icon}
                          </ListItemIcon>
                          <ListItemText primary={option.name} />
                        </ListItemButton>
                      </ListItem>
                    )
                })}
              </List>
            </Drawer>
          }
          <Button 
                variant="outlined"
                sx={{ 
                  top: '2em',
                  left: '2em',
                  zIndex: 1201,
                  background: 'linear-gradient(to right, #4b6efc, #6ebffa)', 
                  border: 0, 
                  boxShadow:0,
                  position: 'fixed', 
                  '&:hover':{
                    filter: 'brightness(150%)',
                  }
                }}
                onClick={()=>setOpen(!open)}>
                <Menu
                  sx = {{ color: 'white' }}
                  fontSize='large'
                />
          </Button>
      </React.Fragment>
    )
}

export default MenuBar;