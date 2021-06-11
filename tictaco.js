player=1


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
      

   if((b1==="X")&&(b2==="X")&&(b3==="X")){
document.getElementById("b4").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b6").disabled=true;
document.getElementById("b7").disabled=true;
document.getElementById("b8").disabled=true;
document.getElementById("b9").disabled=true;
//window.alert("player X won");
document.getElementById('msg')
            .innerHTML = "Player X won";

   }

if((b4==="X")&&(b5==="X")&&(b6==="X")){
document.getElementById("b1").disabled=true;
document.getElementById("b2").disabled=true;
document.getElementById("b3").disabled=true;
document.getElementById("b7").disabled=true;
document.getElementById("b8").disabled=true;
document.getElementById("b9").disabled=true;
window.alert("player X won");

    }

if((b7==="X")&&(b8==="X")&&(b9==="X")){
document.getElementById("b1").disabled=true;
document.getElementById("b2").disabled=true;
document.getElementById("b3").disabled=true;
document.getElementById("b4").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b6").disabled=true;
window.alert("player X won");

    }   
    
if((b1==="X")&&(b4==="X")&&(b7==="X")){
document.getElementById("b2").disabled=true;
document.getElementById("b3").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b6").disabled=true;
document.getElementById("b8").disabled=true;
document.getElementById("b9").disabled=true;
window.alert("player X won");

    }   
   
if((b2==="X")&&(b5==="X")&&(b8==="X")){
    document.getElementById("b1").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b9").disabled=true;
    window.alert("player X won");
    
        }    
      
     
if((b3==="X")&&(b6==="X")&&(b9==="X")){
    document.getElementById("b2").disabled=true;
    document.getElementById("b1").disabled=true;
    document.getElementById("b5").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b9").disabled=true;
    window.alert("player X won");
    
        }   
    
if((b1==="X")&&(b5==="X")&&(b9==="X")){
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b7").disabled=true;
    window.alert("player X won");
    
        }
if((b3==="X")&&(b5==="X")&&(b7==="X")){
    document.getElementById("b2").disabled=true;
    document.getElementById("b1").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b9").disabled=true;
    window.alert("player X won");
    
        }  


if((b1==="O")&&(b2==="O")&&(b3==="O")){
document.getElementById("b4").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b6").disabled=true;
document.getElementById("b7").disabled=true;
document.getElementById("b8").disabled=true;
document.getElementById("b9").disabled=true;
window.alert("player O won");

}

if((b4==="O")&&(b5==="O")&&(b6==="O")){
document.getElementById("b1").disabled=true;
document.getElementById("b2").disabled=true;
document.getElementById("b3").disabled=true;
document.getElementById("b7").disabled=true;
document.getElementById("b8").disabled=true;
document.getElementById("b9").disabled=true;
window.alert("player O won");

}

if((b7==="O")&&(b8==="O")&&(b9==="O")){
document.getElementById("b1").disabled=true;
document.getElementById("b2").disabled=true;
document.getElementById("b3").disabled=true;
document.getElementById("b4").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b6").disabled=true;
window.alert("player O won");

    }   

if((b1==="O")&&(b4==="O")&&(b7==="O")){
document.getElementById("b2").disabled=true;
document.getElementById("b3").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b6").disabled=true;
document.getElementById("b8").disabled=true;
document.getElementById("b9").disabled=true;
window.alert("player O won");

}   

if((b2==="O")&&(b5==="O")&&(b8==="O")){
    document.getElementById("b1").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b7").disabled=true;
    document.getElementById("b9").disabled=true;
    window.alert("player O won");
    
        }    


if((b3==="O")&&(b6==="O")&&(b9==="O")){
document.getElementById("b2").disabled=true;
document.getElementById("b1").disabled=true;
document.getElementById("b5").disabled=true;
document.getElementById("b7").disabled=true;
document.getElementById("b4").disabled=true;
document.getElementById("b9").disabled=true;
window.alert("player O won");

    }   

if((b1==="O")&&(b5==="O")&&(b9==="O")){
    document.getElementById("b2").disabled=true;
    document.getElementById("b3").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b7").disabled=true;
    window.alert("player O won");
    
        }
if((b3==="O")&&(b5==="O")&&(b7==="O")){
    document.getElementById("b2").disabled=true;
    document.getElementById("b1").disabled=true;
    document.getElementById("b4").disabled=true;
    document.getElementById("b6").disabled=true;
    document.getElementById("b8").disabled=true;
    document.getElementById("b9").disabled=true;
    window.alert("player O won");
    
        }                            

}
