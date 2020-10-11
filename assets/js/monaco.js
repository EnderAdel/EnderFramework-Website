//require.config({ paths: { 'vs': './node_modules/monaco/build/vs' }});
require.config({ paths: { 'vs': './../../../node_modules/monaco/build/vs' }});
require(['vs/editor/editor.main'], function(){
  window.monaco = monaco;
  loadMonaco();
});
function waitForMonaco(callback){
  if(typeof callback !== "function"){
    console.warn("You need to pass the callback function!!");
    return false;
  }
  var loop = setInterval(function(){
    if(window.monaco != undefined){
      clearInterval(loop);
      callback();
    }
  }, 10);
}
function loadMonaco(){
  var elements = document.querySelectorAll("[codebox]");
  for(var i = 0; i < elements.length; i++){
    window.monaco.editor.create(elements[i], {
      value: elements[i].getAttribute("codebox"),
      theme: "vs-dark",
      readOnly: true,
      language: elements[i].getAttribute("lang"),
      quickSuggestions: false,
      contextmenu: false,
      glyphMargin: false,
      scrollbar: {
        verticalHasArrows: false,
        vertical: 'hidden',
        verticalScrollbarSize: 0
      },
      minimap: {
        enabled: false
      }
    });
    elements[i].removeAttribute("codebox");
  }
  delete elements;
}