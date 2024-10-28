const categories = [
  {
    id: 1,
    name: "Eletrônicos",
    products: ["Celular", "Laptop", "Fone de ouvido"],
  },
  {
    id: 2,
    name: "Roupas",
    products: ["Camiseta", "Calça", "Jaqueta"],
  },
];
function App() {
  return (
    <div>
      <ul>
        {categories.map((categoria) => (
          <li key={categoria.id}>{categoria.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
