import {Container, createTheme, Grid, ThemeProvider} from '@mui/material';
import type {NextPage} from 'next'
import Head from 'next/head'
import Banners from "../components/Banners";
import PartnersLogos from "../components/PartnersLogos";
import SideNav from '../components/SideNav';


const theme = createTheme({
  palette: {
    background: {
      paper: '#101C2B',
    },
    text: {
      primary: '#173A5E',
      secondary: '#AE8DE5'
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
        <link
          rel="preload"
          href="../public/fonts/Gothic-A1/GothicA1-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="../public/fonts/Gothic-A1/GothicA1-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="../public/fonts/Gothic-A1/GothicA1-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="../public/fonts/Gothic-A1/GothicA1-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <title>EQUITE.IO</title>
        <meta name="description" content="Equite.io"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Grid
        sx={{
          backgroundColor: 'background.paper',
          justifyContent: 'center',
          minHeight: '110vh',
          position: 'relative',
        }}
      >
        <Grid
          className={'simplebackground'}
        >

          {/*<Image*/}
          {/*  src={simpleBackground}*/}
          {/*/>*/}
        </Grid>
        <Grid
          className={'simplewave'}
        >
          {/*<Image*/}
          {/*  src={simpleWave}*/}
          {/*/>*/}
        </Grid>

        <Grid
          container
          sx={{
            maxWidth: '1278px',
            mx: 'auto'
          }}>
          <SideNav/>
          <Banners/>
          <PartnersLogos />
        </Grid>
      </Grid>
      <style>{`
          .simplebackground {
              width:100%;
              height: calc(100% - 85px);
              position:absolute;
              background-image: url("/img/simplified_background.png");
              background-repeat: no-repeat;
              background-position: 78px 0;
              top: 85px;
          }
          @media all and (max-width: 800px) {
            .simplebackground {
              // background-position: 63% 0;
            }
          }
          @media all and (max-width: 480px) {
            .simplebackground {
              background-position: 63% 630px;
            }
            .simplewave {
              top: 911px;
              
            }
          }

          .simplewave {
              box-sizing: border-box!important;
              width: 100%;
              height: 48%;
              position:absolute;
              right: 0;
              left: 0;
              top: 411px;
              background-image: url("/img/wave_1.svg");
              background-repeat: no-repeat;
              background-position: top; 
          }
          
          @media all and (max-width: 470px) {
            .simplebackground {
              background-position: 63% 650px;
            }
            .simplewave {
              top: 1100px;
            }
          }

          
          .swiper-pagination-bullet-active {
            opacity: 1;
            background-color: #C49BFF!important;
          }
      `}</style>

    </ThemeProvider>
  )
}

export default Home
