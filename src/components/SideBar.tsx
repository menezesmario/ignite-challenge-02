import { useEffect, useState } from "react";
<<<<<<< HEAD

import { api } from "../services/api";
import { Button } from './Button';


// interface para os dados dos botões
=======
import { api } from "../services/api";
import { Button } from "./Button";

>>>>>>> 5547db574a007ccb166e7738e65a0b5e3134793a
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

<<<<<<< HEAD
// interface para as propriedades do sidebar
interface SideBarProps {
  handleClickButton: (id: number) => void; //uma das props é uma função que recebe um id e retorna void, somente altera o selectedGenreId
  selectedGenreId: number
}

export function SideBar({ handleClickButton, selectedGenreId}: SideBarProps) {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]) //genres recebe uma array de GenreResponseProps

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => { //a api retorna um array de GenreResponseProps
=======
export function SideBar() {
  // Complete aqui

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
>>>>>>> 5547db574a007ccb166e7738e65a0b5e3134793a
      setGenres(response.data);
    });
  }, []);

<<<<<<< HEAD
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => ( //map nos generos retornados da api
=======
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
    console.log(id)
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {genres.map(genre => (
>>>>>>> 5547db574a007ccb166e7738e65a0b5e3134793a
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
<<<<<<< HEAD
              selected={selectedGenreId === genre.id} // o id do genero selecionado é o mesmo do botão renderizado?
=======
              selected={selectedGenreId === genre.id}
>>>>>>> 5547db574a007ccb166e7738e65a0b5e3134793a
            />
          ))}
        </div>
    </nav>
  )
<<<<<<< HEAD
=======

>>>>>>> 5547db574a007ccb166e7738e65a0b5e3134793a
}