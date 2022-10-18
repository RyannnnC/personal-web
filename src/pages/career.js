import * as React from 'react';
import { Container, Grid , Button, Divider} from '@mui/material';
import { useTranslation } from 'react-i18next';
import aicare from '../assets/aicare.png'
import bcuworld from '../assets/bcuworld.png'
import alliance from '../assets/alliance.jpeg'
import './pages.scss'

const careers = {
    aicare: {
        title: 'aicare',
        image: aicare,
        url: 'https://www.aicare.ai/',
        content: null,
    },
    bcuworld: {
        title: 'bcuworld',
        url: 'https://www.bcuworld.com/',
        image: bcuworld,
        content: null,
    },
    acc: {
        title: 'acc',
        url: 'https://www.alliancecc.com.au/',
        image: alliance,
        content: null,
    },
}

function Career(props) {
    const { t } = useTranslation("translation");

    return (
        <React.Fragment>
            <Container  maxWidth="false" className='career_container'>
                <Container maxWidth='xl'>
                <Grid container spacing={0} >
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                        <h1 className="centered"> 
                            {t('my')} 
                            <span className="font-blue">{t('career')} </span>
                        </h1>           
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
                <Grid container spacing={2} p={2}>
                    {Object.values(careers).map((career, index) => {
                        if (index % 2 === 0) {
                            return(
                                <Grid container item spacing={2}>
                                    <Grid xs={12} md={6} className="img_wrap">
                                        <img src={career.image} style={{width: "100%",height: '100%', backgroundColor:'#fff'}} alt={career.title}/>
                                    </Grid>
                                    <Grid item xs={12} md={6} pt={2} pb={2}>
                                        <h4 className="font-bold">
                                            {t(career.title)}
                                        </h4>  
                                        <Divider sx={{width: '10%', mt:2, mb:2, borderColor:'#000'}}/>
                                        <Button variant="outlined" sx={{color: '#4b6efc'}}
                                        onClick={(e) => {
                                            window.open(career.url);
                                            e.preventDefault();
                                        }}>
                                            Learn More    
                                        </Button> 
                                    </Grid>
                                </Grid>
                            )
                        } else {
                            return (
                                <Grid container item spacing={2}>
                                    <Grid item xs={12} md={6} pt={2} pb={2} >
                                        <h4 className="font-bold">
                                            {t(career.title)}
                                        </h4> 
                                        <Divider sx={{width: '10%', mt:2, mb:2, borderColor:'#000'}}/>
                                        <Button variant="outlined" sx={{color: '#4b6efc'}} 
                                        onClick={(e) => {
                                            window.open(career.url);
                                            e.preventDefault();
                                        }}>
                                            Learn More    
                                        </Button> 
                                    </Grid>
                                    <Grid xs={12} md={6} className="img_wrap">
                                        <img src={career.image} style={{width: "100%", height: '100%',backgroundColor: '#fff'}} alt={career.title}/>
                                    </Grid>
                                </Grid>
                            )
                        }
                    })}
                </Grid>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Career;
