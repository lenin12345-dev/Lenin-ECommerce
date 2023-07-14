"use client";

import LandingPage from "./landingpage";
import { makeStyles } from "@mui/styles";

import dynamic from 'next/dynamic'


const useStyles = makeStyles((theme) => ({
  pageLayout: {
    backgroundColor: "#ffffff",
  },
}));
 function Home() {
  const classes = useStyles();

  return (
    <div className={classes.pageLayout}>
      <LandingPage />
    </div>
  );
}
export default dynamic(() => Promise.resolve(Home), {
  ssr: false
})
