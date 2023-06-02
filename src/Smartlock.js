import { useState } from "react";
import { Link } from "react-router-dom";
import { setIsActiveSmartlock } from "./utils/smartlocks";

const Smartlock = ({ smartlock }) => {
  const [isActive, setIsActive] = useState(smartlock.data.isActive);

  // Set IsActive in DB
  function updateDoc(e) {
    e.preventDefault();
    setIsActiveSmartlock(smartlock.id, !isActive);
    setIsActive(!isActive);
  }

  return (
    <div className="smartlock">
      <Link to={`/smartlocks/${smartlock.id}`}>
        <h2 className="smartlock__title">{smartlock.data.name}</h2>
      </Link>
      <button className="smartlock__button" onClick={(e) => updateDoc(e)}>
        {isActive ? "Active" : "Activate"}
      </button>
    </div>
  );
};

export default Smartlock;
