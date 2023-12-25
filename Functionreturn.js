/*

Function Return

*/

/*function sum(value, value2) {
    const result = value + value2
    return result
}

const myResult = sum(10, 20)
console.log(myResult + "resultado")*/

const cart = [10, 20, 247, 30, 2, 70, 33, 470]
let finalValue = 0
let sum = 0

for (let i =0;i<cart.length;i++) {
    sum+=cart[i] 
}

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100 
    return result
}

function economizou(sum, finalValue) {
    const final = sum - finalValue
    return final
}
const resultado = economizou(882, 800)

calculateDiscount()

cart.forEach(value => {

    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValue = finalValue + ( value - discount )
    } else {
        finalValue += value
    }

});

console.log(`O valor final da compra foi de R$ ${sum.toFixed(2)},
porém você teve desconto, irá pagar apenas R$ ${finalValue.toFixed(2)}, você economizou ${resultado.toFixed(2)}`)
