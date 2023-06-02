import { findByDisplayValue } from "@testing-library/react";
import SmartlockList from "./SmartlockList";
import { fetchAll } from "./utils/smartlocks";
import { useEffect, useState } from "react";

const Home = () => {
  const [locks, setLocks] = useState(null);

  useEffect(() => {
    fetchAll()
      .then((data) => setLocks(data));
  }, []);

  return (
    <div className="home">
      {locks && (
        <SmartlockList smartlocks={locks} title={"Jouw Slimme sloten"} />
      )}
    </div>
  );
};

export default Home;
