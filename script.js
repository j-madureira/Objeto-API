//Recebendo a URL

let url = 'https://economia.awesomeapi.com.br/last/USD-BRL';

//Recebendo os dados da API e transformando a dado em Jason
fetch(url).then((resposta)=>{
    return resposta.json()
})
//Jason ja transformado 
.then((dados)=>{
    console.log(dados);
    let {...copia} = dados.USDBRL; 
    console.log(copia);
})



