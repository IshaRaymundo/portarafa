// import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from "../Pages-Dash/Sidebar";

// function CondicionalAtmosferica() {
    
//     const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=5000";
//     const estadosMx = [{ "id": 1, "name": "Aguascalientes" },
//     { "id": 1, "name": "Aguascalientes" },
//         { "id": 2, "name": "Baja California" },
//         { "id": 3, "name": "Baja California Sur" },
//         { "id": 4, "name": "Campeche" }, { "id": 5, "name": "Chiapas" }, { "id": 6, "name": "Chihuahua" }, { "id": 7, "name": "Ciudad de Mexico" }, { "id": 8, "name": "Coahuila" },
//         { "id": 9, "name": "Colima" }, { "id": 10, "name": "Durango" }, { "id": 11, "name": "Estado de Mexico" }, { "id": 12, "name": "Guanajuato" }, { "id": 13, "name": "Guerrero" },
//         { "id": 14, "name": "Hidalgo" }, { "id": 15, "name": "Jalisco" }, { "id": 16, "name": "Michoacan" }, { "id": 17, "name": "Morelos" }, { "id": 18, "name": "Nayarit" },
//         { "id": 19, "name": "Nuevo Leon" }, { "id": 20, "name": "Oaxaca" }, { "id": 21, "name": "Puebla" }, { "id": 22, "name": "Queretaro" }, { "id": 23, "name": "Quintana Roo" },
//         { "id": 24, "name": "San Luis Potosi" }, { "id": 25, "name": "Sinaloa" }, { "id": 26, "name": "Sonora" }, { "id": 27, "name": "Tabasco" }, { "id": 28, "name": "Tamaulipas" },
//         { "id": 29, "name": "Tlaxcala" }, { "id": 30, "name": "Veracruz" }, { "id": 31, "name": "Yucatan" },
//         { "id": 32, "name": "Zacatecas" }
//     ];

//     const [datos, setDatos] = useState([]);
//     const [estadoActual, setEstadoActual] = useState("");

//     const consultarDatos = () => {
//         return fetch(url)
//             .then((res) => res.json())
//             .then((condicionAtm) => setDatos(condicionAtm.results));
//     };

//     useEffect(() => {
//         consultarDatos();
//     }, []);

//     // Usamos un objeto para almacenar ciudades únicas y su información climática
//     const ciudadesUnicas = {};

//     datos.forEach((ciudad) => {
//         if (ciudad.state === estadoActual) {
//             ciudadesUnicas[ciudad.name] = ciudad.skydescriptionlong;
//         }
//     });

//     // Convertimos el objeto en un arreglo
//     const ciudadesFiltradas = Object.entries(ciudadesUnicas);

//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 {/* Barra lateral izquierda */}
//                 <Sidebar/>
//                 {/* Contenido central */}
//                 <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//                     <div className="container mt-4">
//                         <div className="row">
//                             <div className="col-md-4">
//                                 <div className="card">
//                                     <div className="card-body">
//                                         <h5 className="card-title">Seleccionar Estado</h5>
//                                         <select
//                                             className="form-select"
//                                             onChange={(e) => setEstadoActual(e.target.value)}
//                                             value={estadoActual}
//                                         >
//                                             <option value="">SELECCIONA UN ESTADO</option>
//                                             {estadosMx.map((opcion) => (
//                                                 <option key={opcion.id} value={opcion.name}>
//                                                     {opcion.name}
//                                                 </option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-md-8">
//                                 <div className="card">
//                                     <div className="card-body">
//                                         <h5 className="card-title">Resultados de la Búsqueda</h5>
//                                         {ciudadesFiltradas.map(([ciudad, clima], index) => {
//                                             return (
//                                                 <div key={index}>
//                                                     <p>
//                                                         {ciudad} - <i>{clima}</i>
//                                                     </p>
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// }

// export default CondicionalAtmosferica;
