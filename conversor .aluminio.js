

let resitividade = 0.0282 // 0,0282 Ω. mm²/m 

let comprimento = 1555
let secaoTransversal = 2.5  //o valor minimo é 1 para nao dividir por zero
let resistencia = (resitividade * comprimento) / secaoTransversal

console.log ("o valor da resteincia é = ", resistencia)