import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useState, useEffect } from 'react';

export default function Client() {
  const [pontuacao, setPontuacao] = useState(100); // Inicialmente, definimos a pontuação como 100 (ou qualquer valor inicial desejado)
  const [trocaRealizada, setTrocaRealizada] = useState(false); // Para rastrear se a troca foi realizada
  const [selectedProduct, setSelectedProduct] = useState('');
  const [products, setProducts] = useState([]);


  const handleProductSelected = (productId:any) => {
    // Verifique se o productId é válido
    if (!productId) {
      // Produto inválido, exiba uma mensagem de erro ou tome ação apropriada
      console.error('Produto inválido.');
      return;
    }
  
    // Encontre o produto com base no productId nos dados disponíveis
    const selectedProduct = products.find((product: any) => product.id === productId);
  
    // Verifique se o produto foi encontrado
    if (!selectedProduct) {
      // Produto não encontrado, exiba uma mensagem de erro ou tome ação apropriada
      console.error('Produto não encontrado.');
      return;
    }
  
    // Realize a lógica para trocar a pontuação pelo produto selecionado
    // Isso pode incluir a atualização da pontuação do usuário, registro da troca, etc.
  
    // Exemplo: Deduzir os pontos necessários da pontuação atual
    const novaPontuacao = pontuacao - selectedProduct.pontos;
  
    // Atualize o estado da pontuação com a nova pontuação
    setPontuacao(novaPontuacao);
  
    // Exemplo: Registrar a troca em algum lugar
    console.log(`Troca realizada: ${selectedProduct.nome}`);
  
    // Exemplo: Atualizar o estado dos produtos disponíveis (se necessário)
    const novosProdutos = products.filter((product: any) => product.id !== productId);
    setProducts(novosProdutos);
    setTrocaRealizada(true)
  }

  const handleProductChange = (e: any) => {
    setSelectedProduct(e.target.value);
  };

  const handleExchange = () => {
    // Verifica se um produto foi selecionado
    if (selectedProduct) {
      // Chama a função de troca passando o produto selecionado
      handleProductSelected(selectedProduct);
      // Limpa a seleção
      setSelectedProduct('');
    }
  };


  // Simulando uma requisição para buscar os dados do banco de dados
  useEffect(() => {
    // Substitua esta simulação por uma chamada real à API ou ao banco de dados
    setTimeout(() => {
      const dataFromDatabase: any = [
        { id: 1, nome: 'Produto A', valor: 50, desconto: 10, pontos: 100 },
        { id: 2, nome: 'Produto B', valor: 30, desconto: 5, pontos: 50 },
        { id: 3, nome: 'Produto C', valor: 25, desconto: 8, pontos: 80 },
      ];

      setProducts(dataFromDatabase);
    }, 1000); // Simulando um atraso na resposta
  }, []);


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className=" flex flex-col border border-white rounded-xl items-center">
      <div className="w-full p-4">
        <div className="flex justify-center items-center">
          <h2 className="text-xl mb-4">Listagem de Produtos em Promoção</h2>
        </div>
        <div className="border border-white rounded-md p-2">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-300">
                <th className="border px-4 py-2">Nome do Produto</th>
                <th className="border px-4 py-2">Valor</th>
                <th className="border px-4 py-2">Valor com Desconto</th>
                <th className="border px-4 py-2">Pontos Necessários</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: any) => (
                <tr key={product.id} className="text-center">
                  <td className="border px-4 py-2">{product.nome}</td>
                  <td className="border px-4 py-2">R$ {product.valor.toFixed(2)}</td>
                  <td className="border px-4 py-2">R$ {(product.valor - product.desconto).toFixed(2)}</td>
                  <td className="border px-4 py-2">{product.pontos} pontos</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className="w-full p-4">
        <h2 className="text-2xl mb-4">Trocar Pontuação por Produtos</h2>
        <div className="flex space-x-4">
          <select
            className="w-1/2 border p-2 rounded-md"
            onChange={handleProductChange}
            value={selectedProduct}
          >
            <option value="" className="text-black">Selecione um produto</option>
            {products.map((product: any) => (
              <option key={product.id} value={product.id} className="text-black">
                {product.nome} - {product.pontos} pontos
              </option>
            ))}
          </select>
          <button
            className="px-4 py-2 bg-white text-black rounded-xl"
            onClick={handleExchange}
            disabled={!selectedProduct}
          >
            Trocar
          </button>
          {trocaRealizada && (
            <p>Troca realizada com sucesso! Seus produtos serão enviados em breve.</p>
          )}
        </div>
      </div>


        <div className="flex flex-col items-center">
          <h2>Pontuação: {pontuacao}</h2>
          <br />
        </div>
      </div>

      <Footer />

    </div>
  );
}