/* importando o hook */
import { useCarrinhoCompras } from "../store/CarrinhoCompras";

/* define componente funcional */
export const ProdutosDisponiveis = () => {
  /* usa o hook para acessar o global e retorna o array */
  const [items, adicionarCarrinho] = useCarrinhoCompras((state) => [
    state.itensDisponiveis,
    state.adicionarCarrinho,
  ]);

    /* renderiza os itens disponiveis, valor e um botao individual de adicionar  */
  return (
    <div>
      <h1>Escolha os produtos</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.nome} - R${item.valor}
            <button
              onClick={() => {
                adicionarCarrinho(item);
              }}
            >
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
