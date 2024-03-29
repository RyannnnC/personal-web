import * as React from 'react';
import { Container, Grid } from '@mui/material';
import './pages.scss'


class Home extends React.Component {

    render() {
        return (
        <React.Fragment>
            <Container maxWidth='false' className='home_container'>
              <Grid container spacing={0}>
                <Grid item xs={3}/>
                <Grid item xs={7}>
                    <h1 className="title font-xxl font-white font-bold">
                        RY
                        <span className="font-blue">A</span>
                        N   
                        <br/>
                        <span>
                            C
                            <span className="font-blue">A</span>
                            I
                        </span>
                    </h1>
                    <h3 className="font-white font-xl subtitle"/>
                </Grid>
                <Grid item xs={2}/>
              </Grid>
            </Container>
        </React.Fragment>
        )
    }
}

export default Home;
