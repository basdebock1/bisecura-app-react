import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSmartlock } from "./utils/smartlocks";

const Create = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const isActive = true;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addSmartlock(id, name, isActive);
    navigate('/');
  };

  return (
    <div className="create">
      <h2>Add a New Smartlock</h2>
      <form onSubmit={handleSubmit}>
        <label>Geef je private code in: </label>
        <input
          type="text"
          required
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label>Geef je slot een naam: </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {<button>Voeg nieuw slot toe</button>}
      </form>
    </div>
  );
};

export default Create;
