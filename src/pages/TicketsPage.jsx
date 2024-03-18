import { useNavigate } from "react-router";

export function TicketsPage() {
  const navigate = useNavigate();

  function handleBuyTickets() {
    navigate("/confirmation");
  }

  return (
    <section>
      <h1>Tickets</h1>
      <ul>
        <li>Day Pass</li>
        <li>Season Pass</li>
        <li>Group Pass</li>
      </ul>
      <button onClick={handleBuyTickets}>Buy Tickets</button>
    </section>
  );
}
