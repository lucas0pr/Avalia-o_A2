/* importando o hook */
import { useCarrinhoCompras } from "../store/CarrinhoCompras";

/* define componente funcional */
export const Carrinho = () => {

  /* usa o hook para acessar o global e retorna o array */
  const [items, removerCarrinho] = useCarrinhoCompras((state) => [
    state.carrinho,
    state.removerCarrinho,
  ]);

  /* renderiza o item, valor e um botao individual de remover */
  return (
    <div>
      <h1>Carrinho</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.nome} - R${item.valor}
            <button
              onClick={() => {
                removerCarrinho(item.id);
              }}
            >
              Remover do carrinho
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
