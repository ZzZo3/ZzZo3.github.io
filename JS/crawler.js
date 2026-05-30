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
  outputElement.scrollBy(0, 999999);
}

function outputFormat() {
  outputElement.textContent = outputText;
}

//CLASSES

var pr = {
  line: function(char){
    let line = ""
    for (let i=0; i<80; i++) {
      line += char
    }
    print(line)
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
  title: function(text){
    if (text.length>80) {
      console.log("ERROR: pr.center() input too long!");
      return
    }
    let bar = "---------------------------------------".slice(Math.floor(text.length / 2));
    bar = bar+" "+text+" "+bar
    if (bar.length>80) {
      bar = bar.slice(bar.length - 80)
    }
    print(bar);
  },
  crawler: function(){
    this.line('_');
    this.center("  _____ _____        __          ___      ______ _____  ");
    this.center(" / ____|  __ \\     /\\\\ \\        / / |    |  ____|  __ \\ ");
    this.center("| |    | |__) |   /  \\\\ \\  /\\  / /| |    | |__  | |__) |");
    this.center("| |    |  _  /   / /\\ \\\\ \\/  \\/ / | |    |  __| |  _  / ");
    this.center("| |____| | \\ \\  / ____ \\\\  /\\  /  | |____| |____| | \\ \\ ");
    this.center(" \\_____|_|  \\_\\/_/    \\_\\\\/  \\/   |______|______|_|  \\_\\");
    this.line('_');
  }
};

//MAIN BODY

async function main() {
  pr.crawler();
  pr.center("CENTER");
  pr.title("THE STORY CONTINUES ...");
  pr.center("WAOW");
  let i=0;
  while (true) {
    i++;
    print(i+" awaiting...");
    await input();
    pr.line("_");
    pr.nl();
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