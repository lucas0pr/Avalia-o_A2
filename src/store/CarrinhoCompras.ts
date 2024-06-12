/* importa a funcao da biblioteca*/
import { create } from "zustand";

const itensIniciais = [
  {
    id: "p1",
    nome: "Fone de ouvido",
    valor: 49.99,
  },
  {
    id: "p2",
    nome: "Suporte para celular",
    valor: 28.99,
  },
  {
    id: "p3",
    nome: "Garrafa termica",
    valor: 120.99,
  },
  {
    id: "p4",
    nome: "Carteira de couro",
    valor: 100.99,
  },
  {
    id: "p5",
    nome: "Carregador USB",
    valor: 29.99,
  },
];

/* define um TS, a estrutura dos itens */
type Item = {
  id: string;
  nome: string;
  valor: number;
};

/* define um TS, a estrutura do carrinho */
type CarrinhoCompras = {
  itensDisponiveis: Item[];
  carrinho: Item[];
  adicionarCarrinho: (item: Item) => void;
  removerCarrinho: (id: string) => void;
};

/*cria o hook funcao recebe o argumento que recebe o set, retorna o obj representando o estado inicial*/
export const useCarrinhoCompras = create<CarrinhoCompras>((set) => {
  return {
    carrinho: [],

    /*metodos para adicionar e remover do carrinho, copiando o estado anterior*/
    itensDisponiveis: itensIniciais,
    adicionarCarrinho: (item) => set((state) => ({ carrinho: [...state.carrinho, item] })),
    removerCarrinho: (id) =>
      set((state) => ({ carrinho: state.carrinho.filter((item) => item.id !== id) })),
  };
});
