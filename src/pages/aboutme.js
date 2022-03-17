import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './home.scss'


function AboutMe () {
    const { t } = useTranslation("translation");
        return (
        <React.Fragment>
            <Container maxWidth='false' class='aboutme_container'>
              <Grid container spacing={0}>
                <Grid item xs={2}/>
                <Grid item xs={8}>
                    <h1> 
                        <span class="font-blue">{t('about')} </span>
                        {t('me')} 
                    </h1>

                </Grid>
                <Grid item xs={2}/>
              </Grid>
            </Container>
        </React.Fragment>
        )
}

export default AboutMe;
