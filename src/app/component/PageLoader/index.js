'use client'

import React from 'react';

import { makeStyles } from "@mui/styles";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Cartgif from '../../public/image//cart_gif.gif';
import Image from 'next/image';

const useStyles = makeStyles(() => ({
   
    loaderContainer: {
        height: 450,
        width: 450,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loader: {
        width: 'auto',
        height: 250,
        maxWidth: '100%'
    }
}));

const CartLoader  = ({children,title='Sit back and relax',description='We are getting everything ready for you'}) =>
{
    const classes = useStyles();

    
    return (
        <Container
           
            maxWidth="md"
        >
            <div className={classes.loaderContainer}>
                <Image src={Cartgif} alt={'LectureNotes-loader'} className={classes.loader}/>
            </div>
           
            <Typography
                align="center"
                variant="h5"
            >
                {title}
            </Typography>
            <Typography
                align="center"
                variant="h6"
            >
                {description}
            </Typography>
            {
                children ? children : ''
            }
        </Container>);
};





export default CartLoader;
