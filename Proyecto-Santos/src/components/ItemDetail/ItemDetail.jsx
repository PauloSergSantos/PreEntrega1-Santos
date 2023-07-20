import { Link } from "react-router-dom"



export const ItemDetail = ({item}) => {
    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre} />
            <p>{item.descripcion}</p> 
            <p>Precio: ${item.precio}</p>

            <Link to={item.id} className="btn btn-primary">Agregar</Link>
        </div>
    )
}