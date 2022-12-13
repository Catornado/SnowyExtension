const timethingy = new Date();

//function movement(asnowy, direction)
// {
//     let newdirection = direction;
//     if (direction == "right")
//     {
//             //thingy.style
//         asnowy.style.left += 1;
//         if (asnowy.style.left >= window.innerWidth)
//         {
//             newdirection = "left";
//         }                
//      }
//     if (direction == "left")
//     {
//         asnowy.style.left -= 1;
//         if (asnowy.style.left < 1)
//         {
//             newdirection = "right";
//         }        
//     }
//         setTimeout(movement(asnowy, newdirection), 200);
//}

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
    snowy.setAttribute("style", "position: fixed; transform: rotate(0deg); z-index: 9999; left: 0; bottom: 0");
    thing.setAttribute("style", "position: fixed");
    thing.appendChild(snowy);
    //movement(snowy, "right");
}
