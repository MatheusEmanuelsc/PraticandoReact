import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ initialValue = 0 }) => {
  const [cont, setCont] = useState(initialValue);

  const soma = () => setCont(cont + 1);
  const sub = () => setCont(cont - 1);
  const reseta = () => setCont(initialValue);
  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{cont}</h2>
      <button onClick={soma}>+1</button>
      <button onClick={sub}>-1</button>
      <button onClick={reseta}>Reset</button>
    </div>
  );
};

CounterApp.propTypes = {
  initialValue: PropTypes.number,
};
