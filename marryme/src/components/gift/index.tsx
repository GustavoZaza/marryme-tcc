import { Card } from '../card'
import './gift.css'


export function Gift() {
    return (

        <div className="gift">
            
            <div className="gift-title">
                <h1>Presentes</h1>
            </div>
            <div className="gift-content">
                <Card />
            </div>
        </div>
    )
}