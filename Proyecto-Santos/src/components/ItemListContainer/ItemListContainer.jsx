import './ItemListContainer.css'

export const ItemListContainer = ({ nombre, id, precio }) => {

    return (
        <div className="div_container">
            <h2 className="div_h2">Nombre: {nombre}</h2>
            <p className="div_p_b">ID: {id}</p>
            <b className="div_p_b">Precio: {precio}</b>

        </div>
    )
}