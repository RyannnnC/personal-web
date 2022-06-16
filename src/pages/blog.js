import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './pages.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const contentStyle = {
    height: '250px',
    width: '100%',
    color: '#fff',
    lineHeight: '250px',
    textAlign: 'center',
    background: '#000',
};

function Blog(props) {
    const { t } = useTranslation("translation");

    return (
        <React.Fragment>
            <Container sx={{p:0}} maxWidth='false' className='blog_container'>
                <Container maxWidth='xl'>
                <Grid container spacing={0} >
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                        <h1 className="centered font-white"> 
                            {t('my')} 
                            <span className="font-blue">Blogs </span>
                        </h1>           
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
                <Grid container sx={{pt:2,bt:2}} style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Carousel autoPlay={true} showStatus={false} infiniteLoop={true}>
                        <div>
                            <h3 style={contentStyle}>Blog Function in Development</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>Blog Function in Development</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>Blog Function in Development</h3>
                        </div>
                    </Carousel>
                </Grid>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Blog;
