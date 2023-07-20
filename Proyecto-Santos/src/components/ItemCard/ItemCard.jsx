import { Link } from "react-router-dom"

export const ItemCard = ({item}) => {

    return (
        <div className='col-3 m-2'>
            <h4>{item.nombre}</h4>
            <img src={item.img} alt={item.nombre} />
            <p>{item.descripcion}</p>
            <p>Precio: {item.precio}</p>
            <Link className="btn btn-primary" to={`/detail/${item.id}`} >Ver más</Link>
        </div>
    )
}

