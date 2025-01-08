import React from "react";
import HomeContainer from "@/containers/home";
import Movies from "@/mocks/movies.json";

function  HomePage({params}) {
   const paramSync = React.use(params);
   console.log(paramSync);

   let selectedCategory;

   if (paramSync.category.length > 0) {
    selectedCategory = true;
   }

  return (
    <HomeContainer selectedCategory= {{
        id: params.category?.[0] ?? '',
        movies: selectedCategory ? Movies.results.slice(0,7) : [],
    }}/>
  );
}

export default HomePage;
