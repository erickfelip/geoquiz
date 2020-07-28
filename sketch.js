x=80
y=95
score=0
opcao=1
tela='menu'
gabarito = {"q1": 1, "q2": 4, "q3": 3, "q4": 1, "q5": 1, "q6": 3, "q7": 2, "q8": 2, "q9": 1, "q10": 1};

                  //TELA DE VERIFICAÇÃO COM GABARITO DAS QUESTÕES//
  
function preload()
{
  score = 0
  telas = {
  'menu': menu,
  'q1': fase1,
  'q2': fase2,
  'q3': fase3,
  'q4': fase4,
  'q5': fase5,
  'q6': fase6,
  'q7': fase7,
  'q8': fase8,
  'q9': fase9,
  'q10': fase10,
  'creditos': creditos,
  'instrucoes': instrucoes,
  'resultados': resultados
}
verifier = {
  'menu': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-100
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<3){
      y=y+100
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == 1){
        tela='q1'
        x = 40;
        y = 130;
      }
      else if(opcao == 2){
        tela='instrucoes'
      }
      else if(opcao == 3){
        tela='creditos'
      }
    }
    if(key=="Escape"){
      x=80
      y=95
      score=0
      opcao=1
      tela='menu'
    }
  },
  'creditos': (key) => {
    if(key == "Escape") tela = 'menu';
  },
  'instrucoes': (key) => {
    if(key == "Escape") tela = 'menu';
  },
  'q1': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0
      tela='q2'
    }
    if(key=="Escape"){
      x=80
      y=95
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q2': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0  
      tela='q3'   
    }
    if(key=="Escape"){
      x=80
      y=95
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q3': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q4'
    }
    if(key=="Escape"){
      x=80
      y=95
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q4': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q5'  
    }
    if(key=="Escape"){
      x=80
      y=95
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q5': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q6' 
    }
    if(key=="Escape"){
      x=80
      y=95
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q6': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q7'    
    }
    if(key=="Escape"){
      x=80
      y=95
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q7': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q8'     
    }
    if(key=="Escape"){
      x=80
      y=95
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q8': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q9'    
    }
    if(key=="Escape"){
      x=80
      y=95
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q9': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='q10'   
    }
    if(key=="Escape"){
      x=80
      y=95
      score=0
      opcao=1
      tela='menu'
    }
  },
  'q10': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      y=y+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      score += opcao == gabarito[tela] ? 1 : 0     
      tela='resultados'
    }
    if(key=="Escape"){
      x=80
      y=95
      score=0
      opcao=1
      tela='menu'
    }
  },
  'resultados': (key) => {
    x=80
    y=95
    score=0
    opcao=1
    tela = 'menu';
  }
}
  
img=loadImage("geografia1.jpg");
img2=loadImage("emoji.jpg")
img3=loadImage("eu1.jpg")
img4=loadImage("paulo1.jpg")
img5=loadImage("bobsponja.gif")
img6=loadImage("educacao.jpg")
img7=loadImage("alemanha.jpg")
img8=loadImage("ceu.jpg")
img9=loadImage("clima.jpg")
img10=loadImage("china.jpg")
img11=loadImage("jk.jpg")
img12=loadImage("urbano.jpg")
img13=loadImage("conurbacao.jpg")
img14=loadImage("italia.jpg")
img15=loadImage("guianaf.jpg")
img16=loadImage("suecia.jpg")
fontComicNeueSansID=loadFont("ComicNeueSansID.ttf");

}

function setup(){
  createCanvas(500,500)
}

function draw(){
  background(img);
  telas[tela]();
}
                      //SCORE//
function drawScore(){
  text(`Pontos: ${score}`, 40, 400, 300, 50)
}
                      //MENU//
function menu(){
  rect(x,y,170,45)
  textStyle(NORMAL)
  textSize(35)
  textFont(fontComicNeueSansID)
  text("GEO QUIZ", 120, 50)
  textSize(32)
  text("Start", 90, 130)
  text("Instruções", 90, 230)
  text("Créditos", 90, 330)
}
                      //FASES//
function fase1(){
  
  background(img7);
  rect(x,y,220,28)
  textStyle(NORMAL)
    textSize(24);
    noStroke()
    textAlign(LEFT);
    text( "Qual a capital da Alemanha?",20,20,260,260);
    text("A) Berlim"+"\n", 40, 150);
    text("B) Munique"+"\n",40, 175);
    text("C) Brandenburgo"+"\n", 40, 200);
    text("D) Frankfurt"+"\n",40, 225);
    drawScore()
}

function fase2(){
  background(img8);
  rect(x,y,270,25)
    textSize(20);
    noStroke()
    textAlign(LEFT);
    text( "Dentre os elementos abaixo , assinale aquele que não é um fenômeno atmosférico:",20,20,360,260);
    text("A) Variação de temperatura"+"\n", 40, 150);
    text("B) Índice de umidade"+"\n",40, 175);
    text("C) Formação de nuvens"+"\n", 40, 200);
    text("D) Derretimento de geleiras"+"\n",40, 225);
    drawScore()
 
}

function fase3(){
  background(img9);
    rect(x,y,170,28)
    textSize(24);
    noStroke()
    textAlign(LEFT);
    text( "Qual tipo de clima predomina o brasil?",20,20,260,260);
    text("A) Polar"+"\n", 40, 150);
    text("B) Equatorial"+"\n",40, 175);
    text("C) Tropical"+"\n", 40, 200);
    text("D) Temperado"+"\n",40, 225);
    drawScore()
}
function fase4(){
  background(img10);
  rect(x,y,170,28)
    textSize(24);
    noStroke()
    textAlign(LEFT);
    text("Qual a capital da China?",20,20,260,260);
    text("A) Pequim"+"\n", 40, 150);
    text("B) Wuhan"+"\n",40, 175);
    text("C) Xangai"+"\n", 40, 200);
    text("D) Seul"+"\n",40, 225);
    drawScore()
}


function fase5(){
  background(img11);
  rect(x,y,300,28)
    textSize(14);
    noStroke()
    textAlign(LEFT);
    text( "O período comumente denominado de “anos dourados” marcou uma etapa da recente história brasileira associada ao desenvolvimentismo (abertura de rodovias, expansão da rede hidrelétrica, implantação da indústria automobilística, descentralização da capital) e à atmosfera cultural marcada pelo surgimento da Bossa Nova. A que governo tal período está associado:",20,20,490,450);
  textSize(16);
    text("A) Juscelino Kubistchek"+"\n", 40, 150);
    text("B) João Goulart"+"\n",40, 175);
    text("C) Getúlio Vargas"+"\n", 40, 200);
    text("D) Eurico Gaspar Dutra"+"\n",40, 225);
    drawScore()
}

function fase6(){
  background(img12);
  rect(x,y, 260,28)
    textSize(18);
    noStroke()
    textAlign(LEFT);
    text( "Na atual fase da urbanização mundial, podemos afirmar que os principais tipos de aglomerações urbanas atualmente existentes, ou seja, aquelas cidades que estão no topo da hierarquia urbana e que protagonizam a economia mundial são:",20,20,450,260);
    textSize(16);
    text("A) Cidades médias"+"\n", 40, 150);
    text("B) Metrópoles"+"\n",40, 175);
    text("C) Cidades globais"+"\n", 40, 200);
    text("D) Cidades artificiais tecnológicas"+"\n",40, 225);
    drawScore()
}
function fase7(){
  background(img13);
  rect(x,y,300,28)
    textSize(24);
    noStroke()
    textAlign(LEFT);
    text( "Entende-se por Conurbação:",20,20,260,260);
    textSize(16);
    text("A) A expansão vertical das cidades"+"\n", 40, 150);
    text("B) O encontro de duas ou mais cidades"+"\n",40, 175);
    text("C) População sem moradia nas cidades"+"\n", 40, 200);
    text("D) Ineficácia dos transportes públicos"+"\n",40, 225);
    drawScore()
}
function fase8(){
  background(img14);
  rect(x,y,170,28)
    textSize(24);
    noStroke()
    textAlign(LEFT);
    text( "Qual a capital da Itália?",20,20,260,260);
    text("A) Florença"+"\n", 40, 150);
    text("B) Roma"+"\n",40, 175);
    text("C) Milão"+"\n", 40, 200);
    text("D) Veneza"+"\n",40, 225);
    drawScore()
}
function fase9(){
  background(img15);
  rect(x,y,170,28)
    textSize(24);
    noStroke()
    textAlign(LEFT);
    text( "Qual a capital da Guiana francesa?",20,20,260,260);
    text("A) Caiena"+"\n", 40, 150);
    text("B) Paramaribo"+"\n",40, 175);
    text("C) Mamudzu"+"\n", 40, 200);
    text("D) Georgetown"+"\n",40, 225);
    drawScore()
}
function fase10(){
  background(img16);
  rect(x,y,170,28)
    textSize(24);
    noStroke()
    textAlign(LEFT);
    text( "Qual a capital da Suécia?",20,20,260,260);
    text("A) Estocolmo"+"\n", 40, 150);
    text("B) Oslo"+"\n",40, 175);
    text("C) Helsinque"+"\n", 40, 200);
    text("D) Copenhague"+"\n",40, 225);
    drawScore()
}

function resultados(){
    background(img5);
    textSize(28);
    stroke(1)
     text(`Seu placar foi de: ${score} questões!`, 30, 30)
  
}

function instrucoes(){
  textSize(16);
    stroke(100);
    stroke(250);
    rect(15,15, 400, 420, 10);
    textSize(15);
    textAlign(LEFT);
    text("Ano: Ensino Fundamental 2 ao Ensino Médio.",40,20,260,260)
    text("Matéria: Geografia."+"\n", 40, 200)
    textAlign(LEFT);
    text("Resumo: O jogo se resume a um quiz de perguntas variadas sobre diversos assuntos relacionados à matéria de geografia no geral, como:Questões ambientais, Capitais dos Países do Mundo, Urbanização, Indústria e etc."+"\n",40,60,320,320)
    text("Pressione ESC para voltar ao MENU"+"\n", 40,300)
 

}
function creditos(){
  background(img6);
  textSize(16);
    stroke(100);
    stroke(250);
    rect(15,15, 400, 420, 10);
    textSize(15);
    textAlign(LEFT);
    image(img4,80,80,120,140)
    image(img3,250,80,120,140)
    text("Desenvolvedor: Erick Felipe F. Castro"+"\n", 250,250, 100, 300)
    text("Educador: Paulo Ricardo de Lima Dantas."+"\n",70,250,100,300)
    text("Pressione ESC para voltar ao MENU"+"\n", 50,490)
    
}


function keyPressed(){
  verifier[tela](key)

}