var url;

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    url = currentTab.url;
    console.log("Current tab URL:", url);
    document.getElementById('pg').innerText = url;
});


console.log(url);



function checkContent(url) {
    if (url.includes('pahe.win')) {
        return true;
    }
    return false;
}



function autoSurf(url) {
    console.log('ok');
}


