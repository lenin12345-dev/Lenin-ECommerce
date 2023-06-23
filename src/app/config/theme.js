import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    // breakpoints: {
    //     values: {
    //         xs: 436,
    //         sm: 720,
    //         md: 992,
    //         lg: 1140,
    //         xl: 1980
    //     }
    // },
    palette: {
      primary: {
        main: "#494c7d"
      },
      secondary: {
        main: "#2a9461"
      },
      primaryLight: {
        main: "#EDF7FA",
        contrastText: "#616161"
      }
    },
    // typography: {
    //     htmlFontSize: 18,
    //     fontFamily: 'MyriadPro',
    //     h1: {
            
    //         fontSize: '2.2rem',
    //         lineHeight: 1.2,
            
    //     },
    //     h2: {
           
    //         fontSize: '1.8rem',
    //         lineHeight: 1.2,
            
    //     },
    //     h3: {
            
    //         fontSize: '1.5rem',
    //         lineHeight: 1.2,
          
    //     },
    //     h4: {
            
    //         fontSize: '1.2rem',
    //         lineHeight: 1.2,
            
    //     },
    //     h5: {
         
    //         fontSize: '1rem',
    //         lineHeight: 1.2,
            
    //     },
    //     h6: {
            
    //         fontSize: '.8rem',
    //         lineHeight: 1.2,
           
    //     },
    //     body1: {
    //         fontSize: '12px',
    //         lineHeight: '1.5',
            
    //     },
    //     button: {
    //         textTransform: 'initial',
    //     }
    // },
  });

  export default theme;