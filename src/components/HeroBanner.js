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
      <Typography color='FF2625' fontWeight='600' fontsize='26px'>
        Recipe Search
      </Typography>
      <Typography fontWeight={700}
        sx={{fontSize: {lg: '44px',xs: '40px'}}} mb='23px' mt='30px'
      >
        Welcome to <br /> Recipe Search
      </Typography>
      <Typography fontsize='22px' lineHeight='35px' mb={4}>
        discover over 1,000 recipes
      </Typography>
      <Button variant='contained' color='success' href='#recipes' sx={{backgroundColor: '#0A6847', padding: '10px'}}>
        Explore Recipes
      </Button>
      <Typography fontWeight={600} color='#FFDB5C' sx={{opacity: 0.2,display: {lg: 'block', xs: 'none'}}} fontSize="200px">recipes</Typography>
      <img src={HeroBannerImg} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner