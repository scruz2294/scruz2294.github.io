  var msg = new SpeechSynthesisUtterance('Hello World!');
  var recognition = new webkitSpeechRecognition();

  var final_transcript = '';
  var recognizing = false;

  recognition.continuous = true;
  recognition.interimResults = true;
  msg.lang = 'en-GB';

  recognition.onstart = function() {
    recognizing = true;
  }

  recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    final_span.innerHTML = final_transcript;
    interim_span.innerHTML = interim_transcript;
  }

  recognition.onend = function() {
    recognizing = false;
  }

  startRecord = function(event) {
    if(recognizing) {
      recognition.stop();
      return;
    } else  {
      window.speechSynthesis.speak(msg);
      recognition.start();
    }
  }
