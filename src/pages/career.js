import * as React from 'react';
import { Container, Grid , Button, Divider} from '@mui/material';
import { useTranslation } from 'react-i18next';
import aicare from '../assets/aicare.png'
import bcuworld from '../assets/bcuworld.png'
import './pages.scss'


function Career(props) {
    const { t } = useTranslation("translation");

    return (
        <React.Fragment>
            <Container  maxWidth="false" className='career_container'>
                <Container maxWidth='xl'>
                <Grid container spacing={0} >
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                        <h1 className="centered font-white"> 
                            {t('my')} 
                            <span className="font-blue">{t('career')} </span>
                        </h1>           
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
                <Grid container spacing={2} p={2}>
                    <Grid xs={12} md={6} className="img_wrap" sx={{p:0,m:0}}>
                        <img src={aicare} style={{width: "100%",height: '100%', backgroundColor:'#fff'}}/>
                    </Grid>
                    <Grid item xs={12} md={6} pt={2} pb={2}>
                        <h4 className="font-bold">
                            {t('aicare')}
                        </h4>  
                        <Divider sx={{width: '10%', mt:2, mb:2, borderColor:'#000'}}/>
                        <Button variant="outlined" sx={{color: '#4b6efc'}}
                        onClick={(e) => {
                            window.open("https://www.aicare.ai/");
                            e.preventDefault();
                        }}>
                            Learn More    
                        </Button> 
                    </Grid> 
                    <Grid item xs={12} md={6} pt={2} pb={2} >
                        <h4 className="font-bold">
                            {t('bcuworld')}
                        </h4> 
                        <Divider sx={{width: '10%', mt:2, mb:2, borderColor:'#000'}}/>
                        <Button variant="outlined" sx={{color: '#4b6efc'}} 
                        onClick={(e) => {
                            window.open("https://www.bcu.world/");
                            e.preventDefault();
                        }}>
                            Learn More    
                        </Button> 
                    </Grid>
                    <Grid xs={12} md={6} className="img_wrap" sx={{p:0,m:0}}>
                        <img src={bcuworld} style={{width: "100%", height: '100%',backgroundColor: '#fff'}}/>
                    </Grid>
                </Grid>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Career;
