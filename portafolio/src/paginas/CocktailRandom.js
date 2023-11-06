import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css"; // Asegúrate de importar Tailwind CSS

function CocktailRandom() {
  const [datos, setDatos] = useState(null);
  const [estatus, setEstatus] = useState(false);

  useEffect(() => {
    const bebidaGuardada = localStorage.getItem("bebida");
    if (bebidaGuardada) {
      setDatos(JSON.parse(bebidaGuardada));
    } else {
      obtenerCocktail();
    }
  }, []);

  const obtenerCocktail = async () => {
    setEstatus(true);
    try {
      const resultado = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
      if (!resultado.ok) {
        console.log("No se logró cargar contenido");
      }
      const cocktail = await resultado.json();
      const bebidaSeleccionada = cocktail.drinks[0];
      setDatos(bebidaSeleccionada);
      localStorage.setItem("bebida", JSON.stringify(bebidaSeleccionada));
    } catch (error) {
      console.log(error);
    } finally {
      setEstatus(false);
    }
  }

  const nuevaBebida = () => {
    localStorage.removeItem("bebida"); // Elimina la bebida guardada
    obtenerCocktail(); // Obtener una nueva bebida al hacer clic en "Nueva bebida"
  }

  const mostrarInformacionBebida = () => {
    if (datos) {
      return (
        <div className="bebida-info p-4 bg-white rounded-lg shadow-md">
          <img
            src={datos.strDrinkThumb}
            alt={datos.strDrink}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <div className="bebida-texto">
            <h2 className="text-2xl font-bold text-gray-800">{datos.strDrink}</h2>
            <p><strong>Categoría:</strong> {datos.strCategory}</p>
            <p><strong>Ingredientes:</strong></p>
            <ul>
              {Array.from({ length: 15 }).map((_, i) => {
                const ingrediente = datos[`strIngredient${i}`];
                if (ingrediente) {
                  const medida = datos[`strMeasure${i}`];
                  return (
                    <li key={i} className="list-disc list-inside">
                      {medida} {ingrediente}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            <p><strong>Descripción:</strong> {datos.strInstructions}</p>
            <button onClick={nuevaBebida} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Nueva bebida
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">¡Obtén una bebida random!</h1>
        <div className="bg-gray-200 p-4 rounded-lg">
          {datos ? (
            <div>
              {estatus ? <h2 className="text-center">Cargando información...</h2> : mostrarInformacionBebida()}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CocktailRandom;
