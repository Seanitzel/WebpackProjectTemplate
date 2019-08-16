var player = document.getElementById('player')

var handleSuccess = function (stream) {
    if (window.URL) {
        player.srcObject = stream
    } else {
        player.src = stream
    }
}

navigator.mediaDevices.getUserMedia({audio: true, video: false})
         .then(handleSuccess)

const meyda    = Meyda
const features = ['rms', 'zcr', 'chroma']

let song         = new Audio()
song.controls    = true
song.crossOrigin = 'anonymous'
song.volume      = 1
song.src         = 'https://sean-test-server.herokuapp.com/Piano/FF_C4.mp3'
document.body.appendChild(song)

const context  = new window.AudioContext()
const source   = context.createMediaElementSource(song)
const gainNode = context.createGain()
source.connect(gainNode)
gainNode.connect(context.destination)
gainNode.gain.value = 1


const options = {
    audioContext:        context, // required
    source:              source, // required
    bufferSize:          512, // required
    hopSize:             256, // optional
    windowingFunction:   'hamming', // optional
    featureExtractors: ['rms', 'zcr'],
    callback:            getFeature, // optional callback in which to receive the features for each buffer
}

const analyser = meyda.createMeydaAnalyzer(options)

analyser.start(features)
const data = []
const pre  = document.querySelector('.pre')

function getFeature(features) {
    // features.chroma.forEach((c,i) => {
    //     if (c === 1) {
    //         pre.innerHTML = features.chroma
    //     }
    // })
    pre.innerHTML = features.zcr
    data.push(JSON.stringify(features, null, 2))
    // console.log(features)
}
