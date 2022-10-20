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
            <h3>
              Powered by Ryan Cai @ 2022
            </h3>
        </Container>
        </React.Fragment>
        )
    }
}

export default Footer;