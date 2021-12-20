import React, {useState} from 'react';
import Image from "next/image";
import mainLogo from "../assets/img/logo_main.png";
import Header, {stylesFromHeader} from "./Header";
import {styled, alpha} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import BoltIcon from '@mui/icons-material/Bolt';
import CloseIcon from '@mui/icons-material/Close';
import {
  Grid,
  Button,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Container,
  Box,
  Drawer,
  Divider,
  ListItemButton
} from "@mui/material";



export default function SideNav() {

  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);


  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open: any) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (

    <AppBar position="static" sx={{
      background: 'none',
      boxShadow: 'none'
    }}>
      <Container maxWidth="lg">
        <Toolbar>
          {/*<Image src={mainLogo} alt={"Main Logo"}/>*/}
          {/*<Typography variant="h6" sx={{flexGrow: 1, fontWeight: 700}}>*/}
          {/*  Brand*/}
          {/*</Typography>*/}
          <Grid item xs={12} sx={{
            display: {
              xs: 'none',
              md: 'block',
            }
          }}>
            {<Header/>}
          </Grid>

          <Grid item xs={2} sx={{
            position: 'absolute',
            left: 0,
            display: {
              xs: 'flex',
              md: 'none',
            },
            alignItems: 'center'
          }}>
            <Grid item xs={6}>
              <Image src={mainLogo} alt={"Main Logo"}/>
            </Grid>
            <Grid item xs={6}>
              <Typography>EQUITE.IO</Typography>
            </Grid>
          </Grid>

          <Grid item xs={2} sx={{
            position: 'absolute',
            right: 0,
            display: {
              xs: 'flex',
              md: 'none',
            },
            alignItems: 'center'
          }}>
            <Grid item xs={"auto"} sx={{position: "absolute", right: 40, display: 'block'}}>
              <Button
                sx={{...stylesFromHeader.buttonDarkBackgroundSX, color: 'text.secondary',}}
              >
                RU
              </Button>
            </Grid>

            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer(true)}
                        sx={{
                          position: 'absolute',
                          right: 0,
                          display: {
                            xs: 'block',
                            md: 'none',
                          }
                        }}
            >
              <MenuIcon/>
            </IconButton>
          </Grid>

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            // onOpen={toggleDrawer(true)}
            // onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box sx={{
              p: 2,
              height: 1,
              backgroundColor: "#101C2B",
            }}>
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{mb: 2}}>
                <CloseIcon sx={{color: 'white'}} onClick={toggleDrawer(false)}/>
              </IconButton>

              <Divider sx={{mb: 2}}/>

              <Box sx={{mb: 2}}>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon sx={{color: "primary.main"}}/>
                  </ListItemIcon>
                  <ListItemText primary="ГЛАВНАЯ"/>
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <TrendingUpIcon sx={{color: "primary.main"}}/>
                  </ListItemIcon>
                  <ListItemText primary="РЕЙТИНГИ"/>
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <TextSnippetIcon sx={{color: "primary.main"}}/>
                  </ListItemIcon>
                  <ListItemText primary="БЛОГ"/>
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <BoltIcon sx={{color: "primary.main"}}/>
                  </ListItemIcon>
                  <ListItemText primary="PRO"/>
                </ListItemButton>
              </Box>


              <Grid
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                  position: "absolute",
                  bottom: "0",
                  left: "70%",
                  transform: "translate(-50%, 0)"
                }}
              >
                <Button
                  sx={{
                    ...stylesFromHeader.buttonDarkBackgroundSX,
                    border: '1px solid white',
                    color: 'white',
                    marginBottom: '10px'
                  }}>Инвестору
                </Button>
                <Button
                  sx={{
                    ...stylesFromHeader.buttonDarkBackgroundSX,
                    color: 'text.secondary',
                    border: '1px solid #AE8DE5',
                    marginBottom: '10px'
                  }}>Войти
                </Button>
                <Button
                  sx={{
                    backgroundColor: '#5040B2',
                    borderRadius: 1.25,
                    color: 'white',
                    marginBottom: '10px'
                  }}>
                  Начать
                </Button>
              </Grid>
            </Box>

          </Drawer>


        </Toolbar>
      </Container>
    </AppBar>

  );
}
