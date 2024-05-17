import './header.css'
import '../../global.css'
import logo from '../../assets/img/logo.png'

export function Header() {
    return (
        <>
                <header>
                    <div className='header-container'>

                        <img className='header-container-logo' src={logo} />

                        <nav>
                            <button>Confirmar Presença</button>
                            <button>Sobre</button>
                            <button>Mensagem</button>
                            <button>Presentes</button>
                            <button>Local</button>
                        </nav>

                    </div>

                </header>
        </>
    )
}