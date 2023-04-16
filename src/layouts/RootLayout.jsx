
import NavbarComp from './NavbarComp'
import FooterComp from "./FooterComp";
import SidebarComp from './SidebarComp';
import {Outlet} from "react-router-dom";
import { ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { green, grey } from '@mui/material/colors';
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';


const themeRender = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
          ? {
              // palette values for light mode
              primary: grey,
              divider: grey[200],
              text: {
                primary: grey[900],
                secondary: grey[800],
              },
            }
          : {
              // palette values for dark mode
              primary: green,
              divider: green[700],
              background: {
                default: green[900],
                paper: green[900],
              },
              text: {
                primary: grey[10],
                secondary: grey[500],
              },
            }),
      },
  });




export default function Rootlayout(){
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');
    const theme = React.useMemo(() => createTheme(themeRender(mode)), [mode]);

    const styles = {
      main: {
        display: 'flex',
        flexDirection: 'row',
      },
    };

    React.useEffect(() => {
      setMode(prefersDarkMode ? 'dark' : 'light');
    }, [prefersDarkMode]);


    return (

        <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarComp />
      <div style={styles.main}>
      <SidebarComp />
        <main>
        <Outlet />
         </main>
         </div>
        <FooterComp/>
    </ThemeProvider>


    );
}
