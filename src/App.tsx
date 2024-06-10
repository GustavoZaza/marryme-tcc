import { About } from './components/about'
import { Carrossel } from './components/carrossel'
import { Gift } from './components/gift'
import { Message } from './components/message'
import './global.css'
// import carrossel1 from './assets/img/carossel1.png'

export function App() {
  return (
    <>
      <Carrossel />
      <About />
      <Gift />
      <Message />
    </>
  )
}

