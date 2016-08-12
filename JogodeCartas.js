var tab = function(){
var conf;    
    var tab = 
    [f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10];
    
    
    /* valor da jogada dado pra entrar*/
    switch (" "){
        
        case 1: /* funcao comprar e pagar aluguel 1,2,4,6,9,10*/{
            /*avalia dentro do vetor prop*/
            if(p[dono(i)]=== jog[jogador(j)]){
                    console.log(" voce e dono ");                    
                }/* fecha o primeiro if*/
            else{
                conf = prompt("voce quer comprar");
                    if(conf=true){
                        /* recebe o icone no objeto propriedade*/
                        p[dono(i)]= jog[jogador(j)];
                        /*ATUALIZAR VALOR O OBEJETO JOGADOR*/
                        tiradinheiro(jog[jogador(j)] ;
                        }
                    else{
                        /* pagar aluguel*/
                        aluguel(jog[jogador(j)]);  
                    }
            }/*fecha o primeiro else*/
        }/*chave fecha o case1*/  
            
        
        case 2: /* cainda na posicao 3 */{
            
            tiradinheiro(jog[jogador(j)) ;
            console.log(" voce pagou uma taxa "); 
            
        }
        case 3: /* caindo na posicao 5*/{
            /* */
            processaCarta(jog[jogador(j)) ;
        }
        case 4: /**/{
            
        }
        
    }
        
}