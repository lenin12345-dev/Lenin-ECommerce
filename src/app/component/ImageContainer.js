'use client'
import * as React from "react"
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles((theme) => ({
  heroImage: {
    position:'relative',
    zIndex:5,
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '-38px',
      left: '60%',
      width: '46%',
      height: '68%',
      backgroundColor: 'paleturquoise',
      zIndex:-1
      // other styles for the pseudo-element
    },
  
  },

}));

export default function ImageContainer({singleProduct={image:[{url:''}]}}) {
  const classes = useStyles();
  const [image,setImage] = React.useState(singleProduct?.image[0])

  return (

    <Box display= 'flex' alignItems= 'center' >
        <Box p={2} display= 'flex' flexDirection='column' alignItems='center'>
            {
             singleProduct && singleProduct.image.length &&   singleProduct.image.map((each)=>{
                return (
                    <img style={{ height:100,width:180,marginBottom:4}} key={each.id} src={each.url} alt={each.filename}
                    onClick={()=>setImage(each)}
                    />
                )
             }) 
            }
        </Box>
        <Box p={2} display= 'flex' flexDirection='column' alignItems='center'>
        
        <img style={{ maxHeight:250,width:350 }}  src={image?.url} alt={image?.filename}/>
            
        </Box>
        

    
    </Box>

  );
}
