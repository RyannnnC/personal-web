import { API } from 'aws-amplify';
import { Grid } from '@mui/material';
import {createCandidate} from '../graphql/mutations'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import useWidth from '../helpers/useWidth';

function MessageForm(props)  {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')
    const c_width = useWidth();
    const [mh, setMh] = React.useState(4);

    React.useEffect(() => {
        if (c_width === 'xs') {setMh(6)}
        else if (c_width === 'sm') {setMh(6)}
        else if (c_width === 'md') {setMh(8)}
        else if (c_width === 'lg') {setMh(10)}
        else if (c_width === 'xl') {setMh(12)}
    },[c_width])

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
                    props.showAlert("error",response.errors[0].message)
                }
            }).catch((error) => {
                props.showAlert("error",error.errors[0].message)
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
                rows={mh}
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
                sx={{ 
                    background: 'linear-gradient(to right, #4b6efc, #6ebffa)',
                    '&:hover':{
                      filter: 'brightness(150%)',
                    }
                  }}
                onClick={()=> sendMessage()}>
                Send Message
            </Button>
            </Grid>
        </Grid>
    )
}

export default MessageForm