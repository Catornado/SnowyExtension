var magicboard = [
    8,1,6,
    3,5,7,
    4,9,2
];//15
function emptyslots(loadedboard)
{
    return loadedboard.filter(function (value) {
        return value != "X" && value != "O";
    });
}
function win(boardd, symbol)//needs work, it only checks for winners with 0 depth instead of 1
{
    for (let i = 0; i < 9; i++)
    {
        for (let j = 0; j < 9; j++)
        {
            for (let k = 0; k < 9; k++)
            {
                if (boardd[i] == "O" && boardd[j] == "O" && board[k] == "O")
                {
                    if (magicboard[i] + magicboard[j] + magicboard[k] == 15)
                    {
                        if (i != j && i != k && j != k)
                        {
                            return 1;
                        }
                       
                    }
                }
                else if (boardd[i] == "X" && boardd[j] == "X" && board[k] == "X")
                {
                    if (magicboard[i] + magicboard[j] + magicboard[k] == 15)
                    {
                        if (i != j && i != k && j != k)
                        {
                            return -1;
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
    let info = [];
    
    let empty = emptyslots(loadedboard);
    for (let i = 0; i < empty.length; i++)
    {
        let currentinfo = {};
        if (win(loadedboard, i) == symbol)
        {
            //blank
        }

    }

    //subtract result from bad guy from 15

//minimax or magic square
}
function playmove(boardstate, alliance)
{
    let bestplay = algorithm(boardstate, alliance);
    return bestplay;
}