import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]); // on declare une variable data en utilisant le usestate pour le modifier on utilisera le setData
  // le useEffect se joue lorsque le composant est monte
  //
  const [rangeValue, setRangeValue] = useState(12);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data)); // avec axios on n'as pas besion de convertir les donnee en JSON "res.Json"
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {/* pour ne pas a avoir a faire 05 input de types raidio pour chaque
        continent on va creer un tableau de continent rt utiliser la map pour le
        parcourir et l'afficher dans une liste on gagne en ligne de code et en
        temps */}
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              checked={continent === selectedRadio}
              id={continent}
              name="continentRadio"
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      <h1>PAYS</h1>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            //   <li key={index}>{country.translations.fra.common}</li>
            <Card key={index} country={country} />
          ))}
      </ul>
      {/* /* //avec react on n'as pas besion des guikkemets de la touche 7 les accolade
    suffise pour ecrire de Js / on utlise la key pour l'dentifiant unique de
    chaque pays ca peut etres n'importe quoi nom,premon...etc ou son index
    dans la bd // on utice la methode slice pour determiner le nombre delement a afficher on la join a l'input range a partr de 0 jusqua rangeValue (0, rangevalue)  */}
    </div>
  );
};

export default Countries;
<h1>PAYS</h1>;
