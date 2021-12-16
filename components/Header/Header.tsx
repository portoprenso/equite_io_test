import React from 'react';
import mainLogo from '../../assets/logo_main.svg'
import Image from 'next/image';
// import { Box, positions } from '@mui/system';
import {Typography, List, ListItem, Toolbar, Button, Grid} from '@mui/material';


function Header() {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Grid
        item
        xs={7}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image src={mainLogo} alt={"Main Logo"}/>
        <Link></Link>
        <Typography variant='subtitle1' sx={{color: 'white', zIndex: 0}}>ГЛАВНАЯ</Typography>
        <Typography variant='subtitle1' sx={{color: 'white', zIndex: 0}}>РЕЙТИНГИ</Typography>
        <Typography variant='subtitle1' sx={{color: 'white', zIndex: 0}}>БЛОГ</Typography>
        <Typography variant='subtitle1' sx={{color: 'white', zIndex: 0}}>PRO</Typography>
        <Grid>
          <Button
            sx={{
              borderRadius: 1.25,
              border: '1px solid white',
              color: 'white',
            }}>Инвестору</Button>
        </Grid>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Grid item xs={"auto"} sx={{backgroundColor: '#101C2B', borderRadius: 1.25}}><Button
          sx={{color: '#AE8DE5'}}>RU</Button></Grid>
        <Grid sx={{backgroundColor: '#101C2B', border: '1px solid #AE8DE5', borderRadius: 1.25,}}><Button
          sx={{color: '#AE8DE5'}}>Войти</Button></Grid>
        <Grid sx={{backgroundColor: '#5040B2', borderRadius: 1.25,}}><Button
          sx={{color: 'white'}}>Начать</Button></Grid>
      </Grid>
    </Grid>
  );
}

export default Header;