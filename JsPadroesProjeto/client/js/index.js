var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
];

console.log(campos);

var tbody = document.querySelector('table tbody'); //pegando o corpo da tabela pra inserir as tr nele

document.querySelector('.form').addEventListener('submit', function(event){ //pegando meu formulario e escutando o clique
    
    event.preventDefault(); //pedindo pra n submeter o formulario, se n a pagina recarrega e os itens nao aparecem

    var tr = document.createElement('tr'); //criando uma tr a cada clique
    campos.forEach(function(campo){ //forEach, p ir criando linhas da tabela em loop
        
        var td = document.createElement('td'); //criando td pra cada info
        td.textContent = campo.value; //dentro de td vai receber o q chegar dentro de campo
        tr.appendChild(td); //linhas sendo inseridas dentro das colunas (linhas são filhas de td)

        //no final desse forEach, ele vai ter criado uma td pra cada campo 
    });

    //fora de forEach, pois é só uma informação (e q precisa de tratamento diferente)
    
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    /*para criar e calcular o volume em seu td respectivo, preciso fazer
     quantidade x valor, então pego sua posição dentro do array (ex. campo[1])
     e insiro dentro da tdVolume atraves do textContent */ 

     tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;



}); 
