import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api.js';


import {
  Loading,
  Container,
  Title,
  Day,
  Buttons,
  Footer,
  Poster
} from './styles.js';



export default function Sessions() {
  const { idFilme } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/movies/${idFilme}/showtimes`)
      .then((res) => setData(res.data))
      .catch(() => alert('Erro ao buscar sessões'));
  }, [idFilme]);


  if (!data) return <Loading>Carregando...</Loading>;

  return (
    <Container>
      <Title>Selecione o horário</Title>

      {data.days.map((day) => (
        <Day key={day.id}>
          <p>{day.weekday} – {day.date}</p>

          <Buttons>
            {day.showtimes.map((show) => (
              <button
                key={show.id}
                onClick={() => navigate(`/assentos/${show.id}`)}
              >
                {show.name}
              </button>
            ))}
          </Buttons>
        </Day>
      ))}

      <Footer>
        <Poster>
          <img src={data.posterURL} alt={data.title} />
        </Poster>
        <span>{data.title}</span>
      </Footer>
    </Container>
  );
}
