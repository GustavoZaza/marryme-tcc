import { useEffect, useState } from "react";

interface Gift {
    id: number;
    name: string;
    price: number;
    image: string
}

export function Card({} : {gift: Gift}){

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
            <GiftCard key={gift.id} gift={gift} />-
            </>
            ))}
            
        </>
    )
}

function GiftCard({ gift }: { gift: Gift }) {
    return (
        <>
        
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h3>{gift.name}</h3>
            <img src={gift.image} alt={gift.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <p>Preço: ${gift.price}</p>
        </div>
        
        </>
    );
}