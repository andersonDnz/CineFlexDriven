import { Top } from './styles';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <Top onClick={() => navigate('/')}>
      🎬 Cineflex
    </Top>
  );
}
