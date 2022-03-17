import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './home.scss'


function ContactMe () {
const { t } = useTranslation("translation");
   return (
       <React.Fragment>
           <Container maxWidth='false' class='contactme_container'>
            <Grid container spacing={0}>
            <Grid item xs={2}/>
              <Grid item xs={8}>
                 <h1> 
                    <span class="font-blue">{t('contact')} </span>
                    {t('me')}
                 </h1>              
              </Grid>
              <Grid item xs={2}/>
           </Grid>
        </Container>
    </React.Fragment>
    )
}

export default ContactMe;
