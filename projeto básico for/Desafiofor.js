let p = document.querySelector('p')
let input = document.querySelector('input')

const contacts = [
    { name: 'Edmar', number: '(43) 98989-7777'},
    { name: 'Heloísa', number: '(43) 98989-7770'},
    { name: 'Renatinha', number: '(43) 98989-7771'},
    { name: 'Polyanna', number: '(43) 98989-7772'},
    { name: 'Paula', number: '(43) 98985-7774'},
    { name: 'Fernanda', number: '(43) 98988-7773'},
    { name: 'Rafaela', number: '(43) 98987-7777'}
]



function search() {
    for(let i = 0; i < contacts.length ;i++){

        if(input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = `Contato Encontrado Nome:${contacts[i].name} Tel:${contacts[i].number}`

            break
        } else {
            p.innerHTML = "Contato não encontrado, Tente novamente"
        }
    }
}