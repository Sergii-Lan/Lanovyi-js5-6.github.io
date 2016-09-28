start.addEventListener("click", start_click);
clear.addEventListener("click", stop_click);

var h = '00';
var min = '00';
var sec = '00';
var mil_sec = '000';

timer.innerHTML = h+':'+min+':'+sec;
milsec.innerHTML = mil_sec;

var counter = 0,local = 0, timerId;
var buttonStart;
buttonStart = document.getElementById('start');

function start_click() {
    var classStart = document.getElementsByClassName('start');
    if (buttonStart.className == 'start btn btn-primary') {
        buttonStart.innerHTML = 'pause';
        buttonStart.classList = 'pause btn btn-warning';
        console.log(buttonStart);

        timerId = setInterval(function () {
            counter +=10; //global
            local +=10;
            mil_sec = local;
            if(local < 100) {
                milsec.innerHTML = '0'+local;
            } else {
                milsec.innerHTML = local;
            }
            if(local > 999){
                local = 0;
            }

            sec=Math.floor(counter/1000)%60;
            if (sec<10) {
                sec = "0"+sec;
            }

            min=Math.floor(counter/60000)%60;
            if (min<10) {
                min = "0"+min;
            }

            h=Math.floor(counter/3600000)%24;
            if (h<10) {
                h = "0"+h;
            }
            timer.innerHTML = h+':'+min+':'+sec;

        }, 10);
    } else {
        buttonStart.innerHTML = 'start';
        clearInterval(timerId);
        buttonStart.classList = 'start btn btn-primary';
    }
}

function stop_click() {
        clearInterval(timerId);
        milsec.innerHTML = '000';
        counter = 0;
        buttonStart.classList = 'start btn btn-primary';
        buttonStart.innerHTML = 'start';
        sec = '00';
        min = '00';
        timer.innerHTML = h+':'+min+':'+sec;
    }



