function openWindow() {
    // Click history button
    document.querySelector("#root > div.s1o3yrjt.page-max-width-wrap.small-screen > div.game-data > div.left-data > div.latest > div > div.tabs-scroll > div > button:nth-child(2)").click();
    
    var newWindow = window.open('https://bcgraph.netlify.app','','width=400,height=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,scrollbars=no,fullscreen=no,resizable=no,location=no,directories=no,status=yes');  
    
    var prevHash = '';
    setInterval(() => {
        var latestHash = document.querySelector("#root > div.s1o3yrjt.page-max-width-wrap.small-screen > div.game-data > div.left-data > div.latest > div > div.tabs-view > div > div.h4j5hip > table > tbody > tr:nth-child(1)");

        if (latestHash != prevHash) {
            prevHash = latestHash;
            newWindow.postMessage({ hash: latestHash }, '*');
        }
    }, 2000);
}

function init() {
    const graphButton = document.createElement('button');
    graphButton.appendChild(document.createTextNode('Analysis Graph'));

    graphButton.onclick = function() {
        openWindow();
    }

    const box = document.querySelector("#root > div.s1o3yrjt.page-max-width-wrap.small-screen > div.t1tuhu22");
    box.appendChild(graphButton);
}

setTimeout(() => {
    init();
}, 3000);
