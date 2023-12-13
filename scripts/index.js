function sendURL()
{
    let form = document.getElementById('urlForm');
    let url = form.urlInput.value;
    form.style.display = 'none'; //hides form
    document.getElementById('stopRefresh').style.display = 'block';
    generateQRCode(url);
}



function generateQRCode(url)
{
    let qr = document.getElementById('qr');
    const qrcode = new QRCode(qr, {
        text: url,
        width: 256,
        height: 256,
        colorDark : '#000',
        colorLight : '#fff',
        correctLevel : QRCode.CorrectLevel.H
      });

    //this is for testing only
    let link = document.createElement('a')
    link.innerHTML = "link";
    link.setAttribute("href", 'https://' + url);
    console.log(link);
    document.body.appendChild(link);

}

function stopRefresh()
{

}


/** use for redirect
 console.log(window.location);
    let url = new URL(window.location); // or construct from window.location
    
    let params = new URLSearchParams(url.search);
    console.log(params.get('time'));
    console.log(params.get('url'));
 */