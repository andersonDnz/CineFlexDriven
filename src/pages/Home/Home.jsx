import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import {
  Loading,
  Container,
  Title,
  Grid,
  Poster
} from './styles';

export default function Home() {
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/movies')
      .then((res) => setMovies(res.data))
      .catch(() => alert('Erro ao buscar filmes 😢'));
  }, []);

  if (!movies) return <Loading>Carregando...</Loading>;

  return (
    <Container>
      <Title>Filmes em Cartaz</Title>

      <Grid>
        {movies.map((movie) => (
          <Poster
            key={movie.id}
            onClick={() => navigate(`/sessoes/${movie.id}`)}
            role="button"
          >
            <img src={movie.posterURL} alt={movie.title} />
          </Poster>
        ))}
      </Grid>
    </Container>
  );
}

