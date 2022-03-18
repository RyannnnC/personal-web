import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import './home.scss'


function AboutMe () {
    const { t } = useTranslation("translation");
        return (
        <React.Fragment>
            <Container maxWidth='false' class='aboutme_container'>
                <Grid className="intros" container spacing={0}>
                    <Grid item xs p={4}>
                        <img
                            src="https://technext.github.io/awesome1/images/portfolio-img2.jpg"
                        />
                    </Grid>
                    <Grid item xs sx={{ p:2 }}>
                        <h1 class="centered font-white"> 
                            <span class="font-blue">{t('about')} </span>
                            {t('me')} 
                        </h1>
                        <h4 class="justified font-white font-thin">
                            {t('intro')}
                        </h4>
                        <Grid container spacing={0}>   
                            <Grid container xs={10} sx={{ m:0 }} spacing={1}>
                                <Grid xs={4} className="centered">
                                 <SportsTennisIcon sx={{ color: 'white'}}  fontSize="large"/>
                                </Grid>
                                <Grid xs={4} className="centered">
                                    <SportsEsportsIcon sx={{ color: 'white'}}  fontSize="large"/>      
                                </Grid>
                                <Grid xs={4} className="centered">
                                    <FitnessCenterIcon sx={{ color: 'white'}}  fontSize="large"/>
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
        </React.Fragment>
        )
}

export default AboutMe;
