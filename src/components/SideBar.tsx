import { useEffect, useState } from "react";

import { api } from "../services/api";
import { Button } from './Button';


// interface para os dados dos botões
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

// interface para as propriedades do sidebar
interface SideBarProps {
  handleClickButton: (id: number) => void; //uma das props é uma função que recebe um id e retorna void, somente altera o selectedGenreId
  selectedGenreId: number
}

export function SideBar({ handleClickButton, selectedGenreId}: SideBarProps) {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]) //genres recebe uma array de GenreResponseProps

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => { //a api retorna um array de GenreResponseProps
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => ( //map nos generos retornados da api
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id} // o id do genero selecionado é o mesmo do botão renderizado?
            />
          ))}
        </div>
    </nav>
  )
}