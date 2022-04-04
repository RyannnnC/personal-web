import * as React from 'react';
import { Container, Grid } from '@mui/material';
import './home.scss'


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount() {

    }

    render() {
        return (
        <React.Fragment>
            <Container maxWidth='false' className='contactme_container'>
              <Grid container spacing={0}>
                
              </Grid>
            </Container>
        </React.Fragment>
        )
    }
}

export default Projects;
