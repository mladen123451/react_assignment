import { useState } from 'react';

function InsertForm({ onInsert }) {
  const [state, setState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    onInsert({ ...state, id: Math.random().toString(36) });
  };

  const handleInputChange = (e) => {
    const target = e.target;
    setState({ ...state, [target.name]: target.value });
  };

  return (
    <form className="insert-form" onSubmit={handleSubmit}>
      <label className="label">
        <span className="span-name">Ime</span>
        <input type="text" name="name" onChange={handleInputChange}></input>
      </label>
      <label className="label">
        <span>Broj Telefona</span>
        <input type="text" name="phone" onChange={handleInputChange}></input>
      </label>
      <button type="submit">Dodaj kontakt</button>
    </form>
  );
}

export default InsertForm;
