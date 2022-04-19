import * as React from 'react';
import { Container } from '@mui/material';
import './component.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {

    }

    render() {
        return (
        <React.Fragment>
        <Container maxWidth='false' className='footer'>
            <p style={{ fontWeight: "normal", color: "black", margin:0 }}>
              Powered by Ryan Cai @ 2022
            </p>
        </Container>
        </React.Fragment>
        )
    }
}

export default Footer;