import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData } from '../utils/fetchData';


const SearchRecipes = ( { setSearchedRecipes } ) => {

  const [search, setSearch] = useState('');
  
  
  

  const handleSearch = async () => {
    if (search) {
      
      const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;
      const recipeData = await fetchData(url);
      //console.log("recipeData: ",recipeData);
      const searchedRecipes = recipeData.hits; //array of recipes
      //console.log("recipeData hits: ",searchedRecipes);
      setSearch('');
      setSearchedRecipes(searchedRecipes); 
      
    }
  }
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '30px'}}} mb='50px' textAlign='center' >
        Search for recipes
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
        sx={{
          input: {fontWeight: '700',border: 'none',borderRadius: '4px'},
          width: {lg: '800px', xs: '350px'},
          backgroundColor:'#fff',
          borderRadius: '40px',
          
        }}
          height='77px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search recipes'
          type='text'
        />
        <Button className='search-btn' sx={{
          bgcolor: '#0A6847', 
          color: '#fff', 
          textTransform: 'none', 
          width: {lg: '175px', xs: '80px'}, 
          fontSize: {lg: '20px', xs: '14px'}, 
          height: '56px', 
          position: 'absolute',
          right: '0'
        }} 
        onClick={handleSearch} 
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchRecipes