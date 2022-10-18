import * as React from 'react';
import { Container, Grid , Divider} from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import TerminalIcon from '@mui/icons-material/Terminal';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import './pages.scss'

const skills = {
    feDevelopment: {
        name: 'feDevelopment',
        icon: <LanguageIcon fontSize='inherit'/>,
        content: 'feDescription',
    },
    pLanguage: {
        name: 'pLanguage',
        icon: <TerminalIcon fontSize='inherit'/>,
        content: 'pDescription',
    },
    tAndFrameworks: {
        name: 'tAndFrameworks',
        icon: <HomeRepairServiceIcon fontSize='inherit'/>,
        content: 'tfDescription',
    },
    pSolving: {
        name: 'pSolving',
        icon: <QuestionAnswerIcon fontSize='inherit'/>,
        content: 'psDescription',
    },
}

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
                    {Object.values(skills).map((skill, index) => {
                        return (
                            <Grid item xs={12} sm={6} pt={2} pb={2}className="skill_container" key={"skill" + index}>
                                <div className="icon_container">
                                    {skill.icon}
                                </div>
                                <h2 className="font-bold">
                                    {t(skill.name)}
                                </h2>  
                                <Divider sx={{m:'0 auto',width: '30%', mt:2, mb:2, borderColor:'#CCCCCC'}}/>
                                <h4 className="skill_description font-grey font-thin">
                                    {t(skill.content)}
                                </h4>
                            </Grid>
                        )
                    })}
                </Grid>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default MySkill;
