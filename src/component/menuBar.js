import * as React from 'react';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import './component.css'

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            itemIds:[0, 1, 2, 3, 4],
        };
    }
    
    componentDidMount() {

    }

    render() {
        return (
        <React.Fragment key='left'>
            <Container maxWidth='false' className='header' menu-open={this.state.open.toString()}>
            </Container>
            <Button 
                classes='buttonIcon'
                variant="contained"
                sx={{ 
                  top: '2em',
                  left: '2em',
                  backgroundColor: '#fff', 
                  border: 0, 
                  boxShadow:0,
                  position: 'fixed', 
                  '&:hover':{
                    backgroundColor:'#fff',
                  }
                }}
                onClick={()=>this.setState({open:!this.state.open})}>
                <MenuIcon
                  sx = {{ color: 'black' }}
                  fontSize='large'
                />
              </Button>
        </React.Fragment>
        )
    }
}

export default MenuBar;