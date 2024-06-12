/*importa os componentes e css*/
import './App.css'
import { ProdutosDisponiveis } from './components/ProdutosDisponiveis'
import { Carrinho } from './components/Carrinho'
import { Total } from "./components/Total"

/*retorna os componentes na ordem */
function App() {
  return (
    <>
      <Total />
      <ProdutosDisponiveis/>
      <Carrinho/>
    </>
  )
}

/*exporta o app como componente principal dando p usar em outros arquivos*/
export default App
