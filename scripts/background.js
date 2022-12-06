var snowy = []; 
var counter = 0;   
function summonsnowy()
{
    let tabbyid;
    let queryOptions = { active: true, lastFocusedWindow: true };
    let promise = chrome.tabs.query(queryOptions).then(function(value){
        chrome.scripting.executeScript({
            target: {
                tabId: tabs[0].id,
            },
            func: () => {
                var po = 1;
            }
        });
    });

    console.log("test");
}
chrome.runtime.onMessage.addListener((message, callback) => {
    if (message.string === "summonsnowy();")
    {
        summonsnowy();
        console.log("test");
    }

})