import { useEffect, useState } from "react";
import './card.css'
import '../../global.css'

interface Gift {
    id: number;
    name: string;
    price: number;
    image: string
}

export function Card(){

    const [ gifts, setGifts] = useState<Gift[]>([]);

    useEffect(() => {
        fetch('http://localhost:3333/gifts', {
            method : 'GET',
            headers: {
                'Content-Type' : 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data: Gift[]) => {
            setGifts(data);
        })
        .catch((error) => {
            console.error('Erro ao buscar presentes:', error);
        });
    }, [])

    

    return(
        <>
        {gifts.map((gift) => (
            <>  
            <GiftCard key={gift.id} gift={gift} />
            </>
            ))}
            
        </>
    )
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
                <button className="glow-on-hover" type="button">Comprar</button>
            </div>
        </div>
        
        </>
    );
}