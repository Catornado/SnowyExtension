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
function algorithm(loadedboard, symbol)
{
    let info = [];
    
    let empty = emptyslots(loadedboard);
    for (let i = 0; i < empty.length; i++)
    {
        let currentinfo = {};
    }

    //subtract result from bad guy from 15

//minimax or magic square
}
function playmove(boardstate, alliance)
{
    let bestplay = algorithm(boardstate, alliance);
    return bestplay;
}