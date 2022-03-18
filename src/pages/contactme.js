import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import { WechatOutlined } from '@ant-design/icons';
import Divider from '@mui/material/Divider';
import './home.scss'


function ContactMe () {
const { t } = useTranslation("translation");
   return (
    <React.Fragment>
        <Container maxWidth='false' class='contactme_container'>
            <Grid container spacing={0}>
                <Grid item xs={2}/>
                <Grid item xs={8}>
                    <h3 class="font-xl centered"> 
                        <span class="font-blue">{t('contact')} </span>
                        {t('me')}
                    </h3>              
                </Grid>
                <Grid item xs={2}/>
            </Grid>
            <Grid container spacing={2} p={2}>
                <Grid item xs={4}>
                    <div class="contact_box">
                        <WechatOutlined style={{ fontSize:35}}/>
                        <h5>
                            {t('wechat')}
                        </h5>
                        <Divider variant="middle"/>
                        <h5>
                            qq398268537            
                        </h5>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div class="contact_box">
                        <PhoneIphoneIcon fontSize="large"/>
                        <h5>
                            {t('phone')}
                        </h5>
                        <Divider variant="middle"/>
                        <h5>
                            +61-416502123
                        </h5>
                    </div>            
                </Grid>
                <Grid item xs={4}>
                    <div class="contact_box">
                        <EmailIcon fontSize="large"/>
                        <h5>
                            {t('email')}
                        </h5>
                        <Divider variant="middle"/>
                        <h5>
                            qq398268537@gmail.com
                        </h5>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </React.Fragment>
    )
}

export default ContactMe;
