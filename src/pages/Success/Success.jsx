import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Section,
  FixedButton,
  Footer,
  Poster,
} from './styles';

export default function Success() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return null;

  const { movie, date, time, seats, buyer, posterURL } = state;

  return (
    <>
      <Container>
        <h2>Pedido finalizado!</h2>

        <Section>
          <h3>Filme e sessão</h3>
          <p>{movie}</p>
          <p>{date} às {time}</p>
        </Section>

        <Section>
          <h3>Ingressos</h3>
          {seats.map((s) => <p key={s}>Assento {s}</p>)}
        </Section>

        <Section>
          <h3>Comprador(a)</h3>
          <p>Nome: {buyer.name}</p>
          <p>CPF: {buyer.cpf}</p>
        </Section>
        <FixedButton onClick={() => navigate('/')}>
          Voltar para tela inicial
        </FixedButton>
      </Container>
      <Footer>
        <Poster>
          <img src={posterURL} alt={movie} />
        </Poster>
        <span>
          {movie}
          <br />
          {date} – {time}
        </span>
      </Footer>

    </>
  );
}
