var board = [
    "a8","b8","c8","d8","e8","f8","g8","h8",
    "a7","b7","c7","d7","e7","f7","g7","h7",
    "a6","b6","c6","d6","e6","f6","g6","h6",
    "a5","b5","c5","d5","e5","f5","g5","h5",
    "a4","b4","c4","d4","e4","f4","g4","h4",
    "a3","b3","c3","d3","e3","f3","g3","h3",
    "a2","b2","c2","d2","e2","f2","g2","h2",
    "a1","b1","c1","d1","e1","f1","g1","h1"
];
var wqueen = 84;
var wking = 85;
var bking = 15;
var bqueen = 14;
var wbishop1 = 83;
var wbishop2 = 86;
var wnight1 = 82;
var wnight2 = 87;
var wrook1 = 81;
var wrook2 = 88;
var wpawn1 = "p71";
var wpawn2 = "p72";
var wpawn3 = "p73";
var wpawn4 = "p74";
var wpawn5 = "p75";
var wpawn6 = "p76";
var wpawn7 = "p77";
var wpawn8 = "p78";
var bbishop1 = 13;
var bbishop2 = 16;
var bnight1 = 12;
var bnight2 = 17;
var brook1 = 11;
var brook2 = 18;
var bpawn1 = "p21";
var bpawn2 = "p22";
var bpawn3 = "p23";
var bpawn4 = "p24";
var bpawn5 = "p25";
var bpawn6 = "p26";
var bpawn7 = "p27";
var bpawn8 = "p28";
var playersymbol = 1;
var snowysymbol = 0;
var currentboard = document.querySelectorAll(".cell");
const startbootenx = document.querySelector("#startx");
const startbooteno = document.querySelector("#starto");
var gameend = true;
var winner = 2;
for (let i = 0; i < currentboard.length; i++)
{
    currentboard[i].addEventListener("click", playermoved)
}
startbootenx.addEventListener("click", function(){startgame(1)});
startbooteno.addEventListener("click", function(){startgame(0)});
function check(boardd)
{
    if (boardd)
    {

    }
}
function checkforwin(boardd)//0 is o and 1 is x
{
    for (let i = 0; i < 9; i++)
    {
        for (let j = 0; j < 9; j++)
        {
            for (let k = 0; k < 9; k++)
            {
                if (boardd[i].innerHTML == "O" && boardd[j].innerHTML == "O" && boardd[k].innerHTML == "O")
                {
                    if (magicboard[i] + magicboard[j] + magicboard[k] == 15)
                    {
                        if (i != j && i != k && j != k)
                        {
                            gameend = true;
                            return 1;
                        }
                        
                    }
                }
                else if (boardd[i].innerHTML == "X" && boardd[j].innerHTML == "X" && boardd[k].innerHTML == "X")
                {
                    if (magicboard[i] + magicboard[j] + magicboard[k] == 15)
                    {
                        if (i != j && i != k && j != k)
                        {
                            gameend = true;
                            return 1;
                        }   
                    }
                }
            }
        }
    }
    return 0;
}
function playermoved()
{
    if (!this.innerHTML && gameend == false)
    {
        if (playersymbol == 0)
        {
            this.innerHTML = "O";
        }
        else
        {
            this.innerHTML = "X";
        }
        checkforwin(currentboard);
        if (gameend != true)
        {
            playmove();
            checkforwin(currentboard);
        } 
    }
}
function playgame() 
{
    playmove();
    if (win(currentboard, 0) == 1)
    {//o wins
        gameend = true;
        winner = 0;
    }
    else if (win(currentboard, 1) == 1)
    {//x wins
        gameend = true;
        winner = 1;
    }

}
function startgame(player)
{
    gameend = false;
    winner = 2;
    playersymbol = player;
    if (player == 1)
    {
        snowysymbol = 0;
    } 
    else
    {
        snowysymbol = 1;
    }
    for (let i = 0; i < currentboard.length; i++)
    {
        currentboard[i].innerHTML = "";
    }
}
function playmove() {
    let theboard = [];
    for (let i = 0; i < currentboard.length; i++)
    {
        if (currentboard[i].innerHTML != "")
        {
            theboard.push(currentboard[i].innerHTML);
        }
        else
        {
            theboard.push(i);
        }
    }
    function emptyslots(loadedboard)
    {
        return loadedboard.filter((value) => value != "X" && value != "O");
    }
    function win(boardd, team)//0 is o and 1 is x
    {
        for (let i = 0; i < 9; i++)
        {
            for (let j = 0; j < 9; j++)
            {
                for (let k = 0; k < 9; k++)
                {
                    if (team == 0 && boardd[i] == "O" && boardd[j] == "O" && boardd[k] == "O")
                    {
                        if (magicboard[i] + magicboard[j] + magicboard[k] == 15)
                        {
                            if (i != j && i != k && j != k)
                            {
                                return 1;
                            }
                            
                        }
                    }
                    else if (team == 1 && boardd[i] == "X" && boardd[j] == "X" && boardd[k] == "X")
                    {
                        if (magicboard[i] + magicboard[j] + magicboard[k] == 15)
                        {
                            if (i != j && i != k && j != k)
                            {
                                return 1;
                            }   
                        }
                    }
                }
            }
        }
        return 0;
    }
    function algorithm(loadedboard, symbol)
    {

        let empty = emptyslots(loadedboard);
        if (win(loadedboard, playersymbol) == 1)
        {
            //blank
            return {score: -1};
        }
        else if (win(loadedboard,snowysymbol) == 1)
        {
            return {score: 1};
        }
        else if (empty.length == 0)
        {
            return {score: 0};
        }
        let info = [];
        for (let i = 0; i < empty.length; i++)
        {
            let currentinfo = {};
            currentinfo.index = loadedboard[empty[i]];
            if (symbol == 1)
            {
                loadedboard[empty[i]] = "X";
            }
            else
            {
                loadedboard[empty[i]] = "O";
            }
            if (symbol == snowysymbol)
            {
                let result = algorithm(loadedboard, playersymbol);
                currentinfo.score = result.score;
            }
            else
            {
                let result = algorithm(loadedboard, snowysymbol);
                currentinfo.score = result.score;
            }
            loadedboard[empty[i]] = currentinfo.index;
            info.push(currentinfo);
        }
        //get best score from banks
        let bestplay = null;
        if (symbol == snowysymbol)
        {
            let tempbest = -222;
            for (let i = 0; i < info.length; i++)
            {
                if (info[i].score > tempbest)
                {
                    tempbest = info[i].score;
                    bestplay = i;
                }
            }
        }
        else
        {
            let tempbest = 222;
            for (let i = 0; i < info.length; i++)
            {
                if (info[i].score < tempbest)
                {
                    tempbest = info[i].score;
                    bestplay = i;
                }
            }
        }
        return info[bestplay];
        //subtract result from bad guy from 15
    //minimax or magic square
    }
    var bestplayinfo = algorithm(theboard, snowysymbol);
    if (snowysymbol == 1)
    {
        currentboard[bestplayinfo.index].innerHTML = "X";
    }
    else
    {
        currentboard[bestplayinfo.index].innerHTML = "O";
    }
    
}



//credit to codesweetly's "how minimax works"