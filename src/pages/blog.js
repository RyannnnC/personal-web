import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './pages.scss'
import { Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function Blog(props) {
    const { t } = useTranslation("translation");

    return (
        <React.Fragment>
            <Container sx={{p:0}} maxWidth='false' className='blog_container'>
                <Container maxWidth='xl'>
                <Grid container spacing={0} pt={3}>
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                        <h1 className="centered font-bold"> 
                            {t('my')} 
                            <span className="font-blue">{t('blog')}</span>
                        </h1>           
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
                <Carousel autoplay>
                    <div >
                        <h3 style={contentStyle}>Blog Function in Development</h3>
                    </div>
                    <div >
                        <h3 style={contentStyle}>Blog Function in Development</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>Blog Function in Development</h3>
                    </div>
                </Carousel>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Blog;
