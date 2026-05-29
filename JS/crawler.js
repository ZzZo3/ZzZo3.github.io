// BASE
const inputElement = document.getElementById('input')
const outputElement = document.getElementById('output')

// GET INPUT & SET OUTPUT

function in() {
  return inputElement.value
}
function print(text) {
  outputElement.textContent += "\n"+text
}

//STUFF THAT RUNS ON LOAD

function loadFunc() {
  console.log('\"loadFunc()\" began')
  console.log('   \"loadFunc()\" finished')
}