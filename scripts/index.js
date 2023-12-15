let duration = 10000;
let stopExecution = false;
// let redirectLink = "./redirect.html";
let redirectLink = "ckitzhaber.github.io/redirect.html";


function sendURL()
{
    let form = document.getElementById('urlForm');
    let url = form.urlInput.value;
    form.style.display = 'none'; //hides form
    document.getElementById('stopRefresh').style.display = 'block'; //unhides stop button
    generateQRCode(url);
}


function generateQRCode(url)
{
    if(stopExecution) location.reload();
    let currTime = Date.now();
    let qr = document.getElementById('qr');
    qr.innerHTML = ``;

    const qrcode = new QRCode(qr, {
        text: (redirectLink + '?time=' + currTime + "&url=" + url),
        width: 256,
        height: 256,
        colorDark : '#000',
        colorLight : '#fff',
        correctLevel : QRCode.CorrectLevel.H
      });
    setTimeout(function() {generateQRCode(url)}, duration);
}

function stopRefresh()
{
    stopExecution = true;
}


function redirectMessage()
{
    let url = new URL(window.location);    
    let params = new URLSearchParams(url.search);
    let time = parseInt(params.get('time'));
    let redirectURL = params.get('url');
    let currTime = Date.now();

    if(currTime < (time + duration*2))
    {
        try{
            const url = new URL(string);
            location.replace(redirectURL);
        }
        catch (err){location.replace("https://" + redirectURL)}
    }
    else
    {
        let errorMessage = document.createElement('h2')
        errorMessage.innerHTML = "Invalid Code";
        document.body.appendChild(errorMessage);
    }
}

/*
    this is for testing only
    let link = document.createElement('a')
    link.innerHTML = "link";
    link.setAttribute("href", (redirectLink + '?time=' + currTime + "&url=" + url)); //removing my query selectors
    console.log("redirect.html" + '?time=' + currTime + "&url=" + url);
    document.body.appendChild(link);
    document.body.append(document.createElement('br'));

*/