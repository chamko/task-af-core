import React from "react";
import "./Counter.css";

const click_me = () => {
  alert("Miaouuuu");
};

const Counter = function (props) {
  const isActive = props.isActive || false;
  return (
    <section className="Counter">
      {isActive ? (
        <h1>Je suis le compteur ACTIIIIIIIIIIF</h1>
      ) : (
        <h1>Je suis le compteur </h1>
      )}
      <h2> Ohh yeah</h2>
      <button onClick={click_me}> Click ici STP!! &#10084;</button>
    </section>
  );
};

export default Counter;
