



document.addEventListener('DOMContentLoaded',function()
{
    let snowyhead = document.querySelector("#snowy");
    let summonsnowy = document.querySelector("#summon");
    let splash = document.querySelector("#splashmessage");
    let random = 0;
    let splashes = ["what is it?","I'm awake.","you poked?","yes?","just click the buttons below."];
    snowyhead.addEventListener("click", function()
    {
        random = Math.round(Math.random() * 4);
        splash.innerHTML = splashes[random];
    });
    summonsnowy.addEventListener("click", function(){
        if (window.navigator.onLine == false)
        {
            splash.innerHTML = "sorry, I don't feel like doing that right now.";
        }
        else
        {
            splash.innerHTML = "Turning the icon into snowy!";
            chrome.runtime.sendMessage({"string":"summonsnowy();"})
        }

    });
});

