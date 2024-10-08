import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Pages/Home/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
