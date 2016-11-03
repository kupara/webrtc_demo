'use strict';

var constraints = {
  audio: true,
  video: { width: 1280, height: 720 }
};

var video = document.querySelector('video');

function successCallback(stream) {
  window.stream = stream;

  if (window.URL) {
    video.src = window.URL.createObjectURL(stream);
  } else {
    video.src = stream;
  }
}

function errorCallback(error) {
  console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).then(successCallback)
  .catch(errorCallback);
