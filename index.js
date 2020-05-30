var params = new function() {
    this.smoothingTimeConstant = 0.0;
    this.minDecibels = -60;
    this.maxDecibels = -42;
    this.fftSize = 256;
    this.decSize = function() {
        if (this.fftSize > 16) {
            this.fftSize /= 2;
        }
    }
    this.incSize = function() {
        if (this.fftSize < 16384) {
            this.fftSize *= 2;
        }
    };
    this.color1 = "#00ffa6";
    this.color2 = "#b700ff";
    this.color3 = "#ff0059";
    this.leftBorder = 0.0;
    this.rightBorder = 1.0;
}


var audios = {};
var canvases = {};

handleButtonClick = () => {
    var gui = new dat.GUI();

    var f1 = gui.addFolder('FFT');

    f1.add(params, 'smoothingTimeConstant', 0, 1);
    f1.add(params, 'minDecibels', -100, 0);
    f1.add(params, 'maxDecibels', -100, 0);
    f1.add(params, 'fftSize').listen();
    f1.add(params, 'decSize');
    f1.add(params, 'incSize');

    var f2 = gui.addFolder('Misc');

    f2.add(params, 'leftBorder', 0, 1);
    f2.add(params, 'rightBorder', 0, 1);

    gui.close();

    var matches = document.querySelectorAll("audio");

    matches.forEach(match => {
        match.load();

        var context = new AudioContext();
        var src = context.createMediaElementSource(match);
        var analyser = context.createAnalyser();

        src.connect(analyser);
        analyser.connect(context.destination);

        audios[match.id] = {
            elem: match,
            analyser: analyser
        };
    })

    matches = document.querySelectorAll("canvas");

    matches.forEach(match => {
        var ctx = match.getContext("2d");

        if (match.id === "canvas-7-1") {
            ctx.lineWidth = 4;
            ctx.strokeStyle = params.color3;
        } else {
            ctx.lineWidth = 2;
            ctx.strokeStyle = params.color1;
        };

        ctx.fillStyle = '#06080f';

        ctx.globalCompositeOperation = 'source-over';
        ctx.fillRect(0, 0, match.width, match.height);

        ctx.beginPath();
        ctx.moveTo(0, match.height / 2);
        ctx.lineTo(match.width, match.height / 2);
        ctx.stroke();

        
        canvases[match.id] = {
            elem: match,
            context: ctx
        }
    })

    document.getElementById("welcome").remove();
}

function test(i) {
    var audio = audios[`audio-${i}`];
    var can = canvases[`canvas-${i}`];

    audio.elem.play();
    var analyser = audio.analyser;

    var canvas = can.elem;
    var ctx = can.context;

    analyser.fftSize = params.fftSize;

    var bufferLength = analyser.frequencyBinCount;

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var MIDDLE = canvas.height / 2;
    var MAX = 255;

    var prevPoin = {};

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight, h;
    var x = 0;

    var max = 0;

    

    function renderFrame() {
        if (audio.elem.ended) {
            ctx.globalCompositeOperation = 'source-over';

            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.moveTo(0, can.elem.height / 2);
            ctx.lineTo(can.elem.width, can.elem.height / 2);
            ctx.stroke();
            return;
        }

        requestAnimationFrame(renderFrame);

        analyser.smoothingTimeConstant = params.smoothingTimeConstant;
        analyser.minDecibels = params.minDecibels;
        analyser.maxDecibels = params.maxDecibels;

        analyser.fftSize = params.fftSize;
        bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
        barWidth = (WIDTH /  (params.rightBorder * bufferLength)) * 2.5;

        ctx.globalCompositeOperation = 'source-over';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        x = 0;

        analyser.getByteFrequencyData(dataArray);
        
        ctx.beginPath();
        ctx.moveTo(x, MIDDLE);
        ctx.globalCompositeOperation = 'destination-out';
        
        for (var i = params.leftBorder * bufferLength; i < params.rightBorder * bufferLength; i++) {

            h = dataArray[i];

            if (h > max) max = h;

            h = h / 255 * MIDDLE;

            if (i % 2 == 0)
                barHeight = MIDDLE - h
            else
                barHeight = MIDDLE + h;

            ctx.lineTo(x + barWidth, barHeight);

            x += barWidth;                                                 
        }

        ctx.stroke();
    }

    audio.elem.play();
    renderFrame();

    
};
