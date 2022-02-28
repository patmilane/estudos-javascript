var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

//extraindo as info do form e chamando a funcao
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoForm(form);

//chamando a função montaTr



//add o paciente na tabela
    addPacienteNaTabela(paciente);
    

    form.reset(); //apagando o form apos a inserção do paciente
});

//add o paciente na tabela
function addPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


//extraindo as info do paciente do form
function obtemPacienteDoForm(form){

    var paciente = {
        nome: form.nome.value, 
        peso: form.peso.value,
        altura:form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
//pegando os campos peso e alt pra calcular o imc a partir da função
    }
    return paciente;
}
//cria a tr e td do paciente
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");

    /*adicionando uma classe ao paciente q adicionei
   igual nos q ja existiam */
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");
 
     pacienteTr.appendChild(nomeTd);
     pacienteTr.appendChild(pesoTd);
     pacienteTr.appendChild(alturaTd);
     pacienteTr.appendChild(gorduraTd);
     pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado; 
    td.classList.add(classe);

    return td;
}
