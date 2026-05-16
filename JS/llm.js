//BASE
const mainBody = document.getElementById("mainBody")
const input = document.getElementById("input")
const outputBox = document.getElementById("output")
const manualOutput = document.getElementById("manualOutput")
let outputText = ""

//SEED LISTS & FORMATTING
const seedBlacklist = [" ",""]
let seedWhitelist = []
const capitalizedWords = ['i','lord','sankara',
  'french','france','burkina','faso','volta',
  'october','sahel','palestine','palestinian',
  'israel','africa','latin','america','american',
  'asia','asian','thomas','caesar','god','macbeth',
  'banquo','hecate','duncan','malcolm','donalbain',
  'macduff','lennox','ross','menteith','angus',
  'caithness','fleance','siward','seyton','cawdor',
  'ireland','birmingham','dunsinane','morocco','barry','larry',
  'afghanistan','norweyan','josé','marti']
const punctuation = [",",";",":",".","!","?","[","]","(",")",
  "{","}","<",">","/","\`","~","\'","\"","|","-","—","—","—"]
const puncTerminating = [".","!","?"]
const wordBlacklist = ["negro","nigger"]

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
let data = `

Skip to main content
Here’s my try at the POTUS Challenge, holding up a book I’ve never read in front of a place I never go into. : r/PoliticalHumor
Sign Up
Log In
Skip to Navigation
Skip to Right Sidebar
Go to PoliticalHumor
r/PoliticalHumor
•
6y ago
Obieseven
Here’s my try at the POTUS Challenge, holding up a book I’ve never read in front of a place I never go into.
r/PoliticalHumor - Here’s my try at the POTUS Challenge, holding up a book I’ve never read in front of a place I never go into.
132K
·
1.2K
Comments Section
[deleted]
•
6y ago

Please let this become a worldwide trend. Please.
5.2K
u/epicurean56 avatar
epicurean56
•
6y ago

See r/potuschallenge
2.5K
-meatwallet-
•
6y ago

Make sure to hold your books upside down
33
invisible_for_this
•
6y ago

This is hilarious. We need to make this a thing.
829
[deleted]
•
6y ago

Yes this needs a sub
145
u/Obieseven avatar
Obieseven
OP •
6y ago

Hey OP here, I really need to credit TrentSteel11 for being first.
392
[deleted]
•
6y ago

Brilliant. Bonus points if you used chemical weapons to get to the Planet Fitness
1.1K
u/rubyspicer avatar
rubyspicer
•
6y ago

As an old dude I assume he farts a lot
232
sea12bass
•
6y ago

Genius.

Unfortunately you’re at least holding the book right side up, showing more competency than our current president.
817
Mortomes
•
6y ago

Is it your book?
138
u/Obieseven avatar
Obieseven
OP •
6y ago

It’s a book.
466
hershculez
•
6y ago

Those shoes are bad ass.
122
u/22mustang avatar
22mustang
•
6y ago

I seriously thought it was my dad.
37
u/ok-milk avatar
ok-milk
•
6y ago

Not pictured: crossfitters that were tear gassed as they were peacefully planking.
151
OneHouseDown
•
6y ago

Wait a sec....Is the lock box holding the key just....TIED to the door instead of ACTUALLY be locked ONTO the door?!?
92
asherabram
•
6y ago

Holy fuck you are right. That’s a shifty solution right there.
33
lol62056
•
6y ago

Then wait for thousands of people to call you the Savior and the next coming of Jesus
23
carc
•
6y ago

POTUS Challenge should be trending. Love it.
22
wangsneeze
•
6y ago

Wow, this is fucking genius. This needs to be a movement. “Posing with books”

Ps... fuck trump.
19
u/Diss_Gruntled_Brundl avatar
Diss_Gruntled_Brundl
•
6y ago

I held up a copy of Shakespeare at Shake Shack.

Who am I kidding. I've had Shake Shack.
17
duffmannn
•
6y ago

I'm gonna grab a copy of Dianetics and start stalking Leah Remni
14
[deleted]
•
6y ago

This.... needs to be a trend
28
u/kontekisuto avatar
kontekisuto
•
6y ago

See you in the front page of Reddit
13
u/andrewstern57 avatar
andrewstern57
•
6y ago

The irony of a bodybuilding book at planet fitness is even better.
10
[deleted]
•
6y ago

Got turn the book upside down
27
[deleted]
•
6y ago

This is brilliant
18
[deleted]
•
6y ago

That's just wrong. You're supposed to hold it upside down.
18
[deleted]
•
6y ago

I made a thing for you
17
u/LuckyandBrownie avatar
LuckyandBrownie
•
6y ago

This is good because it has an extra layer. Planet Fitness has nothing to do with bodybuilding. They actually discourage it through their policies. Just like the church has nothing to do with the bible. They actually discourage it through their policies.
94
u/Flashdancer405 avatar
Flashdancer405
•
6y ago

Shitting on planet fitness won’t improve your gains
27
[deleted]
•
6y ago

I've been trying to figure out what Planet Fitness actually is. Definitely not a gym, possibly a very elaborate treadmill, really just somewhere to listen to music.
21
Kezibythelake
•
6y ago

Love it.
8
u/Anneso1975 avatar
Anneso1975
•
6y ago

Love it😃
8
u/quontru avatar
quontru
•
6y ago

Is that my Dad?
8
SmokeyBlazingwood16
•
6y ago

Hey is that Arnold Schwarzenegger?
5
letsleepingdogswake
•
6y ago

I am loving these POTUS challenges!!
5
Validus812
•
6y ago

Um, did you gas and beat people to clear the way for the picture? It’s not accurate if you missed the point.
5
u/BuckyJackson36 avatar
BuckyJackson36
•
6y ago

Nice touch with the red shirt, I'm assuming it was for effect.
5
u/E_Penfold avatar
E_Penfold
•
6y ago

I know I'm giving a away karma by sharing my idea, but please can somebody with a Trump wig stand in front of a Spray-Tan shop and hold "orange is the new black"?

I know I haven't the time for doing it myself.
5
Burner0123xo
•
6y ago

Nice 👍🏽
4
Kantotheotter
•
6y ago

I like your humor OP.
4
u/dingdongdoodah avatar
dingdongdoodah
•
6y ago

Is this a thing? If not it should be! Oh and don't forget to tweet that to bunker boy and his cronies.
4
dunkinninja
•
6y ago

Oh this is beautiful. Lol
4
kmurph72
•
6y ago

Up vote up vote up vote.
4
u/thom_run avatar
thom_run
•
6y ago

We so needed this today. Lol... Awesomeness!!
4
u/Kevinhy avatar
Kevinhy
•
6y ago

Bodybuilding: The Complete Contest Preparation Handbook By Cliff Wilson and Peter Fitschen

Not a bad book tbh
4
u/Cool_Guy_McFly avatar
Cool_Guy_McFly
•
6y ago

Have the members of Planet Fitness started talking about how muscular you are on the Facebook yet?
4
u/timmydontcare avatar
timmydontcare
•
6y ago

Out fucking standing!!!
4
u/kellyb1985 avatar
kellyb1985
•
6y ago

It doesn't count unless you tear gas peaceful protestors.
4
dnick
•
6y ago

Holding it too normally. It should also look like you’ve never held a book before, and assume it is some kind of mysterious communication device you don’t want to accidentally open, somehow alerting the enemy to your presence.
4
[deleted]
•
6y ago

It’s supposed to be upside down and backwards.
6
u/rockclimberguy avatar
rockclimberguy
•
6y ago

You are not holding it upside down and backwards....
6
ArcadeKingpin
•
6y ago

Its not upside down and backwards
6
[deleted]
•
6y ago

u/OfficialGrimmBros avatar
OfficialGrimmBros
•
6y ago

Book needs to be upside down
6
u/whiznat avatar
whiznat
•
6y ago

If you can't hold it upside down and backwards (because no one could read the title), shouldn't it at least be upside down?
6
u/whydoihavetojoin avatar
whydoihavetojoin
•
6y ago

Hold it upside down
6
u/HoopaOrGilgamesh avatar
HoopaOrGilgamesh
•
6y ago

Gotta hold it upside-down
6
u/Summer_Pi avatar
Summer_Pi
•
6y ago

And backwards!
3
u/Veilwinter avatar
Veilwinter
•
6y ago

LOL nice
3
u/JunglePygmy avatar
JunglePygmy
•
6y ago

Love it. I’m going to do one.
3
u/KnowNotAnything avatar
KnowNotAnything
•
6y ago

Art of the Deal in front of Trump Tower.

Don't buy it. Just pass one book on. Use gloves.
3
thebestatheist
•
6y ago

Gawd damn, this is blazing! Well fucking done!
3
u/faceeatingleopard avatar
faceeatingleopard
•
6y ago

Fake news, that guy is clearly ripped!
7
quietfellaus
•
6y ago

Its gotta be backwards and upside-down though
5
u/reasonstobeherful234 avatar
reasonstobeherful234
•
6y ago

Turn it upside down!
2
[deleted]
•
6y ago

This should be a thing. Please make this a thing.
2
aiandi
•
6y ago

You have my vote in 2020
2
[deleted]
•
6y ago

LMAO!!! This is the best one yet.
2
CamboRambo873
•
6y ago

Wish I would have thought of this challenge! LMAO
2
barefootjackrabbit
•
6y ago

Now this is actually funny
2
chilltx78
•
6y ago

He's holding the book wrong. It should be upside down and backwards
2
mad_titanz
•
6y ago

He should hold the book backward, like Trump did with the Bible. Otherwise it's perfect.
2
[deleted]
•
6y ago

Now this is the kind of humor I love
2
[deleted]
•
6y ago

To be fair, no one really works out at Planet Fitness.
2
FeelinJipper
•
6y ago

To be fair, you can’t build muscle reading a book lol.
2
[deleted]
•
6y ago

This is the post I didn’t know I needed today.
2
RDwelve
•
6y ago

Holy fucking shit. Did this sub actually post something funny?! The year has been quite surprising thus far but nothing could have prepared me for that!
2
u/dflame45 avatar
dflame45
•
6y ago

Fucking hilarious
2
nickfrik
•
6y ago

Book's not upside down.
2
AreJewOkay
•
6y ago

Now you just need to hold it upside down
2
stynsrienie
•
6y ago

You forgot to hold the book backwards and upside down.
2
u/SlothLipstick avatar
SlothLipstick
•
6y ago

Can I share this on twitter?
2
u/Is_this_parody avatar
Is_this_parody
•
6y ago

Be careful, I hear the police find older men very dangerous
2
u/tucker_frump avatar
tucker_frump
•
6y ago

Needs to be upside down and facing backwards. I seriously doubt DJT has ever read a single complete book of any volume. I at least read the stand ...
2
u/Anbuleader avatar
Anbuleader
•
6y ago

A funnier challenge would be to blame things on other people and film their reaction.

Forget a report at work? blame the last guy for not doing it for you.

Get an order wrong at mc donalds? Blame the last shift that didn't take the order.

Wife mad you didn't throw the trash? Blame her ex husband/last bf
2
u/maxreboallstars avatar
maxreboallstars
•
6y ago

Those shoes are Dad level 9000.
2
fatesteel
•
6y ago

close, but you forgot to hold it upside down and backwards
2
u/RossTheBossPalmer avatar
RossTheBossPalmer
•
6y ago

Where do I get those sneakers and could they be strapped on any tighter?
2
[deleted]
•
6y ago

u/AutoModerator avatar

RoscoMan1
•
6y ago

Poster: look at chat baby
1
u/premedial avatar
premedial
•
6y ago

Ok but grandpas shoes are FRESH
1
pascalsgirlfriend
•
6y ago

Haha. You rocked it!
1
D0NW0N
•
6y ago

That book needs to be upside down !!!
1
u/Torodong avatar
Torodong
•
6y ago

Fail: you held it the right way up!
1
u/craigdcknsSF avatar
craigdcknsSF
•
6y ago

Magazine should be upside down..🤪
1
[deleted]
•
6y ago

Challenge accepted
1
RoscoMan1
•
6y ago

Big Cat is reading a book
1
u/spottyottydopalicius avatar
spottyottydopalicius
•
6y ago

i can get behind this
1
mattjf22
•
6y ago

Close, but the book should be upside down and backwards.
1
u/KnowNotAnything avatar
KnowNotAnything
•
6y ago

Brilliant
1
[deleted]
•
6y ago

Finally - a challenge I can get behind.
1
u/aalleeyyee avatar
aalleeyyee
•
6y ago

Gore would like a word...
1
GreatPriestCthulu
•
6y ago

He forgot to hold the book upside down. Shame.
1
tampon_lemonade
•
6y ago

Should be backwards and upside down.
1
wml253
•
6y ago

So hilarious!
1
darkknight95sm
•
6y ago

Nailed the awkward and confused pose that says how little you care about the place you are and content of the book you’re holding
1
gaar93
•
6y ago

yall forgetting to hold it upside down
1
[deleted]
•
6y ago

Love this. I even searched potus challenge on youtube, hoping to find more or something but theres nothing! I hope to see more!! Classic
1
[deleted]
•
6y ago

You’re so strong!
1
biff_guchmen
•
6y ago

you forgot to hold it upside-down and backwards
1
Cricketcaser
•
6y ago

It's not backwards and upside down tho.
1
Daikataro
•
6y ago

Deducting points because the book is not upside down.
1
u/Yk_Lagor avatar
Yk_Lagor
•
6y ago

Rent free
1
u/CyberneticPanda avatar
CyberneticPanda
•
6y ago

You're supposed to hold it upside down and backwards.
1
DirtyArchaeologist
•
6y ago

Almost got it but I think the book has to be upside down and backwards as well. But please, keep up the good work!
1
[deleted]
•
6y ago

[deleted]
•
6y ago

Sorry this is low effort. Your face isn’t orange, your hair is in place and you look alert.

All jokes aside I think you started something. That’s hilarious!
1
u/Fraxinus2018 avatar
Fraxinus2018
•
6y ago

Close, but you’re not holding it upside down and backwards.
1
u/ROSERSTEP avatar
ROSERSTEP
•
6y ago

Maybe you don't work out but you have very nice legs.
1
u/ttomato avatar
ttomato
•
6y ago

The book needs to be upside down
1
u/No_Good_Cowboy avatar
No_Good_Cowboy
•
6y ago

Why is the book right side up?
1
u/Noble_Flatulence avatar
Noble_Flatulence
•
6y ago

HE'S THE ANTI-SWOL!
1
u/netflixandbarf avatar
netflixandbarf
•
6y ago

Will you be my dad?
1
u/ilovebunny13 avatar
ilovebunny13
•
6y ago

This is great!
1
u/Marzana1900 avatar
Marzana1900
•
6y ago

Count me in on that one.
1
Zerrg
•
6y ago

It's gotta be upside down
1
NickInTheMud
•
6y ago

Love it but the book really should be upside down.
1
CrisuKomie
•
6y ago

What the hell is that lock on the door?

A rope wrapped around the handles with a gigantic padlock?

Why would anyone even go for the padlock when you could just cut the rope off the handles?
1
u/sbradfordjones avatar
sbradfordjones
•
6y ago

You forgot the part about using tear gas beforehand.
1
u/OnyxFox89 avatar
OnyxFox89
•
6y ago

Nailed it! 👍

God I hope this becomes a fad/trend.
1
u/RelishSanders avatar
RelishSanders
•
6y ago

Simply put, a "masterpiece*!
1
[deleted]
•
6y ago

Yup, this is my favourite kind of learning
1
probably_juicy
•
6y ago

Everyone, for your own sake do not get a membership at planet fitness. Go to an actual gym with barbells. They don’t have bench presses or squat racks.
1
[deleted]
•
6y ago

This is a next level idea. Fantastic.
1
frawleyg
•
6y ago

Doing very well at this, they’re saying best ever, by large margin, maybe in history, margins, we’re doing really well in margins they’re saying, others are saying maybe not but very gross people, we’re doing very well, extremely well
1
littlespark88
•
6y ago

This is spectacular
1
[deleted]
•
6y ago

This trend could possibly be the greatest thing to happen in 2020. We're in the presence of greatness, people.
1
broomosh
•
6y ago

Upvote for the challenge. Comment for the shoes!
1
trynbnice
•
6y ago

Bahaha! Brilliant!
1
u/MissCittyCat avatar
MissCittyCat
•
6y ago

I really want to give you a full score, but you have the book right way up. So 9.5/10.

Excellent.
1
u/Jbird1992 avatar
Jbird1992
•
6y ago

Wow actually funny. Holy shit. Take notes, rest of sub. 2020 really must be the end
1
mdhunter99
•
6y ago

That’s a real challenge? Holy shit so much potential.
1
[deleted]
•
6y ago

😂 holy shit this was pure belly laughing I’ve had all week
1
Olusionist
•
6y ago

Bravo sir
1
u/ziggybugler avatar
ziggybugler
•
6y ago

You did it wrong though, you’re holding it as if you’ve read a book before.
1
[deleted]
•
6y ago

Bravo!
1
paper-or-plastic-
•
6y ago

We are witnessing the birth of a new social meme...
1
u/movezig5 avatar
movezig5
•
6y ago

Almost perfect. You have to hold it upside down.
1
potsdamn
•
6y ago

hahahahah
1
Strangcheeze
•
6y ago

WHAT ATE THOSEEEEEE
1
u/those-are-cool avatar
those-are-cool
•
6y ago

Some tough kicks too!
1
Aerik
•
6y ago

F for this man's sacrifice.
1
[deleted]
•
6y ago

This is a challenge I can get behind!
1
[deleted]
•
6y ago

Did you assault anyone on your way over there?
1
u/change_change_change avatar
change_change_change
•
6y ago

This. THIS is why I love Reddit 😍
1
Dasbootlegg
•
6y ago

I'd never be able to tell that you never go into the gym with such a sporty outfit on.
1
[deleted]
•
6y ago

shared_prophet
•
6y ago

Failed: didn't teargas anyone to do it.
1
[deleted]
•
6y ago

He forgot to hold it upside down! /s
1
u/allinfeelsamazing avatar
allinfeelsamazing
•
6y ago

Hahahahahahahahahahaaaaaaaa..... HAAAAAA!!!!!
1
u/canaussiecan avatar
canaussiecan
•
6y ago

Needs to be upside-down, you know for the simbolism.
1
rabbritt
•
6y ago

Thanks for the laugh!
1
u/broskilinski avatar
broskilinski
•
6y ago

Don't forget to hold it upside down!
1
[deleted]
•
6y ago

You are holding it wrong :)
1
JNSal
•
6y ago

Is that your bodybuilding book?

“It’s a bodybuilding book”
1
[deleted]
•
6y ago

Down with the orange man!
1
Rufus_heychupacabra
•
6y ago

You deserve a Presidential award.... 💪💪💪🏆🏆🏆🥇🥇🥇🏅🏅🏅
1
AlexLem84
•
6y ago

Love it
1
sawmyoldgirlfriend
•
6y ago

That book needs to be upside down and backward.
1
KiethTheBeast
•
6y ago

Fail, book was supposed to be upside down.
1
worldstarguy69
•
6y ago

Imma hold a book up in front of pussy 😭
1
AndkonArcade
•
6y ago

Average redditor
1
u/JoeSpic01 avatar
JoeSpic01
•
6y ago

It needs to be upside down though!
1
dayonepatientzero
•
6y ago

Upvote this man!
1
u/AXXXXXXXXA avatar
AXXXXXXXXA
•
6y ago

Would work better if he were fat. Still good tho
1
soulteepee
•
6y ago

Okay, I’m calling standing in front of one of Trumps hotels holding ‘The Art of the Deal’
1
[deleted]
•
6y ago

Me holding up a book on using essential oils to save me money
1
[deleted]
•
6y ago

Sorry, the book is held up in the correct orientation
1
notinferno
•
6y ago

You look like you’d be a pushover for the Buffalo PD.
1
u/midwifecrisisss avatar
midwifecrisisss
•
6y ago

i like your shoes
1
k33p3lz
•
6y ago

Its gotta be upside down
1
igloohavoc
•
6y ago

Book has to be backwards and upside down, try again.
1
profdudeguy
•
6y ago

But it's not upside down. That needs to be a requirement
1
[deleted]
•
6y ago

Ok this is fucking hilarious
1
-Danky_Kang-
•
6y ago

Lol brilliant!!
1
u/illwill2793 avatar
illwill2793
•
6y ago

God if humanity doesnt start doing this and doing the George floyd challenge instead I hope we all go extinct right then and there
1
Kilgor3
•
6y ago

Thank you, I'm going to do this too. Focus on the Family is just down the highway.
1
[deleted]
•
6y ago

Side note: can we acknowledge the velcro?
1
[deleted]
•
6y ago

You forgot to hold it backwards and upside down!
1
[deleted]
•
6y ago

This was exactly what I needed today. Thank you.
1
beesdonthaveknees123
•
6y ago

You forgot to hold it upside down.
1
pandapants77
•
6y ago

Nice try sir but you aren’t holding it backwards and upside down.
1
EleventhAngel
•
6y ago

I'm in. Stand by... I have to clean my kitchen for photo. ;)
1
Therowdy
•
6y ago

Weighting for the next one!
1
[deleted]
•
6y ago

It's supposed to be upside down.
1
ttbyrne
•
6y ago

You have to hold it upside down though, lol! This is awesome and I hope it starts a trend.
1
pike360
•
6y ago

This is awesome!
1
Grrwoofwag
•
6y ago

Aren’t we supposed to hold it upside down and backwards ?
1
TheVictor1st
•
6y ago

This explains everything about this sub lmaooo. Ran by boomers
1
noresignation
•
6y ago

Gotta hold it backwards and upside down!
1
Throck_Mortin
•
6y ago

I'd say you did a pretty good job but you forgot to hold it upside down and backwards.
1
u/coswoofster avatar
coswoofster
•
6y ago

That is so awesome.
1
u/kujo555555 avatar
kujo555555
•
6y ago

Very good, and I bet he didn't even gas and bully a bunch of innocent people to get the shot.
1
minion_haha
•
6y ago

Literal boomer humor on reddit
1
u/drifters74 avatar
drifters74
•
6y ago

I love this meme
1
jtsports272
•
6y ago

At least you held it the right way around !
1
[deleted]
•
6y ago

I ❤️ you
1
Glitteringfairy
•
6y ago

Old man goes REEEEEEEEEEEE!!!! would have been a better title
1
u/EZlikeSunMorn123 avatar
EZlikeSunMorn123
•
6y ago

This made me chuckle. Well played sir, well played.
1
u/MCYellowhammer avatar
MCYellowhammer
•
6y ago

Is that Bruce Dern?!
1
[deleted]
•
6y ago

[deleted]
•
6y ago

Oh man this gave me a good belly laugh.
1
aysurcouf
•
6y ago

Hilarious
1
u/MustardIsFood avatar
MustardIsFood
•
6y ago

That pad lock isn't doing anything unless it's also tied to the other door lol
1
sealarmpit
•
6y ago

You have white Velcro shoes on. Lol. U need to do some fashion challenges.
1
BushDidSixtyNine11
•
6y ago

I’m glad that my vision of the users in this sub is dead on

Edit: but the Velcro sneakers was too big a flex I expected crocs
1
Knight-Raid29
•
6y ago

I bet you are a machine on the grill!? And calls everyone champ or sport?
1
u/NotMyFaultImMoody avatar
NotMyFaultImMoody
•
6y ago

Dude, he got the Velcro...
1
oldtobes
•
6y ago

you're not holding it backwards.
1
[deleted]
•
6y ago

Now this is a challenge I can get behind. Get the whole world in on this.
1
AdvertentAtelectasis
•
6y ago

Man, I gotta get in on this challenge.
1
[deleted]
•
6y ago

Lol
1
BasicallyAQueer
•
6y ago

Lol that was so cringe of Trump. Gassed innocent people, just so he could go out for a photo op to stroke the y’all Qaeda voter base.
1
u/RustyRiggNUTS avatar
RustyRiggNUTS
•
6y ago

I hope this blows up big time too! I will be brainstorming for for a good pic!
1
rickredmond
•
6y ago

The New York Times just declared Canada as the moral leader of the free world . I am somewhat embarrassed that being nice to other people and caring , needs to be pointed out . For some time Canada has been portrayed as a socialist country . I am proud to live in a socialist country .
1
roninhomme
•
6y ago

those shoes are fire
1
HeWhomLaughsLast
•
6y ago

6/10 not enough civil unrest or cheeto dust
1
Clammy17
•
6y ago

You can tell it was upside from the book mark ribbon. The never put those on the bottom of a book
1
itoshirt
•
6y ago

Homie probably should be going to the gym though
1
rkdbsbl
•
6y ago

Velcro shoes!! But I LOVE this!
1
Bard2dbone
•
6y ago

Remember to try the Trump Drinking Game. Any time he says something true you take a drink.

I've been completely sober for four and a half years
1
[deleted]
•
6y ago

Challenge to make this happen. Please.
1
u/averyfinename avatar
averyfinename
•
6y ago

doesn't look like they want you, either.
1
[deleted]
•
6y ago

Quite obvious you never go there.
1
pobregatito
•
6y ago

Shared and upvoted.
1
u/gowiththeflow- avatar
gowiththeflow-
•
6y ago

Hilarious!! I hope to see more of these
1
[deleted]
•
6y ago

u/AutomaticPython avatar
AutomaticPython
•
6y ago

You think Bill Clinton read the bible? fuck off.
1
CrazyCaper
•
6y ago

2 things he should probably do! Reading is good for fighting early onset dementia, and weightlifting helps with testosterone when you get older!
1
u/LetWaldoHide avatar
LetWaldoHide
•
6y ago

Even being a citizen of a country with Donald trump as president, the lunk alarm might be the most embarrassing thing about our country.
1
u/Randyismymom avatar
Randyismymom
•
6y ago

He’s in better shape than most planet fitness members tho
1
ImThatChigga_
•
6y ago

Someone needs to dress as a cop standing in front of a police department with a book of code of conduct
1
WPGSquirrel
•
6y ago

Its supposed to be backwards and upside down.
1
[deleted]
•
6y ago

I hope this becomes a thing.
1
TheYellowRose
•
6y ago

8/10 the book isn't upside down and backwards
1
[deleted]
•
6y ago

Wow the first post on r/politicalhumor that I actually laughed at. Good work!
1
nice2yz
•
6y ago

I looked it up; it's dildos.
1
u/MesopotamiaSong avatar
MesopotamiaSong
•
6y ago

I can only think about the band “presidents of the United States of America” after reading POTUS
1
notaclevernameguy
•
6y ago

How does a man have tanner legs than arms?He’s reverse me come summer every time
1
[deleted]
•
6y ago

great cosplay
1
ranovermycat
•
6y ago

This is fantastic.
1
sybersonic
•
6y ago

Turn it upside down and backwards.

...we have standards.
1
Simen155
•
6y ago

You failed.. The book must be held with contempt, and upside down
1
u/fluffydimensions avatar
fluffydimensions
•
6y ago

Is that your bodybuilding book?
1
[deleted]
•
6y ago

Please... someone go to any statehouse holding the constitution.
1
u/SmokinReaper avatar
SmokinReaper
•
6y ago

The book isn't upside down though
1
_KingMoonracer
•
6y ago

This is amazing.
1
isolatedcaptain
•
6y ago

Nailed it
1
ClownChasingCars
•
6y ago

And the internet award of the day goes to...
1
jordan-kepper
•
6y ago

I'm dead
1
[deleted]
•
6y ago
ROFL
1
valonnyc
•
6y ago

The Art of the Deal in front of any Trump property
1
[deleted]
•
6y ago

Haha. I think you have to also hold the book upside down and backwards!
1
FrankyJuicebox
•
6y ago

Absolute legend
1
Annastasija
•
6y ago

This needs to be a moment.. everyone needs to do this
1
DizzyWhereas3
•
6y ago

A book on body building is much more useful than a bible
1
[deleted]
•
6y ago

The velcro sneakers make the photo.
1
kittymarshall13
•
6y ago

This is awesome, thank you
1
u/CleverBunnyThief avatar
CleverBunnyThief
•
6y ago

Did you trample any constitutional rights on the way there?
1
Slothyflexibility
•
6y ago

God damn this is amazing
1
[deleted]
•
6y ago

Finally an internet challenge I can get behind
1
holymolybreath
•
6y ago

Are those the retired dad shoes? Or are they still dad shoes?
1
opusair
•
6y ago

Shouldn't the book be upside down and backwards?
1
u/Unraveller avatar
Unraveller
•
6y ago

Please hold upside down and backwards next time.
1
u/shomealthblueprints avatar
shomealthblueprints
•
6y ago

Ok boomer
1
u/AutoModerator avatar
AutoModerator
MOD •
6y ago

At least boomers actually vote

I am a bot, and this action was performed automatically. Please contact the moderators of this subreddit if you have any questions or concerns.
3
u/Waddlow avatar
Waddlow
•
6y ago

Holding up a book I've never read that contains discplines I do not practice in front of a place I never go into.
1
[deleted]
•
6y ago

Vietnam-- We all know Trump paid for a pass on Vietnam. Please....have someone post themselves in Vietnam with a bible upside down and backward or another book that's better.
1
spacecatJ
•
6y ago

I hope the president sees this lmfao
1
[deleted]
•
6y ago

Holy shit. Actual political humor was posted on r/PoliticalHumor and made it to popular! Hell must be frozen solid!
1
SaigoBattosai
•
6y ago

He literally looks just like my dad except skinny. If he had a big gut and no facial hair then it's pretty much my dad. The face and glasses and hair are all pretty much the exact same.
1
[deleted]
•
6y ago

The best part is that Planet Fitness is the absolute last gym that a bodybuilder would go to, which leads me to believe that OP isn’t shitting us when he says he never goes to the gym.
1
[deleted]
•
6y ago

this is actually the first challenge I would accept if it was a trend.
1
u/weedporn42069 avatar
weedporn42069
•
6y ago

You held the book right side up. Must be literate smh
1
1_happy_boi
•
6y ago

Smh it's not upside down.
1
[deleted]
•
6y ago

Lol now do it upside down and backwards
1
killas187
•
6y ago

Nice
1
Jay_909_
•
6y ago

You forgot it has to be upside down.
1
edwartica
•
6y ago

This makes me want to go hold up a copy of Dianetics in front of the Scientology building.
1
u/DL_McCoins avatar
DL_McCoins
•
6y ago

Its rightside up tho..
1
loonygirl30
•
6y ago

I laughed for like 10 whole minutes.
1
u/bserum avatar
bserum
•
6y ago

We'll have to dock him a point for not standing at an awkward forward angle, but an otherwise strong showing.
1
u/JK_not_a_throwaway avatar
JK_not_a_throwaway
•
6y ago

Tbf nobody that reads that book would go to planet fitness either
1
u/WhoWantsPizzza avatar
WhoWantsPizzza
•
6y ago

This is a very powerful image. I’m inspired. Thank you.
1
SPlendidBrass
•
6y ago

I give you an A- only because you arent also holding it upside down
1
daaglas
•
6y ago

You’re holding the wrong book for planet fitness too. Should be a book about pizza and bagels
1
u/cigawhisk avatar
cigawhisk
•
6y ago

Those shorts and shoes...this guy knows how to backyard bbq
1
u/ReginaldJohnston avatar
ReginaldJohnston
•
6y ago

Oh, I get it now....

Dangnabbit!
1
[deleted]
•
6y ago

More like TDS challenge
1
u/Th4tRedditorII avatar
Th4tRedditorII
•
6y ago

Is that your fitness guide?

"It is... a fitness guide"
1
apdett
•
6y ago

Ahahhahahah
1
Dwimm_SS
•
6y ago

Hollar at them velcro sneakers
1
bensefero
•
6y ago

Only problem is it looks like you have held a book before
1
u/Krimreaper1 avatar
Krimreaper1
•
6y ago

You forgot to hold it upside down.
1
[deleted]
•
6y ago

LOL. Nice Velcro shoes. Maybe you should stay away from anything too heavy. Don't want you to hurt yourself.
1
[deleted]
•
6y ago

It's right side up, nice try !
1
piejam
•
6y ago

Should have held it upside down.
1
HNixon
•
6y ago

You have to hold it like a burger .. with tiny hands
1
[deleted]
•
6y ago

Genius 😂
1
lambojam
•
6y ago

nice velcro shoes
1
fluffykerfuffle1
•
6y ago

:D

and you don’t need to lol you look just fine ..mighty fine!

and you hold that book way more naturally than POTUS held the Bible!
1
CocoBananananas
•
6y ago

Buddy I LOVE THIS

FUCKING GENIUS RIGHT HERE
1
[deleted]
•
6y ago

Why can’t this guy be my dad?
1
[deleted]
•
6y ago

Close. Except, you need to resemble an orange and the off-screen “guards” should be dousing you with holy water.
1
u/adjectiveyourface avatar
adjectiveyourface
•
6y ago

my god i love this

what is this officially called?

The trump challenge?
1
u/DocAnchovy avatar
DocAnchovy
•
6y ago

This is the content I like
1
widowwarmer1
•
6y ago

Bruce Dern?
1
u/awesomecatdad avatar
awesomecatdad
•
6y ago

That’s fuckin hilarious!
1
u/LDOG3321 avatar
LDOG3321
•
6y ago

😂😂😂😂
1
eclecticmuse
•
6y ago

Finally a challenge I support with confidence
1
u/wayfarout avatar
wayfarout
•
6y ago

Two biggest differences being that you're holding the book the right way and you could actually comprehend the material.
1
[deleted]
•
6y ago

Hell yeah.
1
kates03
•
6y ago

im on board with ya'll, but it was in his right hand
1
u/welshyjay avatar
welshyjay
•
6y ago

This challenge is the most amazing thing I've ever seen/heard about
1
Ziller21
•
6y ago

Read me one of your favorite lines!
1
u/angry_italian avatar
angry_italian
•
6y ago

Can this please become a new trend? I love it
1
[deleted]
•
6y ago

Please do Trump in Vietnam with a map upside down. Please. I'll give you gold.
1
shann0ff
•
6y ago

Lolol
1
singingtable
•
6y ago

You have to hold it upside down and backwards.
1
jetlifestoney
•
6y ago

Idk, he clearly has some solid pecs
1
u/jkjiggles avatar
jkjiggles
•
6y ago

"Damn he got the velcro's"
1
[deleted]
•
6y ago

This is comedy heaven.
1
nobody_nothing-
•
6y ago

I want you to know I love you OP
1
ShooterMcStabbins
•
6y ago

Backwards and upside down
1
[deleted]
•
6y ago

To be fair, bodybuilding and Planet Fitness don’t exactly go together all that well. Not unlike how a lot of churches don’t exactly follow the teachings of Jesus in the Bible I suppose.
1
[deleted]
•
6y ago

Can’t wait until I reach an age where I can acceptably wear shoes with Velcro straps again.
1
saib36
•
6y ago

Sorry for it to count you have to hold the book upside down abs backward
1
kahunamoe
•
6y ago

A perfect 5 out of 7. its not upsidedown or backwards.
1
[deleted]
•
6y ago

Hold it upside down and backward.
1
cage_free
•
6y ago

Is that your Body Building book?
1
u/tem123456 avatar
tem123456
•
6y ago

Thank you. I needed the laugh you gave me.
1
u/Ottfan1 avatar
Ottfan1
•
6y ago

Bro ur making mad gains already
1
[deleted]
•
6y ago

This is incredible. Risking so much to make such a bold statement. Keep up the good work for real.
1
u/TheCleaner75 avatar
TheCleaner75
•
6y ago

Ooh, this is clever! I like it.
1
[deleted]
•
6y ago

turn the book upside down
1
free112701
•
6y ago

Still more believable
1
[deleted]
•
6y ago

Don't forget to hold the book upside down!
1
u/pandaSmore avatar
pandaSmore
•
6y ago

Is this really you OP?
1
u/ClintonWeathershed avatar
ClintonWeathershed
•
6y ago

You shouldn't go to planet fitness anyway
1
u/pandaSmore avatar
pandaSmore
•
6y ago

You actually do look like someone who would go into a planet fitness.
1
u/funwithdullknives avatar
funwithdullknives
•
6y ago

If only the symbolism wasn't lost on the cheeto.
1
[deleted]
•
6y ago

Is that your workout tutorial?...it’s a workout tutorial.
1
Daywalker2000
•
6y ago

Is that your book?
1
u/ImagineDelete avatar
ImagineDelete
•
6y ago

Omg, I love this
1
darwinn_69
•
6y ago

I, for one, am buying this meme format.
1
[deleted]
•
6y ago

Dawg, you gotta hold the book upside down and backwards.

/t
1
[deleted]
•
6y ago

Should of held it upside down
1
[deleted]
•
6y ago

Planet Fitness. Come for the free pizza, stay for alarms that go off if you deadlift.
1
KabuGenoa
•
6y ago

That wound will never fully heal. He will carry it the rest of his life.
1
patrickbateman02
•
6y ago

Sweet pumps bro. How high can you jump in those
1
paulen_angle
•
6y ago

Flexin on us with the pristine white velcro sneaks!
1
[deleted]
•
6y ago

DAD JOKE LEVEL 100 MAXIMUM FUNNI
1
SoberDWTX
•
6y ago

Omg!!! This is a thing??!! Haha haha 🤣 I love it. R/potuschallenge
1
u/bcs2000 avatar
bcs2000
•
6y ago

Oh this picture is going to meme for gym rats.
1
u/royalbucket avatar
royalbucket
•
6y ago

Literally belly laughed !! I needed that.
1
Lifeback7676
•
6y ago

This is by far the best thing I have seen today!
1
[deleted]
•
6y ago

It’s not upside down
1
u/AyoJayR avatar
AyoJayR
•
6y ago

Should've held it upside down
1
u/Icewaterforall avatar
Icewaterforall
•
6y ago

I needed this, thank you!! Hopefully it takes off like the Getty art challenge!!!!
1
[deleted]
•
6y ago

You're holding it right side up though.
1
Regretsfourdays
•
6y ago

Turn it upside down and put on another 100lbs, then you should be good
1
[deleted]
•
6y ago

Like the sentiment, love the shoes !!!
1
[deleted]
•
6y ago

Should be upside down imo.
1
u/5kidChris avatar
5kidChris
•
6y ago

But it's got to be backwards and upside down.
1
[deleted]
•
6y ago

This is gold
1
u/Baron-Von-Butcher91 avatar
Baron-Von-Butcher91
•
6y ago

You gotta hold the book upside down. Its ruined, redo it
1
u/Moranmer avatar
Moranmer
•
6y ago

Hahaha I love it. Great idea!
1
u/orwiad10 avatar
orwiad10
•
6y ago

I wanna see an Amish holding up a hustler in front up the strip club.
1
ineedtoknowmorenow
•
6y ago

These kind of posts only fuel is ego.
1
u/xurjix avatar
xurjix
•
6y ago

I'll go on permanent record as saying this is the only challenge I have ever, and will ever, support.
1
Carlos_Spiceyweiner
•
6y ago

Proving what a bitch you truly are
1
u/enkidomark avatar
enkidomark
•
6y ago

This is the Pabst Blue Ribbon of political memes.
1
u/KlumsyNinja42 avatar
KlumsyNinja42
•
6y ago

Well you see you messed up because the book isn’t backwards and upside down. Also maybe try assaulting some people on your way there?
1
blackoutfallout
•
6y ago

I love your shoes!!! Too cute!! ❤️
1
[deleted]
•
6y ago

The book is not upside down though.
1
Myko475
•
6y ago

Take my upvote jesus christ!
1
NaziPunksFuckOff__
•
6y ago

Hahahahaha
1
Farleymcg
•
6y ago

This needs to gain traction, it’s hilarious
1
[deleted]
•
6y ago

You're not holding the book upside down and back to front
1
LochNessMansterLives
•
6y ago

Why aren’t you holding it backwards and upside down?
1
TonySopranosforehead
•
6y ago

Op, are you really the man in the picture? I didn't realize that generation was on reddit, huh.
1
brs498
•
6y ago

Forgot to put it backwards and upside down, and to mace the man who runs the place, but still have to love it .
1
u/Make_Pepe_Dank_Again avatar
Make_Pepe_Dank_Again
•
6y ago

Wait, this is actually funny.
1
u/Atomskie avatar
Atomskie
•
6y ago

Well executed!
1
[deleted]
•
6y ago

You have to hold it upside down
1
[deleted]
•
6y ago

Yo fr fuck planet fitness that shit is a hardcore ripoff
1
realdjjmc
•
6y ago

Trolololololol !
1
Bing_Bong_the_Archer
•
6y ago

That is hilarious
1
AshleyStanbridge
•
6y ago

Lolllll
1
u/JaeJRZ avatar
JaeJRZ
•
6y ago

Aahhhahahaah I wanna hang with this guy!!
1
u/medic7845 avatar
medic7845
•
6y ago

lol
1
u/bangster186 avatar
bangster186
•
6y ago

Did you know if wasn’t for ectomorphs the United States would have a higher percentage of obesity since they can eat a lot and still look skinny if they were to have a different a body type they would look really fat
1
u/Skizm avatar
Skizm
•
6y ago

TBF, no one who has read a bodybuilding book would ever go to a planet fitness either.
1
egalroc
•
6y ago

Yeah, my treadmill collects about as much dust as the Trump family Bible.
1
America_is_funny
•
6y ago

Oh man, cue republicans and conservative snowflake meltdown.
1
u/slanderbeak avatar
slanderbeak
•
6y ago

Doing this
1
u/whittlingcanbefatal avatar
whittlingcanbefatal
•
6y ago

You need to hold the book upside down and backwards to be really accurate.
1
Fr_Benny_Cake
•
6y ago

Hopefully this situation is what will finally kill off reddit. Worst post I've seen in a while.
1
u/downtime37 avatar
downtime37
•
6y ago

You forgot to have you goons tear gas and shoot random citizens that are to close, so I'm going to have to deduct points.
1
masseusemoose
•
6y ago

You did a little better with holding it right side up.
1
zipknight
•
6y ago

Need to hold it upside down and backwards!! 😂
1
wemdy420
•
6y ago

Oh this is fuckin good! Hardest I've laughed all day! 🤣🤣🤣
1
luaprelkniw
•
6y ago

But it's not upside down!
1
u/xQueenAryaStark avatar
xQueenAryaStark
•
6y ago

So this was totally your original idea, huh?
1
[deleted]
•
6y ago

I like it, I love it, I'm doing it.
1
kylebutler775
•
6y ago

Big piece of veal
1
u/gggttthhhh67 avatar
gggttthhhh67
•
6y ago

Automatic
1
sebnukem
•
6y ago

You're doing it wrong. You have to hold upside down.
1
u/AnotherReaderOfStuff avatar
AnotherReaderOfStuff
•
6y ago

You're not fat enough to represent a history of being anti-fitness like Trump has established of being against every Christian moral. Please try again. (Or resubmit this photo after publicly coming out against fitness repeatedly for years.)
1
[deleted]
•
6y ago

FAIL. it's not upside down. but upvote for cuteness :)
1
[deleted]
•
6y ago

At least he’s holding the book so you can understand what book it is!
1
[deleted]
•
6y ago

i love you bruh
1
u/Arcadian18 avatar
Arcadian18
•
6y ago

I looked it up; it's dildos.
1
u3z
•
6y ago

Fail, you didn't hold it upside down.
1
Awakedread
•
6y ago

Loving the velcro shoes, as a 33 year old dad with a pair of blue ones, I'm glad to know I'm following the way of the dad correctly
1
pizzafries0
•
6y ago

YES
1
u/L3VANTIN3 avatar
L3VANTIN3
•
6y ago

Clearly
1
harmonicoasis
•
6y ago

9/10, failed to hold the book upside down
1
eyehate
•
6y ago

"Is it yours?"

"It's a bodybuilding bible."

"But is it yours?"

"It's a bodybuilding bible."
1
brennanfee
•
6y ago

Fail... you held the book up correctly. He held it up backwards AND upside down.
1
PO-43-
•
6y ago

Needs to hold it upside down and backwards
1
bang__your__head
•
6y ago

You win the internet today, sir
1
asiantmulder
•
6y ago

Nailed it. Obviously a normal and satisfied geezer taking pictures of hijinks for the admiration of tweens
1
neanderthalsavant
•
6y ago

Love. It.
1
[deleted]
•
6y ago

Your TDS is showing.
1
u/Contract-Unlucky avatar
Contract-Unlucky
•
6y ago

Fuck off you racist old white fuck. You can pretend to care about us, yet you will never come to are neighborhoods because you're scared. You're the type of trash that crosses the street when you see people like me.
1
hamsolo19
•
6y ago

Target represent with that outfit haha
1
u/elementgermanium avatar
elementgermanium
•
6y ago

No, it’s gotta be upside down and backwards
1
smellslikedesperate
•
6y ago

this is actually very funny
1
[deleted]
•
6y ago

Love this one.
1
[deleted]
•
6y ago

Please tell me this is a thing now.
1
u/thepopeisacowboysfan avatar
thepopeisacowboysfan
•
6y ago

look at that dope ass fit
1
u/i_broke_wahoos_leg avatar
i_broke_wahoos_leg
•
6y ago

Haha. Good job mate.
1
Kennuckle
•
6y ago

What's the POTUS challenge?
1
NoGamesWithoutLude
•
6y ago

What is this, something that is actually kinda funny on r/politicalhumor?
1
nice2yz
•
6y ago

I looked it up; it's dildos.
1
basyt
•
6y ago

yeah but you had to hold it backwards and upside down too
1
u/TheBrettitor avatar
TheBrettitor
•
6y ago

Planet Fitness? You probably just got the Rona from standing near that door.
1
u/DuntadaMan avatar
DuntadaMan
•
6y ago

I love this one already!
1
u/madhattergm avatar
madhattergm
•
6y ago

Brilliant. Did he have his personal soldiers disperse clergy and terrorists before he took the photo? And did he make sure to label constitutionally "protected" citizens the same as 9/11 perpetrators?
1
u/loodog avatar
loodog
•
6y ago

Velcro shoes with the cargos, dad energy is strong
1
ThatGamerMoshpit
•
6y ago

Your doing it wrong! The book needs to be upside down and backwards....
1
[deleted]
•
6y ago

You are a man amongst boys.
1
aesthetic_laker_fan
•
6y ago

You are in better shape than most of the planet fitness demographic
1
FrijoGuero
•
6y ago

Those velcro shoes!!! You are a Ladies man! You gotta get a matching velcro wallet with those kicks, the women won’t even care that you don’t work out!
1
u/s44s avatar
s44s
•
6y ago

That book in front of that building is like holding up the Quran in front of a synagogue.
1
PRpitohead
•
6y ago

Please someone do The Art of the Deal in front of Trump Tower
1
TheFalconKid
•
6y ago

The new presidential fitness challenge.
1
u/guruXalted99 avatar
guruXalted99
•
6y ago

Lol
1
MoldyRiceWater
•
6y ago

Those are some NICE kicks
1
[deleted]
•
6y ago

Trumps been to church. Down in Atlanta. Cinnamon and nem
1
max_restricted
•
6y ago

this man is a savage
1
u/Haikuna__Matata avatar
Haikuna__Matata
•
6y ago

No good; OP is displaying the book’s cover, and it is right side up.
1
pbrochon
•
6y ago

Holy shit, an actual humorous post on this liquid turd if a sub. Colour me shocked
1
lolseven6767
•
6y ago

Forgot to hold it upside down!
1
u/Cheveyo avatar
Cheveyo
•
6y ago

Remember like 5 days ago when you were attacking people for going outside and also for not wearing masks?
1
[deleted]
•
6y ago

Yeah I wouldn’t go into a Planet Fitness either.
1
u/MungTao avatar
MungTao
•
6y ago

Combination of choice in book and choice in location is a good format here. I cant think of anything funny but I see the potential.
1
u/brathorim avatar
brathorim
•
6y ago

This is the only funny post on this sub
1
u/HeavyMessing avatar
HeavyMessing
•
6y ago

You're not doing the challenge correctly though. You should be showing the back cover and it should be upside-down.
1
[deleted]
•
6y ago

Hahaha, that’s great!
1
dawgpawgmailcom
•
6y ago

Well played
1
Bumbleybeetuna
•
6y ago

You forget to hold it upside down and backwards
1
songraven
•
6y ago

Love this guy
1
homerpiko
•
6y ago

You should have held the book upside down and backwards to really bring it home.
1
u/Nashnogly avatar
Nashnogly
•
6y ago

This made my week.
1
u/jesse_ee avatar
jesse_ee
•
6y ago

But that is right side up
1
u/PlantedCorgo_if avatar
PlantedCorgo_if
•
6y ago

Perfect
1
[deleted]
•
6y ago

Apparently he can’t tie his shoes either....
1
bytelines
•
6y ago

Petition for "Trumped it" to be slang for dodging a responsibility
1
u/crowlady877 avatar
crowlady877
•
6y ago

Got it 🤣
1
u/Speedster4206 avatar
Speedster4206
•
6y ago

supporting trump at this point. No one cares
1
stuckNTX_plzsendHelp
•
6y ago

This is hilarious
1
[deleted]
•
6y ago

Wait where can I get those shoes though
1
u/Etrigone avatar
Etrigone
•
6y ago

7/10, not holding it upside down or backwards.
1
u/lefty_burns avatar
lefty_burns
•
6y ago

Outstanding!
1
CastorFields
•
6y ago

I dig it but you Should have held it upside down and backwards too.
1
no-i
•
6y ago

Close...but the book isn't upside down.
1
imankiar
•
6y ago

I’ve never seen a bible that doesn’t say bible on the front!
1
u/giverofnofucks avatar
giverofnofucks
•
6y ago

You're holding it the wrong way. And by that, I mean you're holding it the right way, when you should be holding it upside down.
1
u/Poolander avatar
Poolander
•
6y ago

The Dad joke of 2020 we all needed
1
[deleted]
•
6y ago

The book should be upside down.
1
muffinTrees
•
6y ago

Crazy old man has done it again!
1
Dad_AF
•
6y ago

Not upside down and backwards so it does not count.
1
[deleted]
•
6y ago

Good one grandpa. Good one
1
[deleted]
•
6y ago

Forgot to hold it upside down
1
u/freto80 avatar
freto80
•
6y ago

Is this a new challenge to mock Trump? If so I like it.
1
u/droppndrakes avatar
droppndrakes
•
6y ago

Cargo shorts and Velcro shoes. Damn
1
[deleted]
•
6y ago

Yeah, it shows.
1
u/i_drink_pool_water avatar
i_drink_pool_water
•
6y ago

Wow hilarious I'm laughing really hard
1
u/aalleeyyee avatar
aalleeyyee
•
6y ago

I looked it up; it's dildos.
1
u/ButTheMeow avatar
ButTheMeow
•
6y ago

LET THIS MEME RIIIIIISE!!!
1
hobomojo
•
6y ago

You need to hold the book more awkwardly, like you expect it to suddenly burst into flames or something.
1
u/Speedster4206 avatar
Speedster4206
•
6y ago

I looked it up; it's dildos.
1
u/Audigit avatar
Audigit
•
6y ago

Oh!!! This is a thing now. Wow I’m dense. Thanks. I’ll be back tomorrow!! Thanks
1
zeldawho86
•
6y ago

Someone give this man a medal.
1
u/willanthony avatar
willanthony
•
6y ago

Needs to be upside down and backwards.
1
u/Jak_and_Daxter3 avatar
Jak_and_Daxter3
•
6y ago

Wait, something actually funny on this subreddit, surely I'm mistaken
1
imankiar
•
6y ago

The fact that your initial reaction to prove me wrong was to resort to name calling!
1
pvolovich
•
6y ago

Hold it upside-down.
1
imankiar
•
6y ago

And the Ks in your name are kinda suspicious
1
u/Legtagytron avatar
Legtagytron
•
6y ago

That's a funny presidential challenge. I look forward to more memes.
1
SFjouster
•
6y ago

Free top of all for the first person who does this with "how to make friends and influence people"
1
u/LTShortie avatar
LTShortie
•
6y ago

Best yet!!!! Thanks. No gold, I’m poor, but you’re a God.
1
TheOne69420666
•
6y ago

You forgot to hold it upside-down and backwards.
1
u/SeattleJanna avatar
SeattleJanna
•
6y ago

😂😂😂🤣💀
1
u/agchaikin avatar
agchaikin
•
6y ago

You win the internet tonight
1
dare3000
•
6y ago

FAIL. the book is right side up.
1
Takodanachoochoo
•
6y ago

Bravo. You held it right side up and front wards tho 😄
1
greaseinthewheel
•
6y ago

Ooh, so close. I'm gonna need you to hold that book backwards and upside-down. Great initiative, though.
1
[deleted]
•
6y ago

That is hilarious!
1
u/AaronTechVo2 avatar
AaronTechVo2
•
6y ago

This dude consumes soy
1
Mal_Tech44
•
6y ago

The Velcro shoes are the funniest part of this picture god damn
1
OkiRyu
•
6y ago

Actual humor I can laugh to!
1
u/MrSkullCandy avatar
MrSkullCandy
•
6y ago

It's not upside down!
1
u/P129 avatar
P129
•
6y ago

Those shoes!!
1
RunnyPlease
•
6y ago

Book should be upside down.
1
u/Moonunit08 avatar
Moonunit08
•
6y ago

Loving those dad shoes brah
1
IamMindful
•
6y ago

Please go viral. It's everyone's duty! Lol
1
u/telltaleatheist avatar
telltaleatheist
•
6y ago

You’re failing already. You’re holding it up correctly
1
bajungadustin
•
6y ago

I laughed way too hard at this.
1
u/dubadub avatar
dubadub
•
6y ago

It was a level 9 burn then you realized that dude's wearing velcro and cargo shorts 🤘
1
guerillagluewarfare
•
6y ago

You forgot to hold it upside down and backwards.
1
FantasticDeparture4
•
6y ago

He forgot to flip it and turn it around
1
u/CounselorCheese avatar
CounselorCheese
•
6y ago

This is amazing
1
KeiFeR123
•
6y ago

At least, you held the book correctly.
1
u/aalleeyyee avatar
aalleeyyee
•
6y ago

supporting trump at this point. No one cares
1
[deleted]
•
6y ago

Hey! At least you hold it right!
1
u/Timesnap421 avatar
Timesnap421
•
6y ago

You didn't hold it upside down and backwards.
1
rensley13
•
6y ago

This might be the funniest thing ever.
1
u/SupremeRedditBot avatar
SupremeRedditBot
•
6y ago

Congrats for reaching r/all/top/ (of the day, top 25) with your post!  

I am a bot, probably quite annoying, I mean no harm ^though

Message me to add your account or subreddit to my ^blacklist
1
u/richanner avatar
richanner
•
6y ago

Should have had it upside down and backwards
1
u/eapoll avatar
eapoll
•
6y ago

Wearing the shoes that you never tie
1
Toad0430
•
6y ago

I’m a conservative but I 110% support this
1
JJbullfrog1
•
6y ago

It's not upside down or backwards though
1
HeadStrongMama
•
6y ago

Absolutely brilliant! Can’t wait to make my own.
1
[deleted]
•
6y ago

Begun, the meme wars have.
1
NormalHumanCreature
•
6y ago

Youre holding right side up
1
sexless_marriage02
•
6y ago

that's not fair. the guy in this pic looks fit, should have usedan obese neckbeard
1
[deleted]
•
6y ago

Comment removed by moderator
1
New to Reddit?

Create your account and connect with a world of communities.
Continue with Phone Number
By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.

    It's not socialism, it's better accounting.
    r/PoliticalHumor
    •
    5d ago
    It's not socialism, it's better accounting.
    r/PoliticalHumor - It's not socialism, it's better accounting.
    19K upvotes · 499 comments
    Why I'm Voting For Trump Again
    r/PoliticalHumor
    •
    4d ago
    Why I'm Voting For Trump Again
    r/PoliticalHumor - Why I'm Voting For Trump Again
    13K upvotes · 99 comments
    You tell ‘em Tone
    r/PoliticalHumor
    •
    4d ago
    You tell ‘em Tone
    r/PoliticalHumor - You tell ‘em Tone
    8.7K upvotes · 51 comments
    He just could care less.
    r/PoliticalHumor
    •
    2d ago
    He just could care less.
    r/PoliticalHumor - He just could care less.
    8.7K upvotes · 309 comments
    Is anyone missing Sleepy Joe, yet?
    r/PoliticalHumor
    •
    2d ago
    Is anyone missing Sleepy Joe, yet?
    r/PoliticalHumor - Is anyone missing Sleepy Joe, yet?
    8.5K upvotes · 282 comments
    The reptiles
    r/PoliticalHumor
    •
    3d ago
    The reptiles
    r/PoliticalHumor - The reptiles
    8.1K upvotes · 85 comments
    Saying No, Building Yes, Sure
    r/PoliticalHumor
    •
    6d ago
    Saying No, Building Yes, Sure
    r/PoliticalHumor - Saying No, Building Yes, Sure
    8.1K upvotes · 232 comments
    Nepo baby Elon says Social Security and Medicaid are "entitlements" to be eliminated. Sounds like something an entitled non-taxpayer would say.
    r/PoliticalHumor
    •
    5d ago
    Nepo baby Elon says Social Security and Medicaid are "entitlements" to be eliminated. Sounds like something an entitled non-taxpayer would say.
    r/PoliticalHumor - Nepo baby Elon says Social Security and Medicaid are "entitlements" to be eliminated. Sounds like something an entitled non-taxpayer would say.
    7.8K upvotes · 149 comments
    Just curious, would ICE expel everyone who doesn’t speak English?
    r/PoliticalHumor
    •
    3d ago
    Just curious, would ICE expel everyone who doesn’t speak English?
    r/PoliticalHumor - Just curious, would ICE expel everyone who doesn’t speak English?
    7.7K upvotes · 150 comments
    Evangelicals Forgot Commandment Two
    r/PoliticalHumor
    •
    6d ago
    Evangelicals Forgot Commandment Two
    r/PoliticalHumor - Evangelicals Forgot Commandment Two
    7.5K upvotes · 162 comments
    Fascist Facsimile
    r/PoliticalHumor
    •
    20h ago
    Fascist Facsimile
    r/PoliticalHumor - Fascist Facsimile
    7.4K upvotes · 98 comments
    Kinda love this plot twist
    r/PoliticalHumor
    •
    5d ago
    Kinda love this plot twist
    r/PoliticalHumor - Kinda love this plot twist
    7.1K upvotes · 413 comments
    590,000 MAGA's paid $100 for a "CONCEPT" of a trump gold phone
    r/PoliticalHumor
    •
    6d ago
    590,000 MAGA's paid $100 for a "CONCEPT" of a trump gold phone
    r/PoliticalHumor - 590,000 MAGA's paid $100 for a "CONCEPT" of a trump gold phone
    6.9K upvotes · 336 comments
    We'll see if this ages like wine or like milk.
    r/PoliticalHumor
    •
    2d ago
    We'll see if this ages like wine or like milk.
    r/PoliticalHumor - We'll see if this ages like wine or like milk.
    6.5K upvotes · 86 comments
    Self-incrimination
    r/PoliticalHumor
    •
    1d ago
    Self-incrimination
    r/PoliticalHumor - Self-incrimination
    5.9K upvotes · 31 comments
    It’s not racism, trust me
    r/PoliticalHumor
    •
    10h ago
    It’s not racism, trust me
    r/PoliticalHumor - It’s not racism, trust me
    5.6K upvotes · 53 comments
    Too damn high
    r/PoliticalHumor
    •
    6d ago
    Too damn high
    r/PoliticalHumor - Too damn high
    5.4K upvotes · 56 comments
    We are in the most stupid timeline
    r/PoliticalHumor
    •
    5d ago
    We are in the most stupid timeline
    r/PoliticalHumor - We are in the most stupid timeline
    5.2K upvotes · 17 comments
    Grandpa Found the Wi-Fi Again
    r/PoliticalHumor
    •
    3d ago
    Grandpa Found the Wi-Fi Again
    r/PoliticalHumor - Grandpa Found the Wi-Fi Again
    5K upvotes · 60 comments
    Elect a clown,expect a circus
    r/PoliticalHumor
    •
    16h ago
    Elect a clown,expect a circus
    r/PoliticalHumor - Elect a clown,expect a circus
    4.4K upvotes · 28 comments
    You can't buy class...
    r/PoliticalHumor
    •
    2d ago
    You can't buy class...
    r/PoliticalHumor - You can't buy class...
    4.2K upvotes · 129 comments
    Golden time
    r/PoliticalHumor
    •
    4d ago
    Golden time
    r/PoliticalHumor - Golden time
    4.1K upvotes · 51 comments
    The Bible warned us about a wolf in sheep's clothing...
    r/PoliticalHumor
    •
    4d ago
    The Bible warned us about a wolf in sheep's clothing...
    r/PoliticalHumor - The Bible warned us about a wolf in sheep's clothing...
    4.1K upvotes · 69 comments
    "You've got to say yes to your destiny." - Dave Chappelle
    r/PoliticalHumor
    •
    2d ago
    "You've got to say yes to your destiny." - Dave Chappelle
    r/PoliticalHumor - "You've got to say yes to your destiny." - Dave Chappelle
    3.8K upvotes · 30 comments
    No joke, Tim Apple is back.
    r/PoliticalHumor
    •
    2d ago
    No joke, Tim Apple is back.
    r/PoliticalHumor - No joke, Tim Apple is back.
    3.8K upvotes · 211 comments

Community Info Section
r/PoliticalHumor
r/PoliticalHumor 2025: DiD YOu eVEn sAY "ThaNK YoU?"
A subreddit focused on US politics, and how it's all so... tragically funny? Funnily tragic?
Public
Top Posts


        
      
    Reddit
    reReddit: Top posts of June 5, 2020

        
      
    Reddit
    reReddit: Top posts of June 2020

        
      
    Reddit
    reReddit: Top posts of 2020

Reddit Rules Privacy Policy User Agreement Your Privacy Choices Accessibility Reddit, Inc. © 2026. All rights reserved.

`

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
  text = text.split(" ").map((k)=>{
    if (capitalizedWords.includes(k)) {
      k = k.charAt(0).toUpperCase() + k.slice(1)
    }
    for (let i=0; i<wordBlacklist.length; i++) {
      if (k.includes(wordBlacklist[i])) {
        k = "***"
      }
    }
    return k
  }).join(" ")
  text = text.split(" .").join(".")
  text = text.split(" !").join("!")
  text = text.split(" ?").join("?")
  text = text.split(" ,").join(",")
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function runSeed(seed, count) {
    outputText = ""
    seed = seed.toLowerCase().split(" ").join("")
    if (!words.includes(seed)) {
      outputText = "INVALID SEED"
      return
    }
    for (let i=0; i<count; i++) {
      let newWrite = write(seed)
      let newForm = format(newWrite)
      console.log(i+1,"seed: \"",seed,"\", write: \"",newWrite,"\", format: \"",newForm,"\"")
      outputText += "<br>"+(i+1)+"  "+newForm
    }
}

function run(count) {
    outputText = ""
    for (let i=0; i<count; i++) {
      let seed = seedWhitelist[Math.floor(Math.random()*seedWhitelist.length)]
      let newWrite = write(seed)
      let newForm = format(newWrite)
      console.log(i+1,"seed: \"",seed,"\", write: \"",newWrite,"\", format: \"",newForm,"\"")
      outputText += "<br>"+(i+1)+"  "+newForm
    }
}

function updateOutput() {
  run(3)
  outputBox.innerHTML = outputText
}

function updateManualOutput() {
  console.log("input detected")
  runSeed(input.text,1)
  manualOutput.innerHTML = outputText
}

//STUFF THAT RUNS ON LOAD

mainBody.addEventListener('load',loadFunc())
input.addEventListener('input',updateManualOutput())
function loadFunc() {
  eatData(data)
  seedWhitelist = seedWhitelist.filter((k)=>!(seedBlacklist.includes(k)||punctuation.includes(k)))
  console.log("seedWhitelist:",seedWhitelist)
}