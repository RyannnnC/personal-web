import * as React from 'react';
import { Container, Grid } from '@mui/material';
import './home.scss'


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
              <Grid container spacing={0}>
                <Grid item xs={2}/>
                <Grid item xs={8}>
                    <h1 class="title font-xxl font-white">
                        RY
                        <span class="font-blue">A</span>
                        N   
                        <br/>
                        <span>
                            C
                            <span class="font-blue">A</span>
                            I
                        </span>
                    </h1>
                    <h3 class="font-blue font-xl subtitle"/>
                </Grid>
                <Grid item xs={2}/>
              </Grid>
            </Container>
        </React.Fragment>
        )
    }
}

export default Home;
