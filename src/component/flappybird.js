import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './component.scss'
import {Sprite} from './sprite.js'
import sheet from '../assets/sheet.png'

function FlappyBird () {
    const { t } = useTranslation("translation");
    return (
        <React.Fragment>
            <Container maxWidth='false'>
                <div>
                    {Sprite({
                        filename: sheet,
                        x:156,
                        y:115,
                        width:17,
                        height:12
                    })}
                </div>
            </Container>
        </React.Fragment>
    )
}

export default FlappyBird;
