const timethingy = new Date();

function movement(snowy)
{
    let thingy = snowy;
    
    setInterval(movement(thingy), 1);
}

function createsnowy()
{
    console.log("working");
    let thing = document.createElement("div");
    let poop = document.querySelector("body");
    if (poop == null)
    {
        document.createElement("body");
    }
    document.body.appendChild(thing);
    let time = timethingy.getTime();
    thing.setAttribute("id", time);
    let snowy = document.createElement("img");
    snowy.setAttribute("src", "https://raw.githubusercontent.com/Catornado/SnowyExtension/main/sysimages/snowy128.png");
    snowy.setAttribute("alt", "replacement for snowy");
    snowy.setAttribute("style", "position: fixed; transform: rotate(0deg); z-index: 9999; left: 0px; bottom: 0px");
    thing.setAttribute("style", "position: fixed");
    thing.appendChild(snowy);
    movement(snowy);
}