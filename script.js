
function checkContent(url) {
    if (url.includes('pahe.win')) {
        return true;
    }
    return false;
}



function autoSurf(url) {
    document.getElementById('pg').innerText = "Downloading...";
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            else {
                return response.text();
            }
        })
        .then(html => {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            var linkElement = tempDiv.querySelector('a[href="https://kwik.si/f/gu2IwYKGDNeZ"].btn.btn-secondary.btn-block.redirect[rel="nofollow"]');
            if (linkElement) {
                console.log("Link found:", linkElement.href);
                // Perform actions with the linkElement here
            } else {
                console.error('Link not found');
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });




}



chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    var url = currentTab.url;
    console.log("Current tab URL:", url);
    document.getElementById('pg').innerText = url;
    if (checkContent(url)) {
        autoSurf(url);
    }
});





