import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5001/api/pizzas/${id}`)
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error al obtener la pizza:", error));
  }, []);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <p>Precio: ${pizza.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
