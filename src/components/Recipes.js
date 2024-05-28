import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { fetchData } from '../utils/fetchData';
import RecipeCard from './RecipeCard';

const Recipes = ( { searchedRecipes, setSearchedRecipes } ) => {
  //console.log(searchedRecipes);
  return (
    <Box id="recipes"
    sx={{
      mt: {lg: '110px'},
    }}
    mt='50px'
    p='20px'
    > 
      <Typography variant='h3' mb='46px'>
        Results 
      </Typography>
      <Stack direction='row'
        sx={{gap: {lg: '110px', xs: '50px'}}}
        flexWrap='wrap'
        justifyContent='center'
      >
        {searchedRecipes.map((hit, index) => {
          const recipe = hit.recipe;
          //console.log(recipe);
          return (
            <RecipeCard
              key={index}
              id={index}
              recipe={recipe}
            />
          )
        })}
      </Stack>
    </Box>
  )
}

export default Recipes