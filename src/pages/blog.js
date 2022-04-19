import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './pages.scss'


function Blog(props) {
    const { t } = useTranslation("translation");

    return (
        <React.Fragment>
            <Container sx={{p:0}} maxWidth='false' className='blog_container'>
                <Grid container spacing={0} >
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                        <h1 className="centered font-white"> 
                            {t('my')} 
                            <span className="font-blue">Blogs </span>
                        </h1>           
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Blog;
