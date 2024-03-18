import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRides } from "../services/ridesService";

export function RidesPage() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    getRides().then((rides) => {
      setRides(rides);
    });
  }, []);

  if (rides.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h1>Rides</h1>

      <ul>
        {rides.map((ride) => (
          <li key={ride.id}>
            <Link to={`/rides/${ride.id}`}>{ride.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
