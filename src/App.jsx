import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Hearder.jsx';
import Home from './pages/Home/Home.jsx';
import Sessions from './pages/Sessions/Sessions.jsx';
import Seats from './pages/Seats/Seats.jsx';
import Success from './pages/Success/Success.jsx';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<Sessions />} />
        <Route path="/assentos/:idSessao" element={<Seats />} />
        <Route path="/sucesso" element={<Success />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
