import * as React from 'react';
import { useEffect, useState } from "react";
import { Container } from '@mui/material';
import './component.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Button from '@mui/material/Button';

function ScrollToTop() {
    const [position, setPosition] = useState(0);
    const handleScroll = () => {
      const pos = window.pageYOffset;
      setPosition(pos);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <React.Fragment key='left'>
            <Button
                classes='buttonIcon'
                variant="contained"
                sx={{
                  bottom: '2em',
                  right: '2em',
                  backgroundColor: '#fff',
                  border: 0,
                  boxShadow:0,
                  opacity:0.5,
                  pr:1,
                  pl:1,
                  display: position == 0 ? 'none' : 'block',
                  position: 'fixed',
                  '&:hover':{
                    backgroundColor:'#fff',
                  }
                }}
                onClick={()=>{window.scrollTo(0, 0)}}>
                <ArrowUpwardIcon
                  sx = {{ color: 'black' }}
                  fontSize='large'
                />
              </Button>
        </React.Fragment>
    )
}

export default ScrollToTop;
