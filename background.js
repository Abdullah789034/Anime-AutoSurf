chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    var url = currentTab.url;
    console.log("Current tab URL:", url);
    if (checkContent(url)) {
        document.getElementById('pg0').innerText = '';
        document.getElementById('pg').innerText = 'Processing';
        autoSurf(url);
    }
});


chrome.tabs.executeScript({
    code: `
        var linkElement = document.querySelector('a.btn.btn-secondary.btn-block.redirect');
        if (linkElement) {
            linkElement.click();
            console.log("Link clicked:", linkElement.href);
        } else {
            console.error('Link not found');
        }
    `
});
