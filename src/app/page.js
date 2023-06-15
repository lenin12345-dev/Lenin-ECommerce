
'use client';
import Image from 'next/image';
import styles from './page.module.css';
import LandingPage from './landingpage'
import { makeStyles } from "@mui/styles";
import Contact from './contact/page';
import { ContactPage } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  pageLayout: {
  backgroundColor:"#ffffff"
  },

  
}));
export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.pageLayout}>
      <LandingPage/>

     
    </div>
  )
}
