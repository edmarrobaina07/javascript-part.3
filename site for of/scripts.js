let p = document.querySelector('p')
let input = document.querySelector('input')

const cardapio = [
    { dia: 'Segunda feira', almoco: 'Arroz Feijão Rocambole de Carne Salada de Alface e Pepino', jantar: 'Arroz Filé de Frango Refogado de Vagem'},
    { dia: 'Terça feira', almoco: 'Arroz Lombo Assado Salada de Agrião com Manga', jantar: 'Arroz Samão Grelhado Salada de Beterraba'},
    { dia: 'Quarta feira', almoco: 'Arroz Bife Role Purê de Batatas', jantar: 'Arroz/Feijão Bambá de Couve Salada de Tomate'},
    { dia: 'Quinta feira', almoco: 'Arroz Estrogonofe de Carne Batata Sauteé', jantar: 'Sopa de Mandioquinha'},
    { dia: 'Sexta feira', almoco: 'Ravioli com Molho ao Sugo', jantar: 'Arroz Carne de Milho Peixe Grelhado'}
]

function pesquisar() {
    for(const refeicao of cardapio) {
        if(input.value.toLowerCase() === refeicao.dia.toLowerCase()) {
            p.innerHTML = `Cardápio do Dia: ${refeicao.dia} Amoço: ${refeicao.almoco} Jantar: ${refeicao.jantar}`

            break
        } else {
            p.innerHTML = `Cardápio não Encontrado! Digite completo Ex: segunda feira`
        }
    }
}