
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
            setInterval(()=>{
                var linkElement = document.querySelector('a.btn.btn-secondary.btn-block.redirect');
            if (linkElement) {
                linkElement.click();
                console.log("Link clicked:", linkElement.href);
            } else {
                console.error('Link not found');
            }
            },6000);
            
            `
})

setTimeout(() => {
    chrome.tabs.executeScript({
        code: `
                var button = document.querySelector('button.is-success');
                if (button) {
                    button.click();
                    console.log("Button clicked!");
                } else {
                    console.error('Button not found');
                }
            `
    });
}, 12000)

setTimeout(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.remove(tabs[0].id);
    });
}, 20000)





