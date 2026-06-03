// HTML & BASE

const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");
let lastInput = "";
let outputText = "";

// FRAMEWORK: UTILITIES

function randomFrom(array) {
  return array[Math.floor(Math.random()*(array.length-0.00001))];
};

// FRAMEWORK: INPUT & OUTPUT

inputElement.addEventListener("keydown", (event)=>{
  if (event.key==="Enter") { event.preventDefault(); };
});

function inputEnter(event) {
  if (event.key==="Enter") {
    inputElement.removeEventListener("keydown", inputEnter);
    resolveInputPromise();
  };
};

function awaitTick() {
  let text = outputElement.innerText;
  text = text.split("\n");
  if (text[text.length-2]=="awaiting input ...") { pr.replace(2,"awaiting input ."); }
  else if (text[text.length-2]=="awaiting input .") { pr.replace(2,"awaiting input .."); }
  else if (text[text.length-2]=="awaiting input ..") { pr.replace(2,"awaiting input ..."); };
};

async function input(wants) {
  console.log("Awaiting input... wants: "+wants);
  let acceptedInput = false;
  print("awaiting input ...");
  while (!acceptedInput) {
    const IntervalID0 = setInterval(awaitTick, 1000);
    await new Promise((resolve)=>{
      resolveInputPromise = resolve;
      inputElement.addEventListener("keydown", inputEnter);
    });
    clearInterval(IntervalID0);
    lastInput = inputElement.value;
    //pr.replace(2,">  "+lastInput);
    print(">  "+lastInput);
    inputElement.value = "";
    if (wants=="ANY" || wants.includes(lastInput)) { acceptedInput=true; }
    else if (wants!="ANY") {
      print("!  invalid input");
      print("awaiting input ...")
    };
  }
  pr.title("THE STORY CONTINUES ...");
  pr.nl();
  console.log("Input received: \""+lastInput+"\" Continuing...");
};

function print(text) {
  outputText += text+"\n";
  outputFormat();
  outputElement.scrollBy(0, 999999);
};

function outputFormat() {
  outputElement.textContent = outputText;
};

// FRAMEWORK: CLASSES

var pr = {
  line(char) {
    let line = "";
    for (let i=0; i<80; i++) {
      line += char;
    };
    print(line);
  },
  nl() {
    print("");
  },
  center(text) {
    if (text.length>80) {
      console.log("ERROR: pr.center() input too long!");
      return;
    };
    let space = "                                        ".slice(Math.floor(text.length / 2));
    print(space + text);
  },
  title(text) {
    if (text.length>80) {
      console.log("ERROR: pr.center() input too long!");
      return;
    }
    let bar =   "----------------------------------------".slice(Math.ceil(text.length / 2));
    bar = bar+" "+text+" "+bar;
    if (bar.length>80) {
      bar = bar.slice(bar.length - 80);
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

// CRAWLER: ACTORS & ITEMS

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
  layer: 0,
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
  },
  layerCheck() {
    if (this.eventCount>0) { this.layer = Math.floor((this.eventCount-1)/10)+1; }
    else { this.layer = 1; };
  }
};

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
    };
    this.damageCalc = function() {
      let rolledSum = 0;
      for (let i=0; i<this.rolls; i++) { rolledSum += Math.ceil(Math.random() * this.die); };
      return rolledSum+(this.lvl*this.bonus);
    };
  };
};
var basicSword = new Weapon("Basic Sword", 0, 6, 1, 1, 1);
var sturdySword = new Weapon("Sturdy Sword", 0, 4, 2, 1, 0.5);
Player.inventory.push(basicSword);
Player.inventory.push(sturdySword);
console.log(Player);

// CRAWLER: EVENTS

class Event {
  constructor () {
    this.expoPlaceholders = "exposition on event start"; // exposition on event start
    this.type = randomFrom(["FIGHT","BATTLE","CONVERSATION"]);
    if (this.type=="FIGHT") {
      this.enemy = randomFrom[Enemies[Player.layer-1]];
      this.expoPlaceholders = randomFrom(Text.fightExpos[Player.layer-1]);
    }
  };
  expo() {
    if (this.type=="FIGHT") {
      return this.expoPlaceholders.split("[aE]").join(this.enemy.articleName).split("[E]").join(this.enemy.name);
    };
  };
};

async function runEvent(obj) {
  let eventRunning = true;
  print("chose type: "+obj.type);
  print(obj.expo());
  while (eventRunning) {
    print("no event code yet :\( . say anything");
    await input("ANY");
    eventRunning = false;
  };
};

// CRAWLER: Text

const Text = {
  layerExpos: [
  "You lost sight of the twisting path you had been following ages ago. Daylight is giving way to night, but just as you begin to lose hope, you notice another path further on. But the comfort of the beaten path vanishes as you approach a fork, each further path totally concealed by the darkness.",
  "l2, expo",
  "l3, expo",
  "l4, expo",
  "l5, expo",
  "l6, expo",
  ],
  pathExpo(events) {
    let expos = [[[ //guaranteed
    "As you stumble forward, you notice [A]",
    "You take a moment to rest in a clearing. When you wake, you see [A]"
    ],[ //2
    "l2, 1 option expo: [A]"
    ],[ //3
    "l3, 1 option expo: [A]"
    ],[ //4
    "l4, 1 option expo: [A]"
    ],[ //5
    "l5, 1 option expo: [A]"
    ],[ //6
    "l6, 1 option expo: [A]"
    ]
    ],[[ //two options
    "As you continue to stumble through the thick woods, the trees suddenly give way to a razed clearing. You step out into the glade and notice two paths leading further into the thickets. To the left, you see [A] To the right, there is [B]",
    "You wander further into the treacherous forest, but as you stare on, you realize that you're approaching another split in the path. To the left, you spot [A] To the right, you see [B]"
    ],[ //2
    "l2, 3 options expo: [A], [B]"
    ],[ //3
    "l3, 3 options expo: [A], [B]"
    ],[ //4
    "l4, 3 options expo: [A], [B]"
    ],[ //5
    "l5, 3 options expo: [A], [B]"
    ],[ //6
    "l6, 3 options expo: [A], [B]"
    ]],
    [[ //three options
    "l1, 3 options expo: [A], [B], [C]"
    ],[ //2
    "l2, 3 options expo: [A], [B], [C]"
    ],[ //3
    "l3, 3 options expo: [A], [B], [C]"
    ],[ //4
    "l4, 3 options expo: [A], [B], [C]"
    ],[ //5
    "l5, 3 options expo: [A], [B], [C]"
    ],[ //6
    "l6, 3 options expo: [A], [B], [C]"
    ]]];
    let text = randomFrom(expos[events.length-1][Player.layer-1]);
    text = text.split("[A]").join(events[0].expo());
    if (events.length>1) { text = text.split("[B]").join(events[1].expo()); };
    if (events.length>2) { text = text.split("[C]").join(events[2].expo()); };
    return text;
  },
  fightExpos: [[
    "a felled tree, atop of which sits [aE].",
    "a particularly unsettling area of shadow, within which [aE] roam[pl2E]."
  ],[
    "a particularly unsettling area of shadow, within which [aE] roam[pl2E]."
  ],[
    "l3, fight expo"
  ],[
    "l4, fight expo"
  ],[
    "l5, fight expo"
  ],[
    "l6, fight expo"
  ]],
};

// CRAWLER: MAIN BODY

async function main() {
  setTimeout(() => {
  print("The castle is gone.");
  setTimeout(() => {
  print("The forest is deadly.");
  setTimeout(() => {
  print("You are lost.");
  setTimeout(()=>{
    pr.crawler();
    document.getElementById("musicPlayer").play();
    loop();
  }, 2600);}, 1200);}, 1200);}, 1200);
}

async function loop() {
  while (Player.layer<7) {
    let lastLayer = Player.layer;
    let choices = Math.random();
    Player.layerCheck();
    if (Player.layer!=lastLayer) {
      choices = 2;
      pr.title("LAYER "+Player.layer); print(Text.layerExpo[Player.layer-1]);
    } else {
      if (choices>=0&&choices<0.2) { choices=1 }
      else if (choices>=0.2&&choices<=0.8) { choices=2 }
      else if (choices>0.8&&choices<=1) { choices=3 };
    };
    print("^  choices: "+choices);
    let events = [];
    for (let i=0; i<choices; i++) {
      let newEvent = new Event();
      while (events.includes(newEvent)) { newEvent = new Event(); };
      events.push(newEvent);
    };
    if (Player.layer==lastLayer) { print(Text.pathExpo(events)); };
    if (choices==1) { print("You may walk [\"forward\"].");await input(["forward"]); }
    else if (choices==2) { print("You may walk [\"left\"] or [\"right\"].");await input(["left","right"]); }
    else if (choices==3) { print("You may walk [\"left\"], [\"forward\"], or [\"right\"].");await input(["left","forward","right"]); };
    let choice = events[0];
    if (lastInput=="right") { choice = events[events.length-1]; }
    else if (choices==3 && lastInput=="forward") { choice = events[1]; };
    await runEvent(choice);
    Player.eventCount++;
    print("event count: "+Player.eventCount);
    console.log("events completed: "+Player.eventCount);
  };
};

// FRAMEWORK: STUFF THAT RUNS ON LOAD

function loadFunc() {
  console.log("\"loadFunc()\" began");
  main();
  console.log("   \"loadFunc()\" finished");
};