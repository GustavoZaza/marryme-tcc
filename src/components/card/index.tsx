import { useEffect, useState } from "react";
import './card.css'
import '../../global.css'
import axios from "axios";

interface Gift {
    id: number;
    name: string;
    price: number;
    image: string
}

export function Card(){

    const [gifts, setGifts] = useState<Gift[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3333/gifts')
            .then((response) => {
                setGifts(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar presentes:', error);
            });
    }, []);

    return (
        <>
            {gifts.map((gift) => (
                <GiftCard key={gift.id} gift={gift} />
            ))}
        </>
    );
}

function GiftCard({ gift }: { gift: Gift }) {
    const formatPriceToBRL = (price: number) => {
        return 'R$ '+ price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    return (
        <>
        
        <div className="card">
            <div className="card-image">
                <img src={gift.image} alt={gift.name}/>
            </div>
            <div className="card-text">
                <h1>{gift.name}</h1>
                <h3>Preço: {formatPriceToBRL(gift.price)}</h3>
            </div>
            <div className="card-button">
                <button type="button">Comprar</button>
            </div>
        </div>
        
        </>
    );
}