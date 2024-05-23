function contagemDeVogais(nome) {

    let totalDECaracter = nome.length
    let novoNomeEMCaixaBaixa = nome.toLowerCase()
    let totalVogal = 0

    for (let index = 0; index < totalDECaracter; index++) {
        novoNomeEMCaixaBaixa[index]

            if (novoNomeEMCaixaBaixa[index].trim()=== "" ) {
                continue
            } 
            
            if (novoNomeEMCaixaBaixa[index]=== "a" || novoNomeEMCaixaBaixa[index]=== "e" || novoNomeEMCaixaBaixa[index] === "i" || novoNomeEMCaixaBaixa[index] === "o" || novoNomeEMCaixaBaixa[index] === "u") {
                totalVogal++
                
            }
        
    }

    console.log('contém' + totalVogal);

    
}

    function contagemDeConsoantes(nome) {

        let totalDECaracter = nome.length
        let novoNomeEMCaixaBaixa = nome.toLowerCase()
        let totalConsoante= 0

        for (let index = 0; index < totalDECaracter; index++) {
            novoNomeEMCaixaBaixa[index]

                if (novoNomeEMCaixaBaixa[index].trim()=== "" ) {
                    continue
                } 
                
                if (novoNomeEMCaixaBaixa[index]=== "b" || novoNomeEMCaixaBaixa[index]=== "c" || novoNomeEMCaixaBaixa[index] === "d" || novoNomeEMCaixaBaixa[index] === "f" || novoNomeEMCaixaBaixa[index] === "g" || novoNomeEMCaixaBaixa[index]=== "h" || novoNomeEMCaixaBaixa[index]=== "j" || novoNomeEMCaixaBaixa[index] === "k" || novoNomeEMCaixaBaixa[index] === "l" || novoNomeEMCaixaBaixa[index] === "m" || novoNomeEMCaixaBaixa[index]=== "n" || novoNomeEMCaixaBaixa[index]=== "p" || novoNomeEMCaixaBaixa[index] === "q" || novoNomeEMCaixaBaixa[index] === "r" || novoNomeEMCaixaBaixa[index] === "s" || novoNomeEMCaixaBaixa[index]=== "t" || novoNomeEMCaixaBaixa[index]=== "v" || novoNomeEMCaixaBaixa[index] === "w" || novoNomeEMCaixaBaixa[index] === "x" || novoNomeEMCaixaBaixa[index] === "y" || novoNomeEMCaixaBaixa[index] === "z") {
                    totalConsoante++
                    //console.log('contém' + totalConsoante);
                }
            
        }

        console.log("Total "+totalConsoante)

    
    }



console.log(contagemDeVogais('Kaique Jackson') );
console.log(contagemDeConsoantes('Kaique Jackson'));

