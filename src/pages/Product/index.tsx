import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type Restaurants = {
    id: number,
    title: string,
    description: string,
    image: string,
    button: string
}

interface HeroProps {
    pratos: Restaurants | undefined;
}
const Hero: React.FC<HeroProps> = ({ pratos }) => {
    return <div>{/* Render the Hero component content */}</div>;
};

const Product = () => {
    const { id } = useParams();
    const [pratos, setPratos] = useState<Restaurants>();
    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => setPratos(res));
    }, [id]);

    if (!pratos) {
      return null; // or render a loading indicator
    }

    return (
    <>
        <Hero pratos={pratos} />
    </>
    );
};


export default Product