import React, { useEffect, useState } from "react";

function perritos(){
    const [data, setData] = useState(null);
}

useEffect ( () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json()) 
    .then((data) => setData(data))
},[])

return(
    <>
        {datos && <img src={datos.message} alt="Perrito" />}-
    </>
)

export default perritos;
