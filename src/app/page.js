"use client";

import LandingPage from "./landingpage";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  pageLayout: {
    backgroundColor: "#ffffff",
  },
}));
export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.pageLayout}>
      <LandingPage />
    </div>
  );
}
