import "../styles/component/form.sass";
import { FcSearch } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [number, setNumber] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [detailsNumber, setDetailsNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number === "") {
      return;
    }
    axios
      .get(`http://numbersapi.com/${number}`)
      .then((response) => {
        setDetailsNumber(response.data);
        setNewNumber(number);
      })
      .catch((err) => console.log("Erro", err))
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-col">
        <label className="label">
          Digite o número do qual você quer saber alguma curiosidade aleatória
          <input
            type="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>

        <input id="btn" type="submit" value="Pesquisar" />
        <FcSearch />
      </form>
      {detailsNumber ? (
        <div id="details">
          <p>{detailsNumber}</p>
          <div>
            <p id="my-number">{newNumber}</p>
          </div>
        </div>
      ) : (
        <div id="first-search">
          <p>Faça sua busca</p>
        </div>
      )}
    </div>
  );
};

export default Form;
