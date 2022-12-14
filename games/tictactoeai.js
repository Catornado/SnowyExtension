var magicboard = [
    8,1,6,
    3,5,7,
    4,9,2
];
function emptyslots(loadedboard)
{
    return loadedboard.filter(function (value) {
        return value != "X" && value != "O";
    });
}
function algorithm(loadedboard, symbol)
{
    let info = [];

}
function playmove(boardstate, alliance)
{
    let bestplay = algorithm(boardstate, alliance);
    return bestplay;
}