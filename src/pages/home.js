import * as React from 'react';
import { Container } from '@mui/material';
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
            <Container maxWidth='false' class='home_container'>
              <div style={{height: 1000}}>
              </div>
            </Container>
        </React.Fragment>
        )
    }
}

export default Home;
