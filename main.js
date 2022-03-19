Navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6bsjeOvTk/', modelReady);


function modelReady() {
classifier.classify(gotResults);
}

function gotResult(error, results) {
console.log('got result')
}