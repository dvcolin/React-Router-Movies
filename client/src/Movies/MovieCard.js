import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  return(
    <Link to='/movie'>
      <MovieCard></MovieCard>
    </Link>
  )
};

export default MovieCard;
