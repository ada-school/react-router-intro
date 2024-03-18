import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRide } from "../services/ridesService";

export function RideDetailPage() {
  const { id } = useParams();

  const [ride, setRide] = useState(null);

  useEffect(() => {
    getRide(id).then((ride) => {
      setRide(ride);
    });
  }, [id]);

  if (!ride) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h2>{ride.name}</h2>
      <p>{ride.description}</p>
    </div>
  );
}
