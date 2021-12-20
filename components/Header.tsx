import React from 'react';
import mainLogo from '../assets/img/logo_main.png'
import Image from 'next/image';
import {Typography, List, ListItem, Toolbar, Button, Grid} from '@mui/material';

export const stylesFromHeader = {
  subtitle1SX: {color: 'white', zIndex: 0},
  flexGridSX: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonDarkBackgroundSX: {backgroundColor: '#101C2B', borderRadius: 1.25}
}

const getSubTitle1 = (text: string | number, idx: number) => {
  return <Typography key={idx} variant='subtitle1' sx={stylesFromHeader.subtitle1SX}>{text}</Typography>
}

const subTitlesNames = ["ГЛАВНАЯ", "РЕЙТИНГИ", "БЛОГ", "PRO"];

function Header() {
  return (
    <Grid
      item
      xs={12}
      sx={stylesFromHeader.flexGridSX}>
      <Grid
        item
        xs={7}
        sx={stylesFromHeader.flexGridSX}
      >
        <Image src={mainLogo} alt={"Main Logo"}/>
        {}
        {subTitlesNames.map((string, idx) => getSubTitle1(string, idx))}
        <Grid>
          <Button
            sx={{
              ...stylesFromHeader.buttonDarkBackgroundSX,
              border: '1px solid white',
              color: 'white'
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
        <Grid item xs={"auto"}><Button
          sx={{...stylesFromHeader.buttonDarkBackgroundSX, color: 'text.secondary'}}>RU</Button></Grid>
        <Grid><Button
          sx={{
            ...stylesFromHeader.buttonDarkBackgroundSX,
            color: 'text.secondary',
            border: '1px solid #AE8DE5'
          }}>Войти</Button></Grid>
        <Grid><Button
          sx={{backgroundColor: '#5040B2', borderRadius: 1.25, color: 'white'}}>Начать</Button></Grid>
      </Grid>
    </Grid>
  );
}

export default Header;