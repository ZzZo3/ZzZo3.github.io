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
    print(inputElement.value);
    resolveInputPromise();
  }
}

async function input() {
  console.log("Awaiting input...");
  await new Promise((resolve)=>{
    resolveInputPromise = resolve;
    inputElement.addEventListener("keydown", inputEnter);
  });
  let toReturn = inputElement.value;
  console.log("Input received. Continuing...");
  inputElement.value = "";
  lastInput = toReturn;
}

function print(text) {
  outputElement.textContent += "\n"+text;
}

//STUFF THAT RUNS ON LOAD

async function main() {
  let i=0
  while (true) {
    i++
    print("["+i+" awaiting>");
    await input();
    print("<received] ");
  }
  alert(lastInput);
}

main();

function loadFunc() {
  console.log("\"loadFunc()\" began");
  console.log("   \"loadFunc()\" finished");
}