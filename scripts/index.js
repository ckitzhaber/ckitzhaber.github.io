let stopExecution = false;

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
    if(stopExecution) return;
    let currTime = Date.now();
    let qr = document.getElementById('qr');
    qr.innerHTML = ``;

    const qrcode = new QRCode(qr, {
        text: ("redirect.html" + '?time=' + currTime + "&url=" + url),
        width: 256,
        height: 256,
        colorDark : '#000',
        colorLight : '#fff',
        correctLevel : QRCode.CorrectLevel.H
      });

    //this is for testing only
    let link = document.createElement('a')
    link.innerHTML = "link";
    link.setAttribute("href", ("redirect.html" + '?time=' + currTime + "&url=" + url)); //removing my query selectors
    console.log("redirect.html" + '?time=' + currTime + "&url=" + url);
    document.body.appendChild(link);

    document.body.append(document.createElement('br'));

    setTimeout(function() {generateQRCode(url)}, 5000);
}

function stopRefresh()
{
    stopExecution = true;
}


function redirectMessage()
{
    console.log(window.location);
    let url = new URL(window.location); // or construct from window.location
    
    let params = new URLSearchParams(url.search);
    console.log(params.get('time'));
    console.log(params.get('url'));
}

/** use for redirect
    console.log(window.location);
    let url = new URL(window.location); // or construct from window.location
    
    let params = new URLSearchParams(url.search);
    console.log(params.get('time'));
    console.log(params.get('url'));
 */