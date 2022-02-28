var botaoAdd = document.querySelector("#buscar-pacientes");

botaoAdd.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        if(xhr.status == 200){

            pacientes.forEach(function(paciente) {
            addPacienteNaTabela(paciente); 
        });

        } else{
            console.log(xhr.status);
            console.log(xhr.responseText);

        }

        
        
    });

    xhr.send();
});