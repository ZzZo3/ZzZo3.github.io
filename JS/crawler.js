// BASE
const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");
let lastInput = "";
let outputText = "";

// GET INPUT & SET OUTPUT

inputElement.addEventListener("keydown", (event)=>{
  if (event.key==="Enter") {
    event.preventDefault()
  }
})

function inputEnter(event) {
  if (event.key==="Enter") {
    inputElement.removeEventListener("keydown", inputEnter);
    resolveInputPromise();
  }
}

async function input() {
  console.log("Awaiting input...");
  await new Promise((resolve)=>{
    resolveInputPromise = resolve;
    inputElement.addEventListener("keydown", inputEnter);
  });
  console.log("Input received. Continuing...");
  lastInput = inputElement.value;
  inputElement.value = "";
}

function print(text) {
  outputText += text+"\n";
  outputFormat();
}

function outputFormat() {
  outputElement.textContent = outputText;
}

//CLASSES

var pr = {
  line: function(){
    print("--------------------------------------------------------------------------------")
  },
  nl: function(){
    print("");
  },
  center: function(text){
    if (text.length>80) {
      console.log("ERROR: pr.center() input too long!");
      return
    }
    let space = "                                        ".slice(Math.floor(text.length / 2));
    print(space + text);
  },
  title: function(){
    this.line();
    this.nl();
    this.nl();
    this.nl();
    this.nl();
    this.nl();
    this.nl();  
    this.line();
  }
};

//MAIN BODY

async function main() {
  pr.title();
  pr.center("CENTER");
  let i=0;
  while (true) {
    i++;
    print(i+" awaiting...");
    await input();
    pr.line();
    print(lastInput);
  }
  alert(lastInput);
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
  console.log("\"loadFunc()\" began");
  main();
  console.log("   \"loadFunc()\" finished");
}