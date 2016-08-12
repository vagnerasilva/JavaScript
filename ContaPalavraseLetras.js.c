#define MAX 100
char palavras[MAX];
int contSpace;
int i;
int j;
int resultado;

void setup() {
  Serial.begin(9600);
  Serial.println("Digite uma frase:");
  i = 0;
  contSpace = 1;
  j = 1;
}

void loop() {
  while (Serial.available() > 0) {
    palavras[i] = Serial.read();

    if (isSpace(palavras[i]) == true){   //condição quando termina palavra contando espaços
       contSpace = j++;
      }

//    if (){   //condição quantidade de caracteres total menos whitespaces
//      
//      }

//    if (){  //condição quantidade de linhas contando quebra de linhas
//
//    }


    

    
    // say what you got:
    //Serial.print("I received: ");

    if (palavras[i] == '\n') {
          Serial.print("Quantidade de palavras: ");
          Serial.println(contSpace);

          Serial.print("Quantidade de caracteres: ");
          resultado = i - (contSpace - 1);
          Serial.println(resultado);
        }
        
    i++;
    
    } 
    
  

  
  }
