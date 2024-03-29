import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import './pages.scss'


function AboutMe () {
    const { t } = useTranslation("translation");
        return (
        <React.Fragment>
            <Container maxWidth='false' className='aboutme_container'>
                <Container maxWidth='xl'>
                <Grid container spacing={0} p={4}>
                    <Grid item xs={12} md={6} p={4} className="centered">
                        <img
                            alt=""
                            style={{width: "100%"}}
                            src="https://technext.github.io/awesome1/images/portfolio-img2.jpg"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ p:2 }}>
                        <h1 className="centered font-bold"> 
                            {t('alittle')} 
                            <span className="font-blue">{t('about')} </span>
                            {t('me')} 
                        </h1>
                        <h4 className="justified">
                            {t('intro')}
                        </h4>
                        <Grid container spacing={0}>   
                            <Grid container item xs={10} sx={{ m:0 }} spacing={1}>
                                <Grid item xs={4} className="centered">
                                 <SportsTennisIcon sx={{ color: 'black'}}  fontSize="large"/>
                                </Grid>
                                <Grid item xs={4} className="centered">
                                    <SportsEsportsIcon sx={{ color: 'black'}}  fontSize="large"/>      
                                </Grid>
                                <Grid item xs={4} className="centered">
                                    <FitnessCenterIcon sx={{ color: 'black'}}  fontSize="large"/>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
                                <div>
                                    <SportsBasketballIcon sx={{ color: 'red' }}  fontSize="large" className="intro_icon"/>      
                                </div>       
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Container>
            </Container>
        </React.Fragment>
        )
}

export default AboutMe;
