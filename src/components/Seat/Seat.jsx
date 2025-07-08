import { SeatItem } from "./styles";



export default function Seat({ seat, isSelected, toggle }) {
  const { name, isAvailable } = seat;

  function handleClick() {
    if (!isAvailable) {
      alert('Esse assento não está disponível');
      return;
    }
    toggle(seat.id);
  }

  return (
    <SeatItem
      role="button"
      $available={isAvailable}
      $selected={isSelected}
      onClick={handleClick}
    >
      {name}
    </SeatItem>
  );
}


