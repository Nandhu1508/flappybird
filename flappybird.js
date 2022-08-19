var can = document.getElementById("canvas");
var cont = can.getContext("2d");

var bird = new Image();
bird.src = "./fbimg/bird.png";
var uppipe = new Image();
uppipe.src = "./fbimg/uppipe.png";
var downpipe = new Image();
downpipe.src = "./fbimg/downpipe.png";
var ground = new Image();
ground.src = "./fbimg/ground.png";
var background = new Image();
background.src = "./fbimg/background.png";

var gap = 105+(Math.floor(Math.random()*20));  
var sep = 242+gap;
var xb=10; var yb=150; 
var re =1.5;
var score=0;

function moveup(){
  yb -= 30; 
}

document.addEventListener("click",moveup);

var piperow = [];

piperow[0] = [can.width,0];


function makeframe() {
  cont.drawImage(background,0,0);
  cont.drawImage(ground,0,can.height-ground.height);
  cont.drawImage(bird,xb,yb);
  
  for(var i=0;i<piperow.length;i++){
    cont.drawImage(uppipe,piperow[i][0],piperow[i][1]);
    cont.drawImage(downpipe,piperow[i][0],piperow[i][1]+sep);
    
    piperow[i][0]--;
    
    if(piperow[i][0] == 80){ 
      piperow.push([288,Math.floor(Math.random()*uppipe.height)-uppipe.height]);
    }
  var iscollison = ((xb+bird.width-5)>=piperow[i][0])&&(xb<=(piperow[i][0]+uppipe.width)&&((yb+5<=(piperow[i][1]+uppipe.height))||((yb+bird.height-5)>=(piperow[i][1]+sep))));
  if(iscollison){clearInterval(game);}
   if(piperow[i][0] == 5){score++;}
  }

 
 yb += re;
 cont.fillStyle = "#010";
 cont.font = "20px Courier";
 cont.fillText("Score : "+score,10,492);
 

}

function reload(){location.reload();}

let game = setInterval(makeframe,20);