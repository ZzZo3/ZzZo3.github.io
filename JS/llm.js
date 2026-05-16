//BASE
const mainBody = document.getElementById("mainBody")
const inputText = document.getElementById("inputText")
const inputButton = document.getElementById("inputButton")
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
  'afghanistan','norweyan','josé','marti','martin','luther']
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
The Vought logo leads into an ad for Translucent: Invisible Force 2.

CUT TO: EXT. STREET

The ad is revealed to be on the back of a bus, which drives away. Jamie and Benjy walk by it, talking.

BENJY: Yo, I am so psyched for Invisible Force 2.

JAMIE: Please. Invisible Force 1 was lame. I'm all about Rising Tide.

BENJY: Rising Tide? The Deep? Translucent could kick the Deep’s ass.

JAMIE: How? He's invisible. That's, like, all he’s got. That's it.

BENJY: Exactly. He sneaks up on the Deep, and then boom, motherfucker! Sit down.

JAMIE: Until the Deep makes a shark bite Translucent's dick off.

BENJY: How's he gonna find his dick? It's invisible.

A noise behind them startles the duo. They turn to look. Cut to an armored truck careening down the street, pursued by multiple cop cars.

BENJY: Holy shit.

The truck speeds towards them. They turn and run, but Benjy trips.
JAMIE: Benjy!

Before the truck reaches them, Queen Maeve flips a car, attempting to stop it. Cut to a shot from inside an apartment. As an old woman pours tea, Maeve walks on the windows, cracking them. Back outside, the armored truck avoids the car, swerving towards Jamie and Benjy.

JAMIE: Get up, get up, get up. Come on, Benjy. Come on, come on.

As the truck is about to crush them, Maeve jumps in front of it, splitting the truck in two. Jamie and Benjy are hit with only light debris. Cut to a shot of Maeve standing stoically as the truck splits around her. As it comes to a stop, she ends up inside the ruined truck, face to face with a robber. She smirks at him. Cut back to the street. Jamie helps Benjy to his feet. They watch from outside as a skirmish can be heard inside the truck. The driver walks out in front of them, spitting blood all over the street. Cut to Maeve exiting the truck to find the driver and another robber holding the young men at gunpoint.

DRIVER: Stay back. Just stay the fuck back.

Maeve approaches them, smiling.

DRIVER: What are you smiling at?

From offscreen, Homelander fires his laser vision at the driver's gun, melting it all over his hand. He screams in pain and falls to the ground. The two young men run away as the other robber tries to fire at Homelander. The bullets have no effect. He walks slowly towards the man and then throws him quite a distance.

BENJY: Homelander?

Homelander turns towards the young men, revealing his face to the camera for the first time.

HOMELANDER: You boys okay?

The robber finally crashes down on some cars down the road. Cut to Benjy and Jamie staring at Homelander in shock for a few moments.

BENJY: Can I can I get a selfie?
HOMELANDER: 'Course you can.

Homelander smiles and opens his arms welcomingly. The young men walk over and take a selfie with him. The shot changes to news footage of the incident, with an anchor narrating.

ANCHOR: The Seven's Queen Maeve and Homelander made another heroic save today, stopping a hijacked armored truck on the streets of Brooklyn, then staying behind for a photo op with some very lucky fans.

CUT TO: INT. STORE

The camera pulls back to reveal Hughie cleaning off a TV screen playing the broadcast.

HOMELANDER: Nice to meet you.

Cut to Hughie helping a woman in the store.

HUGHIE: So, this is pretty much everything in one. Bluetooth speakers. It’s in stereo, so you can put it all around your living room, have some fun with it. You said you have a standard cable box, right?

WOMAN: Uh-huh.

HUGHIE: Okay, then I need to get you an audio transmitter, aptX Low Latency. It makes it so there’s less audio lag, and it's got a standard optical in. And let’s hook you up with thousand-meg HDMI. Let's go with this one. Uh, it costs a little bit more, but the carbon's way more conductive.

Cut to later. Hughie approaches Gary at the front desk.

HUGHIE: Hey, Gary. Um, I really need to talk to you about something.

GARY: Later, kid.
HUGHIE: Okay. Cool. Later you want, like want, like, 30… 30 minutes? Like, a solid 45?

Cut to even later. Robin enters the store as Hughie has his back to the door.

ROBIN: Excuse me, sir? Hi. I'd like to make an appointment for you to come over and lay some cable.

HUGHIE: Okay. Uh, oh, Robin. Oh, dear, dear, Robin. Um, that doesn’t mean what you think it means.

ROBIN: Um, "laying cable" means sex.

HUGHIE: No, "laying pipe" means sex. "Laying cable" means you want me to come over to your house and just take a big, old shit.

ROBIN: That's disgusting.

HUGHIE: Well, okay. But you… Who, who said it, though?

ROBIN: Okay. Are you ready? Despite your best efforts, I'm actually still hungry.

HUGHIE: I'm actually more hungry now.

ROBIN: Where are we gonna go after all this hot talk?

They walk out the door.

HUGHIE: I don't know. More importantly, where are we gonna go to lay some cable afterwards?

Cut to a shot of them walking down the sidewalk.

ROBIN: So, did you ask him?

HUGHIE: Who?

ROBIN: Gary. Did you ask Gary for the raise?

HUGHIE: Yeah. Yeah. It was... it was a, look, it was a crazy day, and- and he was super busy, but tomorrow for sure. Yes.

ROBIN: Okay.

HUGHIE: What was I supposed to do, kick his door down? Like Homelander?

ROBIN: I said "okay".

HUGHIE: Yeah, but you didn't mean it. Hey, I see the look. I see it. Come on.

ROBIN: This is like when we started dating.

HUGHIE: I don't think that's... I don't think that's true.

ROBIN: Dude, I had to ask you out.

HUGHIE: Well, excuse me for waiting. You ever hear of chivalry?

ROBIN: Listen, this is about you getting what you deserve. I'm killing myself at school because I think it's gonna be worth it for both of us. You know, if we move in together.

HUGHIE: Wait, what? What? W-w-wait. Hey, hey, hey. Hey, hey. What was that? What'd you just say?

They stop walking. Hughie stops on the curb, while Robin stops about a step off the curb.

ROBIN: Well, I mean, we can't keep, you know, laying pipe at your dad's place. Trying to be all quiet. Staring up at that dumb Billy Joel post-

Hughie kisses her, stopping her mid-sentence.

ROBIN: … Poster.

HUGHIE: Hey. Don't you ever besmirch Billy Jo-

Robin disappears. Time slows to a crawl. Drops of blood float midair. Hughie is hit with a blast of air. Some of the blood sprays on his face. The camera slowly pans to reveal Robin has exploded into blood, bones, and guts. Time returns to normal speed. Robin's remains fall to the ground. A-Train stands nearby, panting. He takes off his running goggles and looks at the mess and the shocked Hughie.

A-TRAIN: I can't stop. I can't stop. I can't stop. I can't stop. Can't stop. Can't stop.

A-Train puts his goggles back on and resumes running.

HUGHIE: Robin?

Hughie looks down to see he is still holding Robin's now detached hands.

HUGHIE: Robin? Robin! Robin!

CUT TO: INT. ANNIE'S HOUSE

Text on screen reads, “DES MOINES, IOWA.” The sun rises in the distance. The camera pans to Annie's alarm clock. As the clock hits 7:00 A.M., it begins playing “Barracuda” by Heart. We watch a montage of Annie training. She does pull ups, punches a brick wall outside, and lifts her car. Her mom walks nearby.

DONNA: Let the energy go through the wall!

Cut to Annie inside, now in costume. She films an audition tape.

ANNIE: I am Starlight. I'm 110 pounds, and I'm five foot six.

CASTING DIRECTOR: Turn around, please. Okay. Let's see it, dear.

ANNIE: You should look away.

CASTING DIRECTOR: Sorry?

ANNIE: You should turn away from the camera, and you should close your eyes, or else I'll blind you.

CASTING DIRECTOR: All right. Okay, go ahead.

Annie uses her power. All of the lights go out as she sends out a burst of light. She accidentally knocks over the camera filming. She walks over to it.

ANNIE: I am so sorry. Are you all right?

Cut to a shot of Annie in the bathroom. She puts down a cup of urine.

ANNIE: I was born Super-Abled.

Cut to Annie taking a polygraph test.

ANNIE: Uh, my mom was thrilled. She took me to all the little miss hero pageants, but I hated it. Ugh, I mean, I can still smell the hairspray. Uh, but, at the Q and A, they always asked me what my wish was, and I always said, "to save the world." And the judges just chuckled like it was cute. But it wasn't a joke to me. Since when did "hopeful" and "naive" become the same thing? I mean, why would you get into this business if not to save the world? That's all I have ever wanted. And that's why I've always wanted to be in The Seven.

CUT TO: INT. HUGHIE'S HOUSE

Hughie sits on his couch, watching TV and looking distraught. His dad comes to sit next to him.

HUGHIE'S DAD: Thought Robin's service was nice. Did you see how many people came? Wow. Lot of respect for that girl. Lot of love in the room. And the spread. What a spread. Just really nice.

Hughie's dad notices the TV is playing a conference about Robin's death. Madelyn Stillwell speaks, with A-Train next to her.

MADELYN: That does not begin to convey the terrible regret-

HUGHIE'S DAD: Aw, geez. Maybe there's a movie on.

HUGHIE: No, keep it.

HUGHIE'S DAD: No, we can switch-

HUGHIE: Keep it.

A-TRAIN: My deepest condolences to Robin Ward's family. I was chasing these bank robbers. She just stepped in the middle of the street, and I, I couldn't…

HUGHIE: Middle of the... She was a half step off the fucking curb!

HUGHIE'S DAD: Oh, now, come on, Hughie. Just, uh, don't get upset, okay? Just… He knows.

The doorbell rings. Cut to Hughie sitting at a table across from a Vought lawyer.

LAWYER: Everyone at Vought is just, just wrecked about Robin. Now, you two weren't married, and look, technically, there's no legal claim. But Vought wants to do the right thing: offer you $45,000 in restitution. All you have to do is sign right here, and I'll offer you the check.

HUGHIE: This is a confidentiality agreement.

LAWYER: It's a boilerplate NDA.

HUGHIE: I sign this, and I can't talk about it? Have to pretend like it didn't happen, like I wasn't holding Robin's arms in my hands?

LAWYER: Look, I know you're upset, but we're just trying to help.

HUGHIE: Then say you're sorry.

LAWYER: Excuse me?

HUGHIE: I mean, you people say "our condolences" and "my sympathies" and "our regrets,” but nobody can look me in the fucking eye and say "I'm sorry!" I'm not signing anything. Get out.

Hughie reaches over and grabs the lawyer, screaming into his face.

HUGHIE: I said get the hell out!

The past minute is revealed to be a fantasy in Hughie's imagination. Hughie stares ahead blankly. panting slightly.

LAWYER: You okay? As I said, boilerplate NDA, really. Pretty standard stuff.

HUGHIE: Can I think about it?

LAWYER: If you have any questions at all, just, uh…

The lawyer taps his business card in front of Hughie. He gets up and leaves.

CUT TO: INT. ANNIE'S HOUSE

The camera cuts to a shot of a trophy shelf in Annie's kitchen. It then pans to show Annie listening to a police radio. Her mother walks in.

DISPATCHER: Unit 44, code 20. Address is 1420 63rd Street-

DONNA: Any maniacs out there?

ANNIE: Mm-mm. Quiet night. Like every night.

DONNA: That's too bad. We could really use the press right now.

Annie pours herself some food.

DONNA: Oh, Annie.

ANNIE: I'm hungry. Don't worry. I didn't get the job.

DONNA: You don't know that.

ANNIE: They're auditioning girls nationwide. Besides, Countess probably got it. She's so good in a room.

The phone rings.

DONNA: If you're negative, negative things happen to you.

Donna picks up the phone.

DONNA: Hello? Yes, I'm her mother. Uh, yes. Uh, one moment.

Donna hands Annie the phone.

DONNA: It's them. It's them.

ANNIE: Hello? Yes, this is she. I got it?

Annie and her mother immediately begin jumping and yelling in glee.

DONNA: You got it! You got it!

They stop.

ANNIE: Shh.

DONNA: Oh, my God.

ANNIE: Uh, I'm so I'm so sorry. It's a weird connection. I don't know what that was, actually. Uh... Mm-hmm.

CUT TO: INT. HUGHIE'S HOUSE

Hughie's dad sits on the couch watching TV. Hughie walks around in the background.

HUGHIE: Oh, shit.

Hughie's dad watches him walk around.

HUGHIE'S DAD: Whatcha doing?

HUGHIE: Can't file a criminal case against A-Train. Supes are like cops. They can't be charged for damages while they're on the job.

HUGHIE'S DAD: Okay...

HUGHIE: But maybe we can file a wrongful death. I just got to get Robin's parents to sign off on it.

HUGHIE'S DAD: Hughie, come sit with me.

HUGHIE: Dad, I'm not... I'm right... Okay.

Hughie sits on the couch. His dad pats him on the back.

HUGHIE'S DAD: Good for you. You want to make this right, what happened to Robin.

Hughie smiles.

HUGHIE'S DAD: But you can't. So sign this.

Hughie's smile fades as his dad hands him the NDA.

HUGHIE: What?

HUGHIE'S DAD: This is a lot of money, Hughie. We could really use it.

Hughie stands up.

HUGHIE: I can't… Dad, they killed her.

HUGHIE'S DAD: Be realistic, okay? Even if we could pay for a lawyer, and that's a big if there's no case. She was in the street. Be like if a bus hit her.

HUGHIE: Dad, she was one step off the curb. I, I saw it!

HUGHIE'S DAD: Hughie, look. Look. You can't do this.

HUGHIE: Why not? Dad, I have-

HUGHIE'S DAD: You don't have the fight. You never have. I'm sorry, but it's… it's true. Neither do I. Now come and, come and sit with me, okay? Remington Steele's on.

Hughie walks out the door.

HUGHIE'S DAD: Hughie! Where you going?

He sighs.

CUT TO: EXT. RED CARPET

The camera pans down to a shot of a large crowd around a red carpet. Ashley waits at the end. Cut to a shot of Annie and her mother getting out of a limo.

ASHLEY: There she is! Welcome to New York. I'm Ashley Barrett, director of talent relations.

ANNIE: So, uh, are all these people here for me?

ASHLEY: Oh, honey. Who else would they be here for? Come on. We're running late.

Annie and her mother follow Ashley as they look around at all of the screaming fans and paparazzi. Cut to inside the building as Madelyn speaks at the shareholder's meeting.

MADELYN: Ladies and gentlemen, it is without a doubt a good time to be in the Superhero business. Our net income is up 14%. Our latest film, G-MEN: World War, just grossed shy of $1.7 billion world-wide. And this fall, we break ground on our newest theme park outside of Paris. The branding opportunities are limitless. But, you know, none of that really matters. Because job one is managing, supporting, and advising the brave heroes who put themselves in harm's way each and every day for us. Let's take a look.

She gestures towards a big screen behind her. It begins playing a commercial for Vought's superheroes, which is narrated by her.

MADELYN: (Narrating) A world without crime, with liberty and justice for all, that's within our reach, thanks to the 200-plus Superheroes in the Vought Family. We see a bright future ahead, where there is a Vought Hero in every town.

Cut to backstage. Ashely leads Annie and her mother towards the stage.

ASHLEY: You're doing really well, by the way, so far.

ANNIE: I, I haven't done anything yet.

ASHLEY: Yeah, exactly. You're already up two-and-a-half points with Midwesterners and conservative Christians in 18 to 49. That speech, by the way, your audition, oh! It was modest; it was humble. Really fucking smart choice.

ANNIE: Uh, I, I meant it.

ASHLEY: Yeah, that's why we love you. So you ready for your life to change?

Back to the conference, the video continues.

MADELYN: (Narrating) - including the jewel in Vought's crown, the greatest superhero team the world's ever seen: The Seven. That is our job, our honor. We are Vought. We make heroes super.

The video ends. The audience applauds. Madelyn returns to the mic.

MADELYN: I have a very exciting surprise for you. Both a member of The Seven, and Lord of the Seven Seas, live and in person, the Deep!

The Deep walks out on stage and approaches the mic. There's lots of applause.

DEEP: Thank you. Thank you, everybody. After a long, distinguished career with The Seven, my good friend, the Lamplighter, has retired. Let's give him a big "thank you.” What do you say?

The audience applauds.

DEEP: But now, as we turn towards the future, I'd like to introduce someone very special. And I, for one, can't wait to work with her. Please welcome Starlight.

Backstage, Annie looks nervous. Ashley pushes her out.

ASHLEY: Go!

Annie walks out on stage. The Deep greets her. They both wave towards the crowd. Madelyn returns to the mic.

MADELYN: Ladies and gentlemen, Starlight and the Deep!

The Deep continues waving. Annie looks around at the audience.

CUT TO: INT. SHOP

Hughie enters a store. He grabs some beer, then looks up to see A-Train branded beer. He begins panting. Looking around and walking to the counter he also encounters A-Train cereal and a cardboard cutout of A-Train. At the counter, the store clerk is reading a tabloid with A-Train on the cover. Hughie's panting gets worse.

CLERK: Hey, buddy, you okay?

Hughie falls backwards into some shelves.

CLERK: Hey, buddy!

CUT TO: INT. SEVEN HEADQUARTERS

The Deep and Annie get off an elevator into the Seven's main conference room. He leads her around.

ANNIE: Wow.

DEEP: Pretty cool, huh? Oh, hey, check this out. We have two World View-4 satellites in geocentric orbit. We can essentially read a getaway car's license plate from 380 miles up.

ANNIE: That is just... I mean, I was working with a police scanner that I bought on eBay.

DEEP: Yeah, well, not anymore you're not. Oh, and wait till you check out the dining room. We, uh, may or may not have stolen Miro from Gramercy Tavern. Yeah, he's fan-fucking-tastic.

ANNIE: That's his, isn't it?

She looks at the chair at the head of the main table.

DEEP: Homelander's? Yeah. But you'll have your own soon. Here. Come on.

He pulls out Homelander's chair.

DEEP: Give it a test drive. Come on. Oh, you, you okay?

ANNIE: It's just… I used to stand in the mirror, pretending to be where I am right now.

DEEP: You know something? On my first day, I, uh... Well, I felt like a fraud. Yeah. But the good news is, everybody feels that way.

ANNIE: Thank you.

DEEP: And, hey, we're a team now. We'll help each other out. I bet growing up you had a poster of Homelander on your wall, huh?

ANNIE: No, actually, I... I don't know, Homelander's so... He's like Jesus or something. If you want to know the truth, I actually had a poster of you.

DEEP: Really?

ANNIE: Yeah. Yeah.

DEEP: Oh.

ANNIE: I kind of, I kind of had a schoolgirl crush on you.

DEEP: Oh, my God.

ANNIE: Oh, my God. I hope that's not inappropriate to say.

DEEP: No, no, no, no, no. It's not inappropriate at all. It's just, it's kind of wild.

Annie looks out the window for a moment, then turns and sees The Deep has pulled his pants down and begun masturbating.

DEEP: What? I mean, you said you had a crush on me. I figured that, you know…

Annie hurriedly walks away, disgusted.

DEEP: Whoa, whoa, wh-wh-whoa, hey. Look, you're gorgeous. I'm not I'm not talking about sex, just a little bit of pole-smoking. Whoa, whoa, whoa. Hey, wait, wait, wait, wait, wait. It's just a question of how bad you want to be in The Seven.

Anine stops in her tracks and turns around.

ANNIE: Excuse me?

Her powers flare up, shattering some nearby screens and causes the lights to flicker.

DEEP: Whoa. Whoa, whoa, whoa. Hey, hey, hey. Hey. Take it easy. Settle down. We're just, we're just talking. And look, I know that you're powerful. I get it. Your powers are no joke. The thing is I am number two around here. So, like, if I say so, you know, you'd be out of here. Especially since you attacked me.

ANNIE: I what?

DEEP: Yeah. Look.

He gestures towards the broken screens. As he talks, he walks over to her.

DEEP: I mean, Iowa's sweetheart, the Defender of Des Moines, just went psycho on the Deep. I mean, that that could put you out of the business. Yeah. I mean, home to Mommy, tail tucked between your legs. Just think of all those kids. I mean, the kids. Those kids who look up to you, they'd just be shattered. I mean, that's not what you really want, right? Or, we come together as a team. You and me, we just roll with the punches, for, like, three minutes, maybe. It's not a big deal. And then you know what happens? All your dreams come true.

CUT TO: INT. STUDIO

Cut to a shot of The Tonight Show. Translucent is being interviewed by Jimmy Fallon.

JIMMY: I'm sure you guys have all heard that Translucent stopped a home invasion in Yonkers last night, a young, single mother and her two kids. Just incredible. Just... So tell us, how are you able to, to vanish?

TRANSLUCENT: No, I don't actually vanish. My skin turns into this carbon meta-material that bends the light. Like an invisibility cloak.

Cut to a shot of Hughie at work. The Tonight Show continues on one of the monitors nearby.

JIMMY: All right, but just to be clear, you have to be completely naked, right?

The door opens. Hughie turns to look. He sees Billy Butcher looking at a nanny cam.

HUGHIE: You interested in a nanny cam? 'Cause we're actually running a special on that. Um, it's a pretty popular bear. There's cameras in the eyes.

BILLY: Tell me, how many nannies shake their babies?

HUGHIE: Uh, I'm sorry?

BILLY: You know, a good hard shake, like, like tryin' to get ketchup out of a bottle. One percent? Less?

HUGHIE: I, I don't really know.

Billy puts the nanny cam down.

BILLY: Funny, that. They sell a billion dollars worth of that shit worldwide. Goes to show you, doesn't it? The bollocks people will believe if you get them scared enough.

HUGHIE: Cool. Cool, cool. Um, is there anything I can help you with today, or... ?

BILLY: I'm not gonna piss you about, Hughie. I heard what happened to Robin.

HUGHIE: I'm, I'm sorry, who are you?

BILLY: She wasn't in the street. She was one step off the fucking curb. And you didn't take the pay-off.

HUGHIE: Yeah. I said, who the hell are you? How do you know that?

BILLY: Name's Butcher. Billy Butcher.

Billy flashes an FBI badge.

BILLY: Listen, I was thinking that, uh, you and me should have a little bit of a chat.

Cut to them walking on a busy sidewalk outside.

HUGHIE: You're a Fed? You don't sound like a Fed.

BILLY: What, I can't immigrate? There's a giant green slapper with her ass in the harbor that says different.

HUGHIE: You don't really look like one, either.

BILLY: No? What do I look like?

HUGHIE: Like you're starring in a porn version of The Matrix.

BILLY: Well, it's all right there in black and white.

HUGHIE: Okay. Uh, what exactly can I do for you?

BILLY: No, you got it all wrong, Hughie. It's what I can do for you. You see, you ain't alone, son. It happens a lot more than you think. Supes lose hundreds of people each year to collateral damage.

HUGHIE: No. Come on, that'd be all over the news. People would be screaming bloody murder.

BILLY: Yeah, look, there might be the odd mention of it now and again, like with Robin, but there's a fuck-sight more that happens that just gets swept right under the rug.

They stop walking.

HUGHIE: Why?

As Billy continues, he gestures around at dozens of ads for various superhero properties.

BILLY: Ain't it obvious? Movie tickets, merchandising, theme parks, video games. A multi-billion dollar global industry supported by corporate lobbyists and politicians on both sides. But the main reason that you won't hear about it is 'cause the public don't want to know about it. See, people love that cozy feeling that Supes give them. Some golden cunt to swoop out of the sky and save the day so you don't gotta do it yourself. But if you knew half the shit they get up to... Ooh. Fuckin' diabolical. But then, that's where I come in.

HUGHIE: Come in to to do what?

BILLY: Spank the bastards when they get out of line.

HUGHIE: How do you spank a Supe?

BILLY: Come on, son.

Billy begins to walk away.

HUGHIE: Uh, where?

BILLY: You'll love it.

Billy turns back to Hughie.

HUGHIE: Uh, not likely. Uh, listen. I think this is good; I'm good. Uh, thank you for an extremely weird conversation, but, uh, I don't want to go to a second location with you. So, I'm gonna get back to work. Thank you.

Hughie begins walking away but stops as Billy begins talking again.

BILLY: Hughie! Hughie. This is your one and only, mate. Once I go, I'm gone. I'm offering you the opportunity to get them that got your girl. What have you got to lose that you ain't already lost?

Billy walks away again. Hughie stands for a few moments. Cut to him following Billy down an alley.

HUGHIE: Where are we?

BILLY: Keep your mouth shut.

Billy knocks on a door. Harry opens a slot on the door to talk to Billy.

BILLY: Harry. Got your message. Thank you for being an upstanding citizen.

HARRY: You know this is fucking police brutality, man. You know what they'll do to me, they catch me letting you in?

BILLY: Not half of what I'll do if you don't.

HUGHIE: Did he just say you were police?

BILLY: Yeah, you know, cop, Fed, all the same to twats like that.

The door opens. Billy pulls Hughie inside. Cut to inside. Hughie stares shocked at the superhero debauchery taking place, include some couples having sex while floating middair.

HUGHIE: Holy shit.

BILLY: Pick your jaw up off the floor and try to blend in. This is the only place where the Supes can scratch their filthy little itch without the paps taking snaps.

Hughie watches a superhero with the ability to shrink jump inside a woman's vagina. He sees Ezekiel receiving oral sex nearby.

HUGHIE: Wait, wait, wait. That's Ezekiel. The "Capes for Christ" guy preaches all that "pray the gay away" shit.

Ezekiel stretches across the aisle between another two men on a couch nearby.

BILLY: And now he's the meat in the Manwich. Fucking hypocrite.

They step over Ezekiel. Cut to the back room. Harry shows Billy and Hughie security footage.

BILLY: Keep going forward. That's it. Further. Further. There. There. Stop.

The footage shows A-Train sitting in a booth.

HUGHIE: Wait, wait, wait. A-Train's... A-Train's here right now?

BILLY: Was. This is from last night. Turn it up.

Another hero comes to sit with A-Train.

BIG GAME: I cannot believe you ran through a bitch.

A-TRAIN: You want to hear something crazy? I ran so fast through this bitch that I swallowed one of her molars. Like a bug on the fucking freeway.

BIG GAME: Dude, that's nasty.

The pair begins laughing.

HUGHIE: They're laughing. Just, like she's a joke. They're fucking laughing.

BILLY: So what are you gonna do about it?

CUT TO: INT. BATHROOM

Annie vomits in the toilet. She exits the stall to see Maeve standing nearby. Annie washes her face. Maeve hands her some tissues.

MAEVE: Oh, for Chrissakes. Clean yourself up. Never let them see you like this. Translucent, you're a goddamn pervert.

Maeve leaves. Translucent makes himself visible, having been standing naked nearby.

TRANSLUCENT: Ah... Oh, uh... I'll just go.

CUT TO: INT. BAR

Billy and Hughie sit across from each other.

HUGHIE: They're all like that? All of them? Even Homelander?

BILLY: Homelander's the exception. He doesn't drink, doesn't smoke. Man's a saint. But the rest of 'em, yeah. Pardon my French, fuck those fuckers. Here. Have a shufti of that.

Billy hands Hughie some files.

HUGHIE: What are these?

BILLY: That's the police log the day that Robin got murdered. Couple of bar fights. A few cars got nicked. But you know what's not in there? No bank alarms going off. No one charged at Central Booking. A-Train stopped two bank robbers, my arse. Someone's fucking hiding something.

HUGHIE: Hiding what?

BILLY: Well, I don't know, whatever dodgy shit he was up to that night. Why couldn't he stop? I mean, what was in that bag? You know? Who was he running from?

HUGHIE: Or where was he running to?

BILLY: Bingo. Work that out, and we'll have the fucker, I can smell it.

HUGHIE: Okay. Okay, so, um, what can I do to help?

BILLY: Here's what you do. Ring Vought, tell 'em you'll take the money, sign the NDA, but only if A-Train's there in person when you do it.

HUGHIE: Why does A-Train need to be there?

BILLY: Then they'll take you into The Seven Tower, through security, mate, and then you're gonna plant a bug.

HUGHIE: A bug?

BILLY: A bug. And we'll have a little listen. See what's really going on.

HUGHIE: Okay, let me just, sorry, let me just get this straight. You want me to, you want me to go to Seven Tower by myself, and-and you want me to plant a bug, like I'm what, like I'm fuckin' James Bond?

BILLY: Yeah, exactly. You got it.

HUGHIE: You're FBI. If you're FBI, then get a warrant. Why do you, why do you even need me?

BILLY: Hughie, Hughie, look, mate, I got a warrant, all right? But that place is firewalled, untappable, and locked up tighter than a nun's knickers. I couldn't get myself in there in a million years. But you, son, you could do it.

HUGHIE: No, no, I can't, okay? I can't. No. You didn't see A-Train covered in... And, and I'm, what, I'm just supposed to go in there, and I'm supposed to I'm supposed to shake his hand? And smile?

BILLY: Yeah.

HUGHIE: I'm not g- I'm not… Do you know who my favorite musician is?

BILLY: Who?

HUGHIE: James Taylor. Number two, Simon & Garfunkel. Number three, Billy Joel. Any of those guys, they don't infiltrate. Okay? I'm not an infiltrator.

BILLY: Hughie, Hughie, fucking grow a pair. You heard that cunt laughing at your girl.

HUGHIE: No. No. No. No, I can't. I can't do that. I'm sorry, I'm just gonna fuck it up, and you're not gonna have your bug, and I'll be dead. I'm not, I'm not like you.

Hughie leaves.

CUT TO: INT. MADELYN'S OFFICE

Madelyn sits down across from the Mayor of Baltimore. He's holding a signed photo of Homelander.

STEVE: This is amazing, Madelyn. Thank you for this. My kid is gonna lose his mind.

MADELYN: Ah, it is our pleasure. Just do not sell it online.

STEVE: All right. What are you thinking?

MADELYN: Baltimore is a beautiful town. But you've got a problem. Your homicide rates are up, what, 62%? The police are not closing cases. You're on the verge of needing a federal lifeline.

STEVE: Cut to the chase, Madelyn. Who are you proposing?

MADELYN: Nubian Prince. Fits your population's demo, but not too militant. Caucasians love him, too, with a 59% approval rate. I am willing to give you a three-year exclusive contract with full PR support, and I'm gonna give you nine and a half points of the merchandising.

STEVE: I thought he was in Detroit.

MADELYN: Well, we're thinking about making a move.

STEVE: How much?

MADELYN: $300 million a year.

They both chuckle.

MADELYN: I know, I know, it's a tough swallow. But we both know that your city needs a hero.

STEVE: $200 million for Nubian Prince. I can sell that.

MADELYN: Mm. I'm sorry, Steve, I can't do it. We've got Atlanta waiting in the wings.

STEVE: I think maybe you can.

MADELYN: And why is that?

STEVE: I happen to know about Compound V.

As they talk, a hero is seen flying outside.

MADELYN: What is Compound V?

STEVE: It's the type of rumor that could really tarnish those heroes of yours. Nobody wants that. People need heroes. Now, I can make sure that that stays a rumor, because I'm a friend. But friendship does cut both ways.

MADELYN: I'm sorry, Steve, I don't know what you're talking about. $300 million is the price, or we go to Atlanta.

CUT TO: EXT. PARK

We see a shot of Donna cutting out photos of Annie from a tabloid. She's on the phone with Annie. The shot cuts back and forth between the two.

DONNA: So, how amazing is it? What's Homelander like?

ANNIE: Uh, he's busy. I haven't really met him yet, but Mom, I got to tell you what happened.

DONNA: Oh, I forgot. I was playing mah-jongg with Patty and Trish, and Patty is going on and on about how her daughter got into med school, and I'm thinking, so what? My daughter got into The Seven! Anyway, so, so, what did you want to tell me?

ANNIE: Everything's great. Just how we dreamed. Um, mom, actually, you know what? I have to go.

DONNA: All right. Bye, honey.

Annie hangs up. She's sitting on a park bench. The camera pulls back and reveals Hughie sitting a few feet from her eating a sandwich.

HUGHIE: Um, excuse me. I'm sorry, a-are you okay? Just seemed like a tough call. Sorry. I don't mean to bother you.

ANNIE: No, no, it's okay. Uh, I'm fine. I'm just… I'm just having a bad day.

HUGHIE: Yeah, me, too. Uh is it, like, a, a work thing, or a, a life thing?

ANNIE: It's a work thing. You?

HUGHIE: Uh, life thing.

ANNIE: You know how you have this image of yourself? Like, I thought I was strong. You know? Like, made of steel. A fighter. And then I was faced with this horrible situation with this asshole and I just heard my mom's voice in my head, "Keep smiling, the show must go on," and I didn't fight. And now I just feel sick. Partly because I did it, but mostly because turns out I'm not who I thought I was. Oh. Oh, I'm, um, sorry. Uh I-I didn't mean to just dump all of that onto you.

HUGHIE: No, no, it's totally fine that you dumped. Um, listen, d-do you like your job?

ANNIE: Oh. It's the only thing I've ever wanted.

HUGHIE: And it's a good job? Like, you're not selling kids smack?

ANNIE: No, it's a great job. I could help a lot of people.

HUGHIE: Thing is, I, um... used to know this girl, and we used to go skating at Rockefeller, and I'd be on the side with this death grip on the rails. She would just charge headfirst into the middle of the rink. And she wasn't good. Like, she fell a lot but she was never scared. And she always used to say, "Just 'cause you fall on your ass doesn't mean you have to stay there." So you fell on your ass, you know? That's not who you are. So who are you?

ANNIE: I'm a fighter. I'm gonna fight. Yeah. I'm gonna take that son of a bitch's head clean off his body.

HUGHIE: Okay. Wow, that was... Okay. Cool. Little scary, but, but cool. I'm-I'm Hughie, by the way.

ANNIE: Annie.

They shake hands.

CUT TO: EXT. BAR

Billy sits alone at the bar. Hughie enters and sits next to him.

HUGHIE: Okay, man. I'm in.

Cut to the pair in the bathroom. Hughie calls the Vought lawyer while Billy listens in.

HUGHIE: Okay, it's ringing.

LAWYER: Yeah, hello?

HUGHIE: Hi. Hi. Yes, hello. Hello, Mr. Friedman. It's Hughie Campbell. I got your message, and-and $45K, it's just it's just it's bingo, like, life-changing. Um, but I just need one thing before I sign anything. I need an apology from A-Train.

LAWYER: Uh, he already apologized.

HUGHIE: Well, no, no, no. No, he hasn't. Yes, he sent his he sent his regrets and his sympathies on, on TV, but I, if I could just get an apology face-to-face, that would be fantastic. Just to, just for closure, just to put just to put a button on it.

LAWYER: Okay, yeah. But, uh, Hugh, I'm telling you, the answer's gonna be no.

HUGHIE: All right, in that in that case, can you just give me... Uh, hello? I think... They hung up. I don't think they're gonna go for it.

BILLY: Oh, yes, they will.

CUT TO: SEVEN HEADQUARTERS

Annie enters the main conference room. The other six members of The Seven are already there. Homelander stands by the window while the rest are sitting at the table.

HOMELANDER: Starlight. Don't want to be late to your first official meeting. I had a whole welcome speech planned.

ANNIE: Sorry, sir.

HOMELANDER: Please, Homelander's fine.

DEEP: Beginning to wonder if you'd even show up. I mean, all that pressure, it's a lot for anyone to swallow.

Annie sits down.

ANNIE: Yeah. Don't worry, I'll be fine. I'm here, and I'm not going anywhere.

TRANSLUCENT: Can we get back to this, please? This is a serious crime. These assholes pirated my movie three weeks before release, and you can't walk down 5th Avenue without bumping into a table of unlicensed Homelander shirts. Copyright infringement is costing Vought $1.2 billion per year. That's money out of our pockets. We've all got, what, four points each?

A-TRAIN: What the fuck? You got four points?

MAEVE: And clearly better lawyers.

HOMELANDER: Hey, hey, hey, guys, come on. Stop. What's Starlight gonna think? Listening to us haggling over nickels. We're The Seven, for God's sake. Whether we're out there or we're in here. Now, what I do want to hear is who you saved this week. Huh? Who's up for that? Black Noir. Let's start with you, man.

CUT TO: EXT. SEVEN HEADQUARTERS

Billy pulls up outside the building. Hughie spots some dog toys in the back seat.

HUGHIE: Do you have a dog?

BILLY: No. All right, give us your phone. There's fuck-all security to worry about. In fact, they're a bunch of muppets. And the metal detector won't pick this up. Right? And what they'll probably do is take you through the security and then up into the boardroom. Sit down. Be nice, congenial. Then, real polite-like, tell 'em you're gonna take a fake shit. Go into the bog, take the bug out. Peel back the plastic bit to reveal the sticky side. Put the plastic bit in the bog. Flush it. Then go back into the boardroom, sit down big smiles plant the bug underneath the table. Easy peasy Japanesey. Bob's your uncle. That's that.

HUGHIE: That's that? That was that was a lot. Th- I've- Hold on, can you just can you repeat it again? Just a little bit slower? Because I-

BILLY: Shh. Listen.

HUGHIE: Fuck.

BILLY: Hughie, calm down, all right? This is like that scene in The Matrix. Now, you could take the fucking red pill, right? Spend the rest of your life jacking off, crying into your chai tea green latte, what the fuck. Or you could take the blue pill. Or is it the red pill? Anyway, take the other pill and quit being a cunt.

HUGHIE: Which pill do you want me to take?

BILLY: Just quit being a cunt. That's what I'm saying.

HUGHIE: Fuck me. Okay.

Hughie gets out of the car. “Take Me Down” by Daniel Pembleton plays. Hughie pauses to take in the sight of the full building. Cut to him inside walking past armed guards. He sets off the metal detector.

GUARD: Sir, could you empty your pockets, please?

Hughie walks back through and puts his keys and phone on a tray. He walks back through and one guard scans him down while another inspects his phone. After a few moments the guard slides the tray over.

GUARD: Thank you.

Hughie grabs his things. Cut to him in the main conference room. He looks up and sees a mural of the previous Seven lineup. He turns toward a guard in the room.

HUGHIE: Um excuse me, can-can I, uh... can I use your bathroom?

The Vought lawyer walks in, tailed by A-Train and Ashley. They all approach the table. Hughie stands up.

LAWYER: Just to be clear, A-Train's apology isn't an admission of any sort of culpability whatsoever. Do you understand?

Hughie hallucinates that A-Train is covered in Robin's blood. He stares wide-eyed and begins panting.

A-TRAIN: I'm sorry about what happened to your girlfriend, all right?

In the background, Hughie imagines A-Train's laughter from the security tape.

A-TRAIN: Hey, dude, are you okay?

Everyone stares as Hughie's panting gets worse. After a few moments and some deep breaths, he returns to normal.

HUGHIE: Fine. I appreciate the apology. Accidents happen, right? After all, I mean, you were saving the world.

ASHLEY: Okay, great. Thank you so much. As you know, a crimefighter's work is never done. Douglas here will handle the rest of the paperwork for you, okay? Thank you.

Ashley and A-Train leave. The lawyer hands Hughie a pen.

HUGHIE: Can I use your bathroom?

Cut to Hughie in the bathroom. He drops the bug on the floor. Before he can pick it up, Annie walks in. After standing in front of the mirror for a few moments, she leaves. Hughie then picks the bug back up and prepares it. He leaves as well. After he leaves, Translucent makes himself visible.

TRANSLUCENT: What the fuck?

Hughie re-enters the conference room and signs the NDA, placing the bug under the table.

CUT TO: EXT. STREET

Billy drives Hughie to his job.

HUGHIE: And I look him right in the eye, and I smile. And that was awesome, man, just getting to stare that asshole down. I get why you dig this job.

BILLY: Yeah, you know, it has its moments, doesn't it?

HUGHIE: You were right. Fuck A-Train. Fuck A-Train. Fuck-fuck The Seven. Fuck all Seven. What are we, uh, what are we doing here?

BILLY: Well, you got to go to work, don't you?

HUGHIE: Yeah, but, um, I don't, uh…

BILLY: Well, I mean, that's all I need you for right now, yeah?

HUGHIE: Yeah, I mean, but I, I can, I can help with other stuff, you know? I could, I could be, like, your tech guy. You know? Like, I could be in the van with the thing and, like, you know, "He's down the hall to the left." Like, I can-

BILLY: Yeah, look, son, I, uh, I think it's best that I take it from here. You know what I mean?

HUGHIE: Yeah, but I, I can I can really help.

BILLY: I know you can help. I got it.

Hughie gets out of the car and walks away. Billy starts the car again. Hughie turns around.

HUGHIE: Oh, hey, wait. You ever see an asshole tear up $45K?

Hughie tears up the check from Vought.

BILLY: Hughie. You're a good lad.

Billy drives away.

CUT TO: INT. CAR

Mayor Steve answers a call from Madelyn in his car. The shot cuts back and forth between them as they talk.

STEVE: Ms. Stillwell, I wasn't sure you'd call.

MADELYN: This fucking chafes, but, um, I'm willing to come down to $230 million for Nubian Prince.

STEVE: That's very reasonable, Maddie. Thank you.

MADELYN: And, Steve, this, um, Compound V… Any rumors you may have heard about my heroes? Libelous and completely untrue. But, we all know how rumors spread, so I'd appreciate your discretion.

STEVE: Of course. You have my word.

MADELYN: Thank you. Have a safe flight home.

CUT TO: INT. STORE

Hughie watches the news while at the front counter.

ANCHOR: Policing cities is a thorny enough issue as it is, but allowing superheroes into national defense? We'd basically be privatizing war.

Gary walks over.

GARY: Good night, Hughie. You'll lock up?

HUGHIE: Yeah. Thanks, Gary.

Gary leaves. Before the door fully closes, Translucent enters, invisible.

HUGHIE: Sorry, we're closing up.

He realizes that it appears no one has entered the store.

HUGHIE: Hello?

TRANSLUCENT: Who are you?

Hughie bolts up.

HUGHIE: The fuck?

TRANSLUCENT: Right in front of you, prick. You think I wouldn't find this thing?

Translucent, still invisible, holds the bug up in front of Hughie. He puts it down and grabs Hughie's lanyard.

TRANSLUCENT: Hughie.

Translucent begins throwing Hughie around the store.

TRANSLUCENT: You pussy, I followed you from the fucking Tower.

HUGHIE: No, no, no!

TRANSLUCENT: Who's that guy you were with, in the car? Who was he?

HUGHIE: I don't-

TRANSLUCENT: He put you up to this?

HUGHIE: I don't know! He was just some Uber driver, okay?

TRANSLUCENT: Don't give me some bullshit! Uber driver! Do you think I'm a fucking idiot? Why'd you plant the bug?

Translucent picks a TV off the wall and begins walking over to Hughie with it.

HUGHIE: Please. Please, please, please. No, please.

TRANSLUCENT: We're The Seven, Earth's most mighty, champions of the innocent, motherfucker!

Right before Translucent hits Hughie with the TV, Billy drives into the store and knocks Translucent across the store.

BILLY: Sorry about the mess. You should fuck off, Hughie. Hughie, run!

”London Calling” by The Clash begins playing. Hughie runs into the back. Billy approaches where Translucent landed with a crowbar.

BILLY: Well, well, well, if it ain't the invisible cunt.

Billy swings with the crowbar, but Translucent is no longer there. They begin fighting. In the back, Hughie begins to leave, but turns around and returns to watch the fight. Translucent gains the upper hand, but Billy spits blood on Translucent, giving away where he is.

BILLY: There you are.

Now somewhat visible, the fight becomes more fair, but Translucent still manages to get Billy on the ground.

TRANSLUCENT: So who are you? Fucking spy? For who? Huh? You're gonna fucking tell me, or I'm gonna smash your fucking scalp off! Who the fuck are you?

Translucent picks up the crowbar and holds it over Billy. Hughie sneaks up behind him and grabs a live wire from the wall.

BILLY: I'll tell you who you are. A fucking moron. "Translucent" doesn't even mean "invisible". It means "semi-transparent".

Hughie attempts to get Translucent with the wire, but he's not close enough. Billy looks disappointed. Translucent begins to turn. Now distracted, Billy is able to kick him towards Hughie, allowing Hughie to electrocute him. Hughie screams and after a few moments Translucent falls to the floor. Billy gets up. Hughie tosses the wire.

HUGHIE: Is he, is he dead? Is he…

Billy kicks Translucent.

BILLY: Well, he ain't moving.

HUGHIE: Oh, fuck. Oh, shit.

BILLY: How'd you know the electric could do the job?

HUGHIE: Skin's carbon. Highly conductive. Saw it on, uh, Jimmy Fallon.

BILLY: Would've taken me forever to work that one out. Good job. Let's get him in the boot.

Billy begins to lift up Translucent.

HUGHIE: Wait, wait, what? Wait, what? What?

BILLY: The trunk.

HUGHIE: No, no, I mean, what are we, what are we, what are we doing with him?

BILLY: Well, Hughie, you just offed one of The Seven, mate.

HUGHIE: Me? I... You, you hit him with a fucking car!

Billy drops Translucent.

BILLY: Look, potato, fucking po-tah-to. We're both in a shitload of trouble.

HUGHIE: No, no, no, we're not! It's, it, he, he attacked us, okay? And you're, you're a federal officer, you know? Just, just call the fucking FBI.

BILLY: Yeah, o-okay, so, look, technically, I'm not a Fed.

HUGHIE: What?! Then who the fuck are you?!

CUT TO: INT. PLANE

“The Passenger” by Iggy Pop plays. Mayor Steve's son sits at a table with the autographed photo of Homelander in front of him. The plane rattles. The shot changes to show Steve is sitting next to his son.

STEVE: Don't worry about it, kiddo. It's just a little turbulence. It'll be okay.

An aide whispers something to Steve. Steve's son sees Homelander out the plane window.

KID: Dad. Dad. Dad!

STEVE: What's he doing out here?

KID: Are you guys friends?

Homelander's eyes glow red.

STEVE: Oh, my God.

Homelander uses his laser vision to cut the plane in two. It crashes down through the clouds. Homelander watches. After a few moments, he smiles.

END CREDITS
THE BOYS
Episode #206
“The Bloody Doors Off”
Written by
Anslem Richardson
Directed by
Sarah Boyd
Based on the Comic by
Garth Ennis and Darick Robertson
PRODUCTION WHITE 8/19/19
FULL BLUE DRAFT (RENUMBERED) 8/29/19
FULL PINK DRAFT 9/06/19
FULL YELLOW DRAFT 9/13/19
REVISED GREEN PAGES 9/15/19
REVISED GOLDENROD PAGES 9/17/19
REVISED 2ND WHITE PAGES 9/18/19
REVISED 2ND BLUE PAGES 9/23/19
REVISED 2ND PINK PAGES 10/18/19
REVISED 2ND YELLOW PAGES 10/29/19
REVISED 2ND YELLOW PAGES (1 TOTAL)
56
Copyright © 2019
SONY PICTURES TELEVISION INC.
All Rights Reserved
No portion of this script may be performed, or reproduced
by any means, or quoted, or published in any medium without
prior consent of SONY PICTURES TELEVISION INC. * 10202 West
Washington Boulevard * Culver City, CA 90232 *
THE BOYS #206 CAST LIST – REV. 2ND BLUE PAGES - 9-23-19
THE BOYS
Episode #206
“The Bloody Doors Off”
9/23/19
(REVISED 2ND BLUE PAGES)
CAST LIST
BILLY BUTCHER......................
HUGHIE CAMPBELL....................
HOMELANDER.........................
ANNIE JANUARY/“STARLIGHT”..........
QUEEN MAEVE........................
A-TRAIN............................
MOTHER’S MILK......................
THE DEEP...........................
FRENCHIE...........................
KIMIKO.............................
STORMFRONT.........................
ASHLEY BARRETT (VOUGHT PUBLICIST)
GRACE MALLORY......................
ALASTAIR ADANA (THE COLLECTIVE)....
THE LAMPLIGHTER....................
ELENA..............................
CHERIE (FRENCHIE’S ASSOCIATE)......
JAY (FRENCHIE’S FRIEND, FLASHBACKS)
DENNIS (KILLED BY STARLIGHT).......
PERP (KILLED BY HOMELANDER + STORMFRONT)
TIM (INSTITUTE PATIENT KILLED BY LAMPLIGHTER)
CINDY (PATIENT AT INSTITUTE).......
PATIENT (ESCAPES INSTITUTE, HURTS HUGHIE)
LOVE SAUSAGE (PATIENT AT SAGE GROVE)
HUSBAND (FLIGHT 37 VIDEO)..........
CHRIS LENNERTZ (A-TRAIN RAP DEMO)
INTESTINE BOY (SAGE GROVE PATIENT)
SECURITY GUARD (SAGE GROVE)........
ANOTHER GUARD (SC. 23).............
Karl Urban
Jack Quaid
Antony Starr
Erin Moriarty
Dominique McElligott
Jessie T. Usher
Laz Alonso
Chace Crawford
Tomer Capon
Karen Fukuhara
Aya Cash
Colby Minifie
Laila Robins
Goran Visnjic
Shawn Ashmore
Nicola Correia-Damude
Jordana Lajoie
THE BOYS #206 CAST LIST – REV. 2ND BLUE PAGES - 9-23-19 2
DEANNA (ASHLEY’S ASSISTANT)........
INTERVIEWER (WITH HOMELANDER/STORMFRONT ON SET)
NEWS ANCHOR........................
OMITTED
AL ROKER *
THE BOYS
Episode #206
“The Bloody Doors Off”
10/18/19
(REVISED 2ND PINK PAGES)
SET LIST
INTERIORS
SEVEN TOWER –
QUEEN MAEVE’S APT -
BEDROOM
STORMFRONT’S APT - *
BEDROOM
HAITIAN KINGS BASEMENT
CHURCH OF THE COLLECTIVE
RENEWAL CENTER
SAGE GROVE CENTER –
MEDICAL SUPPLY ROOM
SECURITY ROOM
HALLWAY 1
HALLWAY 2
HALLWAY 3
HALLWAY 4
HALLWAY 5
HALLWAY 6
“DAWN OF THE SEVEN” SET –
HOMELANDER’S TRAILER
MAEVE’S TRAILER
MEDICAL CLINIC
RUNDOWN WAREHOUSE (FLASHBACK)
INTERROGATION ROOM (FLASHBACK)
SEEDY CHELSEA APT. (FLASHBACK)
RECORDING BOOTH
DIAMOND STORE -
BASEMENT
EXTERIORS
“DAWN OF THE SEVEN” SET –
BASECAMP
HOMELANDER’S TRAILER
SAGE GROVE CENTER -
FIELD OUTSIDE
RURAL ROAD
WOODED ROADSIDE
CLEARING
VARIOUS NEW YORK EXTERIORS –
ALLEY (SCENE 3)
MEATPACKING DISTRICT (SC. 35)
VEHICLES
FRENCHIE’S VAN
HYUNDAI
SAGE GROVE AMBULANCE
CAB
OMITTED
INT. SEVEN TOWER – *
HOMELANDER’S APT -
BEDROOM
THE BOYS
“The Bloody Doors Off”
FADE IN...
We hear French rap pumping loud, as a NUTRIBULLET WHIRS --
CHYRON: 8 YEARS AGO.
INT. SEEDY CHELSEA APARTMENT - NIGHT - FLASHBACK1 1
OPEN ON FRENCHIE. JOINT in his mouth. A smile on his lips.
Happy. Light. Surrounded by his best friends in the world:
CHERIE (yes, that Cherie) and JAY (20’s, handsome, West-
African). The Three Musketeers.
Jay snorts a line of coke. As Frenchie frowns at Cherie --
FRENCHIE
Why are you laughing?
CHERIE
You’re ridiculous.
FRENCHIE
I’m not ridiculous.
CHERIE
Then you’re high.
Frenchie opens the Nutribullet, checks the white powder he’s
been grinding. Breathes deeply.
FRENCHIE
Beside the point. Point is, I
learned everything I know from those
girls.
JAY
(just confirming)
The Golden Girls.
Frenchie stops the Nutribullet and uses a funnel to dump the
powder into a DIY pressurized “fill-station” fastened to the
table. All meant to be a glimpse of his grimy, powder-caked,
mad druggy brilliant scientist lab skillz.
FRENCHIE
I was 17 years old, alone in New
York. Turning tricks, begging for
scraps. Who kept me company? The
Golden Girls. 3am to 5am. They lit
up that shelter’s shitty TV.
JAY
You’re not talking porn? Golden
Shower Girls?
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 1.
FRENCHIE
That’s disrespectful.
CHERIE
So sensitive.
Frenchie pivots to an adjacent table. More lab equipment, a
CLUSTER of Xanax prescription bottles (Alprazolam). Tricked- *
out PET soda bottles. He uses the “fill station” to load the
bottles with pressurized Xanax... (give us all of this
business in fun close-up inserts please).
FRENCHIE
(dead serious)
Those saucy ladies made their own
family. I didn't know it was
possible to make your own family.
So I did what they did. You are my
Golden Girls.
JAY
I’d rather not be.
FRENCHIE
(to Cherie)
You are my Blanche. And Jay, you
are my Dorothy.
CHERIE
(to Jay)
Because you’re gay.
(ALT., we’ll see!) *
Because you’re a little bit gay. *
Jay can’t argue with that.
FRENCHIE
Thank you for being a friend.
JAY
So you’re Betty White?
FRENCHIE
What a fucking question. Of course
I'm Betty White.
Frenchie smiles at them. Full of love.
FRENCHIE (CONT’D)
Now. Who wants to rob a bank?
INT. DIAMOND STORE - BASEMENT - NIGHT - PRESENT2 2 *
MATCH CUT TO FRENCHIE. As he pulls on a pair of goggles.
The classic comic book version of Frenchie.
Then he picks up a diamond DRILL -- revs it -- zzzzeee --
CONTINUED:1 1
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 2.
Behind him -- multiple HASIDIC MEN CUT DIAMONDS with saws,
other equipment. This is the scruffy, cluttered basement
level of Jaffe Jewelers.
Frenchie turns. Reveal ANNIE and HUGHIE across from him.
ANNIE
Will it get through my skin?
FRENCHIE
If it can’t, nothing can.
Hughie looks nervous. Nervous and queasy.
HUGHIE
I don’t know about this.
ANNIE
Stormfront knows I leaked the V.
HUGHIE
She hasn’t come after you yet.
ANNIE
Even worse. That means she’s got
some fucked up plan for me. I want
this chip out, now. *
FRENCHIE
I understand, Petit Hughie. Though
you’ve been covered with the
entrails of many a person -- even a
sea mammal -- it’s harder when it’s
someone you love.
HUGHIE
(flustered)
What? I don’t -- I mean, of course
I do, but not like, we’re just *
friends --
Annie averts her eyes. Awkward.
ANNIE
Can we just do this please before I
change my mind?
Annie pulls her collar aside. Taps the area just below her *
neck and steels herself -- Frenchie FIRES UP THE DRILL -- *
FRENCHIE
(over the WHIRRING) *
This might sting a little! *
Hughie clutches the gauze tightly. Can barely look.
He LOWERS IT against Annie’s neck... the DRILL SLOWS as it *
hits the surface... whining with overexertion... then
WHOOOOOSH...
CONTINUED:2 2
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 3.
punctures through the skin as a spray of BLOOD spatters
Frenchie’s goggles. Hughie’s splattered on the face as well. *
Grimaces. *
Annie winces, it’s a fair amount of pain.
HUGHIE
Oh my god. Oh my god.
Frenchie stops when he spots metal. Fishes the chip out with
a pair of gemstone tweezers -- speaks to it --
FRENCHIE
Bonjour, my little spy. Hughie!
The box.
Hughie hands him a small box covered in RF shielding foil.
Frenchie drops the chip inside. Closes the lid.
Hughie covers Annie’s wound with gauze. Puts pressure on it.
Likes being this close to her, does not like all the blood --
HUGHIE
You okay?
ANNIE
(through gritted teeth)
I feel lighter already.
Off the two of them. Connected. But not. All at once.
EXT. ALLEY - NIGHT3 3 *
Handheld. A scruffy PERP, 30s, runs with a gun and a plastic
bag full of loot down a filthy, out of the way, trash-strewn
alley. He ducks behind a DUMPSTER. A distant SIREN. *
The Perp examines his winnings: a wad of money, two cartons
of cigarettes and a box of SLIM JIMS.
When suddenly -- A RED BOOT steps beside the loot. He looks
up to find -- HOMELANDER smiling down at him.
HOMELANDER
Howdy ho, buckaroo.
The Perp freaks and starts to run, but is cut off by --
STORMFRONT blocking the rear exit. He pulls his gun, but she *
smacks it away, shattering his wrist.
PERP
SHIT! You broke my hand!
Homelander approaches. *
STORMFRONT
What do you wanna do with him?
CONTINUED: (2)2 2
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 4.
HOMELANDER
Well, hand him over to the police.
Of course.
PERP
It really hurts!
They talk past him.
STORMFRONT
Yes, of course. We are heroes, and
that’s what heroes do.
HOMELANDER
Absolutely.
STORMFRONT
Though. He’ll probably just get
released tomorrow.
We start to realize -- this is SEXUAL FOREPLAY. The Perp
also starts to realize something troubling is going on...
PERP
Please -- can you take me to the
hospital?
HOMELANDER
You know, sometimes it feels like
the justice system doesn’t even work
anymore...
STORMFRONT
(seductive)
Everyone recording everything on
their phones -- it’s like you can’t
even do your job.
Man, it’s fucking sexy the way she says that. Brushing her
hands on his chest -- Homelander’s hot and bothered --
HOMELANDER
(voice thick with lust)
Really, uh, really speaks to the
deterioration of, uh, God fearing
American values.
PERP
Please... just turn me in...
STORMFRONT
What is the world coming to?
HOMELANDER
Someone should do something.
Perp screams out at the top of his lungs --
CONTINUED:3 3
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 5.
PERP
(terrified now)
HELP! HEL --
He doesn’t get a chance to finish -- Homelander covers the
Perp’s MOUTH with his glove. Starts pushing his head back
against the WALL. The GUY HOWLS in MUFFLED AGONY.
As Stormfront RUBS Homelander’s CROTCH, titillated. Murder
as a sex act. Then --
Homelander PUSHES his PALM right THROUGH the guy’s face.
RENDERING IT INTO A BLOODY PULP. Stormfront and Homelander
lock eyes excitedly. Fuck this is hot.
The Temptations “My Girl” plays as they lunge at each other,
kiss hard. Homelander smears the Perp’s blood on her cheek.
TIME CUT. PAN OFF THE CORPSE -- Homelander’s pants are at
his ankles, Stormfront’s are off. They fuck hard against the
wall, her legs around him, face to face. Pounding. The
corpse at their feet. They got sunshine on a cloudy day...
INT. HAITIAN KINGS BASEMENT - NIGHT4 4 *
CLOSE ON BUTCHER. Sitting at one end of the couch. Watching
the television. Quietly furious.
ON THE SCREEN. Homelander and Stormfront. In directors’
chairs. ON SET for “Dawn of the Seven.”
INTERVIEWER (O.S.)
All right. Be honest. Who’s the
biggest prankster on set?
Homelander and Stormfront laugh. Flirting. Can’t help it.
This is so fun. Homelander points to Stormfront --
HOMELANDER
(”this one”)
Oh, no comment...
BUTCHER. Watching. Burning.
KIMIKO. On the other end of the couch. Glaring at
Stormfront. Also burning.
They can both read the body language loud and clear.
BUTCHER
(through grit teeth)
...they’re fucking.
Kimiko agrees. Two killers, quietly hungry for blood.
CONTINUED: (2)3 3
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 6.
INT. HAITIAN KINGS BASEMENT - NEAR THE STAIRS - NIGHT5 5 *
MOTHER’S MILK sits by himself -- inspecting a FOLDED, WELL-
WORN PIECE OF PAPER.
INSERT. A childish cartoon drawing of a penguin with a
chainsaw. Signed “LOVE, JANINE.” We saw his daughter give
it to him in Ep. 107 last year.
He stares at it. Lost in regret. When he hears his friends
coming, so he folds it up, puts it away. As --
Frenchie hops down the steps. Followed by Hughie. Followed
by... Annie.
MOTHER’S MILK
You get the chip out?
Frenchie nods. Annie looks around. Disgusted. Some pity.
ANNIE
This is where you’re living?
HUGHIE
It’s got its charms. The rats are
like Pokemon. With Hep-C.
Annie feels guilty. Living in luxury, while Hughie is here?
ANNIE
I’m sorry.
HUGHIE
(lies)
It’s not so bad.
Kimiko approaches --
FRENCHIE
So? You’re back? You got tired of
killing people for money?
Kimiko FLIPS HIM OFF. Otherwise, doesn’t even look at him. *
Steps to Annie. Just stares at her. Face to face. Blankly.
Annie is Stormfront’s teammate, after all.
ANNIE
Uh. Hi. Remember me...?
HUGHIE
(please don’t kill her) *
She saved you from the black site,
remember Kimiko?
Long beat. Face to face. Is Kimiko going to attack? Then --
Kimiko HUGS Annie tightly. Tenderly. Annie reacts,
surprised. Then Kimiko backs up, holds Annie’s hand. It’s a
leeetle bit awkward, but okay --
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 7.
ANGLE. Butcher hangs back a bit. Watching this happy little
bunch. Nice and cozy with a fucking Supe. Kimiko is still *
holding Annie’s hand. Butcher sees it, rolls his eyes. *
BUTCHER
Well, well, well. What have we
here?
HUGHIE
I know what you’re gonna say --
BUTCHER
Starlight. Don’t you just light up
a room. You’re looking well.
Hughie stares. That’s not the reaction he was expecting.
Butcher is pristine politeness. Hughie waits for the other
shoe to drop. So do we.
ANNIE
No thanks to the 50 caliber round
you pumped into my chest.
BUTCHER
That was awkward. But you know what
they say: what doesn’t kill us,
makes us stronger, eh?
Now what brings you by? *
HUGHIE
She has a lead on Stormfront.
ANNIE
I broke into her laptop and got a
look at her inbox. Dozen messages
from Stan Edgar.
BUTCHER
Oh? And what does Vought’s Big
Slapper have to say?
ANNIE
How they’re close to a break-
through. At the Sage Grove Center?
It’s a psychiatric hospital in *
Pennsylvania. *
HUGHIE
What kinda breakthrough?
ANNIE
She came in before I could see any
more.
MOTHER’S MILK
Anyone else on the email?
ANNIE
Someone named ‘Elle?’
CONTINUED:5 5
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 8.
MOTHER’S MILK
Elle? Who’s she?
Annie shrugs. You got me.
BUTCHER
Well then, let’s have ourselves a
dekko at this looney bin.
Starlight, would you be amenable to
joining us on this little caper?
Hughie. Annie. Seriously, what’s up with Butcher?
HUGHIE
You -- want her to come?
BUTCHER
Naturally. Things go tits up, who
do you think Vought’s after? Us or
their billion dollar baby turned
traitor who ripped out her own chip?
Never go into shark infested waters
without bringing chum. Cheers.
He smiles pleasantly, heads away. Off Hughie, Annie. There
it is. There’s the other shoe. From there, we CUT TO: *
A NEWS REPORT. STOCK FOOTAGE of two different factions ofA6 A6 *
people SCREAMING and SHOVING at each other. *
NEWS ANCHOR (V.O.) *
With the House Judiciary Hearing *
into Vought just four days away, pro *
and anti Vought camps clashed in *
Manhattan this morning. *
Congresswoman Victoria Neuman said *
that Compound V must -- *
Then -- BZZT -- channel changes -- *
A TV COMMERCIALB6 B6 *
Moody, in black and white, like a classy-ass Nike spot. *
Maeve regards herself in a mirror. Then turns, seemingly *
challenging the camera, challenging the viewer. *
MAEVE (V.O.) *
This is who I am. Who are you? *
Maeve lifts a PRIDE BAR -- rainbow wrapper, the only colored *
thing in the commercial -- takes a bite -- *
MAEVE (V.O.) *
Brave Maeve Pride Bars. Because you *
can’t be proud on an empty stomach. *
*
CONTINUED: (2)5 5
THE BOYS #206 "The Bloody Doors Off" REV. 2ND BLUE - 9/23/19 9.
INT. QUEEN MAEVE’S TRAILER - DAY6 6 *
The commercial PLAYS ON MAEVE’S TELEVISION -- *
THE ACTUAL MAEVE. Vapes marijuana, stares at the TV. Things *
are getting so fucked, so fast. When there’s a KNOCK on her
door. She switches off the TV --
QUEEN MAEVE
Come in!
As DEEP lets himself in. With a backpack.
QUEEN MAEVE (CONT’D)
You were supposed to call first, you
fucking idiot. Anyone see you?
DEEP
I’m allowed to visit my friends.
QUEEN MAEVE
You find it?
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. 2ND BLUE - 9/23/19 9A.
DEEP
Sorry. No black box.
Maeve grimaces, disappointed. But Deep smiles. He loves
proving useful.
DEEP (CONT’D)
But -- I told my contacts to keep an *
eye on the North Atlantic Current.
And this school of Halibut -- I
mean, these dudes are rowdy *
motherfuckers --
(off Maeve’s withering look) *
Anyway, they found some of the
wreckage that drifted up near
Iceland. Found this. *
From his backpack, Deep brings out.. a BATTERED WATERPROOF GO-
PRO camera, damaged... but still intact.
DEEP (CONT’D)
I doubt it even works...
Maeve takes it. Evidence from the plane. She’s pensive.
Troubled. Suddenly melancholy.
DEEP (CONT’D)
Flight 37. That was the one you and
Homelander got to too late, right, *
it already went down?
(Maeve nods)
What do you care about it?
QUEEN MAEVE
If you want back in the Seven? Not
a fucking word of this to anyone,
you understand?
INT. RECORDING BOOTH - DAY7 7
CHRIS LENNERTZ, our brilliant, lovable, and Caucasian
composer, stands alone in the booth. Headphones on his ears.
Then the beat kicks in, he starts singing a rap song --
CHRIS LENNERTZ
What... okay... What what... ready,
set, go... Here Comes the A-Train,
Mr. Fleet feet/ Saving lives and *
takin' names, nice and easy/ Ain't
no day like a race day, what/ Ain't
no love like a raceway, what...
PULL OUT TO REVEAL THIS IS PLAYING ON A TABLET --
EXT. SET OF ‘DAWN OF THE SEVEN’ - DAY8 8
A-TRAIN watches on the tablet at video village. Same *
‘wrecked NYC’ movie set behind them that we saw in ep. 205. *
The crew’s broken for lunch. He’s beside ASHLEY. *
CONTINUED:6 6
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 10.
ASHLEY
Isn’t it lit? Your very own goodbye
anthem?
A-TRAIN
(defeated)
Dope.
ASHLEY
This is just a demo of course.
We’re going out to Lil Nas X for the
official version. Maybe you could
bust out Prince’s Guitar for the
video?
A-TRAIN
I had to sell it. I’m going 10-1.
A-Train walks away. Despondent. Behind him, DEANNA
APPROACHES Ashley, who’s moved on to other business. *
DEANNA *
I can’t find her. *
ASHLEY
So where the FUCK is Starlight?
WITH A-TRAIN. Walking. Yesterday’s news. He notices
Stormfront, walking toward him. Their eyes catch. She
regards him as if seeing a street urchin. Gives a wide berth
as she passes. A-Train shakes his head -- Bitch, seriously?
DEEP (O.S.)
Yo! Here comes the A-Train!
Deep approaches, carrying his backpack. A-Train swears to
himself. When it fucking rains. He tries to ignore him --
DEEP (CONT’D)
Hey man! Hello? It’s me! Right
here!
Deep steps up, they bro hug, a little stiff. A-Train doesn’t
like him much.
A-TRAIN
What are you doing here?
DEEP
Oh, I came to see -- no reason.
(leans in)
Bro. Been thinking about you. I’m
sorry. Talk about getting assfucked
with a soup can.
A-TRAIN
What do you mean?
CONTINUED:8 8
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. GOLDENROD - 9/17/19 11.
DEEP
C’mon. If anyone knows what it’s
like to get bounced, it’s me.
CONTINUED: (2)8 8
(MORE)
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. GOLDENROD - 9/17/19 11A.
Did some shit I’m not proud of.
Weird shit.
A-TRAIN *
(lies) *
I’m fine. My people are talking to *
Nike and Under Armour. This’ll be *
good for me. *
DEEP
Hey, that’s great. Well, then you
don’t need his help. Forget I said
anything.
A-TRAIN
Okay, cool.
(then)
Whose? Help?
Deep reaches into his backpack -- takes out a CAN --
DEEP
Would you like a Fresca?
EXT. SAGE GROVE CENTER - DAY9 9
A STONE SIGN: SAGE GROVE CENTER.
A HOSPITAL. In Pennsylvania. Quiet. Tranquil. Isolated.
But still SECURE. A CHAIN LINK FENCE SURROUNDS IT. *
INT./EXT. FRENCHIE’S VAN - DAY10 10
Away from the main gate, the van is safely parked out of
sight, hidden in some surrounding trees.
Butcher watches the hospital through a pair of small binocs.
Kimiko, Frenchie, Mother’s Milk all wear dark blue SAGE GROVE *
scrubs. M.M. has his laptop open --
MOTHER'S MILK
Sage Grove. A proud subsidiary of
Global Wellness Services, which is a
subsidiary of --
BUTCHER
I can guess.
Butcher checks a couple PISTOLS. Hands one to M.M.
CLOSE ON: Frenchie hands out PERFECTLY FORGED SAGE GROVE
lanyards with fake photo IDs of Frenchie, Kimiko, M.M.
He notices Kimiko is wearing a flashy, three-finger gold
ring, encrusted with diamonds that say BOSSY --
CONTINUED: (2)8 8
DEEP (CONT'D)
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 12.
FRENCHIE
That’s what you bought with your
blood money? No one will believe
you’re an orderly with that.
Kimiko holds up her hand. Examines the ring. Maybe he’s
right. Then breathes onto the diamonds, as if polishing
them. Smiles. Nope. Fuck off.
ANNIE
I should go in with them.
BUTCHER
How will they ever manage without a
bony blonde Supe? Just get ‘em in
and get the fuck back, yeah?
Hughie. Wanting peace between these two.
HUGHIE
Annie. If they recognize your face
in there...
Starlight. She’s stronger than all of them. Part of her
wants to blast Butcher. But she stands down. Nods.
Mother’s Milk opens the back and jumps out. Kimiko follows.
Then Starlight, pissed. Frenchie is the last to go.
BUTCHER
And don’t get caught.
FRENCHIE
I never do.
INT. INTERROGATION ROOM - NIGHT - FLASHBACK - 8 YEARS AGO11 11 *
MATCH CUT TO: FRENCHIE. Cuffed to a table. CAUGHT. He *
wears the same clothes from the first scene. When he hears -- *
MALLORY (O.S.)
Weaponized Xanax.
Frenchie looks up to see -- A FIGURE WALKS IN. With a THICK
DOSSIER. She sits as we reveal -- it’s MALLORY.
MALLORY (CONT’D)
The grenades you used on Behemoth
during the bank heist.
(Frenchie doesn’t respond)
You got a Supe activated by rage, so
you simply take away his rage -- *
turn him into a cupcake. Clever. *
FRENCHIE
I don’t know what you’re talking
about.
Mallory looks at him, impressed.
CONTINUED:10 10
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 13.
MALLORY
And Cold Snap two months ago?
Malchemical a month before that?
You don’t know about those either?
FRENCHIE
What is this about?
Mallory gets to business, drops the dossier before him.
MALLORY
Armed robbery, breaking and
entering, aggravated assault on a
Supe. You’re looking at twenty to
twenty-five, minimum.
Frenchie’s stomach plummets. He’s fucked.
MALLORY (CONT’D)
Or you can come work for me. I
could use someone with your
imagination.
Frenchie’s street code won’t allow him to accept.
FRENCHIE
Madame. Fuck you.
Mallory looks genuinely disappointed.
MALLORY
That’s a pity -- for you, but even
more for --
(looks at file)
Cherie and Jay, I believe?
Fuck. Frenchie swallows.
MALLORY (CONT’D)
ADX Florence, it’s a Supermax in *
Colorado. They got the Unabomber,
head of the Aryan Brotherhood, all
the greats. And your friends too, *
maybe. Or, they go free. But that *
depends on you. Right now.
FRENCHIE
You can’t do that.
She smiles -- can’t I? -- and starts for the door.
FRENCHIE (CONT’D)
Wait!
She pauses, holding all the cards.
FRENCHIE (CONT’D)
What kind of work do you do?
CONTINUED:11 11
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 14.
OMITTED12 12 *
EXT. DAWN OF THE SEVEN SET - BASECAMP - DAYA13 A13 *
Homelander and Stormfront head past all the talent trailers. *
He starts to pull her towards his trailer. *
HOMELANDER *
Hey -- come into my trailer. Got a *
surprise for you. *
STORMFRONT *
(playful, loving) *
Gotta swing by the Tower first, meet *
with my social guys -- *
HOMELANDER *
Blow ‘em off. *
STORMFRONT *
Be back in twenty, okay? Then you *
can surprise me. Wherever you want. *
But Homelander isn’t used to ANY REJECTION WHATSOEVER. *
HOMELANDER *
Yeah. I mean, yeah, sure. *
She kisses him and heads off. Off Homelander. Feeling a *
little needy and insecure. He steps up into his trailer -- *
INT. HOMELANDER’S TRAILER - DAY13 13
-- to REVEAL he was going to surprise her with a special *
gift... a BANAL VASE OF FLOWERS. Beside it, there’s a pre-
printed card from the flower company -- “Thanks for a great
night!” -- carefully signed in pen -- “XO, Homelander.”
The “great night” was, of course, the two of them killing
someone and fucking beside their victim’s corpse.
Homelander looks at the card, smiles, proud. CLOSE ON THE *
XO. Really feels like he’s nailed this one. He glances at
the clock. 2:15. She’ll be back soon.
EXT. FRENCHIE’S VAN - DAY14 14
Hughie. Looking up at the roof of the VAN --
Where Butcher is on his belly. With a SNIPER RIFLE.
Providing COVER, just in case. Looking into the scope --
HUGHIE
You see ‘em?
BUTCHER
I see ‘em.
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. GOLDENROD - 9/17/19 15.
SCOPE POV. Annie points her PALM at the FENCE -- A BLINDING
FLASH THAT FLARES the SCOPE -- blasting man-sized hole in the
fence, RED METAL sizzling at the edges. She turns, leaves
them as they SNEAK ONTO THE GROUNDS --
INTERCUT BUTCHER and that SCOPE POV. He sets the cross-hatch
target on Annie. Follows her. Thinks very seriously about
pulling the trigger. But doesn’t. But WE SEE IT -- and it’s
pretty fucking troubling. His hate for Supes burns deep.
CONTINUED:14 14
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. GOLDENROD - 9/17/19 15A.
Frenchie nods. Enters, M.M. and Kimiko behind. Annie peels
back, returning to the van.
OMITTED15 15
INT. SAGE GROVE CENTER - HALLWAY 1/2 - DAY16 16 *
Mother’s Milk, Frenchie, and Kimiko ENTER FRAME (or through a *
door) head down a hallway. They spot an empty ROLLING BED. *
Frenchie pivots to Kimiko. A whisper, maintaining cover --
FRENCHIE
Get in.
She silently mock-imitates him -- ‘get in.’ Just a fuck you.
He rolls his eyes.
Frenchie climbs into the bed. Under the sheets.
M.M. and Kimiko push. Suddenly, they all look like they *
completely belong. Orderlies and patient. *
EXT. FRENCHIE’S VAN - DAY17 17 *
Annie approaches as Butcher hands the sniper rifle down to
Hughie, as he climbs off the van roof. She reaches out to
give him a hand.
ANNIE
Here.
He moves past her, without touching her. She drops her hand.
ANNIE (CONT’D)
Seriously?
Butcher heads to the side doors of the van. Annie follows.
ANNIE (CONT’D)
What is your problem with me?
BUTCHER
I ain’t got no problem with you.
ANNIE
That’s why you won’t even touch my
hand?
HUGHIE
Guys, c’mon, not the time.
ANNIE
I think it’s exactly the time. I
think the time is long overdue.
(to Butcher)
You know I hate Vought as much as
you do. But it doesn’t matter.
CONTINUED:14 14
(MORE)
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 16.
Cause what you can’t stand is in my
blood. I’m sub-human to you. Only
good Supe is a dead Supe, right?
BUTCHER
You said it, not me.
HUGHIE
That’s enough --
ANNIE
You know. Under all that swagger,
you’re just a bigot and a bully. I
know a guy just like that. He’s got
a flag for a cape.
HUGHIE
(oh FUCK)
Annie, stop!
Butcher. He gives her a homicidal look. A look that says,
I’m gonna kill you for that one day. Even Annie averts her
eyes, the look is so scary.
The tense frozen moment is broken, when -- a sudden CRACKLE *
RIPPLES overhead -- *
They all DUCK DOWN -- shit -- STORMFRONT FLIES OVER! *
Did she see them? Didn’t seem to. Butcher grabs a pair of *
high-powered BINOCULARS, looks -- *
STORMFRONT DROPS OUT OF THE SKY BEFORE THE SAGE GROVE *
ENTRANCE, PLASMA TENDRILS stretching to the ground as she *
lands. SHE STROLLS THROUGH THE FRONT DOOR -- *
BUTCHER
Fuck me. *
OMITTED18 18 *
INT. SAGE GROVE CENTER - HALLWAY 3/SECURITY ROOM - DAY19 19
A UNIFORMED SAGE GROVE SECURITY GUARD oversees a BANK of
MONITORS. When... a KNOCK on his LOCKED door --
He heads over, looks through the small window in the door --
POV. It’s M.M. Frenchie is convulsing in the bed. (Let’s
make sure it’s not big, but scary and realistic, as these
things really are).
MOTHER’S MILK
Open up, I need help. He’s gonna
swallow his tongue, now open the
goddam door!
The SECURITY GUARD hesitates, then opens the door --
CONTINUED:17 17
ANNIE (CONT'D)
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 17.
SECURITY GUARD
What’s wrong with him?
That’s the last thing he’ll ever say -- THWIPPTHWIPP! -- *
Frenchie sits up, FIRES A PISTOL WITH A SUPPRESSOR TIP. The *
Guard collapses -- *
Kimiko pulls his dead body into the room. As M.M. pushes *
Frenchie’s gurney in quickly. Frenchie leaps out of the bed, *
climbs up on a table, DISABLES the Security Camera in the
room by pulling its cord out. As M.M. locks the door. A *
well-oiled machine. *
Kimiko stares at all the monitors. STUNNED. M.M. and *
Frenchie soon join her. Soon they’re just as stunned.
MOTHER’S MILK
What in the holy fuck?
REVEAL -- TEN MONITORS. Each showing SECURITY CAMERA FOOTAGE
of TEN DIFFERENT ROOMS. Clean, white, with HEAVILY LOCKED
DOORS. Half hospital room, half cell.
And each room has a BAREFOOT PATIENT. With SUPER POWERS.
(Remember the security room in “Cabin in the Woods.” All the
different monsters. This is our wacko version of that.
Should be a GONZO MOMENT.)
Some powers seem odd -- for example, one PHASING PATIENT *
vanishes and reappears uncontrollably in his room, but can’t *
seem to get out. *
But others are horrific SUPE FREAKS -- one PATIENT sits in
his cell, his intestines flowing out of his mouth, squirming
and beating on the outside of his body. He mumbles
something, muffled because his mouth is so full.
Mother’s Milk turns up the audio dial, so we hear --
INTESTINE BOY
...someone kill me...
Another PATIENT VOMITS ACID onto a tray of food, it smokes as
he leans over and laps it up.
Another is a heavy-set bearded man, with what seems to be a
massive, elephantiasis-inflicted penis straining his pants.
The metal walls in his room are pocked with large dents.
MOTHER’S MILK
Whoa, brother’s got a love sausage.
Kimiko. Staring at a different monitor. A YOUNG WOMAN
(CINDY) sitting on the floor. Drugged. Head shaved. Arms *
around her knees. No powers to speak of, but her silence and
stillness are frightening. She seems to sense Kimiko, looks
up at the camera -- as if right at Kimiko.
The two young women seemingly lock glances for an eerie beat.
CONTINUED:19 19
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 18.
FRENCHIE
What is this? Vought’s making more
Supe Terrorists?
MOTHER’S MILK
If they are, they’re doin’ a pretty
piss poor job.
M.M. notices another MONITOR. STORMFRONT! Fuck. She enters *
with a MAN IN SCRUBS (we briefly glimpsed him in ep. 205). *
They talk to a PATIENT, TIM, who is nimbly making a ball *
float in the air of its own accord -- *
FRENCHIE *
Stormfront is here? Merde! *
CLOSE ON KIMIKO. WIDE ANGLE, SHALLOW FOCUS. Tense. *
Stormfront is the SOURCE of her PTSD. M.M. puts a comforting *
hand on her shoulder. *
MOTHER'S MILK *
It’s alright. You’re okay. *
She nods, grateful -- Frenchie watches, wishes he were a part *
of it. Wishes he could comfort her. But he can’t. Those *
days have passed. *
M.M. turns up the audio on that camera -- *
STORMFRONT (ON SCREEN)
...pretty impressive, Tim. Any
trouble sleeping? Depression?
TIM (ON SCREEN) *
No, ma’am. *
M.M. notices the Man in Scrubs. Give us a pixellated CLOSE- *
UP on the screen --
MOTHER’S MILK
Yo. That dude she’s with, he look *
familiar to you? *
STORMFRONT (O.S.) *
What about nausea? Headaches? *
TIM (O.S.) *
No. *
FRENCHIE
(he does, but Frenchie can’t
place it)
Je ne sais pas. *
STORMFRONT (ON SCREEN)
(to the Man in Scrubs)
That’s promising. I think we’re
pretty damn close.
CONTINUED: (2)19 19
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 19.
TIM (ON SCREEN)
Ma’am. I’d like to go home now.
See my family.
STORMFRONT (ON SCREEN)
You were admitted to Sage Grove as
suicidal, Tim. You still may be a
danger to yourself.
TIM (ON SCREEN)
Well. I’m not doin’ anymore of
these stupid pet tricks until I talk
to my sister.
STORMFRONT (ON SCREEN)
Okay, okay. We’ll sort it out.
She gives the Man in Scrubs a pointed nod. Then walks out.
The Man in Scrubs pulls his ZIPPO out of his pocket,
FLICKS... then CONTROLS the FIRE... he’s a Supe, too! He
sends a WALL OF FLAME AT TIM -- WHO FALLS BACK, BURNING O.S.! *
IN THE SECURITY ROOM *
FRENCHIE AND M.M. watch. Screams of AGONY echo as Tim BURNS *
ALIVE. GET A CLOSE UP ON FRENCHIE’S FACE. Eyes widening -- *
The Man in Scrubs, somber at this murder, closes the Zippo. *
Get CLOSE on its ENGRAVING -- “Titty Committee”. (Remember *
that detail in 205? It’s the same guy.) *
Frenchie. About to lose his shit. It’s not so much big as *
INTENSE -- he’s almost quivering with RAGE. It’s scary.
Feels dangerous.
FRENCHIE
Lamplighter. That’s fucking
Lamplighter.
MOTHER’S MILK
Shhh --
FRENCHIE
I didn’t recognize him without the
mask and hood.
(realizing)
The “Elle” on Stormfront’s emails --
the letter “L,” Lamplighter. We are
so stupid.
MOTHER’S MILK
Take a breath.
FRENCHIE
We have to kill him! *
MOTHER’S MILK
Just hold on --
CONTINUED: (3)19 19
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 20.
FRENCHIE
We have to. For Madame Mallory.
For her grandchildren.
MOTHER’S MILK
Okay but not yet. Not until we *
figure out what the fuck all this
is. Clear?
A long, long beat. Then Frenchie nods. Clear. He’s a
professional, after all.
In QUICK CUTS, they get to work. Pulling all the HARD DRIVES
from the SECURITY COMPUTERS. (Or whatever electronic proof
you’d really pilfer from the security room). They pack them
neatly into the gurney bed. As --
M.M.’s phone BUZZES -- he answers --
HUGHIE (O.S.)
You alright? Stormfront was there!
INT. FRENCHIE’S VAN - OUTSIDE HOSPITAL - DAY - INTERCUT20 20
BINOC POV. Hughie, in the passenger seat, sees STORMFRONT *
exiting. She launches up on a blast of PLASMA --
MOTHER’S MILK
That ain’t all who’s here.
HUGHIE
(on handless mode) *
Well, she just left. Get the hell
out.
MOTHER’S MILK
On our way.
FRENCHIE CLIMBS ONTO the BED, ON TOP of all the devices, then
they put the sheet over him. Smart way to smuggle shit.
INT. SAGE GROVE CENTER - HALLWAY 4 - DAY21 21
A DOCTOR passes. Then --
M.M. and Kimiko push Frenchie -- and the treasure trove of
proof -- down the hall, towards the door -- freedom in SIGHT,
when around the corner --
Comes LAMPLIGHTER!! Approaching in their direction -- *
M.M. and Kimiko play it cool. Keep pushing. No worries.
Nothing to see here. Right past him.
Did they get away with it? We think so.
CONTINUED: (4)19 19
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 21.
But in SLOW, LANGUID MOTION -- Lamplighter happens to look
down at Frenchie. Who happens to look up at Lamplighter.
MILK the connection. Lamplighter’s EYES WIDEN.
LAMPLIGHTER
You.
Lamplighter PULLS his ZIPPO LIGHTER from his POCKET.
Frenchie DIVES from the GURNEY -- FIGHTS HIM for the lighter
before he has a chance to use it. To Kimiko and M.M. --
FRENCHIE
HELP ME!
Kimiko LUNGES at Lamplighter -- KNOCKING HIM OFF BALANCE -- *
but too late -- *
IN SLOW MOTION as Lamplighter flicks the flame... *
A BILLOWING COLUMN OF FIRE SHOOTS WILDLY FROM THE LIGHTER -- *
a FLAME THROWER but THICKER -- they and M.M. dive out of the *
way at the VERY LAST SECOND. It catches an ORDERLY -- *
MELTING HIM in seconds! -- *
CONTINUES THROUGH HIM and CRASHES INTO a HIGH SECURITY STEEL *
DOOR. Blasting open a GAPING HOLE -- *
SCREAMS from inside the LOCKED ROOMS in the hall. POUNDING *
ON THE DOORS. Patients are in there that want to get out. *
Lamplighter rises. Suddenly, he doesn’t seem to care about
The Boys. He’s SCARED SHITLESS. Eyes on that hole. *
A long, ominous beat.
Then out walks CINDY, the young head-shaven woman. *
LAMPLIGHTER
Heyyyy, Cindy? Hey there... cool.
Let’s be cool, okay?
Cindy just looks at Lamplighter.
LAMPLIGHTER (CONT’D)
Remember the extra helping of Kraft
shells n’ cheese I snuck you? I
like you. You know that, right?
CINDY
...who are your friends?...
MOTHER’S MILK
We ain’t his friends! Fuck him up!
CINDY
...you’re dressed like his friends.
I don’t like liars --
CONTINUED:21 21
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 22.
We’re not entirely sure what’s gonna happen, but it seems
like it’s gonna be really BAD -- when --
BAMBAMBAMBAMBAMBAM! A SAGE GROVE SECURITY GUARD behind Cindy *
OPENS FIRE into her back! *
She turns to them.
Lamplighter quietly starts backing down the hall -- *
Cindy CLENCHES a hand, makes a fist. *
And the GUARD is CRUSHED. As if by a massive fist. Every *
BONE SHATTERED --
Mother’s Milk, Frenchie, and Kimiko watch, stunned.
MOTHER’S MILK
Oh, shit!
When they notice -- Lamplighter is already hauling ass in the
opposite direction -- AWAY from Cindy -- AWAY FROM ALL OF *
THEM -- *
They also notice -- Cindy pivots back to them -- a sliver of
her face -- one eye on them. *
So they haul ass, too -- after Lamplighter -- *
OFF CINDY -- in the middle of the hallway -- clenching her
fists again -- as EVERY CELL DOOR on both sides of the
hallway CRUMPLES IN like TIN FOIL, OPENING --
ANGLE ON BARE FEET shuffling out of various doors... one pair
FLOATS... as a DOZEN SUPER POWERED PATIENTS STREAM OUT as an
ALARM BLARES OUT --
INT. SAGE GROVE CENTER - HALLWAY 3/OUTSIDE SECURITY ROOM -22 22
CONTINUOUS
Lamplighter RACES INSIDE the Security Room -- when Kimiko
sprints towards him and WEDGES HERSELF in the DOORWAY before
Lamplighter can close it!
LAMPLIGHTER
Let go! They’re coming!
Kimiko shoves the door open. Lamplighter is thrown back *
(ACTOR ACTION PLEASE) as Frenchie and M.M. race inside. His *
lighter skitters across the floor away from him. Kimiko *
slams the door SHUT behind them.
INT. SAGE GROVE CENTER - SECURITY ROOM - CONTINUOUS23 23
The Boys are now trapped with their mortal enemy (and lost
all their EVIDENCE, btw). Lamplighter scrambles for the *
lighter, holds it out at Frenchie. *
CONTINUED: (2)21 21
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 23.
LAMPLIGHTER
Stay the fuck back! I’ll burn your
skin off, asshole --
Frenchie doesn’t give a shit -- he’s ready to end it all, if
it means ending Lamplighter -- he aims his pistol -- *
FRENCHIE
You won’t get the chance --
NOISES outside approach down the hallway. The Supe Freaks
will hear them any second --
MOTHER’S MILK
Shut up! They’ll hear you!
Stow. Your. Dicks!
When the DOOR STARTS RATTLING --
GUARD (O.S.)
HELP! SOMEONE HELP ME!!
Suddenly, screams of HORRIFIC AGONY -- and the small window
in the door is COATED IN BLOOD and gummy bits --
Our heroes stand TOTALLY STILL, listening, praying the freaks
won’t storm inside -- Lamplighter holds up his lighter,
Frenchie with his gun, Kimiko poised.
More HORRIFIC SCREAMS from outside. SQUELCHING.
Meanwhile, M.M. has been watching the SECURITY MONITORS.
ON SCREEN. An ORDERLY knocked off his feet as a TENTACLE
DRAGS HIM SCREAMING BY THE LEG out of frame. (What the fuck
is THAT?)
The inmates have taken over the asylum.
M.M. pivots to Lamplighter. *
MOTHER’S MILK
(re: Kimiko)
Now listen. She’s a Supe. So maybe
you can burn us, but you’ll just
piss her off. So how ‘bout we all *
calm down, live through this *
motherfucker?
Frenchie and Lamplighter trade suspicious looks.
ON THE MONITOR -- ANOTHER ANGLE -- A DOZEN SCREAMING PATIENTS
POUNDING at a HEAVY LOCKED DOOR (HALLWAY 6) -- one pivots
back to look at the CAMERA with GLOWING EYES.
MOTHER’S MILK (CONT’D)
(re: the monitor)
What’s going on there?
CONTINUED:23 23
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 24.
LAMPLIGHTER
Lockdown. No one’s getting out.
(re: Kimiko)
Not even her.
MOTHER’S MILK
There’s gotta be an access code.
LAMPLIGHTER
There is, genius, at the door. But
no fucking way I’m telling you or
taking you with me. Suck shit.
MOTHER’S MILK *
You got a Supe army out there who *
wanna rip you apart --
(gestures to Kimiko)
She can help --
LAMPLIGHTER
I’ll take my chances.
Suddenly the DOOR behind him FLINGS OPEN, LOCK BREAKING! *
ACID VOMIT GUY BARRELS IN -- TACKLES Lamplighter to the FLOOR *
-- his ZIPPO KNOCKED AWAY -- *
LAMPLIGHTER (CONT’D)
FUCK!
Vomit Guy PINS Lamplighter down. Lamplighter STRUGGLES but *
can’t do much, the dude’s STRONG, arms like GRANITE! *
Frenchie and M.M. aim their guns, but can’t take the shot, *
not without killing their only ticket out of here. *
Vomit Guy GAGS TWICE -- like a CAT COUGHING UP A HAIRBALL -- *
then VOMITS onto Lamplighter -- Lamplighter SQUIRMS his HEAD *
away, the puke HITS his SHOULDER -- WHICH SMOKES and BURNS! *
LAMPLIGHTER (CONT’D) *
AAAAAAHHHH! *
Vomit Guy leans closer for a KILL SHOT. GAGS TWICE -- here *
it comes -- when KIMIKO SPRINGS into Vomit Guy!! KNOCKS HIM *
ON HIS BACK -- as he VOMITS -- but it spurts up into the air *
and lands directly on his FACE. HE SCREAMS and his FACE *
SMOKES and BLEEDS as the vomit BURNS and MELTS INTO HIS EYS -- *
boring through to his brain. Until he’s dead. *
Everyone watches this horror. A long, long beat. Then -- *
LAMPLIGHTER (CONT’D)
Okay, you guys can come. *
OMITTED24 24 *
OMITTED25 25 *
OMITTED26 26 *
CONTINUED: (2)23 23
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 25.
OMITTED27 27 *
INT. SAGE GROVE CENTER - SECURITY ROOM - DAYA28 A28
SLAM! -- Mother’s Milk SMASHES the SECURITY CONSOLE CONTROLS *
with a FIRE EXTINGUISHER. THE MONITORS FRITZ TO BLACK. He *
makes sure there’s no record of them ever being there -- *
They peek out the door to make sure the coast is clear... *
then sneak out... leaving a dead, bloody Vomit Guy behind... *
INT./EXT. VAN - FIELD OUTSIDE HOSPITAL - DAYB28 B28 *
INSIDE THE VAN. Hughie still watches the hospital with *
binocs, stunned, through the windshield as -- *
BEDLAM. A BLUE SUPER-POWERED ENERGY BURST inside one
unbroken supe-proof WINDOW. A blood splat against ANOTHER. *
HUGHIE
What the fuck??
EXT. FIELD OUTSIDE HOSPITAL - DAYC28 C28 *
OUTSIDE THE VAN. Annie watches the windows. Butcher has *
been trying to get ahold of M.M., tries again. *
BUTCHER *
Bloody hell, M.M., pick up! *
When they pivot to see -- a young, skinny, haggard PATIENT. *
Must’ve gotten out before the lockdown.
BUTCHER (CONT’D)
Hello. Easy, son. No trouble from *
us, you just stroll on by, yeah? *
PATIENT
(near tears)
I don’t want them to hurt me again.
BUTCHER
No one’s gonna hurt you, lad. We’re
your mates, ain’t we?
Long beat. Then the Patient nods slowly. Yeah, okay. Just
as Butcher and Annie breathe a sigh of relief --
OVERHEAD SHOT. The Patient clenches, unleashing a CIRCULAR
ENERGY PULSE that widens like a ripple in a pond. Kicking up
DIRT and DUST. Swatting Butcher and Annie to the ground,
HARD. And ROLLING the VAN ON ITS ROOF --
From the dirt -- Annie looks up, horrified, to see --
BANGBANGBANG! The guy’s chest EXPLODES with gunfire.
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 26.
REVEAL -- Butcher on the ground. Unloading his pistol into
him. The Patient drops. Dead.
Annie stands. Eyes on the bloody Patient. Couldn’t be more
than 18. But her grim reverie is broken when --
BUTCHER (CONT’D)
Gimme a fuckin’ hand!
The van is UPSIDE DOWN. Butcher SLIDES OPEN the SIDE DOOR,
Annie quickly joins him, pulling a dazed Hughie out --
ANNIE
Hughie. You alright?
He looks at her. Nods. Then crumples. There’s a JAGGED
METAL FRAGMENT jutting out of his abdomen. It’s really bad.
Hughie collapses.
ANNIE (CONT'D)
Hughie! BUTCHER
Hughie, fuck!
They drop to their knees around him. Inspect the wound.
Blood begins to flow. Too much blood. Way too much.
ANNIE
Oh no oh no.
BUTCHER
Can you cauterize it?
Annie holds up her hand. CAN’T make it glow. *
ANNIE
The kid must’ve fried everything. I *
gotta draw the power from somewhere. *
BUTCHER *
Well, you got a useless fuckin’ *
superpower, dontcha? *
Butcher looks down at Hughie. There’s only one choice. *
BUTCHER (CONT’D)
We gotta get him to a doctor.
ANNIE
Where? How?
BUTCHER
Well, we ain’t gonna just fuckin’ *
sit here and watch him bleed out! *
ANNIE
What about the others?
Butcher lifts up Hughie -- *
CONTINUED:C28 C28
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. 2ND WHITE - 9/18/19 27.
BUTCHER
They’ll have to sort themselves.
Come on.
Together, they shoulder an unconscious Hughie, as fast as
they can, across the field... both trying to repress their
OUTRIGHT TERROR at the possibility of losing Hughie...
INT. HOMELANDER’S TRAILER - DAYD28 D28
The clock. 4:15.
Homelander waits. Stormfront is very, very late. He stares
at the banal flowers. At his card. “XO, Homelander.” It *
all seems so ridiculous now. So pathetic.
XO? He’s stupid. Weak to go out on a limb like this. Hates
himself more than he hates her. XO!?
Off his twisting expression --
EXT. BASECAMP - DAY - LATERE28 E28
CAMERA FINDS: A PAIR OF FIREMAN BOOTS step over -- the
charred remnant of the card -- “XO, HOMEL”
CREW watch as FIRETRUCKS and FIREMEN hose down Homelander’s
trailer. Extinguishing the raging fire that engulfed it.
Mostly embers and charcoal by now.
Ashley sits with an EMT, being treated for smoke inhalation. *
She takes off her mask long enough to ask DEANNA -- business *
above health always -- *
ASHLEY *
Really, no one’s seen Starlight yet? *
HIGH POV of the chaotic scene. Then we reveal --
Homelander watches from atop the Dawn of the Seven backdrop. *
A combustible mix of emotions. Insecurity. Petulance. *
STORMFRONT (O.S.)
Been looking everywhere for you.
Stormfront steps up. Looking over at the smoking trailer.
STORMFRONT (CONT’D)
What happened to your trailer?
HOMELANDER
Oh. Electrical fire. How was your
meeting?
She gives him a look. Can tell he’s lying.
STORMFRONT
Sorry, it went long.
CONTINUED: (2)C28 C28
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 28.
HOMELANDER
You don’t have to apologize. So I’m
gonna go run lines with Noir. Scene
43 tonight. Real magilla.
He’s a little stiff. Stormfront senses it --
STORMFRONT
What’s wrong?
HOMELANDER
Nothing.
STORMFRONT
You sure?
HOMELANDER
Why would anything be wrong?
He heads off, with as much dignity as he can muster. But he
can’t help himself. His insecurity overwhelms him. He
pivots back around --
HOMELANDER (CONT’D)
Oh, by the way? I went to the
Tower. You weren’t there. No one
knew where you were.
STORMFRONT
You were -- checking on me?
HOMELANDER
I was checking to see how your
meeting went. But it’s fine.
STORMFRONT
Hold on. Just let me --
He steps forward. For a flash -- we see what a Homelander
SCORNED looks like. Anger and hurt and violence. It should
scare the ever loving SHIT out of us. He lightly brushes his
hand over her throat. Then --
HOMELANDER
Explain? Why would you have to
explain anything?
He walks off. Off Stormfront -- actually RATTLED for the
first time. Which for her, is something. *
OMITTED28 28 *
INT. SAGE GROVE CENTER - HALLWAY 5 - DAYA29 A29
Heads on swivel, M.M., Frenchie, Kimiko and Lamplighter. *
Walk down a hall. Over a MUTILATED ORDERLY CORPSE, face down *
in a big pool of blood. Lamplighter, still nursing his acid- *
burnt SHOULDER, stops at a particular ROOM -- *
CONTINUED:E28 E28
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 29.
LAMPLIGHTER
C’mon, in here.
INT. SAGE GROVE CENTER - MEDICAL SUPPLY ROOM - DAY29 29
They lock the door behind them -- as Lamplighter moves to the
antiseptic and gauze to wrap himself up.
CLOSE ON FRENCHIE. He looks around like Moses looking at the
Promised Land: the room is STACKED FULL OF DRUGS!
SHELVES AND SHELVES of PILLS, LIQUIDS, you name it. (All pad-
locked. Also syringes, oxygen tanks, brooms, wheelchairs.) *
GIVE US CLOSE-UPS of ALL THE PILLS for Frenchie’s reaction -- *
FRENCHIE
(in awe)
It’s so beautiful.
He immediately inspects all the goodies as -- *
Lamplighter grabs supplies. Dresses, bandages his SHOULDER. *
MOTHER'S MILK
What the hell’s going on anyway?
(Lamplighter looks at him)
Juicing people with Compound V, only
to roast ‘em alive? Why? And why
are you here?
LAMPLIGHTER
Maybe I just like watching people
burn.
Lamplighter looks at Frenchie. Frenchie stops examining the *
drugs, looks back at him. It’s loaded as fuck. *
LAMPLIGHTER (CONT’D)
I remember you, y’know. You were
tailin’ me the night I torched those
kids.
M.M. clocks Frenchie’s guilt and anger roiling within.
MOTHER’S MILK
Frenchie...
LAMPLIGHTER
Why didn’t you stop me? Maybe you
like watching people burn, too.
FRENCHIE
FILS DE PUTE!
Frenchie charges him -- M.M. has to work like a MOTHERFUCKER
to pull him back -- Lamplighter grins, he wants it --
CONTINUED:A29 A29
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 30.
MOTHER'S MILK
NO! Stop it!
Finally, Frenchie twists free. Tries to catch his breath.
Push down his anger -- but more than that -- his ANGUISH.
Kimiko watches him. With some empathy. She’s never quite
seen him like this.
Off Frenchie, MATCH CUT TO:
INT. RUN DOWN WAREHOUSE - NIGHT - FLASHBACK30 30
FRENCHIE’S FACE. Staring at a gorgeous engagement ring in
M.M.’s hand.
CHYRON: 5 YEARS AGO
FRENCHIE
Mon dieu...
MOTHER'S MILK
I don’t wanna hear nothing about
getting tired of the pussy. I love *
her. *
Beat. Then Frenchie surprisingly hugs him. M.M. grins.
We’ve never seen such warm camaraderie between these two.
They used to be very good friends.
Mallory steps up. A small smile on her face. She carries a
TABLET COMPUTER to be used a bit later.
MALLORY
Congratulations, Marvin.
MOTHER’S MILK
Thank you, Colonel.
FRENCHIE
Oh, the bachelor party I will throw
you. What are your feelings about
transgender strippers?
MOTHER’S MILK
Strippers ain’t my kinda Hershey’s,
with or without nuts. I was
thinking a golf trip maybe.
FRENCHIE
You’re a fucking monster.
Mallory stifles a smile. Enjoys the camaraderie of her men.
Meanwhile, an intense Butcher at the window, all business.
BUTCHER
He’s here.
CONTINUED:29 29
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 31.
Butcher cocks the hammer on a 9mm at his side. The Boys
position themselves behind Mallory. Game faces on.
ENTRANCE. AN ORANGE FLICKERING GLOW approaches, growing
steadily brighter. LAMPLIGHTER enters. Sharp. Trim.
Wearing his supersuit and carrying his renowned LIT STAFF.
He posts before them in all of his Seven glory --
THE BOYS SNICKER. It’s contagious. Even Mallory has to
clear her throat and look away.
LAMPLIGHTER
What?
BUTCHER
Sorry, mate. You just look like one
a’ them poncy baton twirlers.
MOTHER’S MILK
Majorettes.
BUTCHER
Right. A majorette.
Mallory shows Lamplighter the TABLET. FLICKS through some
images. We don’t see the images, but the blood drains from
his face.
MALLORY
So here’s what happens now. You’re
going to tell us every single thing
you see and hear at the Tower.
BUTCHER
Especially when it’s about
Homelander.
Mallory shoots Butcher a “shut up” look. Butcher looks back,
defiant. When it comes to Homelander -- whatever it takes.
Lamplighter. Fury in his eyes. The intensity of the torch
increases -- Butcher grips his gun. Frenchie glances at M.M.
Tense. But Mallory remains cool.
MALLORY
Please don’t pretend like you have a
choice.
(hands him a card)
I look forward to your call.
A moment. Lamplighter takes the card, storms out. Butcher
smiles, pleased with himself --
BUTCHER
What’d I say? Easy peasy.
Mallory drops her bravado.
CONTINUED:30 30
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 32.
MALLORY
I don’t like it. You don’t back an
animal like that into a corner.
BUTCHER
Fuck him. We own his arse.
MALLORY
Frenchie. Keep an eye on
Lamplighter. Don’t let him outta
your sight.
FRENCHIE
Oui, madame.
Frenchie nods, heads out. Off this --
EXT. RURAL ROAD - DAY - PRESENT31 31
Country road, lined with thick trees on both sides. A
Hyundai SEDAN rolls around the corner, BRAKES in front of --
Annie. Stepping into the road, waving her hands.
The driver -- businessman DENNIS, 40, loosened tie and blazer
-- rolls down the window --
DENNIS
What’s the trouble, miss?
ANNIE
Sir, I need you to step out of your
car please.
DENNIS
What’re you talking about?
Butcher steps up. Arm around a bleeding Hughie -- GUN
conspicuously at his side.
BUTCHER
FBI. Need to commandeer your
Hyundai. Bit of an emergency.
DENNIS
Jesus. What happened to him?
BUTCHER
Long story, that.
Dennis climbs out --
DENNIS
Can I see some I.D.?
BUTCHER
In my other pants, too busy saving *
this one, but you can ring my boss -- *
CONTINUED: (2)30 30
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. GREEN PAGES - 9/15/19 33.
DENNIS
Look, I’ll take you to the hospital.
But it’s the middle of nowhere, I’m
not giving you my car. *
Butcher. A beat of resignation. *
BUTCHER *
Alright. Have it your way. *
Butcher carefully sets Hughie down against a tree. Then *
approaches. Menacing. Gun at his side. *
ANNIE
(cool it)
Butcher, no. Listen, sir -- *
When Dennis PULLS a GUN from his GLOVE BOX -- LUNGES from the
car for a cleaner shot -- he’s TERRIFIED --
DENNIS
Just stay back!
ANNIE
Whoa, that’s not necessary. Let’s
just talk!
DENNIS *
FBI. Get real. You’re not even
American! Is he even really hurt?
This some scam?? *
The situation spins further and further out of control. *
BUTCHER *
If I wanted to nick some wheels, it *
wouldn’t be a fuckin’ Hyundai. *
DENNIS
This is a stand your ground state.
Stay back!
BUTCHER *
You stand where you want. *
ANNIE
Butcher, stop. Buddy, put the gun
down!
Butcher keeps approaching --
DENNIS
I said stay back!
ANNIE
I said put it down!
CONTINUED:31 31
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. GREEN PAGES - 9/15/19 34.
CLOSE ON ANNIE. She can see -- CLOSE ON DENNIS. CLOSE ON
HIS TRIGGER FINGER. He’s about to FIRE --
His Hyundai headlights suddenly FLARE -- as she HOLDS OUT her
HANDS and BLASTS HIM BACK --
CONTINUED: (2)31 31
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. GREEN PAGES - 9/15/19 34A.
Dennis sails through the air, CRACKS his head hard on the
pavement. Blood starts pooling beneath him.
Annie rushes over. Checks his pulse. Tries to rouse him.
Butcher SNAGS Dennis’ KEYS from his hands. Moves to Hughie,
loads him into the back seat.
CLOSE ON ANNIE. PUSH IN. Her frozen stillness.
ANNIE (CONT’D)
He’s dead. You couldn’t just listen
to me and stay back??
BUTCHER
Come on! You can cauterize it!
Annie. Leaves Dennis there, a murder in the road.
Heads to the open back door, where Hughie lays. Beside an
EMPTY BABY SEAT, strapped in the back. Annie takes it in.
The things she has to do. The depths she has to go. Then --
She reaches out her HAND. The LIGHTS inside the CAR PULSE,
the RADIO FRITZES with static -- as she presses her now
GLOWING HAND against Hughie’s wound. We HEAR his FLESH
SIZZLE. Even unconscious, he SCREAMS.
Annie struggles with seeing him like this.
Her power finally dims and goes out. The bleeding’s stopped.
BUTCHER (CONT’D)
It won’t hold long. Come on.
Butcher jumps in the driver’s seat, she hops in the
passenger’s seat.
Even Butcher knows better than to fuck with her right now.
BUTCHER (CONT’D)
(quietly)
Thank you.
This doesn’t make Annie feel any better. Not by a longshot.
She watches Dennis’s face-down body in the SIDE MIRROR as
they leave it behind.
OMITTED32 32 *
CONTINUED: (3)31 31
THE BOYS #206 "The Bloody Doors Off" REV. 2ND BLUE - 9/23/19 35-36.
OMITTED33 33 *
INT. SAGE GROVE CENTER - MEDICAL SUPPLY ROOM - DAY34 34
CRASH! Frenchie’s elbow SMASHES the glass of a MEDICINE
CABINET. Starts stuffing them into his pockets --
MOTHER’S MILK
This really the time to go shopping?
Frenchie checks out the drug labels.
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. 2ND BLUE - 9/23/19 37.
FRENCHIE *
One, why not? And two, this is good *
news. Perhaps we won’t have to *
fight anyone. *
MOTHER’S MILK *
What do you mean? *
FRENCHIE *
With some aerated propofol, some *
other odds and ends? I make a *
knockout bomb. Even for Supes. *
M.M. reacts, it’s a smart idea. Lamplighter keeps his *
distance. Tension between them still thick. Plays with his *
‘Titty Committee’ ZIPPO. Click. Click.
Frenchie eyes him as he selects PILLS, CHEMICALS, GLASS *
CONTAINERS. Sets up a make-shift lab. Something burns on *
his mind. Then... finally decides to say it.
FRENCHIE (CONT’D)
Why are we still alive?
LAMPLIGHTER
Dumb luck. *
FRENCHIE
Non. I mean that night. We went *
underground for months, but you
never came for us. Not you, not
Homelander, no one. Why?
LAMPLIGHTER
What, you’re disappointed we didn’t
kill you?
FRENCHIE
The Seven always retaliate.
Lamplighter’s hiding something he wants to keep buried. He
grows annoyed. His Zippo. Click. Click.
LAMPLIGHTER
You’re nobodies. You weren’t worth
it.
Frenchie looks up at Lamplighter as he realizes --
FRENCHIE
You never told them, did you?
A moment. Lamplighter clearly grows uncomfortable.
FRENCHIE (CONT’D)
Why wouldn’t you tell them?
LAMPLIGHTER
Who says I didn’t?
CONTINUED:34 34
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 38.
FRENCHIE
I figured you’d boast about it.
Must’ve found it thrilling.
Lamplighter shifts. Increasingly uncomfortable. Does NOT
want to keep talking about this. Clickclickclick.
LAMPLIGHTER
I’m not an animal.
FRENCHIE
Only an animal would do what you
did.
LAMPLIGHTER
Just fucking drop it, okay?
FRENCHIE
You murdered innocent children --
LAMPLIGHTER
(getting hotter)
Shut the fuck up --
FRENCHIE
You watched them burn alive, crying
for their Mama -- if that’s not an
animal, then what --
LAMPLIGHTER
(finally blurts out)
I didn’t know!
(then quieter)
I didn’t know they were in the bed.
I thought it was your boss. Wasn’t
until I heard them screaming... but
by then it was too late.
For the first time Frenchie, SHOCKED, sees Lamplighter as far
more complicated than he imagined. But M.M. doesn’t care --
MOTHER’S MILK
You didn’t mean to? We should feel
bad for you? Fuck you.
LAMPLIGHTER
I don’t want anything from you.
(to Frenchie, in real and
genuine pain)
I saw you following me that night.
Then you disappeared. I keep asking
myself, why didn’t you stop me? Why
didn’t you?
M.M. shoots Frenchie a simmering look.
MOTHER’S MILK
Good question.
CONTINUED: (2)34 34
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 39.
Kimiko watches, sympathetic -- as Frenchie IN ANGUISH stares *
at M.M. and Lamplighter. His guilt crushing him down.
EXT. MEATPACKING DISTRICT - NIGHT - FLASHBACK35 35
MATCH CUT TO Frenchie sticking to the shadows and watching
Lamplighter (still in costume) entering an extravagant RED *
CARPET ART GALA. He holds hands with a beautiful model -- *
his date for the night. The crowd roars. Paparazzi flash *
their cameras. Lamplighter grins a Tom Cruise smile.
VMMMT... VMMMT... -- Frenchie glances at his phone. CHERIE’s
face appears giving the camera a middle finger. He sends it
to VM. It buzzes again: Cherie. Merde. Answers --
FRENCHIE
Cherie, this’s not a good --
CHERIE
(crying)
He’s dying!
FRENCHIE
Quoi?
CHERIE
Jay’s OD’ing. I don’t know what he
took. Please!
Frenchie tries not to raise his voice.
FRENCHIE
Take him to the hospital.
CHERIE
Serge! Fucking come! Now!
Frenchie watches Lamplighter and the model enter the gala. *
Checks his watch. Considers.
INT. SEEDY CHELSEA APARTMENT - NIGHT - FLASHBACK36 36
CLOSE ON Frenchie slapping Jay’s face. He lies unresponsive
on the floor. Cherie paces, distraught.
Frenchie empties a HYPODERMIC NEEDLE into Jay’s abdomen. A
bottle of Naloxone Hcl is at his side. Gives Jay mouth to *
mouth. Jay stirs barely. Spittle on the side of his mouth.
(This isn’t Pulp Fiction -- it isn’t sexy, there’s no
dramatic gasp.) His eyes barely open.
FRENCHIE
Jay, c’mon, mon ami. You’re okay.
You went out. Can you sit up?
Frenchie helps Jay lean on the couch. Drug paraphernalia
lies everywhere in the unkempt room. This isn’t the Jay we
first met. He looks around, groggy. Cherie hugs Frenchie --
CONTINUED: (3)34 34
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 40.
CHERIE
Oh my God!
But Frenchie glances at his watch, start’s packing up.
FRENCHIE
Stay with him. Keep him up. Keep
him talking.
CHERIE
Where’re you going?
FRENCHIE
I told you, I’ve got something...
CHERIE
More important than this? Us?
FRENCHIE
Cherie, I cannot do this right now.
CHERIE
Fine, then go. Go! We don’t give a
shit.
Frenchie looks at her with guilt, but he can’t stay.
JAY
...Serge?
Frenchie turns to his old friend, gives him a weak and
heartbroken smile.
FRENCHIE
I’ll come back. Je promets.
EXT. RURAL ROAD - DAY - PRESENT37 37
The Hyundai SCREAMS down the road. Pushing 90 mph.
INT. HYUNDAI - MOVING - DAY38 38
Butcher drives, tense. Annie in the back, beside Hughie. At
least he’s not bleeding anymore. But he quietly moans. A
fever. Infection starting to set in. Annie reaches over,
feels Hughie’s head.
ANNIE
He’s burning up.
BUTCHER
Going as fast as I can.
Butcher. Annie. Riding in silence. Butcher looks over at
her. Beat. Then --
BUTCHER (CONT’D)
Appreciate what you did back there.
CONTINUED:36 36
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 41.
ANNIE
Thanks. Your approval means
everything to me.
BUTCHER
And some sarcasm to stick the
landing. Nice one.
(long beat of silence) *
You didn’t have a choice. *
Annie meets his gaze, steely --
ANNIE
I know. Know what I was thinking,
looking at him? “Why’d you pull a
gun, you stupid fuck?” That’s all.
Maybe once I would’ve cried for him,
but not anymore. Now he was just
another person in our way.
Butcher throws her a long look. Maybe even impressed --
BUTCHER
Huh.
ANNIE
No.
BUTCHER
No what?
ANNIE
No to that fucking look of quiet
respect or approval or whatever it
is. I don’t want it. We’re nothing
alike. Nothing.
Off Annie -- she doth protest too much. Fact is, she is
growing calloused, maybe a bit like Butcher. But hates it --
INT. CHURCH OF THE COLLECTIVE RENEWAL CENTER - DAY39 39
OPEN ON A PHOTO PORTRAIT ON THE WALL. Church of the
Collective Chairman ALASTAIR ADANA. Looking thoughtful.
Then PULL BACK to REVEAL the real ADANA. He’s impeccably
dressed in a fine suit and tasteful Rolex.
WIDE SHOT. Adana is with Deep and A-Train. In an ornate
DINING ROOM. They’re the only ones in here, save an
ATTENTIVE CHURCH OF THE COLLECTIVE WAITER -- wearing what
looks like CREAM LINEN PAJAMAS. (Inside the Church walls,
these are the uniforms). He serves steak, spoons Bernaise.
ALASTAIR
Poor Phillip here lost his wife to
breast cancer.
CONTINUED:38 38
(MORE)
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. 2ND WHITE - 9/18/19 42.
But after four levels of our
“Renewal” study course? Just look *
at him now.
DEEP
Congrats, man.
Phillip gives a shaky smile, still fragile.
They all have Frescas. Alastair sips from his.
ALASTAIR
Deep, your numbers among women have
been ticking up quite nicely. Did
you catch Malala Yousafzai’s Tweet?
Called you a sweetheart.
DEEP
She’s the sweetheart.
Alastair turns to A-Train, who’s still eating.
ALASTAIR *
So what’s on your mind, A-Train? *
A-TRAIN
Hmm. Well, Mr. Adana. I mean, Deep *
invited me here. Having a, I don’t
know, a real nice lunch.
Alastair nods, maintaining his warm smile.
ALASTAIR
And Deep? What’s on your mind?
DEEP
I think A-Train has sabotaged me my
entire career.
A-Train looks at Deep, dumbstruck.
A-TRAIN
...What?
DEEP
You think you’re better than me. I
fantasize about drowning you, you
know that? Over and over again.
And I don’t want to have that
feeling anymore. I wanna be clean.
ALASTAIR
Oh boy. Looks like we got ourselves
a good old Truth Exchange.
A-Train stands.
CONTINUED:39 39
ALASTAIR (CONT'D)
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 43.
A-TRAIN
Uh, hell no.
ALASTAIR
Please sit down.
A-TRAIN
I’m a Baptist, okay -- I saw that
documentary about y’all -- this
ain’t my shit --
As he goes, Alastair calls after him --
ALASTAIR
For a man in seven figure debt, a
heart condition, and in heavy
withdrawal, you really have the
luxury to get up and leave?
A-TRAIN
How do you know that?
(re: Deep)
He fucking tell you that?
ALASTAIR
No. The Church knows all kinds of
things. But don’t worry, we also
know how to be discreet, especially
for our members.
(then)
They’re gonna give Shockwave your
uniform, you know. Call him the
next A-Train.
A-TRAIN
They can’t do that.
ALASTAIR
Why not? A-Train is a trademark.
You are just another nobody from the
South Side of Chicago.
A-TRAIN
Fuck you!
ALASTAIR
I can help. With this Congressional *
Hearing, Stan Edgar’s gonna need a *
united Seven. I can get you back
in. But first? Sit down. And let
Deep tell you his truths.
A moment. A-Train sits, looks at Deep, who needs this
exchange. Alastair smiles encouragingly.
ALASTAIR (CONT’D)
See how much progress we’re making?
CONTINUED: (2)39 39
THE BOYS #206 "The Bloody Doors Off" REV. 2ND BLUE - 9/23/19 44.
INT. SAGE GROVE CENTER - MEDICAL SUPPLIES ROOM - DAY40 40
Frenchie works his magic. Aerates a solution of pulverized *
pills and liquid with a nebulizer, then -- *
Attaches it to an OXYGEN TANK. Dumping the contents in, *
completing the knock-out bomb. *
REVERSE TO REVEAL -- Mother’s Milk, Kimiko, even Lamplighter *
stare at Frenchie’s work with a mixture of awe and fear. *
LAMPLIGHTER *
(skeptical) *
You really think this is gonna work? *
FRENCHIE *
I think so. *
They regard each other. Brought together again by fate. *
Both men silently wrestling with thoughts of guilt and *
regret. Until an expression on Lamplighter’s face. Fuck it. *
LAMPLIGHTER *
...they’re not trying to make Supes
here, these people are only test *
subjects. They’re just trying to
stabilize the V.
MOTHER’S MILK
Stabilize? What do you mean?
LAMPLIGHTER
Infants handle it best. But adults?
Well, you saw. Sometimes you get
powers. Sometimes you get --
freaks, sometimes you just explode.
Vought wants to stabilize it. So
you stick the V in any adult arm,
anytime, anywhere, you get a solid
Supe, solid powers.
M.M. and Frenchie lock eyes. Jesus Christ. Milk this. This
is a HUGE SCARY REVEAL.
MOTHER’S MILK
(holy fucking shit)
A thousand more Supes, a hundred
thousand? Why? Fucks their movies,
their merchandising --
LAMPLIGHTER
They don’t tell me. They just make
me burn the evidence, y’know?
Lamplighter quiets. Genuinely tortured. Frenchie looks at
him. Shocked to find the two of them have much in common.
If Lamplighter opened up... Frenchie thinks he should, too...
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 45.
FRENCHIE
...my best friend was ODing and I
left to save him that night.
(Lamplighter looks at him)
Why I didn’t stop you. You were at
a party. I was away for 30 minutes. *
Came back, you were gone.
M.M. leans forward. He didn’t know. Neither did Kimiko.
LAMPLIGHTER
Did he live? Your friend?
FRENCHIE *
Oui. But I never saw him again. *
Then he died a few months later. *
Another overdose.
MOTHER’S MILK
You serious? Why didn’t you tell *
us?
FRENCHIE
What difference would it make?
MOTHER’S MILK
All these years... we woulda let you
off the hook.
FRENCHIE
What makes you think I want to be
let off the hook?
They all look at Frenchie with sympathy. Even Kimiko.
Especially Kimiko. They’ve had such a chasm between them
lately. Now she understands him better than she ever has.
The emotional moment is abruptly shattered when --
SMASH -- a THICK GLISTENING TENTACLE DARTS through a DOOR *
WINDOW, WRAPS AROUND M.M.’s neck! SLAMS him against the *
doorway. Strangling him! He CLAWS AT IT -- frantically *
TUGGING AT IT! Back and forth! *
FRENCHIE (CONT’D)
Merde!
Frenchie tries to RIP at the tentacle -- no good!
Lamplighter doesn’t have a clean shot to burn it!
So Kimiko DIVES OUT of the ROOM -- we hear a THUMP, a SHOUT
of PAIN -- and the TENTACLE suddenly drops to the floor. *
Weaves up to the door, exits. *
M.M. gasps for air -- they move to the door to see --
THE BIG BEARDED DUDE. On the floor. Out cold. With “BOSSY”
embedded in blood on his face.
CONTINUED:40 40
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 46.
The tentacle retracts -- up his pajama leg --
MOTHER’S MILK
Wait. Was that -- ??
FRENCHIE
It’s okay.
MOTHER’S MILK
Was that his fucking dick??
FRENCHIE
Don’t be so closed-minded. Let’s
go.
Frenchie GRABS the oxygen tank and bolts out -- with a
disturbed M.M., Kimiko and Lamplighter following...
INT. SAGE GROVE INSTITUTE - HALLWAY 6 - CONTINUOUS41 41
They move down the HALLWAY -- rounding a CORNER --
LAMPLIGHTER
We’re here.
UP AHEAD. THE DOOR. With a KEYPAD at the side. They made
it! When --
CINDY steps out of a stairwell. Between them and the exit.
Looking at them, chin down, eyes up. *
MOTHER’S MILK
Oh fuck!
They immediately RETREAT -- DIVING into a SIDE ROOM --
IN THE ROOM. Frenchie unscrews the NOZZLE on the OXYGEN TANK
-- HURLS IT OUT THE DOOR, SLIDING across the floor to Cindy --
But she clenches her fist -- SCRUNCHING it into a tight ball *
of twisted metal. And is otherwise UNHARMED -- *
MOTHER'S MILK *
You said that shit would work!
FRENCHIE
I said I thought it would!
They BACK AWAY. No other exit out of the room.
IN THE HALL. CINDY approaches. Closer. Closer. No escape.
INTERCUT our HEROES with CINDY, build some suspense. When --
SUDDENLY -- PURPLE PLASMA TENDRILS suddenly LASH OUT --
WRAPPING TIGHTLY AROUND CINDY’S ARMS AND TORSO --
CONTINUED: (2)40 40
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 47.
As Stormfront ENTERS through the NOW OPEN DOOR -- she opened
it from the outside. Out of the frying pan...
CINDY SCREAMS -- as it wraps around her, then she crumples to *
the floor, unconscious.
STORMFRONT
Lamplighter?? You here??
IN THE ROOM. Lamplighter and The Boys trade frightened
looks. Don’t go out there, man. PLEASE. But then --
LAMPLIGHTER
I’m here!!
NO! They’re dead meat. He steps out of the room --
Kimiko. Quells her PANIC. It’s SO UNLIKE her to feel fear.
But she feels it now. (Let’s see a PTSD WIDE ANGLE). *
Frenchie takes her arm. Trying to calm her. They do their
best to hide, perhaps behind a desk. But it’s futile.
Play this next nail-biting moment from The Boys’ POV.
Stormfront and Lamplighter are JUST OUTSIDE THE OPEN DOOR.
The Boys. Tense. Will Lamplighter turn them in? Is this
it? If so, they’re ready to fight to the gory end.
STORMFRONT
I just killed six subjects out there
like a fucking Teddy Bear picnic.
What the hell happened?
Long beat. Lamplighter. Genuinely intimidated by
Stormfront. What’s he gonna say?
The Boys. Moments away from certain death.
LAMPLIGHTER
(finally)
Dr. Carlton got the propofol dose *
wrong again. So Cindy got loose,
freed a bunch of the others. Some
of them musta got out before the
lockdown.
STORMFRONT
Where’s Dr. Carlton?
LAMPLIGHTER
In the cafeteria. And the hallway.
And some on the walls.
Long, loooong beat. Will she buy it?
CONTINUED:41 41
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 48.
STORMFRONT
Clean up this mess. I’ll go see who
else is loose.
LAMPLIGHTER
Yes, ma’am.
She turns, heads off.
Frenchie, M.M., Kimiko. Rising from their hiding spot in the
room. Sharing an exhausted, grateful look with Lamplighter.
As CAMERA FINDS -- the spot on the floor where Cindy was.
Only she’s not there anymore. She’s GONE...
INT. MEDICAL CLINIC - DAY42 42
A sleepy, small town MEDICAL CLINIC. Probably one Doctor on
call. A NURSE listlessly on-line shops for SHOES. When --
The DOOR BURSTS OPEN -- Butcher and Annie drag in a feverish
Hughie, shirt drenched in blood.
BUTCHER
We need help!
INT. MEDICAL CLINIC - DAY - LATER43 43
Hughie. Still unconscious. Stabilized in a hospital bed.
The tranquil beeps of the machinery.
Butcher over him. Alone, we can now see the RAW WORRY in
Butcher’s face. How much he cares for Hughie. Which he
immediately covers up when -- Annie enters.
BUTCHER
What’d they say?
ANNIE
Needs a day or two for the Cefazolin
to kick in, but he should be
alright.
Butcher doesn’t like being a sitting duck.
BUTCHER
We ain’t got a day or two.
ANNIE
We’ll have to risk it.
Long beat. She looks down at Hughie. Brushes his hair out
of his face -- catches a whiff of something -- smiles, warm --
ANNIE (CONT’D)
Jesus --
CONTINUED: (2)41 41
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 49.
BUTCHER
What?
ANNIE
That kids’ shampoo he uses.
BUTCHER
L’Oreal for Kids “Strawberry
Smoothie.” I seen the bottle.
Hateful shit.
Annie smiles, thinking --
ANNIE
And his Axe body spray? It’s how
Vin Diesel must smell.
BUTCHER
You know Hughie slathers Creamy
Desitin on his bum every morning.
ANNIE
I don’t wanna know that!
BUTCHER
He’s mental, is all I’m saying.
She smiles. Christ, are these two bonding?
ANNIE
But he never quite gives up on you,
does he?
BUTCHER
Aye. He follows you around like a
right little pup.
Long beat.
ANNIE
He’s too good for either of us.
INT. MAEVE’S APARTMENT - BEDROOM - DAY44 44
Elena moves past the bathroom where Maeve showers within --
ELENA
I’m gonna postmate Sugarfish.
QUEEN MAEVE
(from inside shower)
Sorry? I can’t hear you --
ELENA
Where’s your phone?
Elena looks around for Maeve’s phone. No sign of it on the
bed... it’s in the DESK DRAWER for some reason...
CONTINUED:43 43
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 50.
She moves to it -- and spots something strange. Connected to
the phone by a USB cord is... THE BATTERED GO-PRO.
Elena looks at the Go-Pro. Then at the phone screen -- a
file that’s been recently downloaded...
Maeve steps out of the bathroom, dries her hair --
QUEEN MAEVE
Did you say Sugarfish?
Maeve hears Homelander’s voice before she registers Elena on
the bed, looking at the downloaded footage of Flight 37 --
Elena watches the SHAKY FOOTAGE -- it’s being taken by a
terrified HUSBAND (30s) -- the plane WHINING, passengers
SCREAMING, total panic. Husband turns the camera on himself,
leaving a final message for his wife --
HUSBAND (ON VIDEO)
They’re leaving us! Homelander and
Queen Maeve. Oh my God, they’re
leaving!
He swivels the camera around and catches Maeve pulling the
SWEET MOM and CUTE LITTLE GIRL toward HOMELANDER who waits
impatiently at the OPEN REAR EXIT DOOR --
QUEEN MAEVE (ON VIDEO)
Take them! Just these two!
HOMELANDER (ON VIDEO)
So they can tell the world we let
everyone else die?
Maeve stares at Elena watching the video. She can’t breathe.
QUEEN MAEVE
Elena. Please...
But she just watches --
ON VIDEO. Maeve reluctantly releases the mom and little
girl, takes Homelander’s hand and the two leap out the exit.
Desperate screams from the passengers as the husband swivels
the camera back to his face. This is it...
HUSBAND (ON VIDEO)
I love you. Tell the boys I love
them --
IN THE ROOM. Elena turns to Maeve. Blood drained from her
face. Abject horror.
QUEEN MAEVE
I’m -- gonna show that to
Homelander. He either leaves us
alone, or I put it on CNN. This is *
how we get out. *
CONTINUED:44 44
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. 2ND WHITE - 9/18/19 51.
Elena’s got bigger issues right now. Voice small, quivering. *
ELENA
You just left them. How could you
just leave them?
Maeve’s held onto it too long -- but here it is -- the
searing guilt, the crushing self-hatred. Like Frenchie, like
Lamplighter, she can never forgive herself for what happened.
QUEEN MAEVE
I was scared. I know I should’ve
stood up to him. But I didn’t.
(can barely get it out)
So I watched them all, I watched
that little girl, die.
Elena doesn’t know what to say. What to think. Leaves Maeve
dangling over a chasm.
QUEEN MAEVE (CONT’D)
Please. Don’t look at me like
that... say something.
She’s reaching for comfort, understanding, anything -- but
Elena just looks at her, frozen.
Off Maeve, searching for some kind of absolution that she
knows doesn’t exist.
EXT. CLEARING - DAY45 45
Some unbelievably visual, wide open space upstate. Emmy
winning? Fuck that. We’re going full Oscar for this bitch.
A SAGE GROVE AMBULANCE, stolen, parked. OUTSIDE. Mother’s
Milk. Frenchie. Kimiko. M.M. on the phone --
MOTHER’S MILK
(to Frenchie and Kimiko)
Yo. Tight scrape, but Hughie’s
okay.
FRENCHIE
Bien. Tell Butcher about the thick *
penis around your neck.
M.M. gives Frenchie a “seriously going to kill you” look.
Then keeps speaking. As Frenchie leans over to Kimiko.
FRENCHIE (CONT’D)
I am sorry.
She looks up at him, curious.
FRENCHIE (CONT’D)
For a long time, I was trying to
save you.
CONTINUED: (2)44 44
(MORE)
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 52.
I thought if I did, somehow that
would make up for the things I’ve
done.
(beat)
But you never asked to be saved. It
wasn’t even about you. You cannot
absolve my sins, no one can. I know
this now. So. I leave you alone.
Kimiko stares at him, registering his growth and maturity.
This is a mixed bag. Does she want him to leave her alone?
When a SEDAN PULLS UP. The guys noticeably tense.
And MALLORY steps out.
This is the first time Frenchie and M.M. have seen her since
her grandchildren were killed. Gone is the easy camaraderie
we saw in the flashback. It’s LOADED with tension.
Especially with Frenchie.
MOTHER’S MILK
Colonel.
MALLORY
Marvin. Where is he?
FRENCHIE
Madame Mallory. I know I wasn’t
welcome at the funeral, so all these
years, I could never offer my
condolences, but --
Mallory is chilly. Clearly hasn’t forgiven Frenchie.
MALLORY
Where. Is. He?
We realize now -- she carries a GUN at her side. She’s
practically quivering with anger.
With that -- Kimiko and M.M. open the back of the AMBULANCE.
Lamplighter sits inside. Waiting for her.
Mallory is a combustible mix of surprise and quiet rage.
MALLORY (CONT’D)
Why isn’t this man restrained?
Lamplighter can barely make eye contact.
LAMPLIGHTER *
No need. I wanted to come. *
MALLORY *
I don’t want to hear a single *
goddamn word from you. *
(anguish) *
CONTINUED:45 45
FRENCHIE (CONT’D)
(MORE)
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 53.
I thought this was behind me, but -- *
it’s not, it never is. *
LAMPLIGHTER
Then let’s both be done with it -- I *
know what you have to do. You’d be *
doing me a favor.
She gives him a long look. Surprised. He gives her a nod *
back. Giving her permission to do it. Pleads for it. *
Her face twists. Finger on the trigger. But then --
FRENCHIE
Madame. If I may? Besides you, no
one wanted him dead more than me.
But I am begging you for his life. *
MALLORY *
(anguished) *
I don’t have a choice. *
FRENCHIE *
It won’t help you. All you’d be *
doing is ending his torment. You
cannot punish him as much as he
punishes himself. Trust me, I know
this.
MALLORY
So -- what exactly -- are you
proposing we do with him?
Off Mallory. Off her swirling emotion. What will she do?
INT. MEDICAL CLINIC - DAY46 46
Hughie blinks awake. Groggy.
HUGHIE
Mom?
Butcher. Sitting beside him. He cocks his head at the
mention of Hughie’s Mom -- huh -- first we’ve heard of her.
BUTCHER
Not quite.
HUGHIE
What... what happened?
BUTCHER
You bled all over the place like a
right wanker, that’s what happened.
HUGHIE
Where’s Annie?
CONTINUED: (2)45 45
MALLORY (CONT'D)
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 54.
Butcher shakes his head a little. Don’t worry about it.
Annie’s gone. After all -- Hughie’s too good for her.
INT. CAB - MOVING - DAY47 47
Annie. In the backseat of a small town CAB. Blank-faced.
We wonder if she’s truly as closed up and closed off as she
seems to be... off this...
INT. SEVEN TOWER - STORMFRONT’S APARTMENT - BEDROOM - DAY48 48 *
Stormfront enters her apartment. To find -- *
HOMELANDER. Just... standing in her place. Blank faced. *
Not even looking at her. Is he here to hurt her? We don’t *
know. She treads carefully. She’s even a bit scared. This *
can go bad a hundred different ways -- *
STORMFRONT *
Hey -- you. *
(silence) *
Listen. I’m glad you’re here. I *
want to say how sorry I am. Just *
let me explain -- *
He spins on her. Calm, chilling murder in his eyes. *
HOMELANDER
Flap, flap, flap goes that mouth of
yours.
(his eerie blank look)
You told me you don’t break easy. *
I’ve been thinking about that. A
lot.
Threat received. She’s intimidated. But calmly as she can --
STORMFRONT
I’ll never lie to you again. I’ll *
tell you everything.
He wasn’t expecting that -- thrown off-guard.
STORMFRONT (CONT’D)
Starting with this.
Nearby, a LOCKED WOODEN HOPE CHEST. Has some aged history to *
it. She unlocks it, opens it. First thing she shows *
Homelander -- a picture from a few years ago. We saw it in
her trailer in Ep. 205. Stormfront (in uniform) beside a
very old, wrinkled WOMAN.
HOMELANDER *
Your... grandmother.
STORMFRONT
My daughter.
(off Homelander’s surprise)
CONTINUED:46 46
(MORE)
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. 2ND PINK - 10/18/19 55.
Chloe. She died of Alzheimer’s a
few years ago.
He takes this in, surprised. Beat. Then --
HOMELANDER
How old are you?
STORMFRONT
I was born in 1919. In Berlin.
She shows him another faded photo of a BERLIN STATE DINNER in
1940. Swastikas and Gestapo everywhere. Prominent Nazis at
a table -- Goebbels, Goering -- and clearly STORMFRONT, in
period appropriate hair and dress.
HOMELANDER
Is that you with...?
CONTINUED:48 48
STORMFRONT (CONT'D)
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. 2ND PINK - 10/18/19 55A.
STORMFRONT
Heinrich Himmler. He was a lovely
dancer... there’s Goebbels... and
here, the most important man in the
room.
She points to a MAN in the photo standing beside GOEBBELS. A
German with a strong, proud face.
HOMELANDER
Vought. That’s Frederick Vought.
STORMFRONT
He gave me the first successful V
injection. He taught me everything. *
Then we fell in love, he gave me a
daughter. He made me -- his genius
made you.
She’s a TRUE BELIEVER. Sincere. Even emotional.
STORMFRONT (CONT’D)
Frederick didn’t care about fans or
stardom or any of that shallow
bullshit. We’re in a War for the
Culture. The other races are
grinding us down, stealing what’s
rightfully ours. But we can fight
back. With an army of super men,
millions strong. That’s the true
destiny of Vought. And you’re the
one who will lead us.
CLOSE ON HOMELANDER. He doesn’t have to say anything, but
it’s clear -- he likes the sound of that.
STORMFRONT (CONT’D)
So yes, I love you, with all my
heart. How could I not?
(takes his hand)
Everyone I’ve ever loved is in the
ground. But -- I found you, we
found each other. We don’t have to
be alone anymore. That’s the truth.
Long beat. Will he go for it? Then... he leans in and
kisses her. It’s passionate, overwhelming: a kiss of
commitment, of love, of shared dreams. Of trust. She had
him at Master Race.
Off this romantic image of our reunited lovers -- the theme
song to “Golden Girls” kicks in, and we CUT TO --
EXT. WOODED ROADSIDE – DAY49 49
One last post script. CLOSE ON BARE FEET. TILT UP to FILTHY
HOSPITAL ISSUED CLOTHES. And an extended THUMB of a young
woman. Reveal: CINDY. Alive. Escaped.
CONTINUED: (2)48 48
(CONTINUED)
THE BOYS #206 "The Bloody Doors Off" REV. 2ND YELLOW - 10/29/19 56.
A car approaches from behind. STICK FIGURE FAMILY stickers *
on the rear window. Slows. *
WIDE. Cindy leans her head inside the car. We don’t hear or
see the exchange. She climbs in. The car drives off...
“You would see, the biggest gift would be from me, and the
card attached would say: thank you for being a friend --”
BLACKOUT.
TO BE CONTINUED...
CONTINUED:49 49
THE BOYS #206 "The Bloody Doors Off" FULL YELLOW DRAFT - 9/13/19 57.
ADDITIONAL DIALOGUE
ADDITIONAL DIALOGUE FOR HOMELANDER, STORMFRONT AND THEIR
INTERVIEWER ON THE SET OF “DAWN OF THE SEVEN” -- FOR BUTCHER
AND KIMIKO TO WATCH AND REACT TO IN SCENE 4.
NOTE: Already scripted content is in BOLD FONT
EXT. SET - NEAR ‘DESTROYED NEW YORK CITY’ - DAY4 4
Homelander and Stormfront. In directors’ chairs. ON SET for
“Dawn of the Seven.”
INTERVIEWER (O.S.)
In many ways, Dawn of the Seven is
the first film of its kind -- The
ultimate superhero movie.
HOMELANDER
It’s certainly ambitious.
STORMFRONT
I mean, we got Mr. Marathon --
(re: Homelander)
We got him!
HOMELANDER
You’re so humble!
(to interviewer)
She’s amazing. Blows me out of the
water. Every take.
INTERVIEWER (O.S.)
All right. Be honest. Who’s the
biggest prankster on set?
Homelander and Stormfront laugh. Flirting. Can’t help it.
This is so fun. Homelander points to Stormfront --
HOMELANDER
(”this one”)
Oh, no comment...
STORMFRONT
He’s right.
(joking)
Black Noir has the biggest ego,
though.
HOMELANDER
(going along)
Oh, of course. Total diva.
STORMFRONT
But really, I can’t believe how
chill everyone is. It feels like
I’m back home, just making a movie
with my friends.
(CONTINUED)
THE BOYS #206 POCKET DIALOGUE FOR SCENE 4
INTERVIEWER (O.S.)
It’s a complicated project.
Everyone still manages to get along?
HOMELANDER
I’ve been with roughly the same crew
since Homelander: Origins. We
really are a family.
INTERVIEWER (O.S.)
That’s incredible.
Homelander and Stormfront stare, lost in each others’ eyes...
CONTINUED:4 4
THE BOYS #206 POCKET DIALOGUE FOR SCENE 4
ADDITIONAL DIALOGUE
ADDITIONAL DIALOGUE FOR THE NEWS ANCHOR IN SCENE 6. TO PLAY
AS QUEEN MAEVE AND DEEP TALK.
NOTE: Already scripted content is in BOLD FONT
INT. MAEVE’S TRAILER - DAY6 6
ON THE TELEVISION. STOCK FOOTAGE of two different factions
of people SCREAMING and SHOVING at each other. We see this
kind of thing at Women’s Clinics and outside rallies.
NEWS ANCHOR (V.O.)
Police are reporting unrest
throughout the city as the story of
Compound V develops. With the House
Judiciary Hearing into Vought just
four days away, pro and anti Vought
camps clashed in Manhattan this
morning. Congresswoman Victoria
Neuman said that Compound V must be
brought under government control.
Neuman’s opponents maintain that the
United States is in the midst of a
National Emergency too dire to
warrant regulation, and moved to
postpone the hearing.
(then)
Foreign governments have launched
probes into the presence of Compound
V within their borders, petitioning
top U.N. Officials to launch
investigations. The Secretary
General has yet to comment.
(then)
A growing faction of citizen
activists are taking up the charge
against Vought International.
Protests have begun in 15 states so
far, with growing anti-Vought
crowds.
THE BOYS #206 POCKET DIALOGUE FOR SCENE 6
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
      outputText = newForm
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
  let text = inputText.value
  text = text.split(" ")
  let seed = text[text.length-1]
  text[text.length-1] = ""
  text = text.filter((k)=>k!="")
  text = text.join(" ")
  runSeed(seed,1)
  text += (" "+outputText.toLowerCase())
  manualOutput.innerHTML = format(text)
}

//STUFF THAT RUNS ON LOAD

mainBody.addEventListener('load',loadFunc())
function loadFunc() {
  eatData(data)
  seedWhitelist = seedWhitelist.filter((k)=>!(seedBlacklist.includes(k)||punctuation.includes(k)))
  console.log("words:",words)
  console.log("seedWhitelist:",seedWhitelist)
}