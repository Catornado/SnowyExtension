var magicboard = [
    8,1,6,
    3,5,7,
    4,9,2
];//
var board = [
    0,1,2,
    3,4,5,
    6,7,8
];
var playersymbol = 1;
var snowysymbol = 0;
var currentboard = document.querySelectorAll(".cell");
const startbootenx = document.querySelector("#startx");
const startbooteno = document.querySelector("#starto");
const enemyicon = document.querySelector("#snowyhead");
const bubble = document.querySelector("#speechbubble"); 
var gamestarted = false;
var gameend = true;
var winner = 2;
for (let i = 0; i < currentboard.length; i++)
{
    currentboard[i].addEventListener("click", playermoved)
}
startbootenx.addEventListener("click", function(){
    startgame(1);
    winner = 2;
    bubble.style.display = "";
    enemyicon.style.display = "";
    if (gamestarted != true)
    {
        setInterval(function(){checkforwin(currentboard)}, 250);
    }
    gamestarted = true;
});
startbooteno.addEventListener("click", function(){
    startgame(0);
    winner = 2;
    bubble.style.display = "";
    enemyicon.style.display = "";
    if (gamestarted != true)
    {
        setInterval(function(){checkforwin(currentboard)}, 250);
    }
    gamestarted = true;
});
function draw(aparam)
{
    let thing = Array.from(aparam);
    return thing.filter((value) => value != "X" && value != "O");
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
                            winner = 0;
                            if (snowysymbol == winner)
                            {
                                bubble.innerHTML = "yay! victory!";
                            } 
                            else if (playersymbol == winner)
                            {
                                bubble.innerHTML = "that does not compute."
                            }
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
                            winner = 1;
                            if (snowysymbol == winner)
                            {
                                bubble.innerHTML = "yay! victory!";
                            } 
                            else if (playersymbol == winner)
                            {
                                bubble.innerHTML = "that does not compute."
                            }
                            return 1;
                        }   
                    }
                }
            }
        }
    }
    if (draw(boardd).length == 0)
    {
        bubble.innerHTML = "you got lucky."
        gameend = true;
        winner = 3;
        return 1;
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
            bubble.innerHTML = "hmmm...";
            setTimeout(function(){
                setTimeout(function(){playmove()}, 30);
                checkforwin(currentboard);
        },30);
            

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
    if (bestplayinfo.index < 9)
    { 
        if (snowysymbol == 1)
        {
            currentboard[bestplayinfo.index].innerHTML = "X";
        }
        else
        {
            currentboard[bestplayinfo.index].innerHTML = "O";
        }
        if (bestplayinfo.score > 0)
        {
            bubble.innerHTML = "You just made a big mistake."
        }
        let splashes = ["you must realize you are doomed!","I have infinite elo, i have seen the game through.","you cannot win, my depth is infinite.","the possibilities of you winning are infinity to 1.","give up, dude!"];
        let random = Math.round(Math.random() * 4);
        bubble.innerHTML = splashes[random];
    }   
    else
    {
        bubble.innerHTML = "you got lucky."
        gameend = true;
    }
}



//credit to codesweetly's "how minimax works"