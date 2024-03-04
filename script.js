
function checkContent(url) {
    if (url.includes('pahe.win')) {
        return true;
    }
    return false;
}



function autoSurf(url) {
    console.log(url);
}

function changeN(name) {
    if (name == 'Getting Link') {
        document.getElementById('pg').innerText = name;
    }
    else if (name == 'Dowloading') {
        document.getElementById('pg').innerText = name;
    }

}







