import React from "react";

const Card = ({ country }) => {
  //on utile le destructuring pour ne pas avoir a ecrire propos.country chaque fois
  // console.log(propos.country);
  // console.log(country);
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau" + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        <p> pop : {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
