import * as React from 'react';
import { Container, Grid } from '@mui/material';
import './home.scss'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";




function Games(props) {
    const { t } = useTranslation("translation");

    return (
        <React.Fragment>
            <Container maxWidth='false' className='aboutme_container'>
              <Grid container spacing={0}>
                <Grid item xs={2}/>
                <Grid item xs={8}>
                    <h1 className="centered font-white"> 
                        {t('little')}
                        <span className="font-blue">{t('games')} </span>      
                    </h1>
                    <ul>
                        <li>
                            <Link to="/huarongdao">{t('huarongdao')}</Link>
                        </li>
                        <li>
                            <Link to="/flappybird">Flappy Bird</Link>
                        </li>
                    </ul>              
                </Grid>
                <Grid item xs={2}/>
              </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Games;
