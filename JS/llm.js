//BASE
const outputBox = document.getElementById("output")

//SEED LISTS
let seedBlacklist = [" ",".","","?","!",","]
let seedWhitelist = []

//CLASSES
class Word {
    constructor(name, nexts) {
        this.name = name
        this.nexts = nexts
    }
}

//DATA
let words = []
let nextWords = []
const punctuation = [",",";",":",".","!","?"]
const puncTerminating = [".","!","?"]
let data = `
[Thunder and lightning; three witches enter.]    
First Witch
When shall we three meet again —
In thunder, lightning, or in rain?
Second Witch
When the hurlyburly's done,
When the battle's lost, and won.
Third Witch
That will be ere the set of sun.
First Witch
Where the place?
Second Witch
Upon the heath.
Third Witch
There to meet with Macbeth.
First Witch
I come, Graymalkin.
Second Witch
Paddock calls.    
Third Witch
Anon.
All
Fair is foul, and foul is fair.
Hover through the fog and filthy air.
[Exit]

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
He exits.

Banquo suspects that Macbeth killed Duncan in order to become king. Macbeth invites Banquo to a feast that night. Banquo promises to return in time. Macbeth, fearing that Banquo’s children, not his own, will be the future kings of Scotland, seizes upon the opportunity provided by Banquo’s scheduled return after dark to arrange for his murder. To carry out the crime, Macbeth employs two men whom he has persuaded to regard Banquo as an enemy.

Enter Banquo.

BANQUO 
Thou hast it now—king, Cawdor, Glamis, all
As the Weïrd Women promised, and I fear
Thou played’st most foully for ’t. Yet it was said
It should not stand in thy posterity,
But that myself should be the root and father
Of many kings. If there come truth from them
(As upon thee, Macbeth, their speeches shine)
Why, by the verities on thee made good,
May they not be my oracles as well,
And set me up in hope? But hush, no more.

Sennet sounded. Enter Macbeth as King, Lady
Macbeth, Lennox, Ross, Lords, and Attendants.

MACBETH 
Here’s our chief guest.
LADY MACBETH  If he had been forgotten,
It had been as a gap in our great feast
And all-thing unbecoming.
MACBETH 
Tonight we hold a solemn supper, sir,
And I’ll request your presence.
BANQUO  Let your Highness
Command upon me, to the which my duties
Are with a most indissoluble tie
Forever knit.
MACBETH  Ride you this afternoon?
BANQUO  Ay, my good lord.
MACBETH 
We should have else desired your good advice
(Which still hath been both grave and prosperous)
In this day’s council, but we’ll take tomorrow.
Is ’t far you ride?
BANQUO 
As far, my lord, as will fill up the time
’Twixt this and supper. Go not my horse the better,
I must become a borrower of the night
For a dark hour or twain.
MACBETH  Fail not our feast.
BANQUO  My lord, I will not.
MACBETH 
We hear our bloody cousins are bestowed
In England and in Ireland, not confessing
Their cruel parricide, filling their hearers
With strange invention. But of that tomorrow,
When therewithal we shall have cause of state
Craving us jointly. Hie you to horse. Adieu,
Till you return at night. Goes Fleance with you?
BANQUO 
Ay, my good lord. Our time does call upon ’s.
MACBETH 
I wish your horses swift and sure of foot,
And so I do commend you to their backs.
Farewell.Banquo exits.
Let every man be master of his time
Till seven at night. To make society
The sweeter welcome, we will keep ourself
Till suppertime alone. While then, God be with you.
Lords and all but Macbeth and a Servant exit.
Sirrah, a word with you. Attend those men
Our pleasure?
SERVANT 
They are, my lord, without the palace gate.
MACBETH 
Bring them before us.Servant exits.
To be thus is nothing,
But to be safely thus. Our fears in Banquo
Stick deep, and in his royalty of nature
Reigns that which would be feared. ’Tis much he
dares,
And to that dauntless temper of his mind
He hath a wisdom that doth guide his valor
To act in safety. There is none but he
Whose being I do fear; and under him
My genius is rebuked, as it is said
Mark Antony’s was by Caesar. He chid the sisters
When first they put the name of king upon me
And bade them speak to him. Then, prophet-like,
They hailed him father to a line of kings.
Upon my head they placed a fruitless crown
And put a barren scepter in my grip,
Thence to be wrenched with an unlineal hand,
No son of mine succeeding. If ’t be so,
For Banquo’s issue have I filed my mind;
For them the gracious Duncan have I murdered,
Put rancors in the vessel of my peace
Only for them, and mine eternal jewel
Given to the common enemy of man
To make them kings, the seeds of Banquo kings.
Rather than so, come fate into the list,
And champion me to th’ utterance.—Who’s there?

Enter Servant and two Murderers.

To the Servant. Now go to the door, and stay there
till we call.Servant exits.
Was it not yesterday we spoke together?
MURDERERS 
It was, so please your Highness.
MACBETH  Well then, now
Have you considered of my speeches? Know
That it was he, in the times past, which held you
So under fortune, which you thought had been
Our innocent self. This I made good to you
In our last conference, passed in probation with you
How you were borne in hand, how crossed, the
instruments,
Who wrought with them, and all things else that
might
To half a soul and to a notion crazed
Say “Thus did Banquo.”
FIRST MURDERER  You made it known to us.
MACBETH 
I did so, and went further, which is now
Our point of second meeting. Do you find
Your patience so predominant in your nature
That you can let this go? Are you so gospeled
To pray for this good man and for his issue,
Whose heavy hand hath bowed you to the grave
And beggared yours forever?
FIRST MURDERER  We are men, my liege.
MACBETH 
Ay, in the catalogue you go for men,
As hounds and greyhounds, mongrels, spaniels,
curs,
Shoughs, water-rugs, and demi-wolves are clept
All by the name of dogs. The valued file
Distinguishes the swift, the slow, the subtle,
The housekeeper, the hunter, every one
According to the gift which bounteous nature
Hath in him closed; whereby he does receive
Particular addition, from the bill
That writes them all alike. And so of men.
Now, if you have a station in the file,
Not i’ th’ worst rank of manhood, say ’t,
And I will put that business in your bosoms
Whose execution takes your enemy off,
Grapples you to the heart and love of us,
Who wear our health but sickly in his life,
Which in his death were perfect.
SECOND MURDERER  I am one, my liege,
Whom the vile blows and buffets of the world
Hath so incensed that I am reckless what
I do to spite the world.
FIRST MURDERER  And I another
So weary with disasters, tugged with fortune,
That I would set my life on any chance,
To mend it or be rid on ’t.
MACBETH  Both of you
Know Banquo was your enemy.
MURDERERS  True, my lord.
MACBETH 
So is he mine, and in such bloody distance
That every minute of his being thrusts
Against my near’st of life. And though I could
With barefaced power sweep him from my sight
And bid my will avouch it, yet I must not,
For certain friends that are both his and mine,
Whose loves I may not drop, but wail his fall
Who I myself struck down. And thence it is
That I to your assistance do make love,
Masking the business from the common eye
For sundry weighty reasons.
SECOND MURDERER  We shall, my lord,
Perform what you command us.
FIRST MURDERER  Though our lives—
MACBETH 
Your spirits shine through you. Within this hour at
most
I will advise you where to plant yourselves,
Acquaint you with the perfect spy o’ th’ time,
The moment on ’t, for ’t must be done tonight
And something from the palace; always thought
That I require a clearness. And with him
(To leave no rubs nor botches in the work)
Fleance, his son, that keeps him company,
Whose absence is no less material to me
Than is his father’s, must embrace the fate
Of that dark hour. Resolve yourselves apart.
I’ll come to you anon.
MURDERERS  We are resolved, my lord.
MACBETH 
I’ll call upon you straight. Abide within.
Murderers exit.
It is concluded. Banquo, thy soul’s flight,
If it find heaven, must find it out tonight.
He exits.

Macbeth approaches the witches to learn how to make his kingship secure. In response they summon for him three apparitions: an armed head, a bloody child, and finally a child crowned, with a tree in his hand. These apparitions instruct Macbeth to beware Macduff but reassure him that no man born of woman can harm him and that he will not be overthrown until Birnam Wood moves to Dunsinane. Macbeth is greatly reassured, but his confidence in the future is shaken when the witches show him a line of kings all in the image of Banquo. After the witches disappear, Macbeth discovers that Macduff has fled to England and decides to kill Macduff’s family immediately.

Thunder. Enter the three Witches.

FIRST WITCH 
Thrice the brinded cat hath mewed.
SECOND WITCH 
Thrice, and once the hedge-pig whined.
THIRD WITCH 
Harpier cries “’Tis time, ’tis time!”
FIRST WITCH 
Round about the cauldron go;
In the poisoned entrails throw.
Toad, that under cold stone
Days and nights has thirty-one
Sweltered venom sleeping got,
Boil thou first i’ th’ charmèd pot.
The Witches circle the cauldron.
ALL 
Double, double toil and trouble;
Fire burn, and cauldron bubble.
SECOND WITCH 
Fillet of a fenny snake
In the cauldron boil and bake.
Eye of newt and toe of frog,
Wool of bat and tongue of dog,
Adder’s fork and blindworm’s sting,
Lizard’s leg and howlet’s wing,
For a charm of powerful trouble,
Like a hell-broth boil and bubble.
ALL 
Double, double toil and trouble;
Fire burn, and cauldron bubble.
THIRD WITCH 
Scale of dragon, tooth of wolf,
Witch’s mummy, maw and gulf
Of the ravined salt-sea shark,
Root of hemlock digged i’ th’ dark,
Liver of blaspheming Jew,
Gall of goat and slips of yew
Slivered in the moon’s eclipse,
Nose of Turk and Tartar’s lips,
Finger of birth-strangled babe
Ditch-delivered by a drab,
Make the gruel thick and slab.
Add thereto a tiger’s chaudron
For th’ ingredience of our cauldron.
ALL 
Double, double toil and trouble;
Fire burn, and cauldron bubble.
SECOND WITCH 
Cool it with a baboon’s blood.
Then the charm is firm and good.

Enter Hecate to the other three Witches.

HECATE 
O, well done! I commend your pains,
And everyone shall share i’ th’ gains.
And now about the cauldron sing
Like elves and fairies in a ring,
Enchanting all that you put in.
Music and a song: “Black Spirits,” etc. Hecate exits.
SECOND WITCH 
By the pricking of my thumbs,
Something wicked this way comes.
Open, locks,
Whoever knocks.

Enter Macbeth.

MACBETH 
How now, you secret, black, and midnight hags?
What is ’t you do?
ALL  A deed without a name.
MACBETH 
I conjure you by that which you profess
(Howe’er you come to know it), answer me.
Though you untie the winds and let them fight
Against the churches, though the yeasty waves
Confound and swallow navigation up,
Though bladed corn be lodged and trees blown
down,
Though castles topple on their warders’ heads,
Though palaces and pyramids do slope
Their heads to their foundations, though the
treasure
Of nature’s germens tumble all together
Even till destruction sicken, answer me
To what I ask you.
FIRST WITCH  Speak.
SECOND WITCH  Demand.
THIRD WITCH  We’ll answer.
FIRST WITCH 
Say if th’ hadst rather hear it from our mouths
Or from our masters’.
MACBETH  Call ’em. Let me see ’em.
FIRST WITCH 
Pour in sow’s blood that hath eaten
Her nine farrow; grease that’s sweaten
From the murderers’ gibbet throw
Into the flame.
ALL  Come high or low;
Thyself and office deftly show.

Thunder. First Apparition, an Armed Head.

MACBETH 
Tell me, thou unknown power—
FIRST WITCH  He knows thy
thought.
Hear his speech but say thou naught.
FIRST APPARITION 
Macbeth! Macbeth! Macbeth! Beware Macduff!
Beware the Thane of Fife! Dismiss me. Enough.
He descends.
MACBETH 
Whate’er thou art, for thy good caution, thanks.
Thou hast harped my fear aright. But one word
more—
FIRST WITCH 
He will not be commanded. Here’s another
More potent than the first.

Thunder. Second Apparition, a Bloody Child.

SECOND APPARITION  Macbeth! Macbeth! Macbeth!—
MACBETH  Had I three ears, I’d hear thee.
SECOND APPARITION 
Be bloody, bold, and resolute. Laugh to scorn
The power of man, for none of woman born
Shall harm Macbeth.He descends.
MACBETH 
Then live, Macduff; what need I fear of thee?
But yet I’ll make assurance double sure
And take a bond of fate. Thou shalt not live,
That I may tell pale-hearted fear it lies,
And sleep in spite of thunder.
Thunder. Third Apparition, a Child Crowned, with a tree
in his hand.

What is this
That rises like the issue of a king
And wears upon his baby brow the round
And top of sovereignty?
ALL  Listen but speak not to ’t.
THIRD APPARITION 
Be lion-mettled, proud, and take no care
Who chafes, who frets, or where conspirers are.
Macbeth shall never vanquished be until
Great Birnam Wood to high Dunsinane Hill
Shall come against him.He descends.
MACBETH  That will never be.
Who can impress the forest, bid the tree
Unfix his earthbound root? Sweet bodements, good!
Rebellious dead, rise never till the Wood
Of Birnam rise, and our high-placed Macbeth
Shall live the lease of nature, pay his breath
To time and mortal custom. Yet my heart
Throbs to know one thing. Tell me, if your art
Can tell so much: shall Banquo’s issue ever
Reign in this kingdom?
ALL  Seek to know no more.
MACBETH 
I will be satisfied. Deny me this,
And an eternal curse fall on you! Let me know!
Cauldron sinks. Hautboys.
Why sinks that cauldron? And what noise is this?
FIRST WITCH  Show.
SECOND WITCH  Show.
THIRD WITCH  Show.
ALL 
Show his eyes and grieve his heart.
Come like shadows; so depart.
A show of eight kings, the eighth king with a glass in
his hand, and Banquo last.

MACBETH 
Thou art too like the spirit of Banquo. Down!
Thy crown does sear mine eyeballs. And thy hair,
Thou other gold-bound brow, is like the first.
A third is like the former.—Filthy hags,
Why do you show me this?—A fourth? Start, eyes!
What, will the line stretch out to th’ crack of doom?
Another yet? A seventh? I’ll see no more.
And yet the eighth appears who bears a glass
Which shows me many more, and some I see
That twofold balls and treble scepters carry.
Horrible sight! Now I see ’tis true,
For the blood-boltered Banquo smiles upon me
And points at them for his.
The Apparitions disappear.
What, is this so?
FIRST WITCH 
Ay, sir, all this is so. But why
Stands Macbeth thus amazedly?
Come, sisters, cheer we up his sprites
And show the best of our delights.
I’ll charm the air to give a sound
While you perform your antic round,
That this great king may kindly say
Our duties did his welcome pay.
Music. The Witches dance and vanish.
MACBETH 
Where are they? Gone? Let this pernicious hour
Stand aye accursèd in the calendar!—
Come in, without there.

Enter Lennox.

LENNOX  What’s your Grace’s will?
MACBETH 
Saw you the Weïrd Sisters?
LENNOX  No, my lord.
MACBETH 
Came they not by you?
LENNOX  No, indeed, my lord.
MACBETH 
Infected be the air whereon they ride,
And damned all those that trust them! I did hear
The galloping of horse. Who was ’t came by?
LENNOX 
’Tis two or three, my lord, that bring you word
Macduff is fled to England.
MACBETH  Fled to England?
LENNOX  Ay, my good lord.
MACBETH, aside 
Time, thou anticipat’st my dread exploits.
The flighty purpose never is o’ertook
Unless the deed go with it. From this moment
The very firstlings of my heart shall be
The firstlings of my hand. And even now,
To crown my thoughts with acts, be it thought and
done:
The castle of Macduff I will surprise,
Seize upon Fife, give to th’ edge o’ th’ sword
His wife, his babes, and all unfortunate souls
That trace him in his line. No boasting like a fool;
This deed I’ll do before this purpose cool.
But no more sights!—Where are these gentlemen?
Come bring me where they are.
They exit.`

function eatData(input) {
  data = data.split("\n").join()
  data = data.split(".").join(" . ")
  data = data.split("!").join(" ! ")
  data = data.split("?").join(" ? ")
  data = data.split(",").join(" , ")
  data = data.split(" ")
  data = data.filter((k)=>k!=""&&k!=" ")
  data = data.map((k)=>k.toLowerCase())
  console.log(data)
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
        if (puncTerminating.includes(data[j])) {
          seedWhitelist.push(data[j+1])
        }
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

function format(text) {
  text = text.split(" i ").join(" I ")
  text = text.split(" .").join(".")
  text = text.split(" !").join("!")
  text = text.split(" ?").join("?")
  text = text.split(" ,").join(",")
  text = text.charAt(0).toUpperCase() + text.slice(1)
  return text
}


let outputText = ""
function run(count) {
    outputText = ""
    for (let i=0; i<count; i++) {
      let seed = ""
      while (seedBlacklist.includes(seed)) {
        seed = seedWhitelist[Math.floor(Math.random()*seedWhitelist.length)]
      }
      newWrite = write(seed)
      newForm = format(newWrite)
      console.log(i+1,newWrite,newForm)
      outputText += "<br>"+(i+1)+"  "+newForm
    }
}

function updateOutput() {
  console.log("seedWhitelist:",seedWhitelist)
  run(3)
  outputBox.innerHTML = outputText
}