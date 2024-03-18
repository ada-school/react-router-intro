import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getRides } from "../services/ridesService";

export function RidesPage() {
  const [rides, setRides] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const rideType = searchParams.get("type") || "all";

  useEffect(() => {
    getRides(rideType).then((rides) => {
      setRides(rides);
    });
  }, [rideType]);

  if (rides.length === 0) {
    return <p>Loading...</p>;
  }

  function handleChangeRideType(e) {
    setSearchParams({ type: e.target.value });
  }

  return (
    <section>
      <h1>Rides</h1>

      <select onChange={handleChangeRideType} value={rideType}>
        <option value="all">All</option>
        <option value="water">Water</option>
        <option value="roller-coaster">Roller coaster</option>
      </select>

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
