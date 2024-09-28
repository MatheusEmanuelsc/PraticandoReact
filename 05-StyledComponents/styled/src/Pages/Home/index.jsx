import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button>teste 1</Button>
      <Link to="/login">Fazer Login</Link>
    </>
  );
}
