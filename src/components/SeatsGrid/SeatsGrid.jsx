import styled from 'styled-components';

import Seat from '../Seat/Seat';

export default function SeatsGrid({ seats, selectedSeats, toggleSeat }) {
  return (
    <List>
      {seats.map((s) => (
        <Seat
          key={s.id}
          seat={s}
          isSelected={selectedSeats.includes(s.id)}
          toggle={toggleSeat}
        />
      ))}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  max-width: 330px;
  margin: 20px auto;
  cursor: pointer;
`;
