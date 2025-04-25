document.addEventListener('DOMContentLoaded', function () {
    header_icons();
    api();
    clickproduto();
});

function header_icons () {
    document.getElementById('homeIcon').addEventListener('click', () => {
        alert('A página home não existe, estamos trabalhando nisso')
    });

    document.getElementById('sobreIcon').addEventListener('click', () => {
        const sobre = document.getElementById('sobre');
        sobre.scrollIntoView({behavior: 'smooth'})
        sobre.style.display = 'flex';
        sobre.style.borderRadius = '30px'; 
        sobre.style.boxShadow = '0px 0px 10px rgba(255, 255, 255, 0.5)';
        sobre.style.transition = 'box-shadow 0.5s ease-in-out';
        setTimeout(() => {
            sobre.style.boxShadow = 'none';
        }, 1000)

    });

    document.getElementById('perfilIcon').addEventListener('click', () => {
        alert('A página perfil não existe, estamos trabalhando nisso')
    });

    document.getElementById('pesquisar').addEventListener('click', () => {
        alert('A página pesquisa não existe, estamos trabalhando nisso')
    });

    document.querySelector('.link').addEventListener('click', () => {
        alert('A página não existe, estamos trabalhando nisso')
    })
}

function api () {
    const container = document.getElementById('produtos');

    fetch('https://fakestoreapi.com/products?limit=5')
        .then(response => response.json())
        .then(produtos => {
            container.innerHTML = '';

            produtos.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('produtoCard');

                card.innerHTML = `
                    <div class="produto">
                        <img class="imgProduto" src="${item.image}" alt="${item.title}">
                        <div class="info">
                            <h3>${item.title}</h3>
                            <div class="preco">
                                <span>R$</span>
                                <h3>${item.price.toFixed(2)}</h3> 
                            </div>   
                        </div>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error);
        });
}

function clickproduto () {
    document.getElementById('produto').addEventListener('click', () => {
        alert('A página produto não existe, estamos trabalhando nisso')
    })
}
