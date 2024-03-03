
function checkContent(url) {
    if (url.includes('pahe.win')) {
        return true;
    }
    return false;
}



function autoSurf() {
    var links = document.querySelectorAll('a.btn.btn-secondary.btn-block.redirect[rel="nofollow"]');
    for (var i = 0; i < links.length; i++) {
        if (links[i].innerText.trim() === "Continue") {
            var link = links[i].href;
            console.log("Link:", link);
            break;
        }
    }
    if (!link) {
        console.error('Link not found');
    }

}



chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    var url = currentTab.url;
    console.log("Current tab URL:", url);
    document.getElementById('pg').innerText = url;
    if (checkContent(url)) {
        autoSurf();
    }
});





