import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function SingleProduct() {

    const { id } = useParams()
    const [singoloProdotto, setSingoloProdotto] = useState([])
    const url = (`https://fakestoreapi.com/products/${id}`)

    useEffect(fetchGeneraSingolo, [])

    function fetchGeneraSingolo() {
        axios
            .get(url)
            .then(res => {
                console.log(res.data)
                setSingoloProdotto(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <main className="singleProduct pb-5">
                <h3 className="py-5 text-center"><strong>{singoloProdotto.title}</strong></h3>

            </main>
        </>
    )

}