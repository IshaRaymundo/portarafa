import React, { useEffect, useState } from "react"
import { dbFirebase } from "../bd/firebaseConfig"
import {collection, addDoc,getDocs, deleteDoc, doc, getDoc, updateDoc} from "@firebase/firestore"


function Tours(){
    const [nombre,setNombre]=useState("")
    const [descripcion,setDescripcion]=useState("")
    const [precio,setPrecio]=useState(0)
    const ToursCollection=collection(dbFirebase, 'tours')
    const[listaTours,setListaTours]=useState([])
    const [codigo,setCodigo]= useState(" ")
    const [elID, setID]=useState("");
    

    const editarTour=async(e)=>{
        e.preventDefault()
        const tourDoc=doc(dbFirebase,'tours', elID)
        await updateDoc(tourDoc,{Nombre:nombre, Descripcion: descripcion, Precio:Number(precio)})
    }

    const crearTour=async(event)=>{
        event.preventDefault();
        await addDoc(ToursCollection,{Nombre:nombre, Descripcion:descripcion, Precio:precio})
        console.log("Tour agregado")
    }

    const mostrarTours=async()=>{
        const datos=await getDocs(ToursCollection)
        setListaTours(datos.docs.map((registro)=>({
            ...registro.data(), id:registro.id
        })))
    }
    useEffect(()=>{
        mostrarTours()
    })
    //ELIMINAR TOUR
    const eliminarTour=async(id)=>{
        const tourDocument=  doc(dbFirebase,"tours",id)
        await deleteDoc(tourDocument)
    }

    ///CARGAR DATOS
    const cargarDatos= async(id) =>{
        console.log(codigo);
        const tourDocument= doc(dbFirebase,'tours', id)
        const datos=await getDoc(tourDocument);
        const elTour=datos.data();
        setNombre(elTour.Nombre)
        setDescripcion(elTour.Descripcion);
        setPrecio(elTour.Precio)
        setID(id);
    }




    return(
        <>
        <form onSubmit={crearTour}>
            <input  type="text"  placeholder="Nombre"
            onChange={(e)=>setNombre(e.target.value)}/>
            <input  type="text"  placeholder="Descripcion"
            onChange={(e)=>setDescripcion(e.target.value)}/>
            <input  type="number"  placeholder="Precio"
            onChange={(e)=>setPrecio(e.target.value)}/>
            <button type="submit">Guardar Tour</button>
        </form>

        {
            listaTours.map(eltour=>{
                return (<div><p>
                    {eltour.Nombre}
                    <button className="btn btn-danger" onClick={()=>{eliminarTour(eltour.id)}}>Eliminar</button>
                    <button className="btn btn-primary" onClick={() => {cargarDatos(eltour.id) }} data-bs-toggle="modal" data-bs-target="#exampleModal">EDITAR</button>
                </p>
                </div>
                )
            })
        }

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">

              <form onSubmit={editarTour}>
            <input  type="text"  placeholder="Nombre" value={nombre}
            onChange={(e)=>setNombre(e.target.value)}/>
            <input  type="text"  placeholder="Descripcion" value={descripcion}
            onChange={(e)=>setDescripcion(e.target.value)}/>
            <input  type="number"  placeholder="Precio" value={precio}
            onChange={(e)=>setPrecio(e.target.value)}/>
        </form>

        

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={editarTour}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </>

        
    )
}

export default Tours