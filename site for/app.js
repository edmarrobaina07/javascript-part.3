let p = document.querySelector('p')
let input = document.querySelector('input')

const info = [
    { country: 'Argentina', capital: 'Buenos Aires', territorial: '2.796.427 Km', population: '45.606.000 habitantes', demographic: '16,7 hab./km', language: 'Espanhol', pib: 'US$ 641,1 bilhões', pibpercapita: 'US$ 13.710', gini: '0,423', coin: 'Peso argentino', idh: '0,842' },
    { country: 'Bolívia', capital: 'La paz (administrativa) e Sucre (constitucional)', territorial: '1.098.581 Km', population: '11.833.000 habitantes', demographic: '10,9 hab./km', language: 'Espanhol', pib: 'US$ 46,1 bilhões', pibpercapita: 'US$ 3.800', gini: '0,436', coin: 'Boliviano da Bolívia', idh: '0,692' },
    { country: 'Brasil', capital: 'Brasília', territorial: '8.514.004 Km', population: '203.062.512 habitantes', demographic: '23,86 hab./km', language: 'Português', pib: 'US$ 2 trilhões', pibpercapita: 'US$ 9.670', gini: '0,489', coin: 'Real', idh: '0,754' },
    { country: 'Chile', capital: 'Santiago', territorial: '756.102 Km', population: '19.212.000 habitantes', demographic: '25,8 hab./km', language: 'Espanhol', pib: 'US$ 358,56 bilhões', pibpercapita: 'US$ 17.830', gini: '0,449', coin: 'Peso Chileno', idh: '0,855' },
    { country: 'Colômbia', capital: 'Bogotá', territorial: '1.141.748 Km', population: '51.266.000 habitantes', demographic: '46,2 hab./km', language: 'Espanhol', pib: 'US$ 334,69 bilhões', pibpercapita: 'US$ 6.420', gini: '0,542', coin: 'Peso Colombiano', idh: '0,752' },
    { country: 'Equador', capital: 'Quito', territorial: '257.217 Km', population: '17.888.000 habitantes', demographic: '72 hab./km', language: 'Espanhol', pib: 'US$ 121,29 bilhões', pibpercapita: 'US$ 6.640', gini: '0,473', coin: 'Dólar Estadunidense', idh: '0,740' },
    { country: 'Guiana', capital: 'Georgetown', territorial: '214.969 Km', population: '790.000 habitantes', demographic: '4 hab./km', language: 'Inglês', pib: 'R$ 16,3 bilhões', pibpercapita: 'US$ 20.540', gini: '0,446', coin: 'Dólar Guianense', idh: '0,714' },
    { country: 'Paraguai', capital: 'Assunção', territorial: '406.752 Km', population: '7.220.000 habitantes', demographic: '18,2 hab./km', language: 'Espanhol', pib: 'US$ 42,8 bilhões', pibpercapita: 'US$ 5.670', gini: '0,435', coin: 'Guarani', idh: '0,717' },
    { country: 'Peru', capital: 'Lima', territorial: '1.285.216 Km', population: '33.359 habitantes', demographic: '26,1 hab./km', language: 'Espanhol', pib: 'US$ 268,2 bilhões', pibpercapita: 'US$ 7.700', gini: '0,438', coin: 'Sol', idh: '0,762' },
    { country: 'Suriname', capital: 'Paramaribo', territorial: '163.820 Km', population: '592.000 habitantes', demographic: '3,8 hab./km', language: 'Neerlandês', pib: 'US$ 3,47 bilhões', pibpercapita: 'US$ 5.560', gini: '0,579', coin: 'Dólar do Suriname', idh: '0,730' },
    { country: 'Uruguai', capital: 'Montevidéu', territorial: '173.626 Km', population: '3.485.000 habitantes', demographic: '19,9 hab./km', language: 'Espanhol', pib: 'US$ 77,3 bilhões', pibpercapita: 'US$ 21.680', gini: '0,402', coin: 'Peso Uruguaio', idh: '0,809' },
    { country: 'Venezuela', capital: 'Caracas', territorial: '929.690 Km', population: '28.705.000 habitantes', demographic: '32,5 hab./km', language: 'Espanhol', pib: 'US$ 96,630 bilhões', pibpercapita: 'US$ 3.640', gini: '0,390', coin: 'Bolíviar', idh: '0,691' },

]

function search() {
    for (let i = 0; i < info.length; i++) {
        if (input.value.toLowerCase() === info[i].country.toLowerCase()) {
            p.innerHTML = `País Encontrado Nome: ${info[i].country} Capital: ${info[i].capital} Extensão territorial: ${info[i].territorial}
            População: ${info[i].population} Densidade demográfica: ${info[i].demographic} Idioma: ${info[i].language} PIB: ${info[i].pib} PIP per capita: ${info[i].pibpercapita} Índice de Gini: ${info[i].gini} Moeda: ${info[i].coin} IDH: ${info[i].idh}`

            break
        }else {
            p.innerHTML = "País não encontrado, Tente novamente."
        }
    }
}