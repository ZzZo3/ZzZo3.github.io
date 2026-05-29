// BASE
const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");
let lastInput = "";
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
  outputElement.textContent += "\n"+text;
}

//STUFF THAT RUNS ON LOAD

async function main() {
  let i=0
  while (true) {
    i++
    var line = i+" awaiting> "
    await input();
    line += lastInput+" <received";
    print(line);
  }
  alert(lastInput);
}

main();

function loadFunc() {
  console.log("\"loadFunc()\" began");
  console.log("   \"loadFunc()\" finished");
}