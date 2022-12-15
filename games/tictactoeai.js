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
    return 0;
}
function algorithm(loadedboard, symbol)
{
    let info = [];
    let empty = emptyslots(loadedboard);
    if (win(loadedboard, playersymbol) == 1)
    {
        //blank
        return {score: -1};
    }
    else if (win(loadedboard,snowysymbol) == 1)
    {
        return {score: -1};
    }
    else if (empty.length == 0)
    {
        return {score: 0};
    }
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
        boardstate[empty[i]] = currentinfo.index;
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
var bestplayinfo = minimax(board, snowysymbol);
function startgame(player)
{
    playersymbol = player;
    if (player == 1)
    {
        snowysymbol = 0;
    } 
    else
    {
        snowysymbol = 1;
    }
}