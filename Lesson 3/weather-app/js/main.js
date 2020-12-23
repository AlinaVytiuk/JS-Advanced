var recordButton = document.querySelector('.speech-recognition');

recordButton.addEventListener('click', function () {
    recognition.start();
});

recognition.addEventListener('start', function(event) {
    recordButton.classList.add('recording');
});

recognition.addEventListener('end', function(event) {
    recordButton.classList.remove('recording');
});