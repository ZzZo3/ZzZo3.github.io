// BASE
const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");

// GET INPUT & SET OUTPUT

const inputEnterProm = new Promise((resolve, reject)=>{
    inputElement.addEventListener("keydown", (event)=>{
      if (event.key==="Enter") { resolve(); }
    });
});

async function input() {
  console.log("Awaiting input...");
  await inputEnterProm();
  let toReturn = inputElement.value;
  alert(toReturn);
  console.log("Input recorded. Continuing...");
  inputElement.value = "";
  return toReturn;
}

function print(text) {
  outputElement.textContent += "\n"+text;
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
  console.log("\"loadFunc()\" began");
  let text = input();
  alert(text);
  console.log("   \"loadFunc()\" finished");
}