player=1

scoreX=0;
scoreY=0;


function f1(){
if (player===1){
document.getElementById("b1").value="X";
document.getElementById("b1").disabled=true;
player=0;
}

else {
    document.getElementById("b1").value="O";
document.getElementById("b1").disabled=true;
player=1;
}
}

function f2(){
if (player===1){
    document.getElementById("b2").value="X";
    document.getElementById("b2").disabled=true;
    player=0;
    }
    
    else {
        document.getElementById("b2").value="O";
    document.getElementById("b2").disabled=true;
    player=1;
    }
}

function f3(){
if (player===1){
    document.getElementById("b3").value="X";
    document.getElementById("b3").disabled=true;
    player=0;
    }
    
    else {
        document.getElementById("b3").value="O";
    document.getElementById("b3").disabled=true;
    player=1;
    }
}

function f4(){
if (player===1){
    document.getElementById("b4").value="X";
    document.getElementById("b4").disabled=true;
    player=0;
    }
    
    else {
        document.getElementById("b4").value="O";
    document.getElementById("b4").disabled=true;
    player=1;
    }
}

function f5(){
if (player===1){
document.getElementById("b5").value="X";
document.getElementById("b5").disabled=true;
player=0;
}

else {
document.getElementById("b5").value="O";
document.getElementById("b5").disabled=true;
player=1;
}
}
function f6(){
if (player===1){
document.getElementById("b6").value="X";
document.getElementById("b6").disabled=true;
player=0;
}

else {
    document.getElementById("b6").value="O";
document.getElementById("b6").disabled=true;
player=1;
}
}
function f7(){
if (player===1){
    document.getElementById("b7").value="X";
    document.getElementById("b7").disabled=true;
    player=0;
    }
    
    else {
        document.getElementById("b7").value="O";
    document.getElementById("b7").disabled=true;
    player=1;
    }
}

function f8(){
if (player===1){
    document.getElementById("b8").value="X";
    document.getElementById("b8").disabled=true;
    player=0;
    }
    
    else {
        document.getElementById("b8").value="O";
    document.getElementById("b8").disabled=true;
    player=1;
    }
}

    function f9(){
if (player===1){
    document.getElementById("b9").value="X";
    document.getElementById("b9").disabled=true;
    player=0;
    }
    
    else {
        document.getElementById("b9").value="O";
    document.getElementById("b9").disabled=true;
    player=1;
    }
}

function play(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    document.getElementById('p1').innerHTML="player X score:"+ scoreX;
           
    document.getElementById('p2').innerHTML="player O score:"+ scoreY;

           
      

   if((b1==="X")&&(b2==="X")&&(b3==="X")){
document.getElementById("b4").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b6").disabled=true;
document.getElementById("b7").disabled=true;
document.getElementById("b8").disabled=true;
document.getElementById("b9").disabled=true;
//window.alert("player X won");
document.getElementById('msg').innerHTML = "Player X won";
scoreX=scoreX+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
           
document.getElementById('p2').innerHTML="player O score:"+ scoreY;
    
           

    

   }

else if((b4==="X")&&(b5==="X")&&(b6==="X")){
document.getElementById("b1").disabled=true;
document.getElementById("b2").disabled=true;
document.getElementById("b3").disabled=true;
document.getElementById("b7").disabled=true;
document.getElementById("b8").disabled=true;
document.getElementById("b9").disabled=true;
document.getElementById('msg')
            .innerHTML = "Player X won";


scoreX=scoreX+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;
        
            //d//ocument.getElementById('p1')
           /// .innerHTML = "player X score:"+score;

           //; document.getElementById('p2')
            //.innerHTML = "player O score:"+score;     

    }

else if((b7==="X")&&(b8==="X")&&(b9==="X")){
document.getElementById("b1").disabled=true;
document.getElementById("b2").disabled=true;
document.getElementById("b3").disabled=true;
document.getElementById("b4").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b6").disabled=true;
document.getElementById('msg')
            .innerHTML = "Player X won";
            scoreX=scoreX+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;

    }   
    
else if((b1==="X")&&(b4==="X")&&(b7==="X")){
document.getElementById("b2").disabled=true;
document.getElementById("b3").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b6").disabled=true;
document.getElementById("b8").disabled=true;
document.getElementById("b9").disabled=true;
document.getElementById('msg')
            .innerHTML = "Player X won";
            scoreX=scoreX+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;

    }   
   
else if((b2==="X")&&(b5==="X")&&(b8==="X")){
    document.getElementById("b1").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b9").disabled=true;
    document.getElementById('msg')
            .innerHTML = "Player X won";
            scoreX=scoreX+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;
    
        }    
      
     
else if((b3==="X")&&(b6==="X")&&(b9==="X")){
    document.getElementById("b2").disabled=true;
    document.getElementById("b1").disabled=true;
    document.getElementById("b5").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b9").disabled=true;
    document.getElementById('msg')
            .innerHTML = "Player X won";
            scoreX=scoreX+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;
    
        }   
    
else if((b1==="X")&&(b5==="X")&&(b9==="X")){
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById('msg')
            .innerHTML = "Player X won";
            scoreX=scoreX+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;
    
        }
else if((b3==="X")&&(b5==="X")&&(b7==="X")){
    document.getElementById("b2").disabled=true;
    document.getElementById("b1").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b9").disabled=true;
    document.getElementById('msg')
            .innerHTML = "Player X won";
            scoreX=scoreX+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;
    
        }  


else if((b1==="O")&&(b2==="O")&&(b3==="O")){
document.getElementById("b4").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b6").disabled=true;
document.getElementById("b7").disabled=true;
document.getElementById("b8").disabled=true;
document.getElementById("b9").disabled=true;
document.getElementById('msg')
            .innerHTML = "Player O won";
            scoreY=scoreY+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;


}

else if((b4==="O")&&(b5==="O")&&(b6==="O")){
document.getElementById("b1").disabled=true;
document.getElementById("b2").disabled=true;
document.getElementById("b3").disabled=true;
document.getElementById("b7").disabled=true;
document.getElementById("b8").disabled=true;
document.getElementById("b9").disabled=true;
document.getElementById('msg')
            .innerHTML = "Player O won";
            scoreY=scoreY+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;

}

else if((b7==="O")&&(b8==="O")&&(b9==="O")){
document.getElementById("b1").disabled=true;
document.getElementById("b2").disabled=true;
document.getElementById("b3").disabled=true;
document.getElementById("b4").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b6").disabled=true;
document.getElementById('msg')
            .innerHTML = "Player O won";
            scoreY=scoreY+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;

    }   

else if((b1==="O")&&(b4==="O")&&(b7==="O")){
document.getElementById("b2").disabled=true;
document.getElementById("b3").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b6").disabled=true;
document.getElementById("b8").disabled=true;
document.getElementById("b9").disabled=true;
document.getElementById('msg')
            .innerHTML = "Player O won";
            scoreY=scoreY+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;

}   

else if((b2==="O")&&(b5==="O")&&(b8==="O")){
    document.getElementById("b1").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b9").disabled=true;
    document.getElementById('msg')
            .innerHTML = "Player O won";
            scoreY=scoreY+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;
    
        }    


else if((b3==="O")&&(b6==="O")&&(b9==="O")){
document.getElementById("b2").disabled=true;
document.getElementById("b1").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b7").disabled=true;
document.getElementById("b4").disabled=true;
document.getElementById("b9").disabled=true;
document.getElementById('msg')
            .innerHTML = "Player O won";
            scoreY=scoreY+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;

    }   

else if((b1==="O")&&(b5==="O")&&(b9==="O")){
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById('msg')
            .innerHTML = "Player O won";
            scoreY=scoreY+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;
    
        }
else if((b3==="O")&&(b5==="O")&&(b7==="O")){
    document.getElementById("b2").disabled=true;
    document.getElementById("b1").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b9").disabled=true;
    document.getElementById('msg')
            .innerHTML = "Player O won";
            scoreY=scoreY+1;
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;
    
        }   
    
else if((b1==="X" || b1==="O") && (b2==="X" || b2==="O") && (b3==="X" || b3==="O") && (b4==="X" || b4==="O") && (b5==="X" || b5==="O") && (b6==="X" || b6==="O") && (b7==="X" || b7==="O") && (b8==="X" || b8==="O") && (b9==="X" || b9==="O")){
    document.getElementById('msg')
            .innerHTML = "Tie";
document.getElementById('p1').innerHTML="player X score:"+ scoreX;
            
document.getElementById('p2').innerHTML="player O score:"+ scoreY;
}
else {}
if(scoreX ===5){
    document.getElementById('msg')
    .innerHTML = "Player X won the game";  
    document.getElementById("b1").disabled=true;
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b5").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b9").disabled=true;
    document.getElementById("reset").disabled=true;
}
if(scoreY ===5){
    document.getElementById('msg')
    .innerHTML = "Player O won the game";  
    document.getElementById("b1").disabled=true;
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b5").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b9").disabled=true;
    document.getElementById("reset").disabled=true;
}


}

function reset_fun(){
    //location.reload();
    document.getElementById("b1").value="";
    document.getElementById("b2").value="";
    document.getElementById("b3").value="";
    document.getElementById("b4").value="";
    document.getElementById("b5").value="";
    document.getElementById("b6").value="";
    document.getElementById("b7").value="";
    document.getElementById("b8").value="";
    document.getElementById("b9").value="";
    document.getElementById("b1").disabled=false;
    document.getElementById("b2").disabled=false;
    document.getElementById("b3").disabled=false;
    document.getElementById("b4").disabled=false;
    document.getElementById("b5").disabled=false;
    document.getElementById("b6").disabled=false;
    document.getElementById("b7").disabled=false;
    document.getElementById("b8").disabled=false;
    document.getElementById("b9").disabled=false;
    player=1;
    document.getElementById("msg").innerHTML="";

}
