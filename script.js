
// pegar os input dos formularios e tela
const nomeInput = document.getElementById("nome");
const salarioInput = document.getElementById("salario");
const diasInput = document.getElementById("dias");

//tela
const tela = document.getElementById("tela");

//pegar os botoes
const btnCalcular = document.getElementById("btn-calcular");
const btnLimpar = document.getElementById("btn-limpar");

//Mensagem Inicial de exibição na tela...

tela.textContent = "Preencha Todos os campos do formulario abaixo!";

//funcao para capturar todos os valores digitados e retornar um Objeto

function capturarDados(){ 
    return{ 
        nome: nomeInput.value.trim(),
        salario: parseFloat(salarioInput.value),
        dias: parseInt(diasInput.value),
    };
       
}

//Funcao para calcular ferias usando um objeto

function calcularFerias(){

    //armazena as informacoes da funcao anterior na variavel dados...
    const dados = capturarDados();

    //validação simples

    if(!dados.nome || !isNaN(dados.nome) || !dados.salario || dados.salario <= 0 || !dados.dias || dados.dias <=0){

        tela.textContent = "atenção !!! \npreencha os campos Corretamente com valores positivos !";
        return;


    }

    //Calculo simples de Ferias...
     const valorFerias = ((dados.salario / 30) * dados.dias) * (4/3).toFixed(2);



    //Convertendo o valor em BRL para a Tela!

    tela.innerHTML =  
    `FUNCIONARIO: ${dados.nome} <br><br>
    Dias de férias: ${dados.dias} dias. <br><br>
    Valor das Férias: ${valorFerias.toLocaleString("pt-BR", {style:"currency",currency:"BRL"})}.`;

}


//Funcao para limpar os campos

function limparCampos(){
    nomeInput.value = "";
    salarioInput.value = "";
    diasInput.value = "";
    tela.textContent = "Preencha Todos os campos do formulario abaixo!";
}

//eventos dos botoes
btnCalcular.addEventListener("click",calcularFerias);
btnLimpar.addEventListener("click", limparCampos);




