import { API } from 'aws-amplify';
import { Grid } from '@mui/material';
import {createCandidate} from '../graphql/mutations'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';

function MessageForm(props)  {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')

    const sendMessage = async () => {
        if (message === '') {
            props.showAlert("error","Message Could not be null")
        } else {
            await API.graphql({
                query: createCandidate,
                variables: {
                    input: {
                        name,email,
                        text: message
                    }
                }
            }).then((response) => {
                if (response.data) {
                    props.showAlert("success","Successfully sent the Message to Ryan, Thanks!")
                } else {
                    props.showAlert("error","Unknown error occur!")
                }
            }).catch((error) => {
                props.showAlert("error","Unknown error occur!")
            })
        }
    }

    return (
        <Grid container fullWidth spacing={2} >
            <Grid item container xs={12} sm={6}>
                <TextField 
                fullWidth 
                id="name" 
                label="Name" 
                variant="outlined" 
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                />
            </Grid>
            <Grid item container xs={12} sm={6}>
                <TextField 
                fullWidth 
                id="email" 
                label="Email"
                placeholder="Your Email" 
                variant="outlined" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
            </Grid>
            <Grid item xs={12} sx={{pt:2}}>
                <TextField 
                fullWidth 
                multiline
                rows={6}
                id="message" 
                placeholder="write your message here"
                label="Message" 
                variant="outlined" 
                value={message}
                onChange={(e) => setMessage(e.target.value)} 
                />
            </Grid>
            <Grid item xs={12} sx={{pt:2}}>
            <Button 
                fullWidth
                variant="contained"
                onClick={()=> sendMessage()}>
                Send Message
            </Button>
            </Grid>
        </Grid>
    )
}

export default MessageForm