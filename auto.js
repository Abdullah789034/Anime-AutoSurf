


setTimeout(() => {
    var button = document.querySelector('button.is-success');
    if (button) {
        button.click();
        console.log("Button clicked!");
    } else {
        console.error('Button not found');
    }
}, 12000)