function isImage(i) {
    return i instanceof HTMLImageElement;
}

function isVideo(i) {
    return i instanceof HTMLVideoElement;
}


function select_photo() {
    document.getElementById('photo-select').style.color = 'rgb(105, 105, 105)';
    document.getElementById('video-select').style.color = 'white';

    const elements = document.getElementsByTagName('*');
    for (const element of elements) {
        if (isVideo(element)) {
            element.style.display = 'none'
        }

        if (isImage(element)) {
            element.style.display = 'inherit' 
        }
    }
    console.log(count);
}

function select_video() {
    document.getElementById('video-select').style.color = 'rgb(105, 105, 105)';
    document.getElementById('photo-select').style.color = 'white';

    const elements = document.getElementsByTagName('*');
    for (const element of elements) {
        if (isImage(element)) {
            element.style.display = 'none'
        }

        if (isVideo(element)) {
            element.style.display = 'inherit' 
        }
    }
}


const mybutton = document.getElementById("btn-back-to-top");

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function send(){
    subject = document.getElementById('subjectInput').value;
    message = document.getElementById('messageInput').value;
    window.open(`mailto:terceirobapitaa@gmail.com?subject=${subject}&body=${message}`);
}   

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}


window.addEventListener('load', function () {
    const elements = document.getElementsByTagName('*');
    const text = document.getElementById('count');
    let count = 0;
    for (const element of elements) {
        if (isVideo(element) || isImage(element)) {
            count++;
        }
    }
   text.innerText = 'Total: ' + count;
})