import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ initialValue }) => {
  // Define o estado inicial de "value" com base na prop "initialValue" ou 0 como padrão
  const [value, setValue] = useState(initialValue || 0);

  // Função que atualiza o estado "value" incrementando-o em 1
  const incrementValue = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <button onClick={incrementValue}>+1</button>
    </div>
  );
};

// Define "initialValue" como uma prop obrigatória do tipo número
CounterApp.propTypes = {
  initialValue: PropTypes.number,
};
