//1)

function verificarPolidromo(palavra) {
    let palavraInvertida = ""

    for (let index = palavra.length - 1; index >= 0; index--) {
        palavraInvertida += palavra[index]

    }

        return palavraInvertida === palavra
    
}
console.log('ATIVIDADE 1', verificarPolidromo('ovo'));



//2)

function fatorialDoNumero(numero) {
    
        if (numero ==  0) {
            return 1
        }

            for (let index = numero - 1; index > 0; index--) {
                numero *= index

            }

        return  numero
}
console.log("ATIVIDADE 2", fatorialDoNumero(5))


//3) 

function converterTemperatura(temperaturaCelsius) {
    let temperaturaFahrenheit = (temperaturaCelsius * (9/5)) + 32

    return temperaturaFahrenheit
}
console.log("ATIVIDADE 3", converterTemperatura(32)); 


//4

function somaDosDigitos(numero) {
    let transformarEmTexto = numero.toString()
    let soma = 0

    for (t of transformarEmTexto){
       
        soma +=  Number(t)
    }
    return soma

}
console.log("ATIVIDADE 4", somaDosDigitos(205));


//5 

function quadradoDoNumero(valor){
    let total = valor * valor
    return total
}
console.log('ATIVIDADE 5', quadradoDoNumero(5));


//6

function anoBissexto(ano) {
    let divisivelPor400 = ano % 400
    let multiploDeQuatro = ano % 4
    let multiploDeCem = ano % 100
    let verdadeiroOuFalso = true

    if (divisivelPor400 == 0) {
        return verdadeiroOuFalso

         } else if(multiploDeQuatro == 0){
            return verdadeiroOuFalso

          } else if(multiploDeCem !== 0){
            verdadeiroOuFalso = false
             return verdadeiroOuFalso
    }
}
console.log("ATIVIDADE 6", anoBissexto(2024));


  

