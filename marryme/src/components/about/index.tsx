import './about.css'
import '../../global.css'
import noiva from '../../assets/img/noiva.png'
import noivo from '../../assets/img/noivo.png'


export function About() {
    return (
        <>
            <div className='about'>

                <div className='about-title'>
                    <h2>___________________________________</h2>
                    <h1>Sobre os Noivos</h1>
                    <h2>___________________________________</h2>
                </div>
                <div className="about-content">
                    <div className="bride">
                        <img className='bride-img' src={noiva} alt="" />
                        <h3>Yasmin é uma designer gráfica talentosa que descobriu sua paixão pela arte desde criança. Cresceu em uma família amorosa, onde aprendeu a valorizar a criatividade e a expressão pessoal.Sua jornada a levou a explorar diferentes formas de arte, desde pintura até fotografia,antes de finalmente encontrar sua vocação no design.  Ela é uma alma livre, sempre em busca de inspiração e beleza no mundo ao seu redor.</h3>
                    </div>
                    <div className="groom">
                        <img src={noivo} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}