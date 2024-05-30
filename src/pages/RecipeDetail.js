import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipeDetail, setRecipeDetail] = useState({});
  
  useEffect( () => {
    const fetchRecipeDetail = async () => {
      const recipeDetail = await fetchData(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`, 'GET');
      //console.log('recipeDetail', recipeDetail);
      setRecipeDetail(recipeDetail);
    }
    fetchRecipeDetail();
      
  }, [id])
  return (
    <Box>
     
      <Detail recipeDetail={recipeDetail} />
      
    </Box>
  )
}

export default RecipeDetail