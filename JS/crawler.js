// BASE
const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");
let lastInput = "";
// GET INPUT & SET OUTPUT

const inputEnterProm = new Promise((resolve, reject)=>{
  inputElement.addEventListener("keydown", (event)=>{
    if (event.key==="Enter") { resolve(); }
  }, { once : true });
});

async function input() {
  console.log("Awaiting input...");
  await inputEnterProm();
  let toReturn = inputElement.value;
  alert(toReturn);
  console.log("Input recorded. Continuing...");
  inputElement.value = "";
  lastInput = toReturn;
}

function print(text) {
  outputElement.textContent += "\n"+text;
}

//STUFF THAT RUNS ON LOAD

async function main() {
  print("started")
  await input();
  print("stopped")
  alert(lastInput);
}

main();

function loadFunc() {
  console.log("\"loadFunc()\" began");
  console.log("   \"loadFunc()\" finished");
}