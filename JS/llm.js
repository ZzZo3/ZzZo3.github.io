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

function follow(inWord) {
  var index = 0
  for (let i = 0; i<nextWords.length; i++) {
    if (nextWords[i][0]==inWord) {
      index = i
    }
  }
  var nexts = nextWords[index][1]
  var outWord = nexts[Math.floor(Math.random() * nexts.length)][0];
  return (outWord)
}

function write(inWord) {
  var text = [inWord]
  var last = inWord
  for (let n=0; n<100; n++) {
    if (last!="\\end") {
      var next = follow(last)
      text.push(next)
      last = next
    }
  }
  return(text.join(" "))
}

write("a")