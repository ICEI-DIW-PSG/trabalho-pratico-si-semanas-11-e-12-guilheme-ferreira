// Listar todos os produtos na página principal (index.html)
function renderizarProdutosDestaque() {
    const container = document.getElementById('produtos-destaque');
    if (!container) return;

    fetch('http://localhost:3000/produtos')
      .then(response => {
        if (!response.ok) throw new Error('Falha na requisição: ' + response.status);
        return response.json();
      })
      .then(produtos => {
        let html = '';
        produtos.forEach(produto => {
          // Verifica se os campos essenciais existem antes de exibir
          if (!produto.nome || typeof produto.preco !== 'number' || !produto.imagem) return;
          html += `
            <div class="produto-card">
              <a href="detalhe.html?id=${produto.id}">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <div class="produto-info">
                  <h3>${produto.nome}</h3>
                  <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
                </div>
              </a>
            </div>
          `;
        });
        container.innerHTML = html;
      })
      .catch(() => {
        container.innerHTML = "<p>Erro ao carregar produtos.</p>";
      });
}

// Carrossel (exibe 3 primeiros produtos válidos)
function renderizarCarrosel() {
    const container = document.getElementById('carrosel-container');
    if (!container) return;

    fetch('http://localhost:3000/produtos')
      .then(response => {
        if (!response.ok) throw new Error('Falha na requisição: ' + response.status);
        return response.json();
      })
      .then(produtos => {
        let produtos_destaque = produtos.filter(
          produto => produto.nome && typeof produto.preco === 'number' && produto.imagem
        ).slice(0, 3);
        let html = '<div class="carrosel-wrapper">';
        produtos_destaque.forEach((produto, index) => {
          html += `
            <a href="detalhe.html?id=${produto.id}" class="carrosel-item ${index === 0 ? 'ativo' : ''}">
              <img src="${produto.imagem}" alt="${produto.nome}">
              <div class="carrosel-info">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
              </div>
            </a>
          `;
        });
        html += '</div>';
        html += '<button class="carrosel-btn carrosel-prev" onclick="mudarCarrosel(-1)">‹</button>';
        html += '<button class="carrosel-btn carrosel-next" onclick="mudarCarrosel(1)">›</button>';
        html += '<div class="carrosel-dots">';
        produtos_destaque.forEach((_, index) => {
          html += `<span class="dot ${index === 0 ? 'ativo' : ''}" onclick="irParaCarrosel(${index})"></span>`;
        });
        html += '</div>';
        container.innerHTML = html;
      });
}

let indiceCarrosel = 0;
function mudarCarrosel(direcao) {
    const items = document.querySelectorAll('.carrosel-item');
    const dots = document.querySelectorAll('.dot');
    indiceCarrosel += direcao;
    if (indiceCarrosel >= items.length) {
        indiceCarrosel = 0;
    } else if (indiceCarrosel < 0) {
        indiceCarrosel = items.length - 1;
    }
    items.forEach(item => item.classList.remove('ativo'));
    dots.forEach(dot => dot.classList.remove('ativo'));
    items[indiceCarrosel].classList.add('ativo');
    dots[indiceCarrosel].classList.add('ativo');
}
function irParaCarrosel(index) {
    indiceCarrosel = index;
    const items = document.querySelectorAll('.carrosel-item');
    const dots = document.querySelectorAll('.dot');
    items.forEach(item => item.classList.remove('ativo'));
    dots.forEach(dot => dot.classList.remove('ativo'));
    items[indiceCarrosel].classList.add('ativo');
    dots[indiceCarrosel].classList.add('ativo');
}

// Exibe detalhes de 1 produto (detalhe.html)
function renderizarDetalheProduto(id) {
    fetch(`http://localhost:3000/produtos/${id}`)
      .then(response => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then(produto => {
        if (!produto || !produto.nome || typeof produto.preco !== 'number' || !produto.imagem) {
            window.location.href = 'index.html';
            return;
        }
        document.getElementById('produto-titulo').textContent = produto.nome;
        document.getElementById('produto-preco').textContent = `R$ ${produto.preco.toFixed(2)}`;
        document.getElementById('produto-descricao').textContent = produto.descricao;
        document.getElementById('imagem-principal').src = produto.fotos && produto.fotos[0] ? produto.fotos[0] : produto.imagem;
        document.getElementById('imagem-principal').alt = produto.nome;
        // Galeria
        const galeriaContainer = document.getElementById('galeria-fotos');
        let galeriaHtml = '';
        (produto.fotos || []).forEach((foto, index) => {
          galeriaHtml += `
            <img src="${foto}" alt="Foto ${index + 1}" class="foto-galeria" onclick="mudarImagemPrincipal('${foto}')">
          `;
        });
        galeriaContainer.innerHTML = galeriaHtml;
        // Características
        const caracteristicasContainer = document.getElementById('caracteristicas-lista');
        let caracteristicasHtml = '';
        (produto.caracteristicas || []).forEach(caracteristica => {
          caracteristicasHtml += `<li>✓ ${caracteristica}</li>`;
        });
        caracteristicasContainer.innerHTML = caracteristicasHtml;
        // Info adicionais
        document.getElementById('info-formato').textContent = produto.informacoes ? produto.informacoes.formato : '';
        document.getElementById('info-tamanho').textContent = produto.informacoes ? produto.informacoes.tamanho : '';
        document.getElementById('info-acesso').textContent = produto.informacoes ? produto.informacoes.acesso : '';
        document.getElementById('info-suporte').textContent = produto.informacoes ? produto.informacoes.suporte : '';
        document.getElementById('descricao-completa').textContent = produto.descricaoCompleta || '';
        document.getElementById('btn-carrinho').onclick = () => adicionarAoCarrinho(produto.id);
        document.getElementById('btn-desejos').onclick = () => adicionarAListaDesejos(produto.id);
      })
      .catch(() => {
        window.location.href = 'index.html';
      });
}

function mudarImagemPrincipal(src) {
    document.getElementById('imagem-principal').src = src;
}
function adicionarAoCarrinho(id) {
    alert('Produto adicionado ao carrinho!');
}
function adicionarAListaDesejos(id) {
    alert('Produto adicionado à lista de desejos!');
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.body.classList.contains('home-page')) {
        renderizarCarrosel();
        renderizarProdutosDestaque();
    }
    if (document.body.classList.contains('detalhe-page')) {
        const urlParams = new URLSearchParams(window.location.search);
        const produtoId = urlParams.get('id');
        if (produtoId !== null) {
            renderizarDetalheProduto(produtoId);
        } else {
            window.location.href = 'index.html';
        }
    }
});

window.mudarCarrosel = mudarCarrosel;
window.irParaCarrosel = irParaCarrosel;
window.mudarImagemPrincipal = mudarImagemPrincipal;
window.adicionarAoCarrinho = adicionarAoCarrinho;
window.adicionarAListaDesejos = adicionarAListaDesejos;
