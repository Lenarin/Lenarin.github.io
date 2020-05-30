var params = new function() {
    this.smoothingTimeConstant = 0.01;
    this.minDecibels = -50;
    this.maxDecibels = -20;
    this.fftSize = 2048;
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
    this.leftBorder = 0.0;
    this.rightBorder = 1.0;
}

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function processHEX(val) {
    //does the hex contain extra char?
    var hex = (val.length >6)?val.substr(1, val.length - 1):val;
    // is it a six character hex?
    if (hex.length > 3) {
  
      //scrape out the numerics
      var r = hex.substr(0, 2);
      var g = hex.substr(2, 2);
      var b = hex.substr(4, 2);
  
      // if not six character hex,
      // then work as if its a three character hex
    } else {
  
      // just concat the pieces with themselves
      var r = hex.substr(0, 1) + hex.substr(0, 1);
      var g = hex.substr(1, 1) + hex.substr(1, 1);
      var b = hex.substr(2, 1) + hex.substr(2, 1);
  
    }
    // return our clean values
      return [
        parseInt(r, 16),
        parseInt(g, 16),
        parseInt(b, 16)
      ]
  }

var calcGrad = (num) => {
    var colors = [
    
    ];
    
    var stepsInt = num;
    //the percentage representation of the step
    var stepsPerc = 100 / (stepsInt+1);
    
    var val1RGB = processHEX(params.color1);
    var val2RGB = processHEX(params.color2);
    
    // diffs between two values 
    var valClampRGB = [
    val2RGB[0] - val1RGB[0],
    val2RGB[1] - val1RGB[1],
    val2RGB[2] - val1RGB[2]
    ];
    
    // build the color array out with color steps
    for (var i = 0; i < stepsInt; i++) {
        var clampedR = (valClampRGB[0] > 0) 
        ? pad((Math.round(valClampRGB[0] / 100 * (stepsPerc * (i + 1)))).toString(16), 2) 
        : pad((Math.round((val1RGB[0] + (valClampRGB[0]) / 100 * (stepsPerc * (i + 1))))).toString(16), 2);
    
        var clampedG = (valClampRGB[1] > 0) 
        ? pad((Math.round(valClampRGB[1] / 100 * (stepsPerc * (i + 1)))).toString(16), 2) 
        : pad((Math.round((val1RGB[1] + (valClampRGB[1]) / 100 * (stepsPerc * (i + 1))))).toString(16), 2);
    
        var clampedB = (valClampRGB[2] > 0) 
        ? pad((Math.round(valClampRGB[2] / 100 * (stepsPerc * (i + 1)))).toString(16), 2) 
        : pad((Math.round((val1RGB[2] + (valClampRGB[2]) / 100 * (stepsPerc * (i + 1))))).toString(16), 2);
        colors[i] = [
            '#',
            clampedR,
            clampedG,
            clampedB
        ].join('');
    }

    return colors;
}


var audios = {};
var canvases = {};
/*
window.onload = () => {
    var gui = new dat.GUI();

    var f1 = gui.addFolder('FFT');

    f1.add(params, 'smoothingTimeConstant', 0, 1);
    f1.add(params, 'minDecibels', -100, 0);
    f1.add(params, 'maxDecibels', -100, 0);
    f1.add(params, 'fftSize').listen();
    f1.add(params, 'decSize');
    f1.add(params, 'incSize');
    f1.open();

    var f2 = gui.addFolder('Misc');

    f2.add(params, 'leftBorder', 0, 1);
    f2.add(params, 'rightBorder', 0, 1);

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
        
        canvases[match.id] = {
            elem: match,
            context: ctx
        }
    })

}
*/
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

    //var colors = calcGrad(bufferLength);

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

    ctx.lineWidth = 1;
    ctx.strokeStyle = params.color1;

    //var grd=ctx.createLinearGradient(0,0,170,0);
    //grd.addColorStop(0, '#00ffa6');
    //grd.addColorStop(1, '#b700ff');

    ctx.fillStyle = '#06080f';

    function renderFrame() {
        requestAnimationFrame(renderFrame);

        analyser.smoothingTimeConstant = params.smoothingTimeConstant;
        analyser.minDecibels = params.minDecibels;
        analyser.maxDecibels = params.maxDecibels;

        analyser.fftSize = params.fftSize;
        bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
        barWidth = (WIDTH /  (params.rightBorder * bufferLength)) * 2.5;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //ctx.fillRect(0, 0, canvas.width, canvas.height);

        x = 0;

        analyser.getByteFrequencyData(dataArray);
        
        ctx.beginPath();
        ctx.moveTo(x, MIDDLE);
        
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

/*
background: linear-gradient(90deg, #00ffa6, #b700ff, #00ffa6);
*/
