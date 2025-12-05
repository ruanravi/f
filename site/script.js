let carrinho = [];
let total = 0;
let nextItemId = 1; // Contador para garantir IDs únicos no carrinho

// Base de dados simulada de ofertas


const emojisProdutos = {
    alface: "🥬",
    tomate: "🍅",
    cenoura: "🥕",
    banana: "🍌",
    manga: "🥭",
    maracuja: "🟡", 
    maca: "🍎",
    uva: "🍇",
    pimenta: "🌶️",
    laranja: "🍊",
    mexirica: "🍊",
    couve_flor: " ",
    coco:"🥥",
    melancias: " 🍉",
    brocolis: " 🥦",
    abobora: " 🎃", 
    berinjela: " 🍆"
};


const ofertasData = {
    alface: [
        { id: 101, nome: "Alface Americana (Oferta A)", preco: 4.50, prazo: "Entrega em 24h", logistica: "Rota Rápida B2C", origem: "Fazenda Local", colheita: "05/12/2025", validade: "5 dias" },
        { id: 102, nome: "Alface Crespa (Oferta B)", preco: 3.90, prazo: "Entrega em 48h", logistica: "Lote B2B Otimizado", origem: "Mercado Ricoy", colheita: "07/12/2025", validade: "4 dias" },
        { id: 103, nome: "Alface Orgânica (Oferta C)", preco: 5.80, prazo: "Entrega em 24h", logistica: "Premium e Frescor", origem: "Supermercados Pague Menos", colheita: "07/12/2025", validade: "6 dias" }
    ],
    tomate: [
        { id: 201, nome: "Tomate Italiano (Oferta A)", preco: 8.90, prazo: "Entrega em 24h", logistica: "Alta Prioridade", origem: "Mercado Bem Barato", colheita: "05/12/2025", validade: "7 dias" },
        { id: 202, nome: "Tomate Cereja (Oferta B)", preco: 12.00, prazo: "Entrega em 48h", logistica: "Lote Mínimo Padrão", origem: "Cooperativa Agrícola", colheita: "07/12/2025", validade: "6 dias" }
    ],
    cenoura: [
        { id: 301, nome: "Cenoura Padrão (Oferta A)", preco: 3.20, prazo: "Entrega em 24h", logistica: "Rota Rápida B2C", origem: "Produtor Associado", colheita: "08/12/2025", validade: "10 dias" },
        {id:302	, nome: "Cenoura Nantes (Oferta B)",  preco: 3.80, prazo: "Entrega em 48h", logistica: "Lote B2B Otimizado", origem: "Mercado Tenda", colheita: "08/12/2025", validade: "8 dias"}
    ],
    banana: [
        { id: 401, nome: "Banana Prata (Oferta A)", preco: 5.50, prazo: "Entrega em 48h", logistica: "Lote Mínimo Padrão", origem: "Fazenda Nova", colheita:"05/12/2025", validade: "8 dias" },
        { id: 402, nome: "Banana Nanica (Oferta B)", preco: 4.80, prazo: "Entrega em 24h", logistica: "Rota Rápida B2C", origem: "Sítio do Vale", colheita:"06/12/2025", validade: "7 dias" }
    ],
    manga: [
        { id: 501, nome: "Manga Tommy (Oferta A)", preco: 9.90, prazo: "Entrega em 24h", logistica: "Premium e Frescor", origem: "Fazenda Tropical", colheita: "07/12/2025", validade: "5 dias" }
    ],
    maracuja: [
        { id: 601, nome: "Maracujá Azedo (Oferta A)", preco: 7.90, prazo: "Entrega em 24h", logistica: "Premium e Frescor", origem: "Savegnago Supermercados", colheita: "08/12/2025", validade: "4 dias" }
    ],
    maca: [
        { id: 701, nome: "Maçã Fuji (Oferta A)", preco: 6.50, prazo: "Entrega em 48h", logistica: "Lote Mínimo Padrão", origem: "Pomar do Sul", colheita: "05/12/2025", validade: "12 dias" },
        { id: 702, nome: "Maçã Gala (Oferta B)", preco: 8.00, prazo: "Entrega em 24h", logistica: "Rota Rápida B2C", origem: "Sonda Supermercados", colheita: "06/12/2025", validade: "8 dias" }
    ],
    uva: [
        { id: 801, nome: "Uva Niágara (Oferta A)", preco: 15.00, prazo: "Entrega em 24h", logistica: "Alta Prioridade", origem: "Vinhedo Serra", colheita: "08/12/2025", validade: "7 dias" }
    ],
    pimenta: [
        { id: 901, nome: "Pimenta Dedo-de-Moça (Oferta A)", preco: 11.50, prazo: "Entrega em 48h", logistica: "Lote B2B Otimizado", origem: "Horta Gourmet", colheita: "08/12/2025", validade: "10 dias" }
    ],
    laranja: [
    { id: 1001, nome: "Laranja Pêra (Oferta A)", preco: 4.90, prazo: "Entrega em 24h", logistica: "Rota Rápida B2C", origem: "Produtor do Interior", colheita: "01/12/2025", validade: "15 dias" },
    { id: 1002, nome: "Laranja Bahia (Oferta B)", preco: 5.50, prazo: "Entrega em 48h", logistica: "Lote B2B Otimizado", origem: "Produtor Associado", colheita: "06/12/2025", validade: "8 dias" }
    ],
    mexerica: [
        { id: 1101, nome: "Mexerica Ponkan (Oferta A)", preco: 5.80, prazo: "Entrega em 24h", logistica: "Rota Rápida B2C", origem: "Produtor Associado", colheita: "03/12/2025", validade: "10 dias" },
        { id: 1102, nome: "Mexerica Rio (Oferta B)", preco: 6.20, prazo: "Entrega em 48h", logistica: "Logística Premium e Frescor", origem: "Grupo Carrefour Brasil", colheita: "02/12/2025", validade: "8 dias" }
    ],
    coco: [
        { id: 1201, nome: "Coco Seco (Unidade - Oferta A)", preco: 3.50, prazo: "Entrega em 24h", logistica: "Rota Rápida B2C", origem: "Distribuidor Nordeste", colheita: "01/12/2025", validade: "10 dias" },
        { id: 1202, nome: "Coco Verde (Unidade - Oferta B)", preco: 4.80, prazo: "Entrega em 48h", logistica: "Lote B2B Otimizado", origem: "Oba Hortifrúti", colheita: "01/12/2025", validade: "7 dias" }
    ],
    melancia: [
        { id: 1301, nome: "Melancia Padrão (Kg - Oferta A)", preco: 2.10, prazo: "Entrega em 24h", logistica: "Rota Rápida B2C", origem: "Fazenda Local", colheita: "04/12/2025", validade: "6 dias" },
        { id: 1302, nome: "Mini Melancia (Unidade - Oferta B)", preco: 8.50, prazo: "Entrega em 48h", logistica: "Logística Premium e Frescor", origem: "Mercado Municipal de São Paulo (Mercadão)", colheita: "03/12/2025", validade: "5 dias" }
    ],
    couve: [
    { id: 1401, nome: "Couve-Flor Padrão (Unidade - Oferta A)", preco: 7.90, prazo: "Entrega em 24h", logistica: "Rota Rápida B2C", origem: "Produtor Local", colheita: "04/12/2025", validade: "7 dias" },
    { id: 1402, nome: "Couve-Flor Orgânica (Unidade - Oferta B)", preco: 11.50, prazo: "Entrega em 48h", logistica: "Logística Premium e Frescor", origem: "Roldão Atacado", colheita: "03/12/2025", validade: "6 dias" }
    ],
    brocolis: [
        { id: 1501, nome: "Brócolis Ninja (Kg - Oferta A)", preco: 6.50, prazo: "Entrega em 24h", logistica: "Rota Rápida B2C", origem: "Fazenda Associada", colheita: "04/12/2025", validade: "8 dias" },
        { id: 1502, nome: "Brócolis Americano (Kg - Oferta B)", preco: 7.80, prazo: "Entrega em 48h", logistica: "Lote B2B Otimizado", origem: "Assaí Atacadista", colheita: "02/12/2025", validade: "10 dias" }
    ],
    abobora: [
        { id: 1601, nome: "Abóbora Moranga (Kg - Oferta A)", preco: 3.10, prazo: "Entrega em 24h", logistica: "Rota Rápida B2C", origem: "Produtor do Interior", colheita: "02/12/2025", validade: "8 dias" },
        { id: 1602, nome: "Abóbora Cabotiá (Kg - Oferta B)", preco: 4.00, prazo: "Entrega em 48h", logistica: "Lote B2B Otimizado", origem: "GPA", colheita: "03/12/2025", validade: "7 dias" }
    ],
    berinjela: [
        { id: 1701, nome: "Berinjela Padrão (Kg - Oferta A)", preco: 4.20, prazo: "Entrega em 24h", logistica: "Rota Rápida B2C", origem: "Produtor Associado", colheita: "04/12/2025", validade: "7 dias" }
    ]
};

function simularBusca() {
    const termoBusca = document.getElementById('campo-busca').value.toLowerCase().trim();
    const container = document.getElementById('ofertas-container');
    container.innerHTML = `<h2>Resultados para "${termoBusca}"</h2>`;

    const ofertasEncontradas = ofertasData[termoBusca];
    const emoji = emojisProdutos[termoBusca] || "🌿";
    if (ofertasEncontradas && ofertasEncontradas.length > 0) {
        const grid = document.createElement('div');
        grid.className = 'ofertas-grid';

        ofertasEncontradas.forEach((oferta, index) => {
            const card = document.createElement('div');
            card.className = 'oferta-card';
            
            card.innerHTML = `
                <div class="card-header">
            <span class="produto-emoji">${emoji}</span>
            <h4>${oferta.nome}</h4>
                </div>
                <p class="preco">R$ ${oferta.preco.toFixed(2)} /Kg</p>
                <p>🚛 Prazo: <strong>${oferta.prazo}</strong></p>
                <p>📍 Logística: ${oferta.logistica}</p>
                <p>🌱 Origem: ${oferta.origem}</p>
                
                <hr style="border-top: 1px dashed #ddd; margin: 10px 0;">
                
                <p class="rastreio-info">
                    🗓️ Colheita: <strong>${oferta.colheita}</strong>
                </p>
                <p class="rastreio-info">
                    ⏰ Validade Estimada: <strong>${oferta.validade}</strong>
                </p>
                <button class="adicionar-btn" onclick="adicionarAoCarrinho('${termoBusca}', ${index})">Escolher Oferta</button>
            `;
            grid.appendChild(card);
        });

        container.appendChild(grid);

    } else {
        container.innerHTML += '<p class="placeholder">Nenhuma oferta encontrada para este produto. Tente "alface", "tomate", "cenoura", "banana", "manga", "maracuja", "maça", "uva" ou "pimenta".</p>';
    }

    
}

function adicionarAoCarrinho(produtoKey, index) {
    const ofertaBase = ofertasData[produtoKey][index];
    
    const itemCarrinho = {
        carrinhoId: nextItemId++,
        nome: ofertaBase.nome,
        preco: ofertaBase.preco
    };

    carrinho.push(itemCarrinho);
    total += itemCarrinho.preco;

    atualizarCarrinhoHTML();
}

function removerDoCarrinho(carrinhoId) {
    const indexParaRemover = carrinho.findIndex(item => item.carrinhoId === carrinhoId);

    if (indexParaRemover > -1) {
        total -= carrinho[indexParaRemover].preco;
        carrinho.splice(indexParaRemover, 1);
        atualizarCarrinhoHTML();
    }
}

function atualizarCarrinhoHTML() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';
    
    carrinho.forEach(item => {
        const li = document.createElement('li');
        
        li.innerHTML = `
            ${item.nome} - R$ ${item.preco.toFixed(2)} 
            <button onclick="removerDoCarrinho(${item.carrinhoId})" style="float: right; padding: 4px 8px; font-size: 12px; background-color: #f44336; border-radius: 4px;">X</button>
        `;
        listaCarrinho.appendChild(li);
    });

    document.getElementById('total-carrinho').textContent = `R$ ${total.toFixed(2)}`;
}

// Função para simular o checkout e mostrar o rastreamento
function finalizarPedido() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio. Adicione itens para finalizar o pedido!');
        return;
    }
    
    const btnFinalizar = document.getElementById('btn-finalizar');
    
    // 1. Inicia a animação de loading no botão
    btnFinalizar.textContent = 'Processando Pedido...';
    btnFinalizar.classList.add('btn-loading'); 
    
    // Simula um tempo de processamento de 2 segundos (tempo da animação)
    setTimeout(() => {
        // 2. Esconde a interface principal
        document.getElementById('main-content').classList.add('hidden'); 
        
        // 3. Mostra a tela de rastreamento
        document.getElementById('rastreamento-overlay').classList.remove('hidden');
        
        // 4. Reseta o botão para o estado normal (Importante para a próxima compra)
        btnFinalizar.textContent = 'Finalizar Pedido e Rastrear Rota';
        btnFinalizar.classList.remove('btn-loading');

    }, 2000); // 2 segundos de animação
}
function reiniciarCompra() {
    // 1. Esconde a tela de rastreamento
    document.getElementById('rastreamento-overlay').classList.add('hidden');
    
    // 2. Mostra o conteúdo principal
    document.getElementById('main-content').classList.remove('hidden');
    
    // 3. Reseta o carrinho para a próxima demonstração
    carrinho = [];
    total = 0;
    atualizarCarrinhoHTML();
     
}

function mostrarOpcoesDisponiveis() {
    // 1. Pega todas as chaves (nomes dos produtos) do objeto ofertasData
    const produtosDisponiveis = Object.keys(ofertasData);
    
    // 2. Formata a lista, capitalizando a primeira letra de cada produto
    const listaFormatada = produtosDisponiveis.map(produto => 
        produto.charAt(0).toUpperCase() + produto.slice(1)
    ).join(', ');

    const container = document.getElementById('opcoes-disponiveis');
    
    container.innerHTML = `
        <p><strong>✅ Produtos Disponíveis para Busca:</strong> ${listaFormatada}</p>
    `;
}



document.addEventListener('DOMContentLoaded', () => {
    // Carrega as ofertas iniciais
    simularBusca(); 
   
    mostrarOpcoesDisponiveis();
});
