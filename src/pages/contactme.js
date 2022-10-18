import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import { WechatOutlined } from '@ant-design/icons';
import Divider from '@mui/material/Divider';
import './pages.scss'
import SimpleMap from '../component/map'
import MessageForm from '../component/messageForm'

const contacts = {
    wechat: {
        name: 'wechat',
        icon: <WechatOutlined style={{ fontSize:35}}/>,
        url: null,
        content: '398268537',
    },
    phone: {
        name: 'phone',
        icon: <PhoneIphoneIcon fontSize='large'/>,
        url: 'tel:+61416502123',
        content: '+61 416 502 123',
    },
    email: {
        name: 'email',
        icon: <EmailIcon fontSize='large'/>,
        url: 'mailto:qq398268537@gmail.com',
        content: 'qq398268537@gmail.com',
    },
}

function ContactMe (props) {
    const { t } = useTranslation("translation");

    return (
    <React.Fragment>
        <Container maxWidth='false' className='contactme_container'>
            <Container maxWidth='xl'>
            <Grid container spacing={0}>
                <Grid item xs={2}/>
                <Grid item xs={8}>
                    <h1 className="centered"> 
                        <span className="font-blue">{t('contact')} </span>
                        {t('me')}
                    </h1>              
                </Grid>
                <Grid item xs={2}/>
            </Grid>
            <Grid container spacing={2} p={2} mt={2} mb={4} column={{xs:4, sm:8, md:12}}>
                {Object.values(contacts).map((contact, index) => {
                    return (
                        <Grid className="contact_move" item xs={12} sm={4} key={'contact' + index}
                            sx={{
                                transition: 'all 0.5s ease-in-out',
                                ":hover": {
                                    pt:0
                                },
                            }}>
                            <div className="contact_box" onClick={(e) => {
                                if (contact.url) {
                                    window.location.href = contact.url;
                                    e.preventDefault();
                                }
                            }}>
                                {contact.icon}
                                <h5>
                                    {t(contact.name)}
                                </h5>
                                <Divider variant="middle"/>
                                <h5>
                                   {contact.content}        
                                </h5>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid className="responsive_row" container spacing={2} p={2}>
                <Grid item xs={12} sm={6}>
                    <SimpleMap/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MessageForm 
                        showAlert= {props.showAlert}
                    />
                </Grid>
            </Grid>
            </Container>
        </Container>
    </React.Fragment>
    )
}

export default ContactMe;
