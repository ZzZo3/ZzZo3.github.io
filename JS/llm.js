const outputBox = document.getElementById("output")

class Word {
    constructor(name, nexts) {
        this.name = name
        this.nexts = nexts
    }
}

/*let data = "I have a lot of fish . I am a fish . I was a basket of fish . I will be a fish . a fish is a swimming animal . swimming is the act of moving through water . fish swim through water . I eat fish . I enjoy the taste of a fish . a fish would taste quite good . quite a lot of fish swim through oceans . fish are in the oceans . a fish is in the oceans . I am in the oceans . water is wet . I swim . once upon a time there was a fish . the fish swam up the stream which led to the ocean . Hasan Piker is live on stream . Hasan is a communist . I am Hasan and I am on stream . in the stream there are fish . live fish swim and swam through water . I was not a fish and I was Hasan ."*/

let data = `Synopsis:

Banquo, who has accompanied Duncan to Inverness, is uneasy because he too is tempted by the witches’ prophecies, although only in his dreams. Macbeth pretends to have forgotten them. Left alone by Banquo, Macbeth sees a gory dagger leading him to Duncan’s room. Hearing the bell rung by Lady Macbeth to signal completion of her preparations for Duncan’s death, Macbeth exits to kill the king.

Enter Banquo, and Fleance with a torch before him.

BANQUO  How goes the night, boy?
FLEANCE 
The moon is down. I have not heard the clock.
BANQUO  And she goes down at twelve.
FLEANCE  I take ’t ’tis later, sir.
BANQUO 
Hold, take my sword.He gives his sword to Fleance.
There’s husbandry in heaven;
Their candles are all out. Take thee that too.
A heavy summons lies like lead upon me,
And yet I would not sleep. Merciful powers,
Restrain in me the cursèd thoughts that nature
Gives way to in repose.

Enter Macbeth, and a Servant with a torch.

Give me my sword.—Who’s
there?
MACBETH  A friend.
BANQUO 
What, sir, not yet at rest? The King’s abed.
He hath been in unusual pleasure, and
Sent forth great largess to your offices.
This diamond he greets your wife withal,
By the name of most kind hostess, and shut up
In measureless content.
He gives Macbeth a jewel.
MACBETH  Being unprepared,
Our will became the servant to defect,
Which else should free have wrought.
BANQUO  All’s well.
I dreamt last night of the three Weïrd Sisters.
To you they have showed some truth.
MACBETH  I think not of
them.
Yet, when we can entreat an hour to serve,
We would spend it in some words upon that
business,
If you would grant the time.
BANQUO  At your kind’st leisure.
MACBETH 
If you shall cleave to my consent, when ’tis,
It shall make honor for you.
BANQUO  So I lose none
In seeking to augment it, but still keep
My bosom franchised and allegiance clear,
I shall be counseled.
MACBETH  Good repose the while.
BANQUO  Thanks, sir. The like to you.
Banquo and Fleance exit.
MACBETH 
Go bid thy mistress, when my drink is ready,
She strike upon the bell. Get thee to bed.
Servant exits.
Is this a dagger which I see before me,
The handle toward my hand? Come, let me clutch
thee.
I have thee not, and yet I see thee still.
Art thou not, fatal vision, sensible
To feeling as to sight? Or art thou but
A dagger of the mind, a false creation
Proceeding from the heat-oppressèd brain?
I see thee yet, in form as palpable
As this which now I draw.He draws his dagger.
Thou marshal’st me the way that I was going,
And such an instrument I was to use.
Mine eyes are made the fools o’ th’ other senses
Or else worth all the rest. I see thee still,
And, on thy blade and dudgeon, gouts of blood,
Which was not so before. There’s no such thing.
It is the bloody business which informs
Thus to mine eyes. Now o’er the one-half world
Nature seems dead, and wicked dreams abuse
The curtained sleep. Witchcraft celebrates
Pale Hecate’s off’rings, and withered murder,
Alarumed by his sentinel, the wolf,
Whose howl’s his watch, thus with his stealthy pace,
With Tarquin’s ravishing strides, towards his
design
Moves like a ghost. Thou sure and firm-set earth,
Hear not my steps, which way they walk, for fear
Thy very stones prate of my whereabouts
And take the present horror from the time,
Which now suits with it. Whiles I threat, he lives.
Words to the heat of deeds too cold breath gives.
A bell rings.
I go, and it is done. The bell invites me.
Hear it not, Duncan, for it is a knell
That summons thee to heaven or to hell.
He exits.`

let words = []
let nextWords = []
const punctuation = [",",";",":",".","!","?"]
const puncTerminating = [".","!","?"]
function eatData(input) {
  data = data.split("\n").join()
  data = data.split(".").join(" . ")
  data = data.split("!").join(" ! ")
  data = data.split("?").join(" ? ")
  data = data.split(",").join(" , ")
  data = data.split(" ")
  data = data.filter((k)=>k!=""&&k!=" ")
  data = data.map((k)=>k.toLowerCase())
  for (let i=0; i<data.length; i++) {
    if (!words.includes(data[i])) {
      words.push(data[i])
    }
  }
  for (let i=0; i<words.length; i++) {
    var possibleNexts = []
    for (let j=0; j<data.length; j++) {
      if (data[j]==words[i] && j+1<data.length) {
        possibleNexts.push(data[j+1])
      }
    }
    let nextsRaw = []
    for (let j=0; j<words.length; j++) {
      let count = possibleNexts.filter(w => w === words[j]).length
      nextsRaw.push([words[j],count])
    }
    let sum = 0
    for (let j=0; j<nextsRaw.length; j++) {
      sum += nextsRaw[j][1]
    }
    let nextsProcessed = []
    for (let j=0; j<nextsRaw.length; j++) {
      let prob = nextsRaw[j][1] / sum
      nextsProcessed.push([nextsRaw[j][0],prob])
    }
    nextWords.push([words[i],nextsProcessed])
  }
}

eatData(data)

function follow(inWord) {
  var index = 0
  let foundInWord = false
  for (let i = 0; i<nextWords.length; i++) {
    if (nextWords[i][0]==inWord) {
      index = i
      foundInWord = true
    }
  }
  if (!foundInWord) {
    return
  }
  var nexts = nextWords[index][1]
  //weighted random v
  var items = nexts.map((k)=>(k[0]))
  var weights = nexts.map((k)=>(k[1]))
  var cmltvWeights = []
  for (let i=0; i<weights.length; i++) {
    var weight = 0
    for (let j=0; j<=i; j++) {
      weight += weights[j]
    }
    cmltvWeights[i] = weight
  }
  let picker = Math.random()
  let pick = "_"
  for (let i=0; i<cmltvWeights.length; i++) {
    if (cmltvWeights[i]>=picker && pick=="_") {
      pick=items[i]
    }
  }
  var outWord = pick;
  return (outWord)
}

function write(inWord) {
  var text = [inWord]
  var last = inWord
  for (let n=0; n<100; n++) {
    if (!puncTerminating.includes(last)) {
      var next = last
      while (next==last||punctuation.includes(last)&&punctuation.includes(next)) {
        next = follow(last)
      }
      text.push(next)
      last = next
    }
  }
  return(text.join(" "))
}

let seedBlacklist = [" ",".",""]

let outputText = ""
for (let i=0; i<3; i++) {
  let seed = ""
  while (seedBlacklist.includes(seed)) {
    seed = words[Math.floor(Math.random()*words.length)]
  }
  newWrite = write(seed)
  console.log(i+1,newWrite)
  outputText += newWrite
}

outputBox.text = outputText