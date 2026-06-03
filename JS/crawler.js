// HTML & BASE
const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");
let lastInput = "";
let outputText = "";

// FRAMEWORK: INPUT & OUTPUT

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

function awaitTick() {
  let text = outputElement.innerText;
  text = text.split("\n");
  console.log("awaitTick called, line=\""+text[text.length-2]+"\"");
  if (text[text.length-2]=="awaiting input ...") { console.log("...->.");pr.replace(2,"awaiting input ."); }
  else if (text[text.length-2]=="awaiting input .") { console.log(".->..");pr.replace(2,"awaiting input .."); }
  else if (text[text.length-2]=="awaiting input ..") { console.log("..->...");pr.replace(2,"awaiting input ..."); };
}

async function input() {
  console.log("Awaiting input...");
  print("awaiting input ...");
  const IntervalID0 = setInterval(awaitTick, 1000);
  await new Promise((resolve)=>{
    resolveInputPromise = resolve;
    inputElement.addEventListener("keydown", inputEnter);
  });
  clearInterval(IntervalID0);
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

// FRAMEWORK: CLASSES

var pr = {
  line(char) {
    let line = ""
    for (let i=0; i<80; i++) {
      line += char
    }
    print(line)
  },
  nl() {
    print("");
  },
  center(text) {
    if (text.length>80) {
      console.log("ERROR: pr.center() input too long!");
      return
    }
    let space = "                                      ".slice(Math.floor(text.length / 2));
    print(space + text);
  },
  title(text) {
    if (text.length>80) {
      console.log("ERROR: pr.center() input too long!");
      return
    }
    let bar =   "--------------------------------------".slice(Math.ceil(text.length / 2));
    bar = bar+" "+text+" "+bar
    if (bar.length>77) {
      bar = bar.slice(bar.length - 77)
    }
    print(bar);
  },
  crawler() {
    this.line('_');
    this.center("  _____ _____        __          ___      ______ _____  ");
    this.center(" / ____|  __ \\     /\\\\ \\        / / |    |  ____|  __ \\ ");
    this.center("| |    | |__) |   /  \\\\ \\  /\\  / /| |    | |__  | |__) |");
    this.center("| |    |  _  /   / /\\ \\\\ \\/  \\/ / | |    |  __| |  _  / ");
    this.center("| |____| | \\ \\  / ____ \\\\  /\\  /  | |____| |____| | \\ \\ ");
    this.center(" \\_____|_|  \\_\\/_/    \\_\\\\/  \\/   |______|______|_|  \\_\\");
    this.line('_');
    this.nl();
  },
  replace(t,line) {
    var text = outputElement.innerText;
    text = text.split("\n");
    text[text.length-t]=line;
    text = text.join("\n");
    outputElement.innerText = text;
  }
};

// CRAWLER: CLASSES

// ACTORS
var Player = {
  rank: 0,
  title: "",
  prestige: 0,
  health: 20,
  maxHealth: 20,
  inventory: [],
  eventArr: [], //[String]
  eventCooldownArr: [], //[Int]
  eventRealCooldownArr: [], //[Int]
  eventCount: 0,
  layer: 1,
  titleCheck() {
    let titleReqs = [
      ["traveller",0],
      ["skirmisher",10],
      ["soldier",25],
      ["knight",50],
      ["good knight",100],
      ["great knight",175],
      ["holy knight",300]
    ]
    for (let i=0; i<titleReqs.length; i++) {
      if (this.prestige>titleReqs[i][1]) { this.rank = i };
    }
    
  }
};

// ITEMS
class Weapon {
  constructor(name, lvl, die, rolls, bonus, upgradeChance) {
    this.name = name;
    this.lvl = lvl;
    this.die = die; // e.g. "2d6"
    this.rolls = rolls; // e.g. [6,6]
    this.bonus = bonus; // added damage per level
    this.upgradeChance = upgradeChance; // 0->1 % appearance in upgrade scene
    this.upgrade = function(by) {
      this.lvl += by;
    },
    this.damageCalc = function() {
      let rolledSum = 0;
      for (let i=0; i<this.rolls; i++) { rolledSum += Math.ceil(Math.random() * this.die); };
      return rolledSum+(this.lvl*this.bonus);
    }
  }
}
var basicSword = new Weapon("Basic Sword", 0, 6, 1, 1, 1);
var sturdySword = new Weapon("Sturdy Sword", 0, 4, 2, 1, 0.5);
Player.inventory.push(basicSword);
Player.inventory.push(sturdySword);
console.log(Player)

// CRAWLER: MAIN BODY

async function main() {
  setTimeout(() => {
    print("The castle is gone.");
    setTimeout(() => {
      print("The forest is deadly.")
      setTimeout(() => {
        print("You are lost.")
        setTimeout(()=>{
          pr.crawler();
          document.getElementById("musicPlayer").play();
          loop();
        }, 2600);
      }, 1200);
    }, 1200);
  }, 1200);
}

async function loop() {
  pr.title("LAYER 1")
  let i=0;
  while (true) {
    i++;
    await input();
    print(">  "+lastInput);
    pr.title("THE STORY CONTINUES ...");
    pr.nl();
  }
  alert(lastInput);
}

// FRAMEWORK: STUFF THAT RUNS ON LOAD

function loadFunc() {
  console.log("\"loadFunc()\" began");
  main();
  console.log("   \"loadFunc()\" finished");
}