import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import RecipeCard from './RecipeCard';

const Recipes = ( { searchedRecipes, setSearchedRecipes } ) => {
  //console.log("SearchedRecipes is: ",searchedRecipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(10);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = searchedRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1900, behavior: 'smooth' });
  };
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
        {currentRecipes.map( (curr) => {
          const {recipe} = curr;
          return (
            <RecipeCard 
              key={recipe.uri.split('#')[1]}
              id={recipe.uri.split('#')[1]}
              recipe={recipe}

            />
          )
        }
        )}
      </Stack>
      {searchedRecipes.length > 9 && (
        <Pagination 
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(searchedRecipes.length / recipesPerPage)}
          onChange={paginate}
          size='large'
        />
      )}
    </Box>
  )
}

export default Recipes