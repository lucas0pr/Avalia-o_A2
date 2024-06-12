/* importando o hook */
import { useCarrinhoCompras } from "../store/CarrinhoCompras";

/* define componente funcional */
export const Total = () => {
   /* usa o hook para acessar o global e obter os itens do carrinho*/
  const items = useCarrinhoCompras((state) => state.carrinho);

   /* itera sobre a lista de itens e faz a soma */
  const sum = items.reduce((acc, item) => acc + item.valor, 0);

 /* formatação da moeda*/
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

   /* retorna o valor total ja formatado */
  return (
    <div>
      <h1>Total {formatter.format(sum)}</h1>
    </div>
  );
};
