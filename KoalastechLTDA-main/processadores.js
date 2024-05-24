document.addEventListener('DOMContentLoaded', function() {
    const botoesAdicionar = document.querySelectorAll('.botao');
    let totalItens = 0;
    let total = 0;

    botoesAdicionar.forEach((botao) => {
        botao.addEventListener('click', function() {
            const nomeProduto = this.getAttribute('data-produto');
            const precoProduto = parseFloat(this.getAttribute('data-preco'));
            const novoItem = document.createElement('li');
            novoItem.textContent = `${nomeProduto} - R$${precoProduto.toFixed(2)}`;
            document.getElementById('carrinho').appendChild(novoItem);
            totalItens++;
            document.getElementById('totalItens').textContent = totalItens;
            total += precoProduto;
            document.getElementById('total').textContent = total.toFixed(2);

            // Atualizar contador do carrinho com limite de 9+
            const carrinhoCount = document.getElementById('carrinho-count');
            if (totalItens > 9) {
                carrinhoCount.textContent = '9+';
            } else {
                carrinhoCount.textContent = totalItens;
            }

            // Adicionar animação ao ícone do carrinho
            carrinhoCount.classList.add('add-animation');
            setTimeout(() => {
                carrinhoCount.classList.remove('add-animation');
            }, 300);
        });
    });
});