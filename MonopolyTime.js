//funcoes//
//sorteio das 6 cartas(3 cartas boas e 3 cartas negativas)
var carta = function(){
var escolhe = Math.floor((Math.random()*6)+1);
   console.log(escolhe);
   return escolhe;
};
var saldo = 0;
//=======================================
var processaCarta = function(saldo){
   
//=======================================
// valida carta e atualiza saldo
var valida = carta();

//validar as cartas e debito/credito no saldo
switch (valida){
   case 1:
   alert("Parabens, você GANHOU uma gratificação de R$300,00");
   saldo = (saldo + 300);
   alert("Seu novo saldo: R$" + saldo);
   break;
   
   case 2:
   alert("Que beleza! Você achou uma carteira na rua com R$200,00");
   saldo = (saldo + 200);
   alert("Seu novo saldo: R$"+ saldo);
   break;
   
   case 3:
   alert("Que sorte!!! Você GANHOU um almoço com o Renan tome R$100,00 e divirta se!");
   saldo = (saldo + 100);
   alert("Seu novo saldo: R$" + saldo);
   break;
   
   case 4:
   alert("Como no filme o vento levou, você PERDEU R$100,00");
   saldo = (saldo - 100);
   alert("Seu novo saldo: R$" + saldo);
   break;
   
   case 5:
   alert("Houve reajuste no estacionamento, PERDEU R$200,00");
   saldo = (saldo - 200);
   alert("Seu novo saldo: R$" + saldo);
   break;
   
   case 6:
   alert("O Renan te levou para almoçar e disse que esqueceu a carteira, PAGUE R$300,00");
   saldo = (saldo - 300);
   alert("Seu novo saldo: R$"  + saldo);
   break;
   
}
   return saldo;
};
var novosaldo = processaCarta(saldo);
console.log(novosaldo);


//=================sortear dado()

var dado = function(){
var escolhe = Math.floor((Math.random()*4)+1);
   console.log("dado:", escolhe);
   return escolhe;
};

var valida = dado();

var propriedade = [
   //adicionar variveis para dono.
 {nome: "Av. Paulista", dono: " " },
 {nome: "Av. 9 de Julho", dono: " " },
 {nome: "Augusta", dono:" " },
 {nome: "Av. Juscelino Kubitschek", dono: " " },
 {nome: "Av. Brigadeiro Faria Lima", dono: " "},
 {nome: "CUBO !", dono: " " },
 {nome: "Estação Ferroviário", dono: " "},
];

// VARIÁVEL array in object - Jogadores
var jogadores = [{dinheiro: 1000, posicao: 0, icone: 1},
         {dinheiro: 1000, posicao: 0, icone: 2},
         {dinheiro: 1000, posicao: 0, icone: 3}]        
//começa 
var confirmacaoJogar = confirm("Bem-vindo ao incrível Banco Imobiliário. Vamos jogar?");
 

    while(jogadores.length <= 1){
        alert("Por favor, para jogar necessita de 2 jogares ou mais");    
        jogadores[1] = prompt("Por favor, insira o nome do jogador 1");
        jogadores[2] = prompt("Por favor, insira o nome do jogador 2");
        jogadores[3] = prompt("Por favor, insira o nome do jogador 3");
    }

/////vagner//

var conf;
var tab =  [0,1,2,3,4,5,6,7,8,9,10];/* tabuleiro*/
var dado;
jogadores();/*Devolve vetor dos jogadores*/
/* while para  nao acabar enquanto tiver $*/
alert("Bem vindo ao Jogo ");
while(jogadores.length!==1){
    for(var i in jogadores){/* for das jogadas*/
        console.log(tab + "voce esta na posicao ",jogadores[i].posicao);
        dado = dado(); / * retorna o valor do dado*/
        jogadores[i].posicao= jogadores[i].posicao+dado;
        if(jogador[i].posicao === 1||2 || 4 ||6 || 9 || 10){
            escolha= 1;
        }
        if(jogador[i].posicao === 3){
            escolha= 2;
        }
        if(jogador[i].posicao === 5||8){
            escolha= 3;
        }
        if(jogador[i].posicao === 7){
            escolha= 4;
        }
        if(jogador[i].posicao===0||(jogador[i].posicao+dado)>tab.length){
            escolha= 5;
        }
        switch (escolha){
    case 1: /* funcao comprar e pagar aluguel 1,2,4,6,9,10*/{
            /*avalia dentro do vetor prop*/
            if(propriedade(i).dono === jogadores(i).icone){
                    console.log(" voce e dono ");                    
                }/* fecha o primeiro if*/
            else{
                conf = confirm("voce quer comprar");
                if(conf=true){
                    /* recebe o icone no objeto propriedade*/
                    propriedade.dono = jogador.icone;
                       /*ATUALIZAR VALOR O OBEJETO JOGADOR*/
                        jogador.dinheiro = tiradinheiro(jogador.dinheiro) ;
                        }
                    else{
                        /* pagar aluguel*/
                        jogador.dinheiro = jogador.dinheiro - 100 ;  
                    }
            }/*fecha o primeiro else*/
        }/*chave fecha o case1*/  
            
        
        case 2: /* cainda na posicao 3 */{
            
            jogador.dinheiro = jogador.dinheiro - 100 ;
            console.log(" voce pagou uma taxa "); 
            
        }
        case 3: /* caindo na posicao 5 ou 8 */{
            /* */
            jogador.saldo = processaCarta(jogador.saldo) ;
        }
        case 4: /* compania de trem 7*/{
        /*avalia dentro do vetor prop a p 7 trem*/
        if(prop(trem.dono)=== jogador.icone){
                    console.log(" voce e dono ");                    
                }/* fecha o primeiro if*/
        else{
            conf = prompt("voce quer comprar");
            if(conf=true){
            /* recebe o icone no objeto propriedade*/
                propriedade(trem.dono)= jogador.icone;
                /*ATUALIZAR VALOR O OBJETO JOGADOR*/
                jogador.dinheiro = jogador.dinheiro - 100 ;
                }
            else{
            /* pagar taxa do trem vezes o num dado */
                jogador.dinheiro = jogador.dinheiro - 100*dado ;         
            }
            }/*fecha o primeiro else*/
        }/*chave fecha o case4*/
        
        case 5:{ /* Caso da posicao 1 Go*/
            if(jogador.posicao===0||(jogador.posicao+dado)>tab.length ){
                jogador.dinheiro=jogador.dinheiro + 200;
            }     
    }/* for das jogadas*/    
    
    /* verificar quanto de dinheiro o player*/
    /* usando um for*/
    
}/* fechando while do jogar*/