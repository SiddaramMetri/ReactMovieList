import { useState } from 'react' ;

import { AddMovie } from "./components/addMovieForm";
import { MovieList } from "./components/MovieList"


function App() {
  const [movies, setMovies]= useState([])
  return (
    <>
    <AddMovie setMovies={setMovies} />
    <MovieList movies ={movies}/> {/*  */}
    </>
  );
}

export default App;
