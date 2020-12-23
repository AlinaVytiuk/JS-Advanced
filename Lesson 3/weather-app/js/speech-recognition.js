window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;

var locationCity = document.querySelector('.location__city');
var redordingText = '';

recognition.addEventListener('result', function (event) {
    recordingText = Array
        .from(event.results)
        .map(function (result) {
            return result[0];
        })
        .map(function (result) {
            return result.transcript;
        })

    if (event.results[0].isFinal) {
        locationCity.innerText = recordingText;
        getWeatherData(recordingText);

        recognition.stop();
    }
})