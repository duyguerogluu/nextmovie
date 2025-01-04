"use client";
import React, { useEffect, useState } from 'react';
import MovieContainer from '@/containers/movie';
import movies from '@/mocks/movies.json';
import { Link, useParams } from 'react-router-dom';

function MoviePage({params}) {
  
  const paramSync = React.use(params);
  console.log("Movie ID:", paramSync);  
  if (!paramSync.id) {
    return <div>Parametreler eksik veya hatalı.</div>;
  }

  const movieDetail = movies.results.find((movie) => movie.id== paramSync.id);

  if (!movieDetail) {
    return <div>movie detail gelmedi</div>;
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;