"use client";
import React, { useEffect, useState } from 'react';
import MovieContainer from '@/containers/movie';
import movies from '@/mocks/movies.json';
import { notFound } from 'next/navigation';

function MoviePage({params, searchParams}) {
  
  const paramSync = React.use(params);
  const searchparamSync = React.use(searchParams);
  console.log("Movie ID:", paramSync);  
  if (!paramSync.id) {
    return <div>Parametreler eksik veya hatalı.</div>;
  }

  const movieDetail = movies.results.find((movie) => movie.id== paramSync.id);

   if (!movieDetail) {
     notFound();
   }

   if(searchparamSync.error === 'true'){
    throw new Error('Error: ' + searchparamSync.error );
   }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;