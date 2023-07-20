import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()
    console.log(itemId);
    console.log(item);

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(r => {
                setItem(r.find(prod => prod.id === Number(itemId)))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}