document.getElementById('form-cadastro-produto').addEventListener('submit', function(event) {
  event.preventDefault();

  // Busca valores dos campos
  const novoProduto = {
    nome: document.getElementById('nome').value.trim(),
    preco: Number(document.getElementById('preco').value),
    imagem: document.getElementById('imagem').value.trim(),
    descricao: document.getElementById('descricao').value.trim(),
    descricaoCompleta: document.getElementById('descricaoCompleta').value.trim(),
    fotos: [document.getElementById('imagem').value.trim()], // Simples, sempre foto igual
    autor: {
      nome: "Autor Genérico",
      bio: "Bio do autor",
      imagem: "assets/images/produto7.jpg"
    },
    caracteristicas: [],
    informacoes: {
      formato: "",
      tamanho: "",
      acesso: "",
      suporte: ""
    }
  };

  fetch('http://localhost:3000/produtos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(novoProduto)
  })
  .then(response => response.json())
  .then(produtoCriado => {
    document.getElementById('mensagem').textContent = 'Produto cadastrado com sucesso!';
    document.getElementById('form-cadastro-produto').reset();
  })
  .catch(err => {
    document.getElementById('mensagem').textContent = 'Erro ao cadastrar produto.';
  });
});
