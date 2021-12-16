import {Container, createTheme, Grid, ThemeProvider} from '@mui/material';
import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Header from './../components/Header/Header';
import simpleBackground from '../assets/simplified_background.png'

const theme = createTheme({
  palette: {
    background: {
      paper: '#101C2B',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      main: '#009688'
    },
  },
});

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>EQUITE.IO</title>
        <meta name="description" content="Equite.io"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Grid
        sx={{
          backgroundColor: 'background.paper',
          justifyContent: 'center',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <div
          className={'simplebackground'}
        >
          <Image
            src={simpleBackground}
          />
        </div>
        <Grid
          container
          sx={{
            justifyContent: 'center',
            maxWidth: '1278px',
            mx: 'auto'
          }}>
          <Header/>

        </Grid>
      </Grid>
      <style>{`
          .simplebackground {
              position:absolute;
          }
      `}</style>

    </ThemeProvider>
  )
}

export default Home
