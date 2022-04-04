import React, {PropTypes} from 'react';
import sheet from '../assets/sheet.png';

export const Sprite = ({filename, x, y, width, height}) => {
    if (!filename) {
        return null;
    }

    x *=2
    y*=2
    width*=2
    height*=2

    const style= {
        backgroundImage: `url(${filename})`,
        backgroundPosition: `${x * (-1)}px ${y * (-1)}px`,
        width,
        height,
    }

    return (
        <div style={style} data-x={x} data-y={y} data-w={width} data-h={height}/>
    )
}