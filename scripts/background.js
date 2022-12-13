var snowy = []; 
var counter = 0;
var injected = 0;  
//chrome.extension.addListener(tabs)
function inject(arg)
{
    let tabbyid;
    //chrome.tabs.getCurrent((tabs) => { tabbyid = tabs.id; console.log(tabs.id) });
    chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
        tabbyid = tabs[0].id; 
        console.log(tabbyid);
        if (arg == "summonsnowy();")
        {
            chrome.scripting.executeScript({
                target: {tabId: tabbyid},
                func: (argg) => {
                    /*if (typeof snowys === "undefined")
                    {
                        var snowys = {};
                    }
                    let snowycount = argg;
                    snowys.push("snowy" + snowycount);
                    eval('var ' + 'snowy' + argg + '= 0' + ';');
                    //len(snowycount)
                    console.log("hellooooo");*/
                    let poo = document.querySelectorAll("link[rel$=icon]");
                    if (poo == null || poo.length == 0)
                    {
                        let headerthing = document.querySelector("head");
                        if (headerthing == null)
                        {
                            document.createElement("head");
                        }
                        let thing = document.createElement("link");
                        thing.setAttribute("rel","icon");
                        thing.setAttribute("href", "https://raw.githubusercontent.com/Catornado/SnowyExtension/main/sysimages/snowy128.ico");
                        document.head.appendChild(thing);
                    }
                    else
                    {
                        for (let i = 0; i <= poo.length; i++)
                        poo[i].setAttribute("href","https://raw.githubusercontent.com/Catornado/SnowyExtension/main/sysimages/snowy128.ico");
                    }
                    
                },
                args: ["counter"],
          
            });
        }
        else if (arg == "createsnowy();")
        {
            if (injected == 0)
            {
                injected = 1;
                chrome.scripting.executeScript({
                    target: {tabId: tabbyid},
                    files: ["/scripts/snowy.js"]
                });
            }
            chrome.scripting.executeScript({
                target: {tabId: tabbyid},
                func: () => {createsnowy();}
            });
        }
    });
        
/*    console.log(tabbyid);
    chrome.scripting.executeScript({
        target: {tabId: tabbyid},
        func: function () {
            var po = 1;
        },
        
    });
*/
    console.log("test");
}


chrome.runtime.onMessage.addListener((message, callback) => {
    if (message.string === "summonsnowy();")
    {
        counter += 1;
        inject(message.string);
    }
    else if (message.string === "createsnowy();")
    {
        if (message.arg1 == "notinjected")
        {
            injected == 0;
            inject(message.string);
        }
        else if (message.arg1 == "injected")
        {
            inject(message.string);
        }

    }

})