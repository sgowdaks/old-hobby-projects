//function start(){
    var computer = 0;
    var player = 0;
   
function eventChange(val){
    ele = val;
    const computerOptions = ["rock", "paper", "sissor"];
    const computerNumber = Math.floor(Math.random()*3);

    if(ele != computerOptions[computerNumber]){
        if(ele === "rock"){
            if(computerOptions[computerNumber] === "sissor"){
                player += 1;
                document.getElementById("two").innerHTML = "yeahhh.... you get a point, computer choose sissor";
            }
            else if(computerOptions[computerNumber] === "paper"){
                computer += 1;
                document.getElementById("two").innerHTML = "Bad luck!! computer choose paper";
            }
        }
        else if(ele === "sissor"){
            if(computerOptions[computerNumber] === "paper"){
                player += 1;
                document.getElementById("two").innerHTML = "yeahhh....  you get a point, computer choose paper";
            }
            else if(computerOptions[computerNumber] === "rock"){
                computer += 1;
                document.getElementById("two").innerHTML = "Bad luck!! computer choose rock";
            }
        }
        else if(ele === "paper"){
            if(computerOptions[computerNumber] === "rock"){
                player += 1;
                document.getElementById("two").innerHTML = "yeahhh....  you get a point, computer choose rock";
            }
            else if(computerOptions[computerNumber] === "sissor"){
                computer += 1;
                document.getElementById("two").innerHTML = "Bad luck!!computer choose sissor";
            }
        }
        
    }else
    {

        document.getElementById("two").innerHTML = "Opps!! it was a tie";
    }
    document.getElementById("p1").value = player
    document.getElementById("c1").value = computer
     
}
function winner(){
    if(player>computer){

        document.getElementById("one").innerHTML = "player wins";
    }else{
    
        document.getElementById("one").innerHTML = "computer  wins";
    }
    computer = 0;
    player = 0;
}

