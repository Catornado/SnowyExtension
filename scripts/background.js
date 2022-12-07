var snowy = []; 
var counter = 0;  
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
                func: () => {
                    if (typeof snowys === "undefined")
                    {
                        var snowys = [];
                        var snowycount = 0;
                    }
                    snowys.push("snowy" + snowycount);
                    snowycount += 1;
                    console.log("hellooooo");
                },
          
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
        inject(message.string);
    }

})