
function testing()
{
    console.log(window.location);
    let url = new URL(window.location); // or construct from window.location
    
    let params = new URLSearchParams(url.search);
    console.log(params.get('time'));
    console.log(params.get('url'));

    generateQRCode();
}

function generateQRCode()
{
    // let div = document.getElementById('qr');
    const qrcode = new QRCode(document.getElementById('qr'), {
        text: 'http://jindo.dev.naver.com/collie',
        width: 128,
        height: 128,
        colorDark : '#000',
        colorLight : '#fff',
        correctLevel : QRCode.CorrectLevel.H
      });
}