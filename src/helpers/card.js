import './helper.scss';
import { Grid } from '@mui/material';


function Card(props) {
    function handleChoice() {
        if (!props.disabled)
            props.handleChoice(props.card);
    }

    return (
        <Grid item xs={3} className={props.flipped? "card flipped" : "card"} sx={{ maxWidth: '200px'}}>
            <img className={props.card.matched ? "front matched" : "front"} src={props.card.src} alt="card front" />
            <img className='back' src={props.bg} alt="card back" onClick={() => handleChoice()} />
        </Grid>
    );
}

export default Card;