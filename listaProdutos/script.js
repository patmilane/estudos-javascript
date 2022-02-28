class Produto{
    constructor(){
        this.id = 1;
        this.arrayProdutos = []; //criando array pra add produtos nele
        this.editId = null; /*toda vez q esse valor for diferente de nulo quer 
        dizer q vc esta atualizando(), quando nao, significa q é um novo produto*/
        

    }
    salvar(){
        let produto = this.lerDados();

        if(this.validaCampo(produto)){ //se a função validaCampo estiver ok (true)

            if(this.editId == null){ //vendo se o id é nulo pra add novo produto

                this.adicionar(produto); //chama a função adicionar() e realiza o processo dela

            } else{ //se nao for nulo, vai chamar a função atualizar()

                this.atualizar(this.editId, produto);
                //pegando o id não nulo e mandando os dados pro atualizar()
            }


        }

        this.listaTabela(); //pegando a funcao listaTabela() e inserindo os dados visualmente na tabela
        this.cancelar();
    }


    listaTabela(){

        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nomeProduto = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_acao = tr.insertCell();


            td_id.innerText = this.arrayProdutos[i].id;
            td_nomeProduto.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].preco;

            td_id.classList.add('center'); //chamar classe do css pra um 
                                        // elemento especifico do js

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar.png';
            td_acao.appendChild(imgEdit); //dentro da tag td das ações ele
                                        //esta criando um elemento img como filha


            imgEdit.setAttribute("onclick", "produto.preparaEdicao("+ JSON.stringify(this.arrayProdutos[i]) +")"); /*chamando a função 
            preparaEdicao() e transformando a posição selecionada em string pra editar no input */
                                                        

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';

            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")"); /*chamando a função
            deletar() para configurar a imagem de deletar */

            td_acao.appendChild(imgDelete);

            // console.log(this.arrayProdutos)
        }
    }


    adicionar(produto){

        produto.preco = parseFloat(produto.preco); //convertendo o input pra number

        this.arrayProdutos.push(produto); //empurrando o produto pro array
        this.id++; //contador pra mudar o numero do id do proximo

    }

    atualizar(id, produto){ //recebe id e produto, instanciados no salvar()

        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){

                this.arrayProdutos[i].nomeProduto = produto.nomeProduto; //recebdo os novos valores
                this.arrayProdutos[i].preco = produto.preco;

            }
        }
    }

    preparaEdicao(dados){ //recebendo o arrayProdutos porém chamando ele de dados

        this.editId = dados.id; //pegando o editId e fazendo ele receber o id do arrayProduto p editar

        document.getElementById('produto').value = dados.nomeProduto; //pegando os valores
        document.getElementById('preco').value = dados.preco;

        document.getElementById('botaoSalvar').innerText = 'Atualizar'; //mudand o botao Salvar para 'Atualizar'
    }

    lerDados(){ 
        let produto = {} //ler dados recebidos no input e add ao objeto produto

            produto.id = this.id;  //id vai receber o id do constructor
            produto.nomeProduto = document.getElementById('produto').value; //input produto
            produto.preco = document.getElementById('preco').value; //pegando input preco

            
        return produto;
    }

    validaCampo(produto){ //ler dados recebidos no input
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += 'Digite um produto\n';
        }

        if(produto.preco == ''){
            msg += 'Digite o preço do produto\n';
        }

        if(msg != ''){
            alert(msg);
            return false;

            //com esse if ou sem está dando certo?
        }

        return true;

    }

    cancelar(){

        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';

        document.getElementById('botaoSalvar').innerText = 'Salvar';
        this.editId = null;
        //voltando o botao pro 'Salvar' apos a atualização() e o editId tb



    }

    deletar(id){


        let tbody = document.getElementById('tbody');


        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){

                // console.log(this.arrayProdutos[i]);

                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
            }

        }

        console.log(this.arrayProdutos);


    }
}

var produto = new Produto(); //criando um obj do tipo produto



// this.nomeProduto = '';
        // this.valor = 0;