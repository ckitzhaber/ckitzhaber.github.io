let duration = 5000;
let stopExecution = false;


function sendURL()
{
    let form = document.getElementById('urlForm');
    let url = form.urlInput.value;
    // duration = form.durationInput.value;
    // console.log(duration);

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
        text: ("ckitzhaber.github.io/redirect.html" + '?time=' + currTime + "&url=" + url),
        width: 256,
        height: 256,
        colorDark : '#000',
        colorLight : '#fff',
        correctLevel : QRCode.CorrectLevel.H
      });

    //this is for testing only
    // let link = document.createElement('a')
    // link.innerHTML = "link";
    // link.setAttribute("href", ("redirect.html" + '?time=' + currTime + "&url=" + url)); //removing my query selectors
    // console.log("redirect.html" + '?time=' + currTime + "&url=" + url);
    // document.body.appendChild(link);
    // document.body.append(document.createElement('br'));


    setTimeout(function() {generateQRCode(url)}, duration);
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
    let time = parseInt(params.get('time'));
    let redirectURL = params.get('url');
    let currTime = Date.now();

    console.log(params.get('time'));
    console.log(params.get('url'));

    console.log("currTime: " + currTime + " check time: " + (time + duration*2));

    if(currTime < (time + duration*2))
    {
        location.replace(redirectURL);
    }
    else
    {
        let errorMessage = document.createElement('h2')
        errorMessage.innerHTML = "Invalid Code";
        document.body.appendChild(errorMessage);
    }
}

/** use for redirect
    console.log(window.location);
    let url = new URL(window.location); // or construct from window.location
    
    let params = new URLSearchParams(url.search);
    console.log(params.get('time'));
    console.log(params.get('url'));
 */