require(['test/alert'], function() {
var context;
window.addEventListener('load', init, false);
function init() {
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();
    alert('working?');
    alert(context.currentTime);
  }
  catch(e) {
    alert('Web Audio API is not supported in this browser');
  }
}	
});