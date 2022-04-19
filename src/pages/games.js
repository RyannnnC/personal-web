import * as React from 'react';
import { Container, Grid } from '@mui/material';
import './pages.scss'
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import genshin from "../assets/genshinbg.png";
import flappy from "../assets/flappybird.jpeg";

function Games(props) {
    const { t } = useTranslation("translation");
    let navigate = useNavigate();

    function gotoGame(game) {
        navigate(game);
    }

    return (
        <React.Fragment>
            <Container maxWidth='false' className='games_container'>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                    <h1 className="centered font-white"> 
                        {t('little')}
                        <span style={{color: '#000'}}>{t('games')} </span>      
                    </h1>           
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid sx={{
                    ":hover": {
                        pt:0
                    },
                }} className="game_card" item xs={10} md={4} onClick={() => gotoGame("huarongdao")}>
                    <img src={genshin} className="game_bg"/>
                    <h2 className="centered font-white"> 
                        {t('huarongdao')}  
                    </h2> 
                </Grid>
                <Grid sx={{
                    ":hover": {
                        pt:0
                    },
                }} className="game_card" item xs={10} md={4} onClick={() => gotoGame("flappybird")}>
                    <img src={flappy} className="game_bg"/>
                    <h2 className="centered font-white"> 
                        Flappy Bird 
                    </h2> 
                </Grid>
                <Grid sx={{
                    ":hover": {
                        pt:0
                    },
                }} className="game_card" item xs={10} md={4} onClick={() => gotoGame("genshin")}>
                    <img src={genshin} className="game_bg"/>
                    <h2 className="centered font-white"> 
                        {t('memory')}  
                    </h2> 
                </Grid>
              </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Games;
