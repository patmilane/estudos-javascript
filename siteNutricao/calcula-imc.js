var titulo = document.querySelector(".titulo");
titulo.textContent = "Pacientess";

var pacientes = document.querySelectorAll(".paciente");

    console.log(`tamanho do Array: ${pacientes.length}`);

for(var i = 0 ; i < pacientes.length; i++){
    console.log(pacientes[i]);

    var paciente = pacientes[i];

        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;

        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;

        console.log(paciente);
        console.log(peso);
        console.log(altura);

        var tdImc = paciente.querySelector(".info-imc");

        var alturaValida = true; 
        var pesoValido = true; 

        if(peso <= 0 || peso > 500){
            console.log("peso invalido");
            pesoValido = false;
            tdImc.textContent = "Peso Invalido";
        //pra modificar o estilo da linha q for invalida
            paciente.style.backgroundColor = "lightcoral";
        }

        if(altura <= 0 || altura > 3){
            console.log("altura invalido");
            alturaValida = false;
            tdImc.textContent = "Altura Invalida";
        //pra modificar o estilo da linha q for invalida
        //EXEMPLO DIRETO NO CSS 
            paciente.classList.add("paciente-invalido");
        }
 
        if(alturaValida && pesoValido){
            var imc = calculaImc(peso, altura);
            tdImc.textContent = imc;
            //toFixed é pra colocar duas casas decimais
        }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}


