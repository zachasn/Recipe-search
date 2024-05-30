import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImg from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box 
      sx={{mt: {lg: '212px',xs: '70px'}, ml: {sm: '50px'}}}
      position='relative'
      p='20px'
    >
      <Typography color='FF2625' fontWeight='600' fontSize='26px'>
        Recipe Search
      </Typography>
      <Typography fontWeight={700}
        sx={{fontSize: {lg: '44px',xs: '40px'}}} mb='23px' mt='30px'
      >
       Discover new <br /> recipes 
      </Typography>
      <Stack>
        <a href="#recipes" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#0A6847', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Recipes</a>
      </Stack>
      
      <Typography fontWeight={600} color='#FFDB5C' sx={{opacity: 0.2,display: {lg: 'block', xs: 'none'}}} fontSize="200px">recipes</Typography>
      <img src={HeroBannerImg} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner