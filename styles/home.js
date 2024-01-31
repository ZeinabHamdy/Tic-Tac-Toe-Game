var gameOver=0;
function Calc( currentCell){
    var cnt=0 ;

    if(gameOver){
        alert("please reset");
        return ;
    }
    for(var i = 1 ; i <= 9 ; i++){
        var cell = document.getElementById("cell"+i).innerHTML;
        if(cell == "X")
           cnt++;
        else if(cell == "O")
            cnt++;
    }

    if(document.getElementById(currentCell).innerHTML == "X" || document.getElementById(currentCell).innerHTML == "O"){
        alert("Invalid Move") ;
        reset() ; 
        return ;
    };

    if(cnt & 1 ) {
        document.getElementById(currentCell).innerHTML = "O";
    }
    else {
        document.getElementById(currentCell).innerHTML = "X";
    }


    function win(player ){
        //  1 4 7
        //  2 5 8
        //  3 6 9
            if(document.getElementById("cell1").innerHTML == player && document.getElementById("cell2").innerHTML == player && document.getElementById("cell3").innerHTML == player)
                return true;
            if(document.getElementById("cell4").innerHTML == player && document.getElementById("cell5").innerHTML == player && document.getElementById("cell6").innerHTML == player)
                return true;
            if(document.getElementById("cell7").innerHTML == player && document.getElementById("cell8").innerHTML == player && document.getElementById("cell9").innerHTML == player)
                return true;
            if(document.getElementById("cell1").innerHTML == player && document.getElementById("cell4").innerHTML == player && document.getElementById("cell7").innerHTML == player)
                return true;
            if(document.getElementById("cell2").innerHTML == player && document.getElementById("cell5").innerHTML == player && document.getElementById("cell8").innerHTML == player)
                return true;
            if(document.getElementById("cell3").innerHTML == player && document.getElementById("cell6").innerHTML == player && document.getElementById("cell9").innerHTML == player)
                return true;
            if(document.getElementById("cell1").innerHTML == player && document.getElementById("cell5").innerHTML == player && document.getElementById("cell9").innerHTML == player)
                return true;
            if(document.getElementById("cell3").innerHTML == player && document.getElementById("cell5").innerHTML == player && document.getElementById("cell7").innerHTML == player)
                return true;
        
        return false;
    }



    var ans ="";
        if(win("X") && win("O") )
            ans = "Tie";
        else if(win("X"))
            ans = "Player X wins";
        else if(win("O"))
            ans= "Player O wins";
        else if(cnt == 8)
            ans="All lose";

    document.getElementById("score").innerHTML = ans;

    if(ans !=""){
        gameOver=1;
    }
    return;
}

   
function reset(){
    for(var i = 1 ; i <= 9 ; i++)
        document.getElementById("cell"+i).innerHTML = "";
    
    ans="";
    document.getElementById("score").innerHTML = ans;
    gameOver=0;
}