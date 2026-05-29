// BASE
const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");

// GET INPUT & SET OUTPUT

const inputEnterProm = new Promise((resolve, reject)=>{
    inputElement.addEventListener("keydown", (event)=>{
      if (event.key==="Enter") { resolve(inputElement.value); }
    }
});

async function in() {
  console.log("Awaiting input...");
  inputEnterProm.then((value)=>{
    alert(value)
    toReturn = value
  });
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
  let text = in();
  alert(text);
  console.log("   \"loadFunc()\" finished");
}