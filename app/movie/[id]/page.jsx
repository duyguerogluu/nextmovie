'use client';

import React, { useEffect, useState } from 'react';
import MovieContainer from '@/containers/movie';
import movies from '@/mocks/movies.json';
import { Link, useParams } from 'react-router-dom';

function MoviePage({params}) {
  
  console.log("Movie ID:", params);  
  if (!id) {
    return <div>Parametreler eksik veya hatalı.</div>;
  }

  const movieDetail = movies.results.find((movie) => movie.id === Number(params.id));

  if (!movieDetail) {
    return <div>Film bulunamadı.</div>;
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;