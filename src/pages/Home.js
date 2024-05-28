import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchRecipes from '../components/SearchRecipes';
import Recipes from '../components/Recipes';

const Home = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchRecipes setSearchedRecipes={setSearchedRecipes}/> 
      <Recipes 
        searchedRecipes={searchedRecipes}
        setSearchedRecipes={setSearchedRecipes}
      />
    </Box>
  )
}

export default Home