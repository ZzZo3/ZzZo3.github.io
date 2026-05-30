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

async function input() {
  console.log("Awaiting input...");
  await new Promise((resolve)=>{
    resolveInputPromise = resolve;
    inputElement.addEventListener("keydown", inputEnter);
  });
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
    let space = "                                        ".slice(Math.floor(text.length / 2));
    print(space + text);
  },
  title(text) {
    if (text.length>80) {
      console.log("ERROR: pr.center() input too long!");
      return
    }
    let bar = "---------------------------------------".slice(Math.floor(text.length / 2));
    bar = bar+" "+text+" "+bar
    if (bar.length>80) {
      bar = bar.slice(bar.length - 80)
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
  }
};

// CRAWLER: CLASSES

var Player = {
  rank: 0,
  title: "",
  prestige: 0,
  maxHealth: 20,
  plHealth: 20,
  weaponArr: [], //[Weapon]
  newWeaponIndexArr: [], //[Int]
  maxHealed: true,
  eventArr: [], //[String]
  eventCooldownArr: [], //[Int]
  eventRealCooldownArr: [], //[Int]
  eventCount: 0,
  layer: 1,
};

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
  print("LAYER 1")
  let i=0;
  while (true) {
    i++;
    print("awaiting...");
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