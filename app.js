// Lê o arquivo JSON da mesma pasta
fetch('dados.json')
    .then(response => response.json())
    .then(dados => {
        const lista = document.getElementById('lista');
        dados.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.nome;
            lista.appendChild(li);
        });
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));