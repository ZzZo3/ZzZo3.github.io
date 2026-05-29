// BASE
const inputElement = document.getElementById('input')
const outputElement = document.getElementById('output')

// GET INPUT & SET OUTPUT

const inputEnter = () => {
  return new Promise((resolve) => {
    inputElement.addEventListener('keydown', (event)=>{
      if (event.key==="Enter") { resolve }
    }, { once: true });
  });
};

async function in() {
  console.log("Waiting for input...");
  await inputEnter();
  console.log("Input recorded. Continuing...");
  return inputElement.value
  inputElement.value = ""
}

function print(text) {
  outputElement.textContent += "\n"+text
}

//STUFF THAT RUNS ON LOAD

start();

function loadFunc() {
  console.log('\"loadFunc()\" began')
  console.log('   \"loadFunc()\" finished')
}