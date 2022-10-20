import * as React from 'react';
import { Container, Grid } from '@mui/material';
import './pages.scss'
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import genshin from "../assets/genshinbg.png";
import flappy from "../assets/flappybird.jpeg";

const games = {
    huarongdao: {
        title: 'huarongdao',
        image: genshin,
    },
    flappybird: {
        title: 'flappybird',
        image: flappy,
    },
    genshin: {
        title: 'memory',
        image: genshin,
    },
}

function Games(props) {
    const { t } = useTranslation("translation");
    let navigate = useNavigate();

    function gotoGame(game) {
        navigate(game);
    }

    return (
        <React.Fragment>
            <Container maxWidth='false' className='games_container'>
              <Container maxWidth='xl'>
              <Grid container spacing={0} pt={3}>
                <Grid item xs={12}>
                    <h1 className="centered font-white font-bold"> 
                        {t('little')}
                        <span style={{color: '#000'}}>{t('games')} </span>      
                    </h1>           
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                {Object.values(games).map((game, index) => {
                    return(
                        <Grid sx={{
                            ":hover": {
                                pt:0
                            },
                        }} className="game_card" item xs={12} sm={12/Object.values(games).length} onClick={() => gotoGame(game.title)}>
                            <img src={game.image} className="game_bg" alt={game.title}/>
                            <h1 className="centered font-white font-bold"> 
                                {t(game.title)}  
                            </h1> 
                        </Grid>
                    )
                })}
              </Grid>
              </Container>
            </Container>
        </React.Fragment>
    )
}

export default Games;
