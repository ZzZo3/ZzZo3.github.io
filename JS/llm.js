class Word {
    constructor(name, nexts) {
        this.name = name
        this.nexts = nexts
    }
}

var aNexts = [["a",0.25],["b",0.25],["c",0.25],["\\end",0.25]]
var bNexts = [["a",0.25],["b",0.25],["c",0.25],["\\end",0.25]]
var cNexts = [["a",0.25],["b",0.25],["c",0.25],["\\end",0.25]]

var nextWords = [["a",aNexts],["b",bNexts],["c",cNexts]]

function follow(input) {
  if (!nextWords.contains(input)) {
    return "0"
  }
  var index = 0
  for (let i = 0; i<nextWords.length; i++) {
    if (nextWords[i]==input) {
      index = i
    }
  }
  var nexts = nextWords[index][1]
  var next = nexts[Math.floor(Math.random() * nexts.length)];
  console.log((input," ",next))
  return (input," ",next)
}