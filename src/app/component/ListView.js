'use client'

import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Link from 'next/link';
import NoDataCard from "./NoDataCard";

export default function ListView({products=[]}) {
   

  return (
    
    <Box >
     { products.length ?(products.map((each)=>{
        return (  
        <Box key = {each.id} sx={{ border:'0.1px solid lightblue', margin:2}}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" variant='square' sx={{width:350,height:200}} src= {each.image} />
          </ListItemAvatar>
          <ListItemText
          sx={{ maxWidth:600,paddingLeft:4}}
            primary= {each.name}
            primaryTypographyProps = {{fontWeight:'bold',fontSize:25,marginBottom:2}}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'block',fontSize:18 }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  gutterBottom
                >
                 ${each.price}
                </Typography>
                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  gutterBottom
                >
              {each.description?.slice(0,300)}...
                </Typography>
                <Button component={Link} href={`/product/${each.id}`} sx={{marginTop:1}} color='secondary' variant='contained'>
                    Read More
                </Button>
              
              </React.Fragment>
            }
          />
        </ListItem>
        </List>
    </Box>

        )

     }) ) :<NoDataCard noDataFoundText='No Data Found' styleCardProps={{ style: { height: 600 } }} />    }
       
       
    </Box>
  )
}
