import { useEffect, useState } from 'react';

<<<<<<< HEAD
import { MovieCard } from './components/MovieCard';

import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';
=======
import { Button } from './components/Button';

// import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
>>>>>>> 5547db574a007ccb166e7738e65a0b5e3134793a

import { api } from './services/api';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';





interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


export function App() {

<<<<<<< HEAD
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);



  function Content() {

    return (
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    )
  }

// ALTERA O selectedGenreId, NECESSÁRIO NO SIDEBAR E NO CONTENT
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
    
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      
      {/* SIDEBAR */}      
      <SideBar selectedGenreId={selectedGenreId} handleClickButton={handleClickButton} />

      {/* CONTENT */}
      <Content />
=======

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar/>

      
      <Content
        id={selectedGenreId} 
        name={'action'} 
        title={''}
      />      
>>>>>>> 5547db574a007ccb166e7738e65a0b5e3134793a
    </div>

  )
}