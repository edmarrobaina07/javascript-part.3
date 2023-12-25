/*
Foreach (item, index, array)
 */

const users = [
    { name: 'Edmar', age: 38, number: '(43) 99977-7777'},
    { name: 'Paula', age: 18, number: '(43) 99977-7777'},
    { name: 'Roberta', age: 37, number: '(43) 99977-7777'},
    { name: 'Renatinha', age: 35, number: '(43) 99977-7777'},
    { name: 'Polyanna', age: 30, number: '(43) 99977-7777'},
]

users.forEach((item, index, array) => {
    console.log(index)
    console.log(item)
    console.log(array)
    console.log(`Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.number}`)

    console.log(`${index + 1}) Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.number}`)
    
});

