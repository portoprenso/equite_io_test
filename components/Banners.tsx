import React from 'react';
import {Button, Grid, Typography} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const button1SX = {
  boxShadow: "0px 0px 20px 0px rgba(188,79,255,0.69)",
  webkitBoxShadow: "0px 0px 20px 0px rgba(188,79,255,0.69)",
  mozBoxShadow: "0px 0px 20px 0px rgba(188,79,255,0.69)",
  borderRadius: "5px",
  backgroundColor: "#5040B2",
  color: "#fff",
  height: "50px",
  width: "187px",
  marginRight: "29px"
}

const button2SX = {
  boxShadow: "0px 0px 20px 0px rgba(188,79,255,0.69)",
  webkitBoxShadow: "0px 0px 20px 0px rgba(188,79,255,0.69)",
  mozBoxShadow: "0px 0px 20px 0px rgba(188,79,255,0.69)",
  borderRadius: "5px",
  backgroundColor: "#101C2B",
  color: "#C49BFF",
  outline: "1px solid #C49BFF",
  outlineOffset: "-1px",
  height: "50px",
  width: "187px",
}

SwiperCore.use([Pagination, Navigation])
const reunderBulletFunc = (idx: number, className: string) => {
  console.log(idx, className)
  return `<span class="${className}" style="opacity: 1!important; margin-right: 20px; height: 13px; width: 13px; box-shadow: 0px 0px 20px 0px rgba(188,79,255,0.69);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(188,79,255,0.69);
  -moz-box-shadow: 0px 0px 20px 0px rgba(188,79,255,0.69);
  border-radius: 0;
  transform: rotate(45deg);
  outline: 1px solid #C49BFF;
  outline-offset: -1px;
  background: none;
"></span>`
}

function Banners() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{clickable: true, renderBullet: reunderBulletFunc}}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{marginTop: '53px'}}
    >
      <SwiperSlide>
        <Grid item xs={10} sx={{zIndex: 1, justifySelf: 'flex-start', height: {xs: "600px",sm: "470px"}, margin: {
          xs: '0 auto',
          lg: 0
          }}}>
          <Grid item xs={12}>
            <Typography sx={{textAlign: {xs: 'center', md: 'left'}, fontWeight: 700, fontSize: {xs: "35px", md: "50px"}, color: "#fff", lineHeight: "60px", letterSpacing: "3px"}} variant="h1" className="gothicA1FontBold">Поделитесь своими<br></br>результатами</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{textAlign: {xs: 'center', md: 'left'}, fontWeight: 200, fontSize: {xs: "27px", md: "35px"}, color: "#AE8DE5", lineHeight: "50px", letterSpacing: "3px", marginTop: "29px"}} variant="h4" className="gothicA1FontLight">И ПОЛУЧИТЕ ДОВЕРИЕ<br></br>БОЛЬШОГО КОЛИЧЕСТВА<br></br>ИНВЕСТОРОВ</Typography>
          </Grid>
          <Grid sx={{display: "flex", justifySelf: "center", justifyContent: {md: "left", xs: "center"}}} item xs={12}>
            <Button sx={button1SX}>НАЧАТЬ 1</Button>
            <Button sx={button2SX}>Я ТРЕЙДЕР</Button>
          </Grid>
        </Grid>
      </SwiperSlide>      <SwiperSlide>
        <Grid item xs={10} sx={{zIndex: 1, justifySelf: 'flex-start', height: {xs: "600px",sm: "470px"}, margin: {
          xs: '0 auto',
          lg: 0
          }}}>
          <Grid item xs={12}>
            <Typography sx={{textAlign: {xs: 'center', md: 'left'}, fontWeight: 700, fontSize: {xs: "35px", md: "50px"}, color: "#fff", lineHeight: "60px", letterSpacing: "3px"}} variant="h1" className="gothicA1FontBold">Поделитесь своими<br></br>результатами</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{textAlign: {xs: 'center', md: 'left'}, fontWeight: 200, fontSize: {xs: "27px", md: "35px"}, color: "#AE8DE5", lineHeight: "50px", letterSpacing: "3px", marginTop: "29px"}} variant="h4" className="gothicA1FontLight">И ПОЛУЧИТЕ ДОВЕРИЕ<br></br>БОЛЬШОГО КОЛИЧЕСТВА<br></br>ИНВЕСТОРОВ</Typography>
          </Grid>
          <Grid sx={{display: "flex", justifySelf: "center", justifyContent: {md: "left", xs: "center"}}} item xs={12}>
            <Button sx={button1SX}>НАЧАТЬ 1</Button>
            <Button sx={button2SX}>Я ТРЕЙДЕР</Button>
          </Grid>
        </Grid>
      </SwiperSlide>      <SwiperSlide>
        <Grid item xs={10} sx={{zIndex: 1, justifySelf: 'flex-start', height: {xs: "600px",sm: "470px"}, margin: {
          xs: '0 auto',
          lg: 0
          }}}>
          <Grid item xs={12}>
            <Typography sx={{textAlign: {xs: 'center', md: 'left'}, fontWeight: 700, fontSize: {xs: "35px", md: "50px"}, color: "#fff", lineHeight: "60px", letterSpacing: "3px"}} variant="h1" className="gothicA1FontBold">Поделитесь своими<br></br>результатами</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{textAlign: {xs: 'center', md: 'left'}, fontWeight: 200, fontSize: {xs: "27px", md: "35px"}, color: "#AE8DE5", lineHeight: "50px", letterSpacing: "3px", marginTop: "29px"}} variant="h4" className="gothicA1FontLight">И ПОЛУЧИТЕ ДОВЕРИЕ<br></br>БОЛЬШОГО КОЛИЧЕСТВА<br></br>ИНВЕСТОРОВ</Typography>
          </Grid>
          <Grid sx={{display: "flex", justifySelf: "center", justifyContent: {md: "left", xs: "center"}}} item xs={12}>
            <Button sx={button1SX}>НАЧАТЬ 1</Button>
            <Button sx={button2SX}>Я ТРЕЙДЕР</Button>
          </Grid>
        </Grid>
      </SwiperSlide>

    </Swiper>
  );
}

export default Banners;