import * as React from 'react';
import { Container } from '@mui/material';
import background from '../assets/home-bg.jpg';
import './home.css'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {

    }

    render() {
        return (
        <React.Fragment>
            <Container maxWidth='false' style={{ padding: 0 }} className='home_container'>
                <div 
                    className='home-bg'
                    style={{
                        backgroundImage: `url(${background})`
                    }}
                >
                </div>
            </Container>
        </React.Fragment>
        )
    }
}

export default Home;