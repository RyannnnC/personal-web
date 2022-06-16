import { API } from 'aws-amplify';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Like(props)  {
    const [likes, setLikes] = React.useState(0)
    const [liked, setLiked] = React.useState(false)

    React.useEffect(() => {
        getlikes();
    },[])

    const getlikes = async () => {
        const apiName = 'likeapi';
        const path = '/likes/0'; 
        let response = await API.get(apiName, path, {});
        setLikes(response[0].likes)  
    }

    const like = async () => {
        const apiName = 'likeapi';
        const path = '/likes'; 
        const params = {
            body: {
                id: 0,
                likes: likes + 1
            }    
        }
        let response = await API.put(apiName, path, params);
        if (response.success) {
            props.showAlert("success", "Thanks for your like")
            setLiked(true)
        } else {
            props.showAlert("error",response.error)
        }
    }

    return (
        <Grid container fullWidth spacing={2} >   
            <Button 
                variant="contained"
                disabled={liked}
                sx={{ 
                    background: 'linear-gradient(to right, #4b6efc, #6ebffa)',
                    '&:hover':{
                      filter: 'brightness(150%)',
                    }
                }}
                onClick = {() => like()}
            >
                {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </Button>
        </Grid>
    )
}

export default Like