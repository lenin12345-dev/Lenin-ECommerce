// @refresh reset
// @useClient
'use client'

import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Link from 'next/link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export default function PageHeader({title}) {

 
  return (
    <>
    <Box sx={{backgroundColor:'lightgray'}}  py={1} pl={3}>
     <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover"  href="/">
        <Typography
sx={{color:'#ffffff',fontWeight:'bold'}}
        >
          Home
        </Typography>

        </Link>

        <Typography
color="text.primary"
        >
          {title}
        </Typography>
      </Breadcrumbs>
      </Box>
    </>
  );
}