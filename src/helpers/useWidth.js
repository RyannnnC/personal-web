import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

//Use to detect whether the device is desktop, tablet or mobile
export default function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
      keys.reduce((output, key) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = useMediaQuery(theme.breakpoints.up(key));
        return !output && matches ? key : output;
      }, null) || 'xs'
    );
}

export var width = window.innerWidth;
export var height = window.innerHeight;

if (width >= 500 && width < 900) { //if not mobile
    width = 400;
    height = 480
} else if (width >= 900) {
    width = 600;
    height = 480
}