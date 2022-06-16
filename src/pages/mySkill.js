import * as React from 'react';
import { Container, Grid , Divider} from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import TerminalIcon from '@mui/icons-material/Terminal';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import './pages.scss'


function MySkill(props) {
    const { t } = useTranslation("translation");

    return (
        <React.Fragment>
            <Container sx={{p:0}} maxWidth='false' className='skills_container'>
                <Container maxWidth='xl'>
                <Grid container spacing={0} >
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                        <h1 className="centered"> 
                            Professional
                            <span className="font-blue"> Skills</span>
                        </h1>           
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
                <Grid container spacing={2} p={2} column={{xs:4, sm:8, md:12}}>
                    <Grid item xs={12} sm={6} pt={2} pb={2} className="skill_container">
                        <div className="icon_container">
                            <LanguageIcon fontSize="inherit"/>
                        </div>
                        <h2 className="font-bold">
                            {t('feDevelopment')}
                        </h2>  
                        <Divider sx={{m:'0 auto',width: '30%', mt:2, mb:2, borderColor:'#CCCCCC'}}/>
                        <h4 className="skill_description font-grey font-thin">
                            {t('feDescription')}
                        </h4>
                    </Grid>
                    <Grid item xs={12} sm={6} pt={2} pb={2} className="skill_container">
                        <div className="icon_container">
                            <TerminalIcon fontSize="inherit"/>
                        </div>
                        <h2 className="font-bold">
                            {t('pLanguage')}
                        </h2>  
                        <Divider sx={{m:'0 auto', width: '30%', mt:2, mb:2, borderColor:'#CCCCCC'}}/>
                        <h4 className="skill_description font-grey font-thin">
                            {t('pDescription')}
                        </h4>
                    </Grid>
                    <Grid item xs={12} sm={6} pt={2} pb={2} className="skill_container">
                        <div className="icon_container">
                            <HomeRepairServiceIcon fontSize="inherit"/>
                        </div>
                        <h2 className="font-bold">
                            {t('tAndFrameworks')}
                        </h2>  
                        <Divider sx={{m:'0 auto',width: '30%', mt:2, mb:2, borderColor:'#CCCCCC'}}/>
                        <h4 className="skill_description font-grey font-thin">
                            {t('tfDescription')}
                        </h4>
                    </Grid>
                    <Grid item xs={12} sm={6} pt={2} pb={2}className="skill_container">
                        <div className="icon_container">
                            <QuestionAnswerIcon fontSize="inherit"/>
                        </div>
                        <h2 className="font-bold">
                            {t('pSolving')}
                        </h2>  
                        <Divider sx={{m:'0 auto',width: '30%', mt:2, mb:2, borderColor:'#CCCCCC'}}/>
                        <h4 className="skill_description font-grey font-thin">
                            {t('psDescription')}
                        </h4>
                    </Grid>
                </Grid>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default MySkill;
