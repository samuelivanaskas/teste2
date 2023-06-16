import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Hero from "../../components/Hero"



const Product = () => {
    const { id } = useParams()

    const [ restaurantes, setRestaurantes ] = useState([]) 

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    })

    return (
        <>
            <Hero games={restaurantes} />
        </>
    )
}

export default Product