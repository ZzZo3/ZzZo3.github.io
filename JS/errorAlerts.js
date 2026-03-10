const errorAlertsActive = true
if (errorAlertsActive) {
  window.addEventListener("error", handleError, true);
  function handleError(evt) {
      if (evt.message) { // Chrome sometimes provides this
        alert("error: "+evt.message +" at linenumber: "+evt.lineno+" of file: "+evt.filename);
      } else {
        alert("error: "+evt.type+" from element: "+(evt.srcElement || evt.target));
      }
  }
}