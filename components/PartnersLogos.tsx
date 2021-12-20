import React from 'react';
import {Grid} from "@mui/material";
import Image from 'next/image';
import binanceFutures from '/assets/img/logo_binance_futures.svg';
import binanceMargin from '/assets/img/logo_binance_margin.svg';
import binanceMain from '/assets/img/logo_binance.svg';
import bitmex from '/assets/img/logo_bitmex.svg';
import bybit from '/assets/img/logo_bybit.svg';
import hitbtc from '/assets/img/logo_hitbtc.svg';
import okex from '/assets/img/logo_okex.svg';
import ftx from '/assets/img/logo_ftx.svg';

const gridForLogo = {
  height: {
    xs: "60px",
    md: "80px"
  },
  maxWidth: {
    xs: "150px",
    md: "190px"
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

}


function PartnersLogos() {
  return (
    <Grid className={"partners-logo"} item xs={12} sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", marginTop: "150px"}}>
      <Grid item sx={{
        height: {
          xs: "60px",
          md: "80px"
        },
        maxWidth: {
          xs: "150px",
          md: "190px"
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

      }}>
        <Grid item xs={12}>
          <Image src={binanceMain}></Image>
        </Grid>
        <Grid item xs={12} sx={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
          <Grid item xs={5}>
            <Image src={binanceFutures}></Image>
          </Grid>
          <Grid item xs={5}>
            <Image src={binanceMargin}></Image>
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={gridForLogo}>
        <Image src={bybit}></Image>
      </Grid>
      <Grid sx={gridForLogo}>
        <Image src={okex}></Image>
      </Grid>
      <Grid sx={gridForLogo}>
        <Image src={ftx}></Image>
      </Grid>
      <Grid sx={gridForLogo}>
        <Image src={bitmex}></Image>
      </Grid>
      <Grid sx={gridForLogo}>
        <Image src={hitbtc}></Image>
      </Grid>
      <style>{`
          .partners-logo {
          }
          @media all and (max-width: 800px) {
            .partners-logo {
            }
          }
          @media all and (max-width: 470px) {
            .partners-logo {
              margin-top: 750px;
            }
          }


      `}</style>
    </Grid>
  );
}

export default PartnersLogos;