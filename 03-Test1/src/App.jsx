import PropTypes from "prop-types";
import { CounterApp } from "./CounterApp";

function App({ title, desc, data }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{desc}</p>
      <small>{data}</small>
      <CounterApp initialValue={10} />
    </>
  );
}

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  data: PropTypes.number,
};
