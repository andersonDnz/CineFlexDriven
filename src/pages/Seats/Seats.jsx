import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api.js';

import SeatsGrid from '../../components/SeatsGrid/SeatsGrid.jsx';


import {
  Loading,
  Container,
  Title,
  Legend,
  Form,
  Footer,
  Poster,
} from './styles.js';



export default function Seats() {
  const { idSessao } = useParams();
  const navigate = useNavigate();

  const [session, setSession] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    api.get(`/showtimes/${idSessao}/seats`)
      .then((res) => setSession(res.data))
      .catch(() => alert('Erro ao buscar assentos'));
  }, [idSessao]);

  function toggleSeat(id) {
    setSelectedSeats((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (selectedSeats.length === 0) {
      alert('Selecione pelo menos um assento');
      return;
    }

    const body = { ids: selectedSeats, name, cpf };
    api.post('/seats/book-many', body)
      .then(() =>
        navigate('/sucesso', {
          state: {
            seats: selectedSeats,
            buyer: { name, cpf },
            movie: session.movie.title,
            date: session.day.date,
            time: session.name,
            posterURL: session.movie.posterURL,
          },
        })
      )
      .catch(() => alert('Erro ao reservar assentos'));
  }

  if (!session) return <Loading>Carregando...</Loading>;

  return (
    <Container>
      <Title>Selecione o(s) assento(s)</Title>

      <SeatsGrid
        seats={session.seats}
        selectedSeats={selectedSeats}
        toggleSeat={toggleSeat}
      />

      <Legend>
        <li><span className="selected" />Selecionado</li>
        <li><span className="available" />Disponível</li>
        <li><span className="unavailable" />Indisponível</li>
      </Legend>

      <Form onSubmit={handleSubmit}>
        <label>
          Nome do comprador:
          <input
            type="text"
            placeholder="Digite seu nome..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          CPF do comprador:
          <input
            type="text"
            placeholder="seu cpf ex:12345678910"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
            required
          />
        </label>

        <button type="submit">Reservar assento(s)</button>
      </Form>

      <Footer>
        <Poster>
          <img src={session.movie.posterURL} alt={session.movie.title} />
        </Poster>
        <span>
          {session.movie.title}
          <br />
          {session.day.weekday} – {session.name}
        </span>
      </Footer>
    </Container>
  );
}