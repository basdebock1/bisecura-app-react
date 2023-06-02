import { useParams } from "react-router-dom";
import { getDetailsSmartlock, setIsActiveSmartlock } from "./utils/smartlocks";
import { useEffect, useState } from "react";

const SmartlockDetails = () => {
  const { id } = useParams();

  const [smartlock, setSmartlock] = useState(null);
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    getDetailsSmartlock(id).then((res) => {
      setSmartlock(res);
      setIsActive(res.data.isActive);
    });
  }, []);

  // Set IsActive in DB
  function updateDoc(e) {
    e.preventDefault();
    setIsActiveSmartlock(smartlock.id, !isActive);
    setIsActive(!isActive);
  }

  return (
    <div className="blog-details">
      {smartlock && (
        <article>
          <h2>{smartlock.data.name}</h2>
          <div>{smartlock.id}</div>
          <button className="smartlock__button" onClick={(e) => updateDoc(e)}>
            {isActive ? "Active" : "Activate"}
          </button>
        </article>
      )}
    </div>
  );
};

export default SmartlockDetails;
