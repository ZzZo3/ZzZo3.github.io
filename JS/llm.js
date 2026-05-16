//BASE
const mainBody = document.getElementById("mainBody")
const outputBox = document.getElementById("output")
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
According to all known laws of aviation, there is no way a bee should be able to fly.
Its wings are too small to get its fat little body off the ground.
The bee, of course, flies anyway because bees don't care what humans think is impossible.
Yellow, black. Yellow, black. Yellow, black. Yellow, black.
Three days grade school, three days high school.
Those were awkward.
Three days college. I'm glad I took a day and hitchhiked around The Hive.
We know that you, as a bee, have worked your whole life to get to the point where you can work for your whole life.
Honey begins when our valiant Pollen Jocks bring the nectar to The Hive.
Our top-secret formula is automatically color-corrected, scent-adjusted and bubble-contoured into this soothing sweet syrup with its distinctive golden glow you know as... Honey!
But bees know that every small job, if it's done well, means a lot.
But choose carefully because you'll stay in the job you pick for the rest of your life.
You'll be happy to know that bees, as a species, haven't had one day off in 27 million years.
That's an insane choice to have to make.
I'm relieved. Now we only have to make one decision in life.
But, Adam, how could they never have told us that?
Why would you question anything? We're bees.
We're the most perfectly functioning society on Earth.
You ever think maybe things work a little too well here?
Like what? Give me one example.
I don't know. But you know what I'm talking about.
Please clear the gate. Royal Nectar Force on approach.
It must be dangerous being a Pollen Jock.
Yeah. Once a bear pinned me against a mushroom!
He had a paw on my throat, and with the other, he was slapping me!
Do you ever get bored doing the same job every day?
Son, let me tell you about stirring.
You grab that stick, and you just move it around, and you stir it around.
You get yourself into a rhythm.
It's a beautiful thing.
You know, Dad, the more I think about it,
maybe the honey field just isn't right for me.
You were thinking of what, making balloon animals?
That's a bad job for a guy with a stinger.
Janet, your son's not sure he wants to go into honey!
Barry, you are so funny sometimes.
I'm not trying to be funny.
You're not funny! You're going into honey. Our son, the stirrer!
You're gonna be a stirrer?
No one's listening to me!
Wait till you see the sticks I have.
I could say anything right now.
I'm gonna get an ant tattoo!
Let's open some honey and celebrate!
Maybe I'll pierce my thorax. Shave my antennae. Shack up with a grasshopper. Get a gold tooth and call everybody "dawg"!
I'm so proud.
We're starting work today!
Today's the day.
Come on! All the good jobs will be gone.
Yeah, right.
Pollen counting, stunt bee, pouring, stirrer, front desk, hair removal...
A bee died. Makes an opening. See? He's dead. Another dead one.
Deady. Deadified. Two more dead.
Dead from the neck up. Dead from the neck down. That's life!
Oh, this is so hard!
Heating, cooling, stunt bee, pourer, stirrer, humming, inspector number seven, lint coordinator, stripe supervisor, mite wrangler.
Barry, what do you think I should... Barry?
All right, we've got the sunflower patch in quadrant nine...
I have to, before I go to work for the rest of my life.
You're gonna die! You're crazy! Hello?
Another call coming in.
If anyone's feeling brave, there's a Korean deli on 83rd that gets their roses today.
You got a rain advisory today, and as you all know, bees cannot fly in rain.
So be careful. As always, watch your brooms, hockey sticks, dogs, birds, bears and bats.
Also, I got a couple of reports of root beer being poured on us.
Murphy's in a home because of it, babbling like a cicada!
That's awful.
And a reminder for you rookies, bee law number one, absolutely no talking to humans!
 All right, launch positions!
Buzz, buzz, buzz, buzz! Buzz, buzz, buzz, buzz! Buzz, buzz, buzz, buzz!
I pick up some pollen here, sprinkle it over here. Maybe a dash over there, a pinch on that one.
See that? It's a little bit of magic.
That's amazing. Why do we do that?
That's pollen power. More pollen, more flowers, more nectar, more honey for us.
I'm picking up a lot of bright yellow, Could be daisies, Don't we need those?
What are you doing?!
Wow... the tension level out here is unbelievable.
I gotta get home.
Can't fly in rain. Can't fly in rain. Can't fly in rain.
Mayday! Mayday! Bee going down!
Ken, could you close the window please?
Ken, could you close the window please?
Check out my new resume. I made it into a fold-out brochure. You see? Folds out.
Oh, no. More humans. I don't need this.
What was that?
Maybe this time. This time. This time. This time! This time! This... Drapes!
That is diabolical.
It's fantastic. It's got all my special skills, even my top-ten favorite movies.
What's number one? Star Wars?
Nah, I don't go for that... kind of stuff.
No wonder we shouldn't talk to them. They're out of their minds.
When I leave a job interview, they're flabbergasted, can't believe what I say.
There's the sun. Maybe that's a way out.
I don't remember the sun having a big 75 on it.
I predicted global warming. I could feel it getting hotter. At first I thought it was just me.
Wait! Stop! Bee!
Stand back. These are winter boots.
Don't kill him!
You know I'm allergic to them! This thing could kill me!
Why does his life have less value than yours?
Why does his life have any less value than mine? Is that your statement?
I'm just saying all life has value. You don't know what he's capable of feeling.
Well, I'm sure this is very disconcerting.
This is a bit of a surprise to me. I mean, you're a bee!
I am. And I'm not supposed to be doing this, but they were all trying to kill me.
And if it wasn't for you... I had to thank you. It's just how I was raised.
That was a little weird. I'm talking with a bee.
Yeah.
I'm talking to a bee. And the bee is talking to me!
I just want to say I'm grateful.
I'll leave now.
Wait! How did you learn to do that?
What?
The talking thing.
Same way you did, I guess. "Mama, Dada, honey." You pick it up.
That's very funny.
Yeah.
Bees are funny. If we didn't laugh, we'd cry with what we have to deal with.
Anyway... Can I... get you something?
Like what?
I don't know. I mean... I don't know. Coffee?
I don't want to put you out.
It's no trouble. It takes two minutes.
It's just coffee.
I hate to impose.
Don't be ridiculous!
Actually, I would love a cup.
Hey, you want rum cake?
I shouldn't.
Have some.
No, I can't.
Come on!
I'm trying to lose a couple micrograms.
Where?
These stripes don't help.
You look great!
I don't know if you know anything about fashion.
Are you all right?
No.
He's making the tie in the cab as they're flying up Madison.
He finally gets there.
He runs up the steps into the church.
The wedding is on.
And he says, "Watermelon?
I thought you said Guatemalan.
Why would I marry a watermelon?"
Is that a bee joke?
That's the kind of stuff we do.
Yeah, different.
So, what are you gonna do, Barry?
About work? I don't know.
I want to do my part for The Hive, but I can't do it the way they want.
I know how you feel.
You do?
Sure.
My parents wanted me to be a lawyer or a doctor, but I wanted to be a florist.
Really?
My only interest is flowers.
Our new queen was just elected with that same campaign slogan.
Anyway, if you look... There's my hive right there. See it?
You're in Sheep Meadow!
Yes! I'm right off the Turtle Pond!
No way! I know that area. I lost a toe ring there once.
Why do girls put rings on their toes?
Why not?
It's like putting a hat on your knee.
Maybe I'll try that.
You all right, ma'am?
Oh, yeah. Fine.
Just having two cups of coffee!
Anyway, this has been great.
Thanks for the coffee.
Yeah, it's no trouble.
Sorry I couldn't finish it. If I did, I'd be up the rest of my life.
Are you...?
Can I take a piece of this with me?
Sure! Here, have a crumb.
Thanks!
Yeah.
All right. Well, then... I guess I'll see you around. Or not.
OK, Barry.
And thank you so much again... for before.
Oh, that? That was nothing.
Well, not nothing, but... Anyway...
This can't possibly work.
He's all set to go.
We may as well try it.
OK, Dave, pull the chute.
Sounds amazing.
It was amazing!
It was the scariest, happiest moment of my life.
Humans! I can't believe you were with humans!
Giant, scary humans!
What were they like?
Huge and crazy. They talk crazy.
They eat crazy giant things.
They drive crazy.
Do they try and kill you, like on TV?
Some of them. But some of them don't.
How'd you get back?
Poodle.
You did it, and I'm glad. You saw whatever you wanted to see.
You had your "experience." Now you can pick out yourjob and be normal.
Well...
Well?
Well, I met someone.
You did? Was she Bee-ish?
A wasp?! Your parents will kill you!
No, no, no, not a wasp.
Spider?
I'm not attracted to spiders.
I know it's the hottest thing, with the eight legs and all. I can't get by that face.
So who is she?
She's... human.
No, no. That's a bee law. You wouldn't break a bee law.
Her name's Vanessa.
Oh, boy.
She's so nice. And she's a florist!
Oh, no! You're dating a human florist!
We're not dating.
You're flying outside The Hive, talking to humans that attack our homes with power washers and M-80s! One-eighth a stick of dynamite!
She saved my life! And she understands me.
This is over!
Eat this.
This is not over! What was that?
They call it a crumb.
It was so stingin' stripey!
And that's not what they eat.
That's what falls off what they eat!
You know what a Cinnabon is?
It's bread and cinnamon and frosting. They heat it up...
We are not them! We're us.
There's us and there's them!
Yes, but who can deny the heart that is yearning?
There's no yearning. Stop yearning. Listen to me!
You have got to start thinking bee, my friend. Thinking bee!
Thinking bee.
Thinking bee.
Thinking bee! Thinking bee! Thinking bee! Thinking bee!
There he is. He's in the pool.
You know what your problem is, Barry?
I gotta start thinking bee?
How much longer will this go on?
It's been three days! Why aren't you working?
I've got a lot of big life decisions to think about.
What life? You have no life!
They have a huge parade of flowers every year in Pasadena?
To be in the Tournament of Roses, that's every florist's dream!
Up on a float, surrounded by flowers, crowds cheering.
A tournament. Do the roses compete in athletic events?
No. All right, I've got one.
How come you don't fly everywhere?
It's exhausting. Why don't you run everywhere? It's faster.
TiVo. You can just freeze live TV? That's insane!
You don't have that?
We have Hivo, but it's a disease. It's a horrible, horrible disease.
You must want to sting all those jerks.
We try not to sting. It's usually fatal for us.
So you have to watch your temper.
Very carefully.
You kick a wall, take a walk, write an angry letter and throw it out. Work through it like any emotion: Anger, jealousy, lust.
I know who makes it! And it's hard to make it!
There's heating, cooling, stirring. You need a whole Krelman thing!
It's organic.
It's our-ganic!
It's just honey, Barry.
Just what?!
Bees don't know about this! This is stealing! A lot of stealing!
You've taken our homes, schools,hospitals! This is all we have!
And it's on sale?! I'm getting to the bottom of this.
I'm getting to the bottom of all of this!
Hey, Hector. You almost done?
Almost.
He is here. I sense it.
Well, I guess I'll go home now and just leave this nice honey out, with no one around.
You're busted, box boy!
I knew I heard something.
So you can talk!
I can talk. And now you'll start talking!
Where you getting the sweet stuff? Who's your supplier?
I don't understand.
I thought we were friends.
The last thing we want to do is upset bees!
You're too late! It's ours now!
You, sir, have crossed the wrong sword!
You, sir, will be lunch for my iguana, Ignacio!
Where is the honey coming from? Tell me where!
Honey Farms! It comes from Honey Farms!
Crazy person!
What horrible thing has happened here?
These faces, they never knew what hit them. And now
they're on the road to nowhere!
Just keep still.
What? You're not dead?
Do I look dead? They will wipe anything that moves. Where you headed?
To Honey Farms. I am onto something huge here.
I'm going to Alaska. Moose blood, crazy stuff. Blows your head off!
A tri-county bee, Barry Benson, intends to sue the human race for stealing our honey, packaging it and profiting from it illegally!
Tomorrow night on Bee Larry King, we'll have three former queens here in our studio, discussing their new book, classy Ladies, out this week on Hexagon.
Tonight we're talking to Barry Benson.
Did you ever think, "I'm a kid from The Hive. I can't do this"?
Bees have never been afraid to change the world.
What about Bee Oolumbus? Bee Gandhi? Bejesus?
Where I'm from, we'd never sue humans.
We were thinking of stickball or candy stores.
How old are you?
The bee community is supporting you in this case, which will be the trial of the bee century.
You know, they have a Larry King in the human world too.
It's a common name. Next week...
He looks like you and has a show and suspenders and colored dots...
Next week...
Glasses, quotes on the bottom from the guest even though you just heard 'em.
Bear Week next week! They're scary, hairy and here live.
Always leans forward, pointy shoulders, squinty eyes, very Jewish.
In tennis, you attack at the point of weakness!
Yes, and Adam here has been a huge help.
Frosting...
How many sugars?
Just one. I try not to use the competition.
So why are you helping me?
Bees have good qualities. And it takes my mind off the shop. Instead of flowers, people are giving balloon bouquets now.
Those are great, if you're three.
And artificial flowers.
Oh, those just get me psychotic!
Yeah, me too.
Bent stingers, pointless pollination.
Bees must hate those fake things!
Nothing worse than a daffodil that's had work done.
Maybe this could make up for it a little bit.
This lawsuit's a pretty big deal.
I guess.
You sure you want to go through with it?
Am I sure? When I'm done with the humans, they won't be able to say, "Honey, I'm home," without paying a royalty!
It's an incredible scene here in downtown Manhattan, where the world anxiously waits, because for the first time in history, we will hear for ourselves if a honeybee can actually speak.
What have we gotten into here, Barry?
It's pretty big, isn't it?
I can't believe how many humans don't work during the day.
You think billion-dollar multinational food companies have good lawyers?
Everybody needs to stay behind the barricade.
What's the matter?
I don't know, I just got a chill.
Well, if it isn't the bee team.
You boys work on this?
All rise! The Honorable Judge Bumbleton presiding.
All right. Case number 4475,
Superior Court of New York,
Barry Bee Benson v. the Honey Industry is now in session.
Mr. Montgomery, you're representing the five food companies collectively?
A privilege.
Mr. Benson... you're representing all the bees of the world?
I'm kidding. Yes, Your Honor, we're ready to proceed.
Mr. Montgomery, your opening statement, please.
Ladies and gentlemen of the jury, my grandmother was a simple woman. Born on a farm, she believed it was man's divine right to benefit from the bounty of nature God put before us.
If we lived in the topsy-turvy world Mr. Benson imagines, just think of what would it mean.
I would have to negotiate with the silkworm for the elastic in my britches!
Talking bee!
How do we know this isn't some sort of holographic motion-picture-capture Hollywood wizardry?
They could be using laser beams! Robotics! Ventriloquism! Cloning! For all we know, he could be on steroids!
Mr. Benson?
Ladies and gentlemen, there's no trickery here. I'm just an ordinary bee. Honey's pretty important to me. It's important to all bees. We invented it! We make it. And we protect it with our lives.
Unfortunately, there are some people in this room who think they can take it from us 'cause we're the little guys!
I'm hoping that, after this is all over, you'll see how, by taking our honey, you not only take everything we have but everything we are!
I wish he'd dress like that all the time. So nice!
Call your first witness.
So, Mr. Klauss Vanderhayden of Honey Farms, big company you have.
I suppose so.
I see you also own Honeyburton and Honron!
Yes, they provide beekeepers for our farms.
Beekeeper. I find that to be a very disturbing term.
I don't imagine you employ any bee-free-ers, do you?
No.
I couldn't hear you.
No.
No. Because you don't free bees. You keep bees. Not only that, it seems you thought a bear would be an appropriate image for a jar of honey.
They're very lovable creatures. Yogi Bear, Fozzie Bear, Build-A-Bear.
You mean like this?
Bears kill bees!
How'd you like his head crashing through your living room?! Biting into your couch! Spitting out your throw pillows! OK, that's enough. Take him away.
So, Mr. Sting, thank you for being here. Your name intrigues me. Where have I heard it before?
I was dying to get out of that office.
You have got to start thinking bee, my friend.
Hold it. Let's just stop for a second. Hold it.
I'm sorry. I'm sorry, everyone. Can we stop here?
I'm not making a major life decision during a production number!
All right. Take ten, everybody. Wrap it up, guys.


16 April 1963
My Dear Fellow Clergymen:
While confined here in the Birmingham city jail, I came across your recent statement calling my present activities "unwise and untimely." Seldom do I pause to answer criticism of my work and ideas. If I sought to answer all the criticisms that cross my desk, my secretaries would have little time for anything other than such correspondence in the course of the day, and I would have no time for constructive work. But since I feel that you are men of genuine good will and that your criticisms are sincerely set forth, I want to try to answer your statement in what I hope will be patient and reasonable terms.

I think I should indicate why I am here in Birmingham, since you have been influenced by the view which argues against "outsiders coming in." I have the honor of serving as president of the Southern Christian Leadership Conference, an organization operating in every southern state, with headquarters in Atlanta, Georgia. We have some eighty five affiliated organizations across the South, and one of them is the Alabama Christian Movement for Human Rights. Frequently we share staff, educational and financial resources with our affiliates. Several months ago the affiliate here in Birmingham asked us to be on call to engage in a nonviolent direct action program if such were deemed necessary. We readily consented, and when the hour came we lived up to our promise. So I, along with several members of my staff, am here because I was invited here. I am here because I have organizational ties here.

But more basically, I am in Birmingham because injustice is here. Just as the prophets of the eighth century B.C. left their villages and carried their "thus saith the Lord" far beyond the boundaries of their home towns, and just as the Apostle Paul left his village of Tarsus and carried the gospel of Jesus Christ to the far corners of the Greco Roman world, so am I compelled to carry the gospel of freedom beyond my own home town. Like Paul, I must constantly respond to the Macedonian call for aid.

Moreover, I am cognizant of the interrelatedness of all communities and states. I cannot sit idly by in Atlanta and not be concerned about what happens in Birmingham. Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality, tied in a single garment of destiny. Whatever affects one directly, affects all indirectly. Never again can we afford to live with the narrow, provincial "outside agitator" idea. Anyone who lives inside the United States can never be considered an outsider anywhere within its bounds.

You deplore the demonstrations taking place in Birmingham. But your statement, I am sorry to say, fails to express a similar concern for the conditions that brought about the demonstrations. I am sure that none of you would want to rest content with the superficial kind of social analysis that deals merely with effects and does not grapple with underlying causes. It is unfortunate that demonstrations are taking place in Birmingham, but it is even more unfortunate that the city's white power structure left the Negro community with no alternative.

In any nonviolent campaign there are four basic steps: collection of the facts to determine whether injustices exist; negotiation; self purification; and direct action. We have gone through all these steps in Birmingham. There can be no gainsaying the fact that racial injustice engulfs this community. Birmingham is probably the most thoroughly segregated city in the United States. Its ugly record of brutality is widely known. Negroes have experienced grossly unjust treatment in the courts. There have been more unsolved bombings of Negro homes and churches in Birmingham than in any other city in the nation. These are the hard, brutal facts of the case. On the basis of these conditions, Negro leaders sought to negotiate with the city fathers. But the latter consistently refused to engage in good faith negotiation.

Then, last September, came the opportunity to talk with leaders of Birmingham's economic community. In the course of the negotiations, certain promises were made by the merchants--for example, to remove the stores' humiliating racial signs. On the basis of these promises, the Reverend Fred Shuttlesworth and the leaders of the Alabama Christian Movement for Human Rights agreed to a moratorium on all demonstrations. As the weeks and months went by, we realized that we were the victims of a broken promise. A few signs, briefly removed, returned; the others remained. As in so many past experiences, our hopes had been blasted, and the shadow of deep disappointment settled upon us. We had no alternative except to prepare for direct action, whereby we would present our very bodies as a means of laying our case before the conscience of the local and the national community. Mindful of the difficulties involved, we decided to undertake a process of self purification. We began a series of workshops on nonviolence, and we repeatedly asked ourselves: "Are you able to accept blows without retaliating?" "Are you able to endure the ordeal of jail?" We decided to schedule our direct action program for the Easter season, realizing that except for Christmas, this is the main shopping period of the year. Knowing that a strong economic-withdrawal program would be the by product of direct action, we felt that this would be the best time to bring pressure to bear on the merchants for the needed change.

Then it occurred to us that Birmingham's mayoral election was coming up in March, and we speedily decided to postpone action until after election day. When we discovered that the Commissioner of Public Safety, Eugene "Bull" Connor, had piled up enough votes to be in the run off, we decided again to postpone action until the day after the run off so that the demonstrations could not be used to cloud the issues. Like many others, we waited to see Mr. Connor defeated, and to this end we endured postponement after postponement. Having aided in this community need, we felt that our direct action program could be delayed no longer.

You may well ask: "Why direct action? Why sit ins, marches and so forth? Isn't negotiation a better path?" You are quite right in calling for negotiation. Indeed, this is the very purpose of direct action. Nonviolent direct action seeks to create such a crisis and foster such a tension that a community which has constantly refused to negotiate is forced to confront the issue. It seeks so to dramatize the issue that it can no longer be ignored. My citing the creation of tension as part of the work of the nonviolent resister may sound rather shocking. But I must confess that I am not afraid of the word "tension." I have earnestly opposed violent tension, but there is a type of constructive, nonviolent tension which is necessary for growth. Just as Socrates felt that it was necessary to create a tension in the mind so that individuals could rise from the bondage of myths and half truths to the unfettered realm of creative analysis and objective appraisal, so must we see the need for nonviolent gadflies to create the kind of tension in society that will help men rise from the dark depths of prejudice and racism to the majestic heights of understanding and brotherhood. The purpose of our direct action program is to create a situation so crisis packed that it will inevitably open the door to negotiation. I therefore concur with you in your call for negotiation. Too long has our beloved Southland been bogged down in a tragic effort to live in monologue rather than dialogue.

One of the basic points in your statement is that the action that I and my associates have taken in Birmingham is untimely. Some have asked: "Why didn't you give the new city administration time to act?" The only answer that I can give to this query is that the new Birmingham administration must be prodded about as much as the outgoing one, before it will act. We are sadly mistaken if we feel that the election of Albert Boutwell as mayor will bring the millennium to Birmingham. While Mr. Boutwell is a much more gentle person than Mr. Connor, they are both segregationists, dedicated to maintenance of the status quo. I have hope that Mr. Boutwell will be reasonable enough to see the futility of massive resistance to desegregation. But he will not see this without pressure from devotees of civil rights. My friends, I must say to you that we have not made a single gain in civil rights without determined legal and nonviolent pressure. Lamentably, it is an historical fact that privileged groups seldom give up their privileges voluntarily. Individuals may see the moral light and voluntarily give up their unjust posture; but, as Reinhold Niebuhr has reminded us, groups tend to be more immoral than individuals.

We know through painful experience that freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed. Frankly, I have yet to engage in a direct action campaign that was "well timed" in the view of those who have not suffered unduly from the disease of segregation. For years now I have heard the word "Wait!" It rings in the ear of every Negro with piercing familiarity. This "Wait" has almost always meant "Never." We must come to see, with one of our distinguished jurists, that "justice too long delayed is justice denied."

We have waited for more than 340 years for our constitutional and God given rights. The nations of Asia and Africa are moving with jetlike speed toward gaining political independence, but we still creep at horse and buggy pace toward gaining a cup of coffee at a lunch counter. Perhaps it is easy for those who have never felt the stinging darts of segregation to say, "Wait." But when you have seen vicious mobs lynch your mothers and fathers at will and drown your sisters and brothers at whim; when you have seen hate filled policemen curse, kick and even kill your black brothers and sisters; when you see the vast majority of your twenty million Negro brothers smothering in an airtight cage of poverty in the midst of an affluent society; when you suddenly find your tongue twisted and your speech stammering as you seek to explain to your six year old daughter why she can't go to the public amusement park that has just been advertised on television, and see tears welling up in her eyes when she is told that Funtown is closed to colored children, and see ominous clouds of inferiority beginning to form in her little mental sky, and see her beginning to distort her personality by developing an unconscious bitterness toward white people; when you have to concoct an answer for a five year old son who is asking: "Daddy, why do white people treat colored people so mean?"; when you take a cross county drive and find it necessary to sleep night after night in the uncomfortable corners of your automobile because no motel will accept you; when you are humiliated day in and day out by nagging signs reading "white" and "colored"; when your first name becomes "nigger," your middle name becomes "boy" (however old you are) and your last name becomes "John," and your wife and mother are never given the respected title "Mrs."; when you are harried by day and haunted by night by the fact that you are a Negro, living constantly at tiptoe stance, never quite knowing what to expect next, and are plagued with inner fears and outer resentments; when you are forever fighting a degenerating sense of "nobodiness"--then you will understand why we find it difficult to wait. There comes a time when the cup of endurance runs over, and men are no longer willing to be plunged into the abyss of despair. I hope, sirs, you can understand our legitimate and unavoidable impatience. You express a great deal of anxiety over our willingness to break laws. This is certainly a legitimate concern. Since we so diligently urge people to obey the Supreme Court's decision of 1954 outlawing segregation in the public schools, at first glance it may seem rather paradoxical for us consciously to break laws. One may well ask: "How can you advocate breaking some laws and obeying others?" The answer lies in the fact that there are two types of laws: just and unjust. I would be the first to advocate obeying just laws. One has not only a legal but a moral responsibility to obey just laws. Conversely, one has a moral responsibility to disobey unjust laws. I would agree with St. Augustine that "an unjust law is no law at all."

Now, what is the difference between the two? How does one determine whether a law is just or unjust? A just law is a man made code that squares with the moral law or the law of God. An unjust law is a code that is out of harmony with the moral law. To put it in the terms of St. Thomas Aquinas: An unjust law is a human law that is not rooted in eternal law and natural law. Any law that uplifts human personality is just. Any law that degrades human personality is unjust. All segregation statutes are unjust because segregation distorts the soul and damages the personality. It gives the segregator a false sense of superiority and the segregated a false sense of inferiority. Segregation, to use the terminology of the Jewish philosopher Martin Buber, substitutes an "I it" relationship for an "I thou" relationship and ends up relegating persons to the status of things. Hence segregation is not only politically, economically and sociologically unsound, it is morally wrong and sinful. Paul Tillich has said that sin is separation. Is not segregation an existential expression of man's tragic separation, his awful estrangement, his terrible sinfulness? Thus it is that I can urge men to obey the 1954 decision of the Supreme Court, for it is morally right; and I can urge them to disobey segregation ordinances, for they are morally wrong.

Let us consider a more concrete example of just and unjust laws. An unjust law is a code that a numerical or power majority group compels a minority group to obey but does not make binding on itself. This is difference made legal. By the same token, a just law is a code that a majority compels a minority to follow and that it is willing to follow itself. This is sameness made legal. Let me give another explanation. A law is unjust if it is inflicted on a minority that, as a result of being denied the right to vote, had no part in enacting or devising the law. Who can say that the legislature of Alabama which set up that state's segregation laws was democratically elected? Throughout Alabama all sorts of devious methods are used to prevent Negroes from becoming registered voters, and there are some counties in which, even though Negroes constitute a majority of the population, not a single Negro is registered. Can any law enacted under such circumstances be considered democratically structured?

Sometimes a law is just on its face and unjust in its application. For instance, I have been arrested on a charge of parading without a permit. Now, there is nothing wrong in having an ordinance which requires a permit for a parade. But such an ordinance becomes unjust when it is used to maintain segregation and to deny citizens the First-Amendment privilege of peaceful assembly and protest.

I hope you are able to see the distinction I am trying to point out. In no sense do I advocate evading or defying the law, as would the rabid segregationist. That would lead to anarchy. One who breaks an unjust law must do so openly, lovingly, and with a willingness to accept the penalty. I submit that an individual who breaks a law that conscience tells him is unjust, and who willingly accepts the penalty of imprisonment in order to arouse the conscience of the community over its injustice, is in reality expressing the highest respect for law.

Of course, there is nothing new about this kind of civil disobedience. It was evidenced sublimely in the refusal of Shadrach, Meshach and Abednego to obey the laws of Nebuchadnezzar, on the ground that a higher moral law was at stake. It was practiced superbly by the early Christians, who were willing to face hungry lions and the excruciating pain of chopping blocks rather than submit to certain unjust laws of the Roman Empire. To a degree, academic freedom is a reality today because Socrates practiced civil disobedience. In our own nation, the Boston Tea Party represented a massive act of civil disobedience.

We should never forget that everything Adolf Hitler did in Germany was "legal" and everything the Hungarian freedom fighters did in Hungary was "illegal." It was "illegal" to aid and comfort a Jew in Hitler's Germany. Even so, I am sure that, had I lived in Germany at the time, I would have aided and comforted my Jewish brothers. If today I lived in a Communist country where certain principles dear to the Christian faith are suppressed, I would openly advocate disobeying that country's antireligious laws.

I must make two honest confessions to you, my Christian and Jewish brothers. First, I must confess that over the past few years I have been gravely disappointed with the white moderate. I have almost reached the regrettable conclusion that the Negro's great stumbling block in his stride toward freedom is not the White Citizen's Counciler or the Ku Klux Klanner, but the white moderate, who is more devoted to "order" than to justice; who prefers a negative peace which is the absence of tension to a positive peace which is the presence of justice; who constantly says: "I agree with you in the goal you seek, but I cannot agree with your methods of direct action"; who paternalistically believes he can set the timetable for another man's freedom; who lives by a mythical concept of time and who constantly advises the Negro to wait for a "more convenient season." Shallow understanding from people of good will is more frustrating than absolute misunderstanding from people of ill will. Lukewarm acceptance is much more bewildering than outright rejection.

I had hoped that the white moderate would understand that law and order exist for the purpose of establishing justice and that when they fail in this purpose they become the dangerously structured dams that block the flow of social progress. I had hoped that the white moderate would understand that the present tension in the South is a necessary phase of the transition from an obnoxious negative peace, in which the Negro passively accepted his unjust plight, to a substantive and positive peace, in which all men will respect the dignity and worth of human personality. Actually, we who engage in nonviolent direct action are not the creators of tension. We merely bring to the surface the hidden tension that is already alive. We bring it out in the open, where it can be seen and dealt with. Like a boil that can never be cured so long as it is covered up but must be opened with all its ugliness to the natural medicines of air and light, injustice must be exposed, with all the tension its exposure creates, to the light of human conscience and the air of national opinion before it can be cured.

In your statement you assert that our actions, even though peaceful, must be condemned because they precipitate violence. But is this a logical assertion? Isn't this like condemning a robbed man because his possession of money precipitated the evil act of robbery? Isn't this like condemning Socrates because his unswerving commitment to truth and his philosophical inquiries precipitated the act by the misguided populace in which they made him drink hemlock? Isn't this like condemning Jesus because his unique God consciousness and never ceasing devotion to God's will precipitated the evil act of crucifixion? We must come to see that, as the federal courts have consistently affirmed, it is wrong to urge an individual to cease his efforts to gain his basic constitutional rights because the quest may precipitate violence. Society must protect the robbed and punish the robber. I had also hoped that the white moderate would reject the myth concerning time in relation to the struggle for freedom. I have just received a letter from a white brother in Texas. He writes: "All Christians know that the colored people will receive equal rights eventually, but it is possible that you are in too great a religious hurry. It has taken Christianity almost two thousand years to accomplish what it has. The teachings of Christ take time to come to earth." Such an attitude stems from a tragic misconception of time, from the strangely irrational notion that there is something in the very flow of time that will inevitably cure all ills. Actually, time itself is neutral; it can be used either destructively or constructively. More and more I feel that the people of ill will have used time much more effectively than have the people of good will. We will have to repent in this generation not merely for the hateful words and actions of the bad people but for the appalling silence of the good people. Human progress never rolls in on wheels of inevitability; it comes through the tireless efforts of men willing to be co workers with God, and without this hard work, time itself becomes an ally of the forces of social stagnation. We must use time creatively, in the knowledge that the time is always ripe to do right. Now is the time to make real the promise of democracy and transform our pending national elegy into a creative psalm of brotherhood. Now is the time to lift our national policy from the quicksand of racial injustice to the solid rock of human dignity.

You speak of our activity in Birmingham as extreme. At first I was rather disappointed that fellow clergymen would see my nonviolent efforts as those of an extremist. I began thinking about the fact that I stand in the middle of two opposing forces in the Negro community. One is a force of complacency, made up in part of Negroes who, as a result of long years of oppression, are so drained of self respect and a sense of "somebodiness" that they have adjusted to segregation; and in part of a few middle-class Negroes who, because of a degree of academic and economic security and because in some ways they profit by segregation, have become insensitive to the problems of the masses. The other force is one of bitterness and hatred, and it comes perilously close to advocating violence. It is expressed in the various black nationalist groups that are springing up across the nation, the largest and best known being Elijah Muhammad's Muslim movement. Nourished by the Negro's frustration over the continued existence of racial discrimination, this movement is made up of people who have lost faith in America, who have absolutely repudiated Christianity, and who have concluded that the white man is an incorrigible "devil."

I have tried to stand between these two forces, saying that we need emulate neither the "do nothingism" of the complacent nor the hatred and despair of the black nationalist. For there is the more excellent way of love and nonviolent protest. I am grateful to God that, through the influence of the Negro church, the way of nonviolence became an integral part of our struggle. If this philosophy had not emerged, by now many streets of the South would, I am convinced, be flowing with blood. And I am further convinced that if our white brothers dismiss as "rabble rousers" and "outside agitators" those of us who employ nonviolent direct action, and if they refuse to support our nonviolent efforts, millions of Negroes will, out of frustration and despair, seek solace and security in black nationalist ideologies--a development that would inevitably lead to a frightening racial nightmare.

Oppressed people cannot remain oppressed forever. The yearning for freedom eventually manifests itself, and that is what has happened to the American Negro. Something within has reminded him of his birthright of freedom, and something without has reminded him that it can be gained. Consciously or unconsciously, he has been caught up by the Zeitgeist, and with his black brothers of Africa and his brown and yellow brothers of Asia, South America and the Caribbean, the United States Negro is moving with a sense of great urgency toward the promised land of racial justice. If one recognizes this vital urge that has engulfed the Negro community, one should readily understand why public demonstrations are taking place. The Negro has many pent up resentments and latent frustrations, and he must release them. So let him march; let him make prayer pilgrimages to the city hall; let him go on freedom rides -and try to understand why he must do so. If his repressed emotions are not released in nonviolent ways, they will seek expression through violence; this is not a threat but a fact of history. So I have not said to my people: "Get rid of your discontent." Rather, I have tried to say that this normal and healthy discontent can be channeled into the creative outlet of nonviolent direct action. And now this approach is being termed extremist. But though I was initially disappointed at being categorized as an extremist, as I continued to think about the matter I gradually gained a measure of satisfaction from the label. Was not Jesus an extremist for love: "Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you." Was not Amos an extremist for justice: "Let justice roll down like waters and righteousness like an ever flowing stream." Was not Paul an extremist for the Christian gospel: "I bear in my body the marks of the Lord Jesus." Was not Martin Luther an extremist: "Here I stand; I cannot do otherwise, so help me God." And John Bunyan: "I will stay in jail to the end of my days before I make a butchery of my conscience." And Abraham Lincoln: "This nation cannot survive half slave and half free." And Thomas Jefferson: "We hold these truths to be self evident, that all men are created equal . . ." So the question is not whether we will be extremists, but what kind of extremists we will be. Will we be extremists for hate or for love? Will we be extremists for the preservation of injustice or for the extension of justice? In that dramatic scene on Calvary's hill three men were crucified. We must never forget that all three were crucified for the same crime--the crime of extremism. Two were extremists for immorality, and thus fell below their environment. The other, Jesus Christ, was an extremist for love, truth and goodness, and thereby rose above his environment. Perhaps the South, the nation and the world are in dire need of creative extremists.

I had hoped that the white moderate would see this need. Perhaps I was too optimistic; perhaps I expected too much. I suppose I should have realized that few members of the oppressor race can understand the deep groans and passionate yearnings of the oppressed race, and still fewer have the vision to see that injustice must be rooted out by strong, persistent and determined action. I am thankful, however, that some of our white brothers in the South have grasped the meaning of this social revolution and committed themselves to it. They are still all too few in quantity, but they are big in quality. Some -such as Ralph McGill, Lillian Smith, Harry Golden, James McBride Dabbs, Ann Braden and Sarah Patton Boyle--have written about our struggle in eloquent and prophetic terms. Others have marched with us down nameless streets of the South. They have languished in filthy, roach infested jails, suffering the abuse and brutality of policemen who view them as "dirty nigger-lovers." Unlike so many of their moderate brothers and sisters, they have recognized the urgency of the moment and sensed the need for powerful "action" antidotes to combat the disease of segregation. Let me take note of my other major disappointment. I have been so greatly disappointed with the white church and its leadership. Of course, there are some notable exceptions. I am not unmindful of the fact that each of you has taken some significant stands on this issue. I commend you, Reverend Stallings, for your Christian stand on this past Sunday, in welcoming Negroes to your worship service on a nonsegregated basis. I commend the Catholic leaders of this state for integrating Spring Hill College several years ago.

But despite these notable exceptions, I must honestly reiterate that I have been disappointed with the church. I do not say this as one of those negative critics who can always find something wrong with the church. I say this as a minister of the gospel, who loves the church; who was nurtured in its bosom; who has been sustained by its spiritual blessings and who will remain true to it as long as the cord of life shall lengthen.

When I was suddenly catapulted into the leadership of the bus protest in Montgomery, Alabama, a few years ago, I felt we would be supported by the white church. I felt that the white ministers, priests and rabbis of the South would be among our strongest allies. Instead, some have been outright opponents, refusing to understand the freedom movement and misrepresenting its leaders; all too many others have been more cautious than courageous and have remained silent behind the anesthetizing security of stained glass windows.

In spite of my shattered dreams, I came to Birmingham with the hope that the white religious leadership of this community would see the justice of our cause and, with deep moral concern, would serve as the channel through which our just grievances could reach the power structure. I had hoped that each of you would understand. But again I have been disappointed.

I have heard numerous southern religious leaders admonish their worshipers to comply with a desegregation decision because it is the law, but I have longed to hear white ministers declare: "Follow this decree because integration is morally right and because the Negro is your brother." In the midst of blatant injustices inflicted upon the Negro, I have watched white churchmen stand on the sideline and mouth pious irrelevancies and sanctimonious trivialities. In the midst of a mighty struggle to rid our nation of racial and economic injustice, I have heard many ministers say: "Those are social issues, with which the gospel has no real concern." And I have watched many churches commit themselves to a completely other worldly religion which makes a strange, un-Biblical distinction between body and soul, between the sacred and the secular.

I have traveled the length and breadth of Alabama, Mississippi and all the other southern states. On sweltering summer days and crisp autumn mornings I have looked at the South's beautiful churches with their lofty spires pointing heavenward. I have beheld the impressive outlines of her massive religious education buildings. Over and over I have found myself asking: "What kind of people worship here? Who is their God? Where were their voices when the lips of Governor Barnett dripped with words of interposition and nullification? Where were they when Governor Wallace gave a clarion call for defiance and hatred? Where were their voices of support when bruised and weary Negro men and women decided to rise from the dark dungeons of complacency to the bright hills of creative protest?"

Yes, these questions are still in my mind. In deep disappointment I have wept over the laxity of the church. But be assured that my tears have been tears of love. There can be no deep disappointment where there is not deep love. Yes, I love the church. How could I do otherwise? I am in the rather unique position of being the son, the grandson and the great grandson of preachers. Yes, I see the church as the body of Christ. But, oh! How we have blemished and scarred that body through social neglect and through fear of being nonconformists.

There was a time when the church was very powerful--in the time when the early Christians rejoiced at being deemed worthy to suffer for what they believed. In those days the church was not merely a thermometer that recorded the ideas and principles of popular opinion; it was a thermostat that transformed the mores of society. Whenever the early Christians entered a town, the people in power became disturbed and immediately sought to convict the Christians for being "disturbers of the peace" and "outside agitators."' But the Christians pressed on, in the conviction that they were "a colony of heaven," called to obey God rather than man. Small in number, they were big in commitment. They were too God-intoxicated to be "astronomically intimidated." By their effort and example they brought an end to such ancient evils as infanticide and gladiatorial contests. Things are different now. So often the contemporary church is a weak, ineffectual voice with an uncertain sound. So often it is an archdefender of the status quo. Far from being disturbed by the presence of the church, the power structure of the average community is consoled by the church's silent--and often even vocal--sanction of things as they are.

But the judgment of God is upon the church as never before. If today's church does not recapture the sacrificial spirit of the early church, it will lose its authenticity, forfeit the loyalty of millions, and be dismissed as an irrelevant social club with no meaning for the twentieth century. Every day I meet young people whose disappointment with the church has turned into outright disgust.

Perhaps I have once again been too optimistic. Is organized religion too inextricably bound to the status quo to save our nation and the world? Perhaps I must turn my faith to the inner spiritual church, the church within the church, as the true ekklesia and the hope of the world. But again I am thankful to God that some noble souls from the ranks of organized religion have broken loose from the paralyzing chains of conformity and joined us as active partners in the struggle for freedom. They have left their secure congregations and walked the streets of Albany, Georgia, with us. They have gone down the highways of the South on tortuous rides for freedom. Yes, they have gone to jail with us. Some have been dismissed from their churches, have lost the support of their bishops and fellow ministers. But they have acted in the faith that right defeated is stronger than evil triumphant. Their witness has been the spiritual salt that has preserved the true meaning of the gospel in these troubled times. They have carved a tunnel of hope through the dark mountain of disappointment. I hope the church as a whole will meet the challenge of this decisive hour. But even if the church does not come to the aid of justice, I have no despair about the future. I have no fear about the outcome of our struggle in Birmingham, even if our motives are at present misunderstood. We will reach the goal of freedom in Birmingham and all over the nation, because the goal of America is freedom. Abused and scorned though we may be, our destiny is tied up with America's destiny. Before the pilgrims landed at Plymouth, we were here. Before the pen of Jefferson etched the majestic words of the Declaration of Independence across the pages of history, we were here. For more than two centuries our forebears labored in this country without wages; they made cotton king; they built the homes of their masters while suffering gross injustice and shameful humiliation -and yet out of a bottomless vitality they continued to thrive and develop. If the inexpressible cruelties of slavery could not stop us, the opposition we now face will surely fail. We will win our freedom because the sacred heritage of our nation and the eternal will of God are embodied in our echoing demands. Before closing I feel impelled to mention one other point in your statement that has troubled me profoundly. You warmly commended the Birmingham police force for keeping "order" and "preventing violence." I doubt that you would have so warmly commended the police force if you had seen its dogs sinking their teeth into unarmed, nonviolent Negroes. I doubt that you would so quickly commend the policemen if you were to observe their ugly and inhumane treatment of Negroes here in the city jail; if you were to watch them push and curse old Negro women and young Negro girls; if you were to see them slap and kick old Negro men and young boys; if you were to observe them, as they did on two occasions, refuse to give us food because we wanted to sing our grace together. I cannot join you in your praise of the Birmingham police department.

It is true that the police have exercised a degree of discipline in handling the demonstrators. In this sense they have conducted themselves rather "nonviolently" in public. But for what purpose? To preserve the evil system of segregation. Over the past few years I have consistently preached that nonviolence demands that the means we use must be as pure as the ends we seek. I have tried to make clear that it is wrong to use immoral means to attain moral ends. But now I must affirm that it is just as wrong, or perhaps even more so, to use moral means to preserve immoral ends. Perhaps Mr. Connor and his policemen have been rather nonviolent in public, as was Chief Pritchett in Albany, Georgia, but they have used the moral means of nonviolence to maintain the immoral end of racial injustice. As T. S. Eliot has said: "The last temptation is the greatest treason: To do the right deed for the wrong reason."

I wish you had commended the Negro sit inners and demonstrators of Birmingham for their sublime courage, their willingness to suffer and their amazing discipline in the midst of great provocation. One day the South will recognize its real heroes. They will be the James Merediths, with the noble sense of purpose that enables them to face jeering and hostile mobs, and with the agonizing loneliness that characterizes the life of the pioneer. They will be old, oppressed, battered Negro women, symbolized in a seventy two year old woman in Montgomery, Alabama, who rose up with a sense of dignity and with her people decided not to ride segregated buses, and who responded with ungrammatical profundity to one who inquired about her weariness: "My feets is tired, but my soul is at rest." They will be the young high school and college students, the young ministers of the gospel and a host of their elders, courageously and nonviolently sitting in at lunch counters and willingly going to jail for conscience' sake. One day the South will know that when these disinherited children of God sat down at lunch counters, they were in reality standing up for what is best in the American dream and for the most sacred values in our Judaeo Christian heritage, thereby bringing our nation back to those great wells of democracy which were dug deep by the founding fathers in their formulation of the Constitution and the Declaration of Independence.

Never before have I written so long a letter. I'm afraid it is much too long to take your precious time. I can assure you that it would have been much shorter if I had been writing from a comfortable desk, but what else can one do when he is alone in a narrow jail cell, other than write long letters, think long thoughts and pray long prayers?

If I have said anything in this letter that overstates the truth and indicates an unreasonable impatience, I beg you to forgive me. If I have said anything that understates the truth and indicates my having a patience that allows me to settle for anything less than brotherhood, I beg God to forgive me.

I hope this letter finds you strong in the faith. I also hope that circumstances will soon make it possible for me to meet each of you, not as an integrationist or a civil-rights leader but as a fellow clergyman and a Christian brother. Let us all hope that the dark clouds of racial prejudice will soon pass away and the deep fog of misunderstanding will be lifted from our fear drenched communities, and in some not too distant tomorrow the radiant stars of love and brotherhood will shine over our great nation with all their scintillating beauty.

Yours for the cause of Peace and Brotherhood, Martin Luther King, Jr.
Published in:
King, Martin Luther Jr. 

Thomas Sankara
Speech before the General Assembly of the United Nations

Delivered: In French, at the United Nations General Assembly, in New York City, on 4 October 1984.
Source of the translation into English: United Nations (1984), United Nations General Assembly Official Records, 20th Plenary Meeting, Thursday, 4 October 1984, at 10.40 a.m., New York, (A/39/PV.20), pp. 405-410.
This edition: Marxists Internet Archive, January 2019.

I bring the fraternal greetings of a country covering 274,000 square kilometres, where 7 million men, women and children refuse henceforth to die of ignorance, hunger and thirst, even though they are not yet able to have a real life, after a quarter of a century as a sovereign State represented here at the United Nations.

I come to this thirty-ninth session of the General Assembly to speak on behalf of a people which, on the land of its ancestors, has chosen from now on to assert itself and to take responsibility for its own history, in both its positive and negative aspects, without any complexes.

I come here, mandated by the National Council of the Revolution of Burkina Faso, to express the views of my people on the problems that have been included on the General Assembly's agenda, which form the tragic background of the events which are sadly undermining the foundations of the world late in this twentieth century. It is a world of chaos, in which the human race is tom apart by struggles between the great and the not-so-great, attacked by armed bands and subjected to violence and plunder. It is a world in which the nations, eluding international jurisdiction, command groups beyond the law, which, with gun in hand, live by preying on others and organizing the most despicable kinds of trafficking.

I do not intend to enunciate dogmas here. I am neither a messiah nor a prophet. I possess no truths. My only ambition is a twofold aspiration: first, to be able to speak in simple language, the language of facts and clarity, on behalf of my people, the people of Burkina Faso, and, secondly, to be able-to express in my own way the feelings or that mass of people who are disinherited--those who belong to that world maliciously dubbed "the third world"--and to state, even if I cannot make them understood, the reasons that have led us to rise up, all of which explains our interest in the United Nations, the demands of our rights drawing strength in the clear awareness of our duties.

Nobody will be surprised to hear us associate the former Upper Volta, now Burkina Faso, with that despised rag-bag, the third world, which the other worlds invented at the time of our independence in order better to ensure our intellectual, cultural, economic and political alienation. We want to fit in there without at all justifying this great swindle of history, still less accepting that we are a backward world left behind by the West. Rather, we do so to affirm our awareness of belonging to a three-continent whole and to state, as one of the non-aligned countries, our deeply felt conviction that a special solidarity unites the three continents of Asia, Latin America and Africa in the same battle against the same political traffickers and economic exploiters.

Thus to recognize our presence in the third world is, to paraphrase José Marti, to affirm that we feel on our cheek every blow struck against every other man in the world. So far, we have turned the other cheek. The slaps in the face have been redoubled and the evil-doers have felt no tenderness in their hearts. They have trampled on the truth of the just. They have betrayed the word of Christ. They have turned His cross into a club, and after putting on His robe they have tom our bodies and souls to shreds. They have obscured His message, making it a Western one, whereas we saw it as a message of universal liberation. Now our eyes have been opened to the class struggle and there will be no more blows dealt against us. It must be proclaimed that there will be no salvation for our peoples unless we turn our backs completely on all the models that all the charlatans of that type have tried to sell us for 20 years. There can be no salvation for us unless we reject those models; there can be no development without that break.

Now all the new "master minds" are awakening, roused by the dizzy increase of millions of men in rags and frightened by the threat to their digestion of this multitude hounded by hunger. They are beginning to change their tune and are again anxiously seeking among us miraculous ideas for new forms of development for our countries. In order to understand this it is necessary only to read the proceedings of innumerable colloquys and seminars.

I certainly do not wish to ridicule the patient effort of those honest intellectuals who, because they have t, ;s to see, have observed the terrible consequences of the ravages caused in the third world by the so-called development specialists.

I fear that the results of all the energies seized by the Prósperos of all kinds may be turned into a magic wand to be used to turn us back in to a world of slavery, dressed up according to the taste of our times. This fear is justified by the fact that the African petite bourgeoisie with its diplomas, if not that of the whole third world, is not ready--whether because of intellectual laziness or simply because it has sampled the Western way of life--to give up its privileges. It therefore forgets that all true political struggle requires a rigorous theoretical debate, and it refuses to do the thinking necessary in order to invent the new concepts needed to wage the kind of struggle to the death that is ahead of us. A passive and pathetic consumer group, it overflows with the "in" words of the West, just as it overflows with its whisky and champagne, in salons where there is a dubious kind of harmony. One will search in vain-- the concepts of Blackness or the African personality now being a little outdated--for truly new ideas from the brains of our so-called intellectual giants. Words and ideas come to us from elsewhere. Our professors, engineers and economists are content simply to add a little colouring, because they have brought from the European universities of which they are the products only their diplomas and the surface smoothness of adjectives and superlatives. It is urgently necessary that our qualified personnel and those who work with ideas learn that there is no innocent writing. In these tempestuous times, we cannot leave it to our enemies of the past and of the present to think and to imagine and to create. We also must do so.

Before it is too late--and it is already late--this élite, these men of Africa, of the third world, must come to their senses; in other words, they must turn to their own societies, they must look at this wretchedness that we have inherited, to understand that the battle for thought that will help the disinherited masses not only is not a vain one but can become credible at the international level. They must provide a faithful picture for their own peoples, a picture that will enable them to carry out profound changes in the social and political situation so that we can free ourselves from the foreign domination and exploitation that can lead our States only to failure.

This is something that we understood, we, the people of Burkina Faso, on that night of 4 August 1983, when the stars first began to shine in the heavens of our homeland. We had to take the lead of the peasant uprisings in the countryside, threatened by desertification, exhausted by hunger and thirst, and abandoned. We had to give some sense of meaning to the revolts of the unemployed urban masses, frustrated and tired of seeing the limousines of the alienated élite flash by following the head of State, who offered them only false solutions devised and conceived in the brains of others. We had to give an ideological soul to the just struggles of our masses mobilized against the monstrosity of imperialism. Instead of a minor, short-lived revolt, we had to have revolution, the eternal struggle against all domination. Others have noted this before me and yet others will say after me how broad the gap now is between the rich peoples and those that aspire only to have enough to eat, enough to drink, to survive and to defend their dignity, but nobody could believe how much of the food of our people has gone to feed the rich man's cow.

In the case of Upper Volta, the process was even more crystal clear. We demonstrated the essence of all the calamities that have crushed the so-called developing countries.

The truth about aid, represented as the panacea for all ills and often praised beyond all rhyme or reason, has been revealed. Very few countries have been so inundated with aid of all kinds as has mine.

Aid is supposed to help development, but one can look in vain in what used to be Upper Volta to see any sign of any kind of development. The people who were m power through either naivety or class selfishness could not or else did not want to gain control over this inflow from the outside or grasp the scope of it and use it in the interests of our people.

Analysing a table that was published in 1983 by the Sahel Club, Jacques Giri, in his book entitled The Sahel Tomorrow, concluded quite sensibly that aid to the Sahel, because of its content and because of the machinery in place, was only aid for survival. He emphasized that only 30 per cent of that aid would enable the Sahel simply to remain alive. According to Jacques Giri, this outside aid was designed only for the continued development of the unproductive sectors, imposing intolerable burdens on our small budgets, completely disrupting our countryside, creating deficits in our trade balance and, in fact, speeding up our indebtedness.

Here are just a few standard facts to describe what Upper Volta used to be like: 7 million inhabitants, with more than 6 million peasants; infant mortality at 180 per 1,000; life expectancy of 40 years; an illiteracy rate of 98 per cent, if literacy is considered to mean being able to read, write and speak a language; one doctor for 50,000 inhabitants; 16 per cent receiving schooling; and lastly, a gross domestic product of 53,356 CFA francs, that is, just over $100 per capita.

The diagnosis obviously was a very bad one. The source of the evil was political and so the only cure must be a political one.

Of course, we encourage aid that can help us to manage without aid, but in general the aid and assistance policies merely led us to become completely disorganized, to enslave ourselves, to shirk our responsibility in our economic, political and cultural areas..

We have chosen a different path to achieve better results. We have chosen to establish new techniques. We have chosen to seek forms of organization that are better adapted to our civilization, abruptly and once and for all rejecting all kinds of outside diktats, so that we can create the conditions for a dignity in keeping with our ambitions.

We refuse simple survival. We want to ease the pressures, to free our countryside from medieval stagnation or regression. We want to democratize our society, to open up our minds to a universe of collective responsibility, so that we may be bold enough to invent the future. We want to change the administration and reconstruct it with a different kind of civil servant. We want to get our army involved with the people in productive work and remind it constantly that, without patriotic training, a soldier is only a criminal with power. That is our political programme.

At the economic level, we are learning to live simply, to accept and to demand of ourselves the austerity that we need in order to carry out our great designs.

Thanks to the revolutionary solidarity fund, which is fed by voluntary contributions, we are now beginning to deal with the cruel questions posed by the drought. We support and have applied the principles of the Declaration of Alma-Ata/ expanding our primary health care. We endorse as a State policy the global strategy of GOBI FFF advocated by UNICEF.

We believe that through the United Nations Sudano-Sahelian Office, the United Nations should enable those countries affected by drought to establish a medium- and long-term plan to achieve selfsufficiency in food.

To prepare for the twenty-first century, we have begun, by creating a special tombola section, an immense campaign for the education and training of our children in a new school. The programme is called "Let's teach our children". Through committees to defend the revolution, we have established a vast house-building programme--500 units in three months--and we are also building roads, small water collectors, and so forth. Our economic ambition is to work to ensure that the use of the mind and the strength of each inhabitant of Burkina Faso will produce what is necessary to provide two meals a day and drinking-water.

We swear that in future in Burkina Faso nothing will be done without the participation of the people of Burkina Faso themselves, nothing that has not been decided by us, that has not been prepared by us. There shall be no more attacks on our honour and dignity.

Strengthened by this conviction, we want our words to cover all those who suffer, all those whose dignity has been crushed by a minority or a system.

Let me say to those who are listening to me now that I speak not only on behalf of Burkina Faso, my country which I love so much, but also on behalf of all those who suffer, wherever they may be.

I speak on behalf of those millions of human beings who are in ghettos because their skin is black, or because they have a different kind of culture, those whose status is hardly higher than that of an animal.

I suffer, too, on behalf of those Indians who have been massacred, trampled on and humiliated and who, for centuries, have been confined to reservations, so that they do not have any aspirations to any rights whatsoever, so that their culture cannot become enriched through contact with other cultures, including that of the invader.

I speak out on behalf of those who are unemployed because of a structurally unjust system which has now been completely disrupted, the unemployed who have been reduced to seeing their lives as only the reflection of the lives of those who have more than themselves.

I speak on behalf of women throughout the entire world who suffer from a system of exploitation imposed on them by men. As far as we are concerned, we are willing to welcome all suggestions from anywhere in the world that will help us to promote the full development and prosperity of the women of Burkina Faso. In return, we will share with all countries the positive experience we are now undertaking with our women, who are now involved at all levels of the State apparatus and social life in Burkina Faso, women who struggle and who say with us that the slave who will not shoulder responsibility to rebel does not deserve pity. That slave will alone be responsible for his own wretchedness if he has any illusions whatsoever about the suspect indulgence shown by a master who pretends to give him freedom. Only struggle helps us to become free, and we call on all our sisters of all races to rise up to regain their rights.

I speak on behalf of the mothers of our poor countries who see their children dying of malaria and diarrhoea, unaware that to save them there are simple methods available but which the science of the multinationals does not offer to them, preferring to invest in cosmetics laboratories and engage in cosmetic surgery to satisfy the whims and caprices of a few men and women who feel they have become too fat because of too many calories in the rich food they consume with regularity. That must make even members of this Assembly dizzy--not to mention the peoples of the Sahel. We have decided to adopt and popularize the methods that have been advocated by WHO and UNICEF.

I speak on behalf of the child, the child of the poor man, who is hungry and who furtively eyes the wealth piled up in the rich man's shop, a shop that is protected by a thick window, a window which is defended by an impassable grille, the grille guarded by a policeman in a helmet with gloves and a bludgeon, the policeman placed there by the father of another child, who comes there to serve himself or rather to be served because these are the guarantees of capitalistic representativeness and norms of the system.

I speak on behalf of the artists--poets, painters, sculptors, musicians, actors and so on--people of good will who see their art being prostituted by the show-business magicians.

I cry out on behalf of the journalists who have been reduced to silence or else to lies simply to avoid the hardships of unemployment.

I protest on behalf of the athletes of the entire world whose muscles are being exploited by political systems or by those who deal in the modern slavery of the stadium.

My country is the essence of all the miseries of peoples, a tragic synthesis of all the suffering of mankind but also, and above all, the synthesis of the hopes of our struggles. That is why I speak out on behalf of the sick who are anxiously looking to see what science can do for them--but that science has been taken over by the gun merchants. My thoughts go to all those who nave been affected by the destruction of nature, those 30 million who are dying every year, crushed by that most fearsome weapon, hunger.

As a soldier, I cannot forget that obedient soldier who does what he is told, whose finger is on the trigger and who knows that the bullet which is going to leave his gun will bring only a message of death.

Lastly, I speak out in indignation as I think of the Palestinians, whom this most inhuman humanity has replaced with another people, a people who only yesterday were themselves being martyred at leisure. I think of the valiant Palestinian people, the families which have been splintered and split up and are wandering throughout the world seeking asylum. Courageous, determined, stoic and tireless, the Palestinians remind us all of the need and moral obligation to respect the rights of a people. Along with their Jewish brothers, they are anti-Zionists.

Standing alongside my soldier brothers of Iran and Iraq, who are dying in a fratricidal and suicidal war, I wish also to feel close to my comrades of Nicaragua, whose ports are being mined, whose towns are being bombed and who, despite all, face up with courage and lucidity to their fate. I suffer with all those in Latin America who are suffering from imperialist domination.

I wish to stand side by side with the peoples of Afghanistan and Ireland, the peoples of Grenada and East Timor, each of those peoples seeking happiness in keeping with their dignity and the laws of their own culture.

I rise up on behalf of all who seek in vain any forum in the world to make their voices heard and to have themselves taken seriously.

Many have already spoken from this rostrum. Many will speak after me. But only a few will take the real decisions, although we are all officially considered equals. I speak on behalf of all those who seek in vain for a forum in the world where they can be heard. Yes, I wish to speak for all those--the forgotten--because I am a man and nothing that is human is alien to me.

Our revolution in Burkina Faso takes account of the ills of all peoples. We are also inspired by all the experiences of mankind, from the very first breath of the first human being.

We wish to enjoy the inheritance of all the revolutions of the world, all the liberation struggles of the third-world peoples. We are trying to learn from the great upheavals that have transformed the world. We have drawn the lessons of the American revolution, the lessons of its victory against colonial domination, and the consequences of that victory. We endorse the doctrine of non-interference by Europeans in American affairs and non-interference by Americans in European affairs. In 1823, Monroe said "America for the Americans". We would say "Africa for the Africans; Burkina Faso for the Burkinabe". The French revolution of 1789, which disrupted the foundations of absolutism, has taught us the rights of man linked to the rights of peoples to freedom. The great revolution of October 1917 transformed the world and made possible the victory of the proletariat, shook the foundations of capitalism and made possible the dreams of justice of the French Commune.

Open to all the wishes of the peoples and their revolutions, learning also from the terrible failures that have led to truly sad infringements of human rights, we want to preserve from each revolution only that essence of purity that prohibits us from becoming servants to the realities of others, even though in our thinking we find that there is a community of interests among us.

There must be no more deceit. The new international economic order, for which we are struggling and will continue to struggle, can be achieved only if we manage to do away with the old order, which completely ignores us, only if we insist on the place which is ours in the political organization of the world, only if we realize our importance in the world and obtain the right to decision-making with respect to the machinery governing trade, economic and monetary affairs at the world level.

The new international economic order is simply one among all the other rights of peoples--the right to independence, to the free choice of the form and structure of government, the right to development-- and like all the rights of peoples it is a right which can be gained only through the struggle of the peoples. It will never be obtained by any act of generosity by any Power whatsoever.

I continue to have unshakeable confidence--a confidence I share with the immense community of non-aligned countries--that, despite our peoples' battering-ram cries of distress, our group will preserve its cohesion, strengthen its power of collective negotiation, find allies among all nations, and begin, together with all who can still hear us, to organize a really new system of international economic relations.

I agreed to come to speak before the Assembly because, despite the criticism of certain major contributors, the United Nations remains the ideal forum for our demands, the place where the legitimacy of countries which have no voice is recognized. This was expressed very accurately by the Secretary- General, when he wrote:

"The United Nations reflects in a unique way the aspirations and frustrations of many nations and groups all over the world. One of its great merits is that all nations---including the weak, the oppressed and the victims of injustice"--that is, us--"can get a hearing and have a platform even in the face of the hard realities of power. A just cause, however frustrated or disregarded, can find a voice in the United Nations. This is not always a well- liked attribute of the Organization, but it is an essential one."

The meaning and scope of the Organization could not be better defined.

Therefore, it is absolutely essential for the good of each of us that the United Nations be strengthened and provided with the means to take action. That is why we endorse the Secretary-General's proposals to this end, to help the Organization break the many deadlocks which have been carefully preserved by the great Powers in order to discredit it in the eyes of the world.

Since I recognize the admittedly limited merits of the Organization, I cannot but rejoice to see new Members join us That is why the delegation of Burkina Faso welcomes the admission of the 159th Member of the United Nations, the State of Brunei Darussalam.

The folly of those who, by a quirk of fate, rule the world makes it imperative for the Movement of Non-Aligned Countries--which, I hope, the State of Brunei Darussalam will soon join--to consider as one of the permanent goals of its struggle the achievement of disarmament, which is an essential aspect of the principal conditions of our right to development.

In our view, there must be serious studies of all the factors which have led to the calamities which have befallen the world. In this connection, President Fidel Castro stated our view admirably at the opening of the Sixth Conference of Heads of State or Government of Non-Aligned Countries, held at Havana in September 1979, when he said:

"Three hundred billion dollars could build 600,000 schools, with a capacity for 400 million children; or 60 million comfortable homes, for 300 million people; or 30,000 hospitals, with 18 million beds; or 20,000 factories, with jobs for more than 20 million workers; or an irrigation system for 150 million hectares of land--that, with the application of technology, could feed a billion people."

If we multiply those numbers by 10--and I am sure that that is a conservative figure--we can see how much mankind wastes every year in the military field, that is, against peace.

It is easy to see why the indignation of the peoples is easily transformed into rebellion and revolution in the face of the crumbs tossed to them in the ignominious form of some aid, to which utterly humiliating conditions are sometimes attached. It can be understood why, in the fight for development, we consider ourselves to be tireless combatants for peace.

We swear to struggle to ease tension, to introduce the principles of civilized life into international relations and to extend these to all parts of the world. That means that we can no longer stand by passively and watch people haggle over concepts.

We reiterate our determination to work actively for peace; to take our place in the struggle for disarmament; to take action in the field of international politics as a decisive factor, free of all hindrance by any of the big Powers, whatever may be their designs.

But the quest for peace also involves the strict application of the right of countries to independence. On this point, the most pathetic--indeed, the most appalling--example is found in the Middle East, where, with arrogance, insolence and incredible stubbornness, a small country, Israel, has for more than 20 years, with the unspeakable complicity of its powerful protector, the United States, continued to defy the international community.

Only yesterday, Jews were consigned to the horrors of the crematorium, but Israel scorns history by inflicting on others the tortures it suffered.

In any event, Israel--whose people we love for its courage and sacrifices of the past--should realize that the conditions for its own tranquillity are not to be found in military strength financed from outside. Israel must begin to learn to be a nation like other nations, one among many.

For the present, we declare from this rostrum our militant, active solidarity with the fighters, both men and women, of the wonderful people of Palestine, for we know that there is no suffering that has no end.

Analysing the economic and political situation in Africa, we cannot fail to stress our serious concern at the dangerous challenges to the rights of peoples hurled by certain nations which, secure in their alliances, openly flout international morality.

We are naturally pleased at the decision to withdraw foreign troops from Chad so that the Chadian people themselves, without intermediaries, can find the way to put an end to that fratricidal war and finally be able to dry the tears that have been shed for so many years. But, despite the progress made here and there in the struggle of the African peoples for economic emancipation, our continent continues to reflect the essential reality of the contradictions between the big Powers and to be oppressed by the unbearable scourges of today's world.

That is why we cannot accept and must unreservedly condemn the treatment of the people of Western Sahara by the Kingdom of Morocco, which has been using delaying tactics to postpone the day of reckoning that will in any event be forced upon it by the will of the Saharan people. I have visited the regions liberated by the Saharan people, and I have

come to believe more firmly than ever that nothing will stop its progress towards the total liberation of its country under the militant and enlightened leadership of the Frente POLISARIO.

I do not wish to dwell too long on the question of Mayotte and the islands of the Malagasy archipelago; since the facts are clear and the principles obvious, there is no need to dwell on them. Mayotte belongs to the Comoros; the islands of the archipelago belong to Madagascar.

With regard to Latin America, we welcome the initiative of the Contadora Group as a positive step in the search for a just solution to the explosive situation in the region. Commander Daniel Ortega, speaking here [16th meeting] on behalf of the revolutionary people of Nicaragua, made concrete proposals and posed some basic, direct questions. We hope to see peace in his country and throughout Central America on and after 15 October; this is what world public opinion calls for.

Just as we condemned the foreign aggression against the island of Grenada, so we condemn all foreign intervention. Thus, we cannot remain silent about the foreign military intervention in Afghanistan.

And yet there is one point that is so serious that each of us must give a very open and clear explanation of it. That question, as members can imagine, is that of South Africa. The unbelievable insolence of that country with respect to all nations of the world--even those that support the terrorism which it has erected into a State system designed physically to liquidate the black majority of that country--and the contempt that it has shown for all our resolutions constitute one of the most serious and overwhelming concerns of the world today.

But the most tragic factor is not that South Africa has outlawed itself from the international community because of its apartheid laws, not even that it continues to occupy Namibia illegally and keep it under its colonialist and racist boot or that it continues with impugnity to subject its neighbours to the laws of banditry. No, what is the most abject and the most humiliating for the human conscience is that it has made this tragedy a matter of everyday reality for millions of human beings, who have only their own body and the heroism or their bare hands to defend themselves. Sure of the complicity of the big Powers and the active support of certain among them, as well as of the criminal collaboration of some pathetic African leaders, the white minority simply ignores the feelings of all those people, everywhere in the world, who find the savage methods of that country to be absolutely intolerable.

There was a time when international brigades went to defend the honour of nations that suffered aggression. Today, despite the agonizing open wounds that are suffered, all we do is vote for resolutions that do nothing more than call on a nation of pirates, which "destroys a smile as hail kills flowers", to mend its ways.

We shall soon be celebrating the one-hundred- and-fiftieth anniversary of the emancipation of slaves in the British Empire. My delegation supports the proposal of Antigua and Barbuda for the commemoration of that event, which is of very great importance to African countries and the black world. For us, all that can be said throughout the world during the commemorative ceremonies must emphasize the terrible cost paid by Africa and the black world in the development of civilization. Nothing was given us in return, which no doubt explains the tragedy on our continent today. It is our blood that nourished the rise of capitalism, that made possible our present condition of dependence and consolidated our underdevelopment. But we cannot hide the truth any more; it cannot be ignored. The figures cannot be simply haggled away. For every black man who came to the plantations, five died or were crippled. And here I do not mention the disorganization of the continent and its consequences.

While the entire world, thanks to you, Mr. President, with the help of the Secretary-General, will be commemorating that anniversary and noting this truth, it will understand why we long for peace among nations and why we demand our right to development with absolute equality through the organization and distribution of human resources. It is because we belong to one of the races that has suffered the most that we in Burkina Faso have sworn that we shall never accept any splitting up of our country or any denial of justice. It is the memory of that suffering that causes us to stand side by side with the Palestine Liberation Organization [PLO] against the armed bands of Israel. It is the memory of that suffering which, on the one hand, causes us to support the African National Congress of South Africa [ANC] and the South West Africa People's Organization [SWAPO] and, on the other, makes absolutely intolerable the presence in South Africa of men who say they are white and feel entitled on that account to set the whole world on fire. It is that memory of suffering that makes us put all our faith in the United Nations, with the common responsibility, the common task and the common hopes of us all.

We demand that throughout the world the campaign to free Nelson Mandela be intensified so that his presence here at the next session of the General Assembly will be a victory of collective pride. In memory of our suffering and as a collective pardon, an international humanitarian prize should be given for all those who have contributed to the defence of human rights through their work and research. We call for cutting all budgets for space research by one ten-thousandth and devoting that amount to research in the field of health and to improving the human environment which has been disrupted by those "fireworks" which are harmful to the ecosystem.

We also propose that the structures of the United Nations be reviewed and revised so that an end may be put to the scandal of the right of veto. The perverse effects of its abuse have, of course, been offset by the vigilance of some States that possess the veto right. However, nothing can justify that right--neither the size of the country nor its wealth.

If the argument used to justify that inequity has been the cost paid during the Second World War, then those nations that have arrogated those rights to themselves should know that each of us has an uncle or a father who--like thousands of other innocent people recruited from the third world to defend the rights that had been flouted by the Hitlerite hordes-- also suffered and died from Nazi bullets. Therefore, let those major Powers, which miss no opportunity to question the right of peoples, not be so arrogant. The absence of Africa from the club of those that have the right of veto is an injustice which must be ended.

Lastly, my delegation would be failing in its duty if it did not call for the suspension of Israel and the pure and simple exclusion of South Africa from the United Nations. When, in the course of time, those countries have done what they must do to justify their presence in the international community, then we would be only too happy to welcome them here and to guide their first steps.

We should like to reconfirm our confidence in the United Nations. We are grateful for the work which its agencies have done in Burkina Faso and for their presence side by side with us in the difficult times in which we are living. We are grateful to the members of the Security Council for having allowed us twice this year to preside over the work of the Council. We only hope the Council will recognize the principle of the struggle against the extermination of 30 million human beings each year through hunger, which today is more devastating than nuclear weapons.

Our confidence and faith in the United Nations leads me to thank the Secretary-General for his visit, which we greatly appreciated; he came to see for himself the harsh reality of our life and to get a true picture of the aridity or the Sahel and the tragedy of desertification.

I cannot conclude without paying a tribute to the President of the General Assembly, who, with his great intelligence and perception, will guide the work of this thirty-ninth session.

I have travelled many thousands of kilometres to be here. I have come to ask each member to work together to put an end to the contempt of those who are unreasonable, to eliminate the tragic spectacle of children dying of hunger, to do away with ignorance, to ensure the triumph of the legitimate rebellion of peoples and to put an end to the use of weapons so that they can be laid down and fall silent, and to ensure that mankind will survive and that together, with the great poet Novalis we can all sing together:

"Soon the stars will come back to the Earth where they have long been gone; soon the sun will return, the star will shine again among the stars, all the races of the world will gather together again after a long separation, the old orphaned families will find one another again and every day there will be new discoveries, more people will embrace one another; then the inhabitants of the old days will come back to the Earth, the ashes will be relit in each tomb, the flame of life will bum again, the old houses will be rebuilt, the old times will come again and history will be the dream of the present extended to infinity."

Down with international reaction! Down with imperialism! Down with neo-colonialism! Down with "puppetism"!

Eternal glory to the peoples who are struggling for their freedom! Eternal glory to the peoples who stand shoulder to shoulder to defend their dignity! Eternal victory to the peoples of Africa, Latin America and Asia in their struggle!

Fatherland or death: we shall triumph.

LADY MACBETH.
LADY MACDUFF.
Gentlewoman attending on Lady Macbeth.
HECATE, and three Witches.

Lords, Gentlemen, Officers, Soldiers, Murderers, Attendants and Messengers.

The Ghost of Banquo and several other Apparitions.
SCENE: In the end of the Fourth Act, in England; through the rest of the Play, in Scotland; and chiefly at Macbeth’s Castle.
ACT I
SCENE I. An open Place.

Thunder and Lightning. Enter three Witches.

FIRST WITCH.
When shall we three meet again?
In thunder, lightning, or in rain?

SECOND WITCH.
When the hurlyburly’s done,
When the battle’s lost and won.

THIRD WITCH.
That will be ere the set of sun.

FIRST WITCH.
Where the place?

SECOND WITCH.
Upon the heath.

THIRD WITCH.
There to meet with Macbeth.

FIRST WITCH.
I come, Graymalkin!

SECOND WITCH.
Paddock calls.

THIRD WITCH.
Anon.

ALL.
Fair is foul, and foul is fair:
Hover through the fog and filthy air.

[Exeunt.]
SCENE II. A Camp near Forres.

Alarum within. Enter King Duncan, Malcolm, Donalbain, Lennox, with Attendants, meeting a bleeding Captain.

DUNCAN.
What bloody man is that? He can report,
As seemeth by his plight, of the revolt
The newest state.

MALCOLM.
This is the sergeant
Who, like a good and hardy soldier, fought
’Gainst my captivity.—Hail, brave friend!
Say to the King the knowledge of the broil
As thou didst leave it.

SOLDIER.
Doubtful it stood;
As two spent swimmers that do cling together
And choke their art. The merciless Macdonwald
(Worthy to be a rebel, for to that
The multiplying villainies of nature
Do swarm upon him) from the Western Isles
Of kerns and gallowglasses is supplied;
And Fortune, on his damned quarrel smiling,
Show’d like a rebel’s whore. But all’s too weak;
For brave Macbeth (well he deserves that name),
Disdaining Fortune, with his brandish’d steel,
Which smok’d with bloody execution,
Like Valour’s minion, carv’d out his passage,
Till he fac’d the slave;
Which ne’er shook hands, nor bade farewell to him,
Till he unseam’d him from the nave to the chops,
And fix’d his head upon our battlements.

DUNCAN.
O valiant cousin! worthy gentleman!

SOLDIER.
As whence the sun ’gins his reflection
Shipwracking storms and direful thunders break,
So from that spring, whence comfort seem’d to come
Discomfort swells. Mark, King of Scotland, mark:
No sooner justice had, with valour arm’d,
Compell’d these skipping kerns to trust their heels,
But the Norweyan lord, surveying vantage,
With furbish’d arms and new supplies of men,
Began a fresh assault.

DUNCAN.
Dismay’d not this
Our captains, Macbeth and Banquo?

SOLDIER.
Yes;
As sparrows eagles, or the hare the lion.
If I say sooth, I must report they were
As cannons overcharg’d with double cracks;
So they
Doubly redoubled strokes upon the foe:
Except they meant to bathe in reeking wounds,
Or memorize another Golgotha,
I cannot tell—
But I am faint, my gashes cry for help.

DUNCAN.
So well thy words become thee as thy wounds:
They smack of honour both.—Go, get him surgeons.

[Exit Captain, attended.]

Enter Ross and Angus.

Who comes here?

MALCOLM.
The worthy Thane of Ross.

LENNOX.
What a haste looks through his eyes! So should he look
That seems to speak things strange.

ROSS.
God save the King!

DUNCAN.
Whence cam’st thou, worthy thane?

ROSS.
From Fife, great King,
Where the Norweyan banners flout the sky
And fan our people cold.
Norway himself, with terrible numbers,
Assisted by that most disloyal traitor,
The Thane of Cawdor, began a dismal conflict;
Till that Bellona’s bridegroom, lapp’d in proof,
Confronted him with self-comparisons,
Point against point, rebellious arm ’gainst arm,
Curbing his lavish spirit: and, to conclude,
The victory fell on us.

DUNCAN.
Great happiness!

ROSS.
That now
Sweno, the Norways’ king, craves composition;
Nor would we deign him burial of his men
Till he disbursed at Saint Colme’s Inch
Ten thousand dollars to our general use.

DUNCAN.
No more that Thane of Cawdor shall deceive
Our bosom interest. Go pronounce his present death,
And with his former title greet Macbeth.

ROSS.
I’ll see it done.

DUNCAN.
What he hath lost, noble Macbeth hath won.

[Exeunt.]
SCENE III. A heath.

Thunder. Enter the three Witches.

FIRST WITCH.
Where hast thou been, sister?

SECOND WITCH.
Killing swine.

THIRD WITCH.
Sister, where thou?

FIRST WITCH.
A sailor’s wife had chestnuts in her lap,
And mounch’d, and mounch’d, and mounch’d. “Give me,” quoth I.
“Aroint thee, witch!” the rump-fed ronyon cries.
Her husband’s to Aleppo gone, master o’ th’ Tiger:
But in a sieve I’ll thither sail,
And, like a rat without a tail,
I’ll do, I’ll do, and I’ll do.

SECOND WITCH.
I’ll give thee a wind.

FIRST WITCH.
Th’art kind.

THIRD WITCH.
And I another.

FIRST WITCH.
I myself have all the other,
And the very ports they blow,
All the quarters that they know
I’ the shipman’s card.
I will drain him dry as hay:
Sleep shall neither night nor day
Hang upon his pent-house lid;
He shall live a man forbid.
Weary sev’n-nights nine times nine,
Shall he dwindle, peak, and pine:
Though his bark cannot be lost,
Yet it shall be tempest-tost.
Look what I have.

ALL.
The Weird Sisters, hand in hand,
Posters of the sea and land,
Thus do go about, about:
Thrice to thine, and thrice to mine,
And thrice again, to make up nine.
Peace!—the charm’s wound up.

MACBETH.
So foul and fair a day I have not seen.

BANQUO.
How far is’t call’d to Forres?—What are these,
So wither’d, and so wild in their attire,
That look not like the inhabitants o’ th’ earth,
And yet are on’t?—Live you? or are you aught
That man may question? You seem to understand me,
By each at once her choppy finger laying
Upon her skinny lips. You should be women,
And yet your beards forbid me to interpret
That you are so.

THIRD WITCH.
All hail, Macbeth! that shalt be king hereafter!

BANQUO.
Good sir, why do you start and seem to fear
Things that do sound so fair?—I’ th’ name of truth,
Are ye fantastical, or that indeed
Which outwardly ye show? My noble partner
You greet with present grace and great prediction
Of noble having and of royal hope,
That he seems rapt withal. To me you speak not.
If you can look into the seeds of time,
And say which grain will grow, and which will not,
Speak then to me, who neither beg nor fear
Your favours nor your hate.

FIRST WITCH.
Hail!

SECOND WITCH.
Hail!

THIRD WITCH.
Hail!

FIRST WITCH.
Lesser than Macbeth, and greater.

SECOND WITCH.
Not so happy, yet much happier.

THIRD WITCH.
Thou shalt get kings, though thou be none:
So all hail, Macbeth and Banquo!

FIRST WITCH.
Banquo and Macbeth, all hail!

MACBETH.
Stay, you imperfect speakers, tell me more.
By Sinel’s death I know I am Thane of Glamis;
But how of Cawdor? The Thane of Cawdor lives,
A prosperous gentleman; and to be king
Stands not within the prospect of belief,
No more than to be Cawdor. Say from whence
You owe this strange intelligence? or why
Upon this blasted heath you stop our way
With such prophetic greeting?—Speak, I charge you.

[Witches vanish.]

BANQUO.
The earth hath bubbles, as the water has,
And these are of them. Whither are they vanish’d?

MACBETH.
Into the air; and what seem’d corporal,
Melted as breath into the wind.
Would they had stay’d!

BANQUO.
Were such things here as we do speak about?
Or have we eaten on the insane root
That takes the reason prisoner?

MACBETH.
Your children shall be kings.

BANQUO.
You shall be king.

MACBETH.
And Thane of Cawdor too; went it not so?

BANQUO.
To the selfsame tune and words. Who’s here?

Enter Ross and Angus.

ROSS.
The King hath happily receiv’d, Macbeth,
The news of thy success, and when he reads
Thy personal venture in the rebels’ fight,
His wonders and his praises do contend
Which should be thine or his: silenc’d with that,
In viewing o’er the rest o’ th’ selfsame day,
He finds thee in the stout Norweyan ranks,
Nothing afeard of what thyself didst make,
Strange images of death. As thick as tale
Came post with post; and everyone did bear
Thy praises in his kingdom’s great defence,
And pour’d them down before him.

ANGUS.
We are sent
To give thee from our royal master thanks;
Only to herald thee into his sight,
Not pay thee.

ROSS.
And, for an earnest of a greater honour,
He bade me, from him, call thee Thane of Cawdor:
In which addition, hail, most worthy thane,
For it is thine.

BANQUO.
What, can the devil speak true?

MACBETH.
The Thane of Cawdor lives: why do you dress me
In borrow’d robes?

ANGUS.
Who was the Thane lives yet,
But under heavy judgement bears that life
Which he deserves to lose. Whether he was combin’d
With those of Norway, or did line the rebel
With hidden help and vantage, or that with both
He labour’d in his country’s wrack, I know not;
But treasons capital, confess’d and prov’d,
Have overthrown him.

MACBETH.
[Aside.] Glamis, and Thane of Cawdor:
The greatest is behind. [To Ross and Angus.] Thanks for your pains.
[To Banquo.] Do you not hope your children shall be kings,
When those that gave the Thane of Cawdor to me
Promis’d no less to them?

BANQUO.
That, trusted home,
Might yet enkindle you unto the crown,
Besides the Thane of Cawdor. But ’tis strange:
And oftentimes to win us to our harm,
The instruments of darkness tell us truths;
Win us with honest trifles, to betray’s
In deepest consequence.—
Cousins, a word, I pray you.

MACBETH.
[Aside.] Two truths are told,
As happy prologues to the swelling act
Of the imperial theme.—I thank you, gentlemen.—
[Aside.] This supernatural soliciting
Cannot be ill; cannot be good. If ill,
Why hath it given me earnest of success,
Commencing in a truth? I am Thane of Cawdor:
If good, why do I yield to that suggestion
Whose horrid image doth unfix my hair,
And make my seated heart knock at my ribs,
Against the use of nature? Present fears
Are less than horrible imaginings.
My thought, whose murder yet is but fantastical,
Shakes so my single state of man
That function is smother’d in surmise,
And nothing is but what is not.

BANQUO.
Look, how our partner’s rapt.

MACBETH.
[Aside.] If chance will have me king, why, chance may crown me
Without my stir.

BANQUO.
New honours come upon him,
Like our strange garments, cleave not to their mould
But with the aid of use.

MACBETH.
[Aside.] Come what come may,
Time and the hour runs through the roughest day.

BANQUO.
Worthy Macbeth, we stay upon your leisure.

MACBETH.
Give me your favour. My dull brain was wrought
With things forgotten. Kind gentlemen, your pains
Are register’d where every day I turn
The leaf to read them.—Let us toward the King.—
Think upon what hath chanc’d; and at more time,
The interim having weigh’d it, let us speak
Our free hearts each to other.

BANQUO.
Very gladly.

MACBETH.
Till then, enough.—Come, friends.

[Exeunt.]
SCENE IV. Forres. A Room in the Palace.

Flourish. Enter Duncan, Malcolm, Donalbain, Lennox and Attendants.

DUNCAN.
Is execution done on Cawdor? Are not
Those in commission yet return’d?

MALCOLM.
My liege,
They are not yet come back. But I have spoke
With one that saw him die, who did report,
That very frankly he confess’d his treasons,
Implor’d your Highness’ pardon, and set forth
A deep repentance. Nothing in his life
Became him like the leaving it; he died
As one that had been studied in his death,
To throw away the dearest thing he ow’d
As ’twere a careless trifle.

DUNCAN.
There’s no art
To find the mind’s construction in the face:
He was a gentleman on whom I built
An absolute trust.

Enter Macbeth, Banquo, Ross and Angus.

O worthiest cousin!
The sin of my ingratitude even now
Was heavy on me. Thou art so far before,
That swiftest wing of recompense is slow
To overtake thee. Would thou hadst less deserv’d;
That the proportion both of thanks and payment
Might have been mine! only I have left to say,
More is thy due than more than all can pay.

MACBETH.
The service and the loyalty I owe,
In doing it, pays itself. Your Highness’ part
Is to receive our duties: and our duties
Are to your throne and state, children and servants;
Which do but what they should, by doing everything
Safe toward your love and honour.

DUNCAN.
Welcome hither:
I have begun to plant thee, and will labour
To make thee full of growing.—Noble Banquo,
That hast no less deserv’d, nor must be known
No less to have done so, let me infold thee
And hold thee to my heart.

BANQUO.
There if I grow,
The harvest is your own.

DUNCAN.
My plenteous joys,
Wanton in fulness, seek to hide themselves
In drops of sorrow.—Sons, kinsmen, thanes,
And you whose places are the nearest, know,
We will establish our estate upon
Our eldest, Malcolm; whom we name hereafter
The Prince of Cumberland: which honour must
Not unaccompanied invest him only,
But signs of nobleness, like stars, shall shine
On all deservers.—From hence to Inverness,
And bind us further to you.

MACBETH.
The rest is labour, which is not us’d for you:
I’ll be myself the harbinger, and make joyful
The hearing of my wife with your approach;
So, humbly take my leave.

DUNCAN.
My worthy Cawdor!

MACBETH.
[Aside.] The Prince of Cumberland!—That is a step
On which I must fall down, or else o’erleap,
For in my way it lies. Stars, hide your fires!
Let not light see my black and deep desires.
The eye wink at the hand, yet let that be,
Which the eye fears, when it is done, to see.

LADY MACBETH.
“They met me in the day of success; and I have learned by the perfect’st report they have more in them than mortal knowledge. When I burned in desire to question them further, they made themselves air, into which they vanished. Whiles I stood rapt in the wonder of it, came missives from the King, who all-hailed me, ‘Thane of Cawdor’; by which title, before, these Weird Sisters saluted me, and referred me to the coming on of time, with ‘Hail, king that shalt be!’ This have I thought good to deliver thee (my dearest partner of greatness) that thou might’st not lose the dues of rejoicing, by being ignorant of what greatness is promis’d thee. Lay it to thy heart, and farewell.”

Glamis thou art, and Cawdor; and shalt be
What thou art promis’d. Yet do I fear thy nature;
It is too full o’ th’ milk of human kindness
To catch the nearest way. Thou wouldst be great;
Art not without ambition, but without
The illness should attend it. What thou wouldst highly,
That wouldst thou holily; wouldst not play false,
And yet wouldst wrongly win. Thou’dst have, great Glamis,
That which cries, “Thus thou must do,” if thou have it;
And that which rather thou dost fear to do,
Than wishest should be undone. Hie thee hither,
That I may pour my spirits in thine ear,
And chastise with the valour of my tongue
All that impedes thee from the golden round,
Which fate and metaphysical aid doth seem
To have thee crown’d withal.

Enter a Messenger.

What is your tidings?

MESSENGER.
The King comes here tonight.

LADY MACBETH.
Thou’rt mad to say it.
Is not thy master with him? who, were’t so,
Would have inform’d for preparation.

MESSENGER.
So please you, it is true. Our thane is coming.
One of my fellows had the speed of him,
Who, almost dead for breath, had scarcely more
Than would make up his message.

LADY MACBETH.
Give him tending.
He brings great news.

[Exit Messenger.]

The raven himself is hoarse
That croaks the fatal entrance of Duncan
Under my battlements. Come, you spirits
That tend on mortal thoughts, unsex me here,
And fill me, from the crown to the toe, top-full
Of direst cruelty! make thick my blood,
Stop up th’ access and passage to remorse,
That no compunctious visitings of nature
Shake my fell purpose, nor keep peace between
Th’ effect and it! Come to my woman’s breasts,
And take my milk for gall, your murd’ring ministers,
Wherever in your sightless substances
You wait on nature’s mischief! Come, thick night,
And pall thee in the dunnest smoke of hell
That my keen knife see not the wound it makes,
Nor heaven peep through the blanket of the dark
To cry, “Hold, hold!”

Enter Macbeth.

Great Glamis, worthy Cawdor!
Greater than both, by the all-hail hereafter!
Thy letters have transported me beyond
This ignorant present, and I feel now
The future in the instant.

MACBETH.
My dearest love,
Duncan comes here tonight.

LADY MACBETH.
And when goes hence?

MACBETH.
Tomorrow, as he purposes.

LADY MACBETH.
O, never
Shall sun that morrow see!
Your face, my thane, is as a book where men
May read strange matters. To beguile the time,
Look like the time; bear welcome in your eye,
Your hand, your tongue: look like the innocent flower,
But be the serpent under’t. He that’s coming
Must be provided for; and you shall put
This night’s great business into my dispatch;
Which shall to all our nights and days to come
Give solely sovereign sway and masterdom.

MACBETH.
We will speak further.

LADY MACBETH.
Only look up clear;
To alter favour ever is to fear.
Leave all the rest to me.

[Exeunt.]
SCENE VI. The same. Before the Castle.

Hautboys. Servants of Macbeth attending.

Enter Duncan, Malcolm, Donalbain, Banquo, Lennox, Macduff, Ross, Angus and Attendants.

DUNCAN.
This castle hath a pleasant seat. The air
Nimbly and sweetly recommends itself
Unto our gentle senses.

BANQUO.
This guest of summer,
The temple-haunting martlet, does approve,
By his loved mansionry, that the heaven’s breath
Smells wooingly here: no jutty, frieze,
Buttress, nor coign of vantage, but this bird
hath made his pendant bed and procreant cradle.
Where they most breed and haunt, I have observ’d
The air is delicate.

Enter Lady Macbeth.

DUNCAN.
See, see, our honour’d hostess!—
The love that follows us sometime is our trouble,
Which still we thank as love. Herein I teach you
How you shall bid God ’ild us for your pains,
And thank us for your trouble.

LADY MACBETH.
All our service,
In every point twice done, and then done double,
Were poor and single business to contend
Against those honours deep and broad wherewith
Your Majesty loads our house: for those of old,
And the late dignities heap’d up to them,
We rest your hermits.

DUNCAN.
Where’s the Thane of Cawdor?
We cours’d him at the heels, and had a purpose
To be his purveyor: but he rides well;
And his great love, sharp as his spur, hath holp him
To his home before us. Fair and noble hostess,
We are your guest tonight.

LADY MACBETH.
Your servants ever
Have theirs, themselves, and what is theirs, in compt,
To make their audit at your Highness’ pleasure,
Still to return your own.

DUNCAN.
Give me your hand;
Conduct me to mine host: we love him highly,
And shall continue our graces towards him.
By your leave, hostess.

[Exeunt.]
SCENE VII. The same. A Lobby in the Castle.

Hautboys and torches. Enter, and pass over, a Sewer and divers Servants with dishes and service. Then enter Macbeth.

MACBETH.
If it were done when ’tis done, then ’twere well
It were done quickly. If th’ assassination
Could trammel up the consequence, and catch
With his surcease success; that but this blow
Might be the be-all and the end-all—here,
But here, upon this bank and shoal of time,
We’d jump the life to come. But in these cases
We still have judgement here; that we but teach
Bloody instructions, which being taught, return
To plague th’ inventor. This even-handed justice
Commends th’ ingredience of our poison’d chalice
To our own lips. He’s here in double trust:
First, as I am his kinsman and his subject,
Strong both against the deed; then, as his host,
Who should against his murderer shut the door,
Not bear the knife myself. Besides, this Duncan
Hath borne his faculties so meek, hath been
So clear in his great office, that his virtues
Will plead like angels, trumpet-tongued, against
The deep damnation of his taking-off;
And pity, like a naked new-born babe,
Striding the blast, or heaven’s cherubin, hors’d
Upon the sightless couriers of the air,
Shall blow the horrid deed in every eye,
That tears shall drown the wind.—I have no spur
To prick the sides of my intent, but only
Vaulting ambition, which o’erleaps itself
And falls on th’ other—

Enter Lady Macbeth.

How now! what news?

LADY MACBETH.
He has almost supp’d. Why have you left the chamber?

MACBETH.
Hath he ask’d for me?

LADY MACBETH.
Know you not he has?

MACBETH.
We will proceed no further in this business:
He hath honour’d me of late; and I have bought
Golden opinions from all sorts of people,
Which would be worn now in their newest gloss,
Not cast aside so soon.

LADY MACBETH.
Was the hope drunk
Wherein you dress’d yourself? Hath it slept since?
And wakes it now, to look so green and pale
At what it did so freely? From this time
Such I account thy love. Art thou afeard
To be the same in thine own act and valour
As thou art in desire? Wouldst thou have that
Which thou esteem’st the ornament of life,
And live a coward in thine own esteem,
Letting “I dare not” wait upon “I would,”
Like the poor cat i’ th’ adage?

MACBETH.
Pr’ythee, peace!
I dare do all that may become a man;
Who dares do more is none.

LADY MACBETH.
What beast was’t, then,
That made you break this enterprise to me?
When you durst do it, then you were a man;
And, to be more than what you were, you would
Be so much more the man. Nor time nor place
Did then adhere, and yet you would make both:
They have made themselves, and that their fitness now
Does unmake you. I have given suck, and know
How tender ’tis to love the babe that milks me:
I would, while it was smiling in my face,
Have pluck’d my nipple from his boneless gums
And dash’d the brains out, had I so sworn as you
Have done to this.

MACBETH.
If we should fail?

LADY MACBETH.
We fail?
But screw your courage to the sticking-place,
And we’ll not fail. When Duncan is asleep
(Whereto the rather shall his day’s hard journey
Soundly invite him), his two chamberlains
Will I with wine and wassail so convince
That memory, the warder of the brain,
Shall be a fume, and the receipt of reason
A limbeck only: when in swinish sleep
Their drenched natures lie as in a death,
What cannot you and I perform upon
Th’ unguarded Duncan? what not put upon
His spongy officers; who shall bear the guilt
Of our great quell?

MACBETH.
Bring forth men-children only;
For thy undaunted mettle should compose
Nothing but males. Will it not be receiv’d,
When we have mark’d with blood those sleepy two
Of his own chamber, and us’d their very daggers,
That they have done’t?

LADY MACBETH.
Who dares receive it other,
As we shall make our griefs and clamour roar
Upon his death?

MACBETH.
I am settled, and bend up
Each corporal agent to this terrible feat.
Away, and mock the time with fairest show:
False face must hide what the false heart doth know.

[Exeunt.]
ACT II
SCENE I. Inverness. Court within the Castle.

Enter Banquo and Fleance with a torch before him.

BANQUO.
How goes the night, boy?

FLEANCE.
The moon is down; I have not heard the clock.

BANQUO.
And she goes down at twelve.

FLEANCE.
I take’t, ’tis later, sir.

BANQUO.
Hold, take my sword.—There’s husbandry in heaven;
Their candles are all out. Take thee that too.
A heavy summons lies like lead upon me,
And yet I would not sleep. Merciful powers,
Restrain in me the cursed thoughts that nature
Gives way to in repose!

Enter Macbeth and a Servant with a torch.

Give me my sword.—Who’s there?

MACBETH.
A friend.

BANQUO.
What, sir, not yet at rest? The King’s abed:
He hath been in unusual pleasure and
Sent forth great largess to your offices.
This diamond he greets your wife withal,
By the name of most kind hostess, and shut up
In measureless content.

MACBETH.
Being unprepar’d,
Our will became the servant to defect,
Which else should free have wrought.

BANQUO.
All’s well.
I dreamt last night of the three Weird Sisters:
To you they have show’d some truth.

MACBETH.
I think not of them:
Yet, when we can entreat an hour to serve,
We would spend it in some words upon that business,
If you would grant the time.

BANQUO.
At your kind’st leisure.

MACBETH.
If you shall cleave to my consent, when ’tis,
It shall make honour for you.

BANQUO.
So I lose none
In seeking to augment it, but still keep
My bosom franchis’d, and allegiance clear,
I shall be counsell’d.

MACBETH.
Good repose the while!

BANQUO.
Thanks, sir: the like to you.

[Exeunt Banquo and Fleance.]

MACBETH.
Go bid thy mistress, when my drink is ready,
She strike upon the bell. Get thee to bed.

[Exit Servant.]

Is this a dagger which I see before me,
The handle toward my hand? Come, let me clutch thee:—
I have thee not, and yet I see thee still.
Art thou not, fatal vision, sensible
To feeling as to sight? or art thou but
A dagger of the mind, a false creation,
Proceeding from the heat-oppressed brain?
I see thee yet, in form as palpable
As this which now I draw.
Thou marshall’st me the way that I was going;
And such an instrument I was to use.
Mine eyes are made the fools o’ the other senses,
Or else worth all the rest: I see thee still;
And on thy blade and dudgeon, gouts of blood,
Which was not so before.—There’s no such thing.
It is the bloody business which informs
Thus to mine eyes.—Now o’er the one half-world
Nature seems dead, and wicked dreams abuse
The curtain’d sleep. Witchcraft celebrates
Pale Hecate’s off’rings; and wither’d murder,
Alarum’d by his sentinel, the wolf,
Whose howl’s his watch, thus with his stealthy pace,
With Tarquin’s ravishing strides, towards his design
Moves like a ghost.—Thou sure and firm-set earth,
Hear not my steps, which way they walk, for fear
Thy very stones prate of my whereabout,
And take the present horror from the time,
Which now suits with it.—Whiles I threat, he lives.
Words to the heat of deeds too cold breath gives.

[A bell rings.]

I go, and it is done. The bell invites me.
Hear it not, Duncan, for it is a knell
That summons thee to heaven or to hell.

[Exit.]
SCENE II. The same.

Enter Lady Macbeth.

LADY MACBETH.
That which hath made them drunk hath made me bold:
What hath quench’d them hath given me fire.—Hark!—Peace!
It was the owl that shriek’d, the fatal bellman,
Which gives the stern’st good night. He is about it.
The doors are open; and the surfeited grooms
Do mock their charge with snores: I have drugg’d their possets,
That death and nature do contend about them,
Whether they live or die.

MACBETH.
[Within.] Who’s there?—what, ho!

LADY MACBETH.
Alack! I am afraid they have awak’d,
And ’tis not done. Th’ attempt and not the deed
Confounds us.—Hark!—I laid their daggers ready;
He could not miss ’em.—Had he not resembled
My father as he slept, I had done’t.—My husband!

Enter Macbeth.

MACBETH.
I have done the deed.—Didst thou not hear a noise?

LADY MACBETH.
I heard the owl scream and the crickets cry.
Did not you speak?

MACBETH.
There’s one did laugh in’s sleep, and one cried, “Murder!”
That they did wake each other: I stood and heard them.
But they did say their prayers, and address’d them
Again to sleep.

LADY MACBETH.
There are two lodg’d together.

MACBETH.
One cried, “God bless us!” and, “Amen,” the other,
As they had seen me with these hangman’s hands.
List’ning their fear, I could not say “Amen,”
When they did say, “God bless us.”

LADY MACBETH.
Consider it not so deeply.

MACBETH.
But wherefore could not I pronounce “Amen”?
I had most need of blessing, and “Amen”
Stuck in my throat.

LADY MACBETH.
These deeds must not be thought
After these ways; so, it will make us mad.

MACBETH.
Methought I heard a voice cry, “Sleep no more!
Macbeth does murder sleep,”—the innocent sleep;
Sleep that knits up the ravell’d sleave of care,
The death of each day’s life, sore labour’s bath,
Balm of hurt minds, great nature’s second course,
Chief nourisher in life’s feast.

LADY MACBETH.
What do you mean?

MACBETH.
Still it cried, “Sleep no more!” to all the house:
“Glamis hath murder’d sleep, and therefore Cawdor
Shall sleep no more. Macbeth shall sleep no more!”

LADY MACBETH.
Who was it that thus cried? Why, worthy thane,
You do unbend your noble strength to think
So brainsickly of things. Go get some water,
And wash this filthy witness from your hand.—
Why did you bring these daggers from the place?
They must lie there: go carry them, and smear
The sleepy grooms with blood.

MACBETH.
I’ll go no more:
I am afraid to think what I have done;
Look on’t again I dare not.

LADY MACBETH.
Infirm of purpose!
Give me the daggers. The sleeping and the dead
Are but as pictures. ’Tis the eye of childhood
That fears a painted devil. If he do bleed,
I’ll gild the faces of the grooms withal,
For it must seem their guilt.

[Exit. Knocking within.]

MACBETH.
Whence is that knocking?
How is’t with me, when every noise appals me?
What hands are here? Ha, they pluck out mine eyes!
Will all great Neptune’s ocean wash this blood
Clean from my hand? No, this my hand will rather
The multitudinous seas incarnadine,
Making the green one red.

Enter Lady Macbeth.

LADY MACBETH.
My hands are of your color, but I shame
To wear a heart so white. [Knocking within.] I hear knocking
At the south entry:—retire we to our chamber.
A little water clears us of this deed:
How easy is it then! Your constancy
Hath left you unattended.—[Knocking within.] Hark, more knocking.
Get on your nightgown, lest occasion call us
And show us to be watchers. Be not lost
So poorly in your thoughts.

MACBETH.
To know my deed, ’twere best not know myself. [Knocking within.]
Wake Duncan with thy knocking! I would thou couldst!

[Exeunt.]
SCENE III. The same.

Enter a Porter. Knocking within.

PORTER.
Here’s a knocking indeed! If a man were porter of hell gate, he should have old turning the key. [Knocking.] Knock, knock, knock. Who’s there, i’ th’ name of Belzebub? Here’s a farmer that hanged himself on the expectation of plenty: come in time; have napkins enow about you; here you’ll sweat for’t. [Knocking.] Knock, knock! Who’s there, i’ th’ other devil’s name? Faith, here’s an equivocator, that could swear in both the scales against either scale, who committed treason enough for God’s sake, yet could not equivocate to heaven: O, come in, equivocator. [Knocking.] Knock, knock, knock! Who’s there? Faith, here’s an English tailor come hither, for stealing out of a French hose: come in, tailor; here you may roast your goose. [Knocking.] Knock, knock. Never at quiet! What are you?—But this place is too cold for hell. I’ll devil-porter it no further: I had thought to have let in some of all professions, that go the primrose way to th’ everlasting bonfire. [Knocking.] Anon, anon! I pray you, remember the porter.

LENNOX.
The night has been unruly: where we lay,
Our chimneys were blown down and, as they say,
Lamentings heard i’ th’ air, strange screams of death,
And prophesying, with accents terrible,
Of dire combustion and confus’d events,
New hatch’d to the woeful time. The obscure bird
Clamour’d the live-long night. Some say the earth
Was feverous, and did shake.

MACBETH.
’Twas a rough night.

LENNOX.
My young remembrance cannot parallel
A fellow to it.

Enter Macduff.

MACDUFF.
O horror, horror, horror!
Tongue nor heart cannot conceive nor name thee!

MACBETH, LENNOX.
What’s the matter?

MACDUFF.
Confusion now hath made his masterpiece!
Most sacrilegious murder hath broke ope
The Lord’s anointed temple, and stole thence
The life o’ th’ building.

MACBETH.
What is’t you say? the life?

LENNOX.
Mean you his majesty?

MACDUFF.
Approach the chamber, and destroy your sight
With a new Gorgon. Do not bid me speak.
See, and then speak yourselves.

[Exeunt Macbeth and Lennox.]

Awake, awake!—
Ring the alarum bell.—Murder and treason!
Banquo and Donalbain! Malcolm! awake!
Shake off this downy sleep, death’s counterfeit,
And look on death itself! Up, up, and see
The great doom’s image. Malcolm! Banquo!
As from your graves rise up, and walk like sprites
To countenance this horror!

[Alarum-bell rings.]

Enter Lady Macbeth.

LADY MACBETH.
What’s the business,
That such a hideous trumpet calls to parley
The sleepers of the house? Speak, speak!

MACDUFF.
O gentle lady,
’Tis not for you to hear what I can speak:
The repetition, in a woman’s ear,
Would murder as it fell.

Enter Banquo.

O Banquo, Banquo!
Our royal master’s murder’d!

LADY MACBETH.
Woe, alas!
What, in our house?

BANQUO.
Too cruel anywhere.—
Dear Duff, I pr’ythee, contradict thyself,
And say it is not so.

Enter Macbeth and Lennox with Ross.

MACBETH.
Had I but died an hour before this chance,
I had liv’d a blessed time; for, from this instant
There’s nothing serious in mortality.
All is but toys: renown and grace is dead;
The wine of life is drawn, and the mere lees
Is left this vault to brag of.

Enter Malcolm and Donalbain.

DONALBAIN.
What is amiss?

MACBETH.
You are, and do not know’t:
The spring, the head, the fountain of your blood
Is stopp’d; the very source of it is stopp’d.

MACDUFF.
Your royal father’s murder’d.

MALCOLM.
O, by whom?

LENNOX.
Those of his chamber, as it seem’d, had done’t:
Their hands and faces were all badg’d with blood;
So were their daggers, which, unwip’d, we found
Upon their pillows. They star’d, and were distracted;
No man’s life was to be trusted with them.

MACBETH.
O, yet I do repent me of my fury,
That I did kill them.

MACDUFF.
Wherefore did you so?

MACBETH.
Who can be wise, amaz’d, temperate, and furious,
Loyal and neutral, in a moment? No man:
Th’ expedition of my violent love
Outrun the pauser, reason. Here lay Duncan,
His silver skin lac’d with his golden blood;
And his gash’d stabs look’d like a breach in nature
For ruin’s wasteful entrance: there, the murderers,
Steep’d in the colours of their trade, their daggers
Unmannerly breech’d with gore. Who could refrain,
That had a heart to love, and in that heart
Courage to make’s love known?

LADY MACBETH.
Help me hence, ho!

MACDUFF.
Look to the lady.

MALCOLM.
Why do we hold our tongues,
That most may claim this argument for ours?

DONALBAIN.
What should be spoken here, where our fate,
Hid in an auger hole, may rush, and seize us?
Let’s away. Our tears are not yet brew’d.

MALCOLM.
Nor our strong sorrow
Upon the foot of motion.

BANQUO.
Look to the lady:—

[Lady Macbeth is carried out.]

And when we have our naked frailties hid,
That suffer in exposure, let us meet,
And question this most bloody piece of work
To know it further. Fears and scruples shake us:
In the great hand of God I stand; and thence
Against the undivulg’d pretence I fight
Of treasonous malice.

MACDUFF.
And so do I.

ALL.
So all.

MACBETH.
Let’s briefly put on manly readiness,
And meet i’ th’ hall together.

ALL.
Well contented.

[Exeunt all but Malcolm and Donalbain.]

MALCOLM.
What will you do? Let’s not consort with them:
To show an unfelt sorrow is an office
Which the false man does easy. I’ll to England.

DONALBAIN.
To Ireland, I. Our separated fortune
Shall keep us both the safer. Where we are,
There’s daggers in men’s smiles: the near in blood,
The nearer bloody.

MALCOLM.
This murderous shaft that’s shot
Hath not yet lighted; and our safest way
Is to avoid the aim. Therefore to horse;
And let us not be dainty of leave-taking,
But shift away. There’s warrant in that theft
Which steals itself, when there’s no mercy left.

[Exeunt.]
SCENE IV. The same. Without the Castle.

Enter Ross and an Old Man.

OLD MAN.
Threescore and ten I can remember well,
Within the volume of which time I have seen
Hours dreadful and things strange, but this sore night
Hath trifled former knowings.

ROSS.
Ha, good father,
Thou seest the heavens, as troubled with man’s act,
Threatens his bloody stage: by the clock ’tis day,
And yet dark night strangles the travelling lamp.
Is’t night’s predominance, or the day’s shame,
That darkness does the face of earth entomb,
When living light should kiss it?

OLD MAN.
’Tis unnatural,
Even like the deed that’s done. On Tuesday last,
A falcon, towering in her pride of place,
Was by a mousing owl hawk’d at and kill’d.

ROSS.
And Duncan’s horses (a thing most strange and certain)
Beauteous and swift, the minions of their race,
Turn’d wild in nature, broke their stalls, flung out,
Contending ’gainst obedience, as they would make
War with mankind.

OLD MAN.
’Tis said they eat each other.

ROSS.
They did so; to the amazement of mine eyes,
That look’d upon’t.
Here comes the good Macduff.

Enter Macduff.

How goes the world, sir, now?

MACDUFF.
Why, see you not?

ROSS.
Is’t known who did this more than bloody deed?

MACDUFF.
Those that Macbeth hath slain.

ROSS.
Alas, the day!
What good could they pretend?

MACDUFF.
They were suborn’d.
Malcolm and Donalbain, the King’s two sons,
Are stol’n away and fled; which puts upon them
Suspicion of the deed.

ROSS.
’Gainst nature still:
Thriftless ambition, that will ravin up
Thine own life’s means!—Then ’tis most like
The sovereignty will fall upon Macbeth.

MACDUFF.
He is already nam’d; and gone to Scone
To be invested.

ROSS.
Where is Duncan’s body?

MACDUFF.
Carried to Colmekill,
The sacred storehouse of his predecessors,
And guardian of their bones.

ROSS.
Will you to Scone?

MACDUFF.
No, cousin, I’ll to Fife.

ROSS.
Well, I will thither.

MACDUFF.
Well, may you see things well done there. Adieu!
Lest our old robes sit easier than our new!

ROSS.
Farewell, father.

OLD MAN.
God’s benison go with you; and with those
That would make good of bad, and friends of foes!

[Exeunt.]
ACT III
SCENE I. Forres. A Room in the Palace.

Enter Banquo.

BANQUO.
Thou hast it now, King, Cawdor, Glamis, all,
As the Weird Women promis’d; and, I fear,
Thou play’dst most foully for’t; yet it was said
It should not stand in thy posterity;
But that myself should be the root and father
Of many kings. If there come truth from them
(As upon thee, Macbeth, their speeches shine)
Why, by the verities on thee made good,
May they not be my oracles as well,
And set me up in hope? But hush; no more.

Sennet sounded. Enter Macbeth as King, Lady Macbeth as Queen; Lennox, Ross, Lords, and Attendants.

MACBETH.
Here’s our chief guest.

LADY MACBETH.
If he had been forgotten,
It had been as a gap in our great feast,
And all-thing unbecoming.

MACBETH.
Tonight we hold a solemn supper, sir,
And I’ll request your presence.

BANQUO.
Let your Highness
Command upon me, to the which my duties
Are with a most indissoluble tie
For ever knit.

MACBETH.
Ride you this afternoon?

BANQUO.
Ay, my good lord.

MACBETH.
We should have else desir’d your good advice
(Which still hath been both grave and prosperous)
In this day’s council; but we’ll take tomorrow.
Is’t far you ride?

BANQUO.
As far, my lord, as will fill up the time
’Twixt this and supper: go not my horse the better,
I must become a borrower of the night,
For a dark hour or twain.

MACBETH.
Fail not our feast.

BANQUO.
My lord, I will not.

MACBETH.
We hear our bloody cousins are bestow’d
In England and in Ireland; not confessing
Their cruel parricide, filling their hearers
With strange invention. But of that tomorrow,
When therewithal we shall have cause of state
Craving us jointly. Hie you to horse: adieu,
Till you return at night. Goes Fleance with you?

BANQUO.
Ay, my good lord: our time does call upon’s.

MACBETH.
I wish your horses swift and sure of foot;
And so I do commend you to their backs.
Farewell.—

[Exit Banquo.]

Let every man be master of his time
Till seven at night; to make society
The sweeter welcome, we will keep ourself
Till supper time alone: while then, God be with you.

[Exeunt Lady Macbeth, Lords, &c.]

Sirrah, a word with you. Attend those men
Our pleasure?

SERVANT.
They are, my lord, without the palace gate.

MACBETH.
Bring them before us.

[Exit Servant.]

To be thus is nothing,
But to be safely thus. Our fears in Banquo
Stick deep, and in his royalty of nature
Reigns that which would be fear’d: ’tis much he dares;
And, to that dauntless temper of his mind,
He hath a wisdom that doth guide his valour
To act in safety. There is none but he
Whose being I do fear: and under him
My genius is rebuk’d; as, it is said,
Mark Antony’s was by Caesar. He chid the sisters
When first they put the name of king upon me,
And bade them speak to him; then, prophet-like,
They hail’d him father to a line of kings:
Upon my head they plac’d a fruitless crown,
And put a barren sceptre in my gripe,
Thence to be wrench’d with an unlineal hand,
No son of mine succeeding. If’t be so,
For Banquo’s issue have I fil’d my mind;
For them the gracious Duncan have I murder’d;
Put rancours in the vessel of my peace
Only for them; and mine eternal jewel
Given to the common enemy of man,
To make them kings, the seed of Banquo kings!
Rather than so, come, fate, into the list,
And champion me to th’ utterance!—Who’s there?—

Enter Servant with two Murderers.

Now go to the door, and stay there till we call.

[Exit Servant.]

Was it not yesterday we spoke together?

FIRST MURDERER.
It was, so please your Highness.

MACBETH.
Well then, now
Have you consider’d of my speeches? Know
That it was he, in the times past, which held you
So under fortune, which you thought had been
Our innocent self? This I made good to you
In our last conference, pass’d in probation with you
How you were borne in hand, how cross’d, the instruments,
Who wrought with them, and all things else that might
To half a soul and to a notion craz’d
Say, “Thus did Banquo.”

FIRST MURDERER.
You made it known to us.

MACBETH.
I did so; and went further, which is now
Our point of second meeting. Do you find
Your patience so predominant in your nature,
That you can let this go? Are you so gospell’d,
To pray for this good man and for his issue,
Whose heavy hand hath bow’d you to the grave,
And beggar’d yours forever?

FIRST MURDERER.
We are men, my liege.

MACBETH.
Ay, in the catalogue ye go for men;
As hounds, and greyhounds, mongrels, spaniels, curs,
Shoughs, water-rugs, and demi-wolves are clept
All by the name of dogs: the valu’d file
Distinguishes the swift, the slow, the subtle,
The housekeeper, the hunter, every one
According to the gift which bounteous nature
Hath in him clos’d; whereby he does receive
Particular addition, from the bill
That writes them all alike: and so of men.
Now, if you have a station in the file,
Not i’ th’ worst rank of manhood, say’t;
And I will put that business in your bosoms,
Whose execution takes your enemy off,
Grapples you to the heart and love of us,
Who wear our health but sickly in his life,
Which in his death were perfect.

SECOND MURDERER.
I am one, my liege,
Whom the vile blows and buffets of the world
Hath so incens’d that I am reckless what
I do to spite the world.

FIRST MURDERER.
And I another,
So weary with disasters, tugg’d with fortune,
That I would set my life on any chance,
To mend it or be rid on’t.

MACBETH.
Both of you
Know Banquo was your enemy.

BOTH MURDERERS.
True, my lord.

MACBETH.
So is he mine; and in such bloody distance,
That every minute of his being thrusts
Against my near’st of life; and though I could
With barefac’d power sweep him from my sight,
And bid my will avouch it, yet I must not,
For certain friends that are both his and mine,
Whose loves I may not drop, but wail his fall
Who I myself struck down: and thence it is
That I to your assistance do make love,
Masking the business from the common eye
For sundry weighty reasons.

SECOND MURDERER.
We shall, my lord,
Perform what you command us.

FIRST MURDERER.
Though our lives—

MACBETH.
Your spirits shine through you. Within this hour at most,
I will advise you where to plant yourselves,
Acquaint you with the perfect spy o’ th’ time,
The moment on’t; for’t must be done tonight
And something from the palace; always thought
That I require a clearness. And with him
(To leave no rubs nor botches in the work)
Fleance his son, that keeps him company,
Whose absence is no less material to me
Than is his father’s, must embrace the fate
Of that dark hour. Resolve yourselves apart.
I’ll come to you anon.

BOTH MURDERERS.
We are resolv’d, my lord.

MACBETH.
I’ll call upon you straight: abide within.

[Exeunt Murderers.]

It is concluded. Banquo, thy soul’s flight,
If it find heaven, must find it out tonight.

[Exit.]
SCENE II. The same. Another Room in the Palace.

Enter Lady Macbeth and a Servant.

LADY MACBETH.
Is Banquo gone from court?

SERVANT.
Ay, madam, but returns again tonight.

LADY MACBETH.
Say to the King, I would attend his leisure
For a few words.

SERVANT.
Madam, I will.

[Exit.]

LADY MACBETH.
Naught’s had, all’s spent,
Where our desire is got without content:
’Tis safer to be that which we destroy,
Than by destruction dwell in doubtful joy.

Enter Macbeth.

How now, my lord, why do you keep alone,
Of sorriest fancies your companions making,
Using those thoughts which should indeed have died
With them they think on? Things without all remedy
Should be without regard: what’s done is done.

MACBETH.
We have scorch’d the snake, not kill’d it.
She’ll close, and be herself; whilst our poor malice
Remains in danger of her former tooth.
But let the frame of things disjoint,
Both the worlds suffer,
Ere we will eat our meal in fear, and sleep
In the affliction of these terrible dreams
That shake us nightly. Better be with the dead,
Whom we, to gain our peace, have sent to peace,
Than on the torture of the mind to lie
In restless ecstasy. Duncan is in his grave;
After life’s fitful fever he sleeps well;
Treason has done his worst: nor steel, nor poison,
Malice domestic, foreign levy, nothing
Can touch him further.

LADY MACBETH.
Come on,
Gently my lord, sleek o’er your rugged looks;
Be bright and jovial among your guests tonight.

MACBETH.
So shall I, love; and so, I pray, be you.
Let your remembrance apply to Banquo;
Present him eminence, both with eye and tongue:
Unsafe the while, that we
Must lave our honours in these flattering streams,
And make our faces vizards to our hearts,
Disguising what they are.

LADY MACBETH.
You must leave this.

MACBETH.
O, full of scorpions is my mind, dear wife!
Thou know’st that Banquo, and his Fleance, lives.

LADY MACBETH.
But in them nature’s copy’s not eterne.

MACBETH.
There’s comfort yet; they are assailable.
Then be thou jocund. Ere the bat hath flown
His cloister’d flight, ere to black Hecate’s summons
The shard-born beetle, with his drowsy hums,
Hath rung night’s yawning peal, there shall be done
A deed of dreadful note.

LADY MACBETH.
What’s to be done?

MACBETH.
Be innocent of the knowledge, dearest chuck,
Till thou applaud the deed. Come, seeling night,
Scarf up the tender eye of pitiful day,
And with thy bloody and invisible hand
Cancel and tear to pieces that great bond
Which keeps me pale!—Light thickens; and the crow
Makes wing to th’ rooky wood.
Good things of day begin to droop and drowse,
Whiles night’s black agents to their preys do rouse.
Thou marvell’st at my words: but hold thee still;
Things bad begun make strong themselves by ill.
So, pr’ythee, go with me.

[Exeunt.]
SCENE III. The same. A Park or Lawn, with a gate leading to the Palace.

Enter three Murderers.

FIRST MURDERER.
But who did bid thee join with us?

THIRD MURDERER.
Macbeth.

SECOND MURDERER.
He needs not our mistrust; since he delivers
Our offices and what we have to do
To the direction just.

FIRST MURDERER.
Then stand with us.
The west yet glimmers with some streaks of day.
Now spurs the lated traveller apace,
To gain the timely inn; and near approaches
The subject of our watch.

THIRD MURDERER.
Hark! I hear horses.

BANQUO.
[Within.] Give us a light there, ho!

SECOND MURDERER.
Then ’tis he; the rest
That are within the note of expectation
Already are i’ th’ court.

FIRST MURDERER.
His horses go about.

THIRD MURDERER.
Almost a mile; but he does usually,
So all men do, from hence to the palace gate
Make it their walk.

Enter Banquo and Fleance with a torch.

SECOND MURDERER.
A light, a light!

THIRD MURDERER.
’Tis he.

FIRST MURDERER.
Stand to’t.

BANQUO.
It will be rain tonight.

FIRST MURDERER.
Let it come down.

[Assaults Banquo.]

BANQUO.
O, treachery! Fly, good Fleance, fly, fly, fly!
Thou mayst revenge—O slave!

[Dies. Fleance escapes.]

THIRD MURDERER.
Who did strike out the light?

FIRST MURDERER.
Was’t not the way?

THIRD MURDERER.
There’s but one down: the son is fled.

SECOND MURDERER.
We have lost best half of our affair.

FIRST MURDERER.
Well, let’s away, and say how much is done.

[Exeunt.]
SCENE IV. The same. A Room of state in the Palace.

A banquet prepared. Enter Macbeth, Lady Macbeth, Ross, Lennox, Lords and Attendants.

MACBETH.
You know your own degrees, sit down. At first
And last the hearty welcome.

LORDS.
Thanks to your Majesty.

MACBETH.
Ourself will mingle with society,
And play the humble host.
Our hostess keeps her state; but, in best time,
We will require her welcome.

LADY MACBETH.
Pronounce it for me, sir, to all our friends;
For my heart speaks they are welcome.

Enter first Murderer to the door.

MACBETH.
See, they encounter thee with their hearts’ thanks.
Both sides are even: here I’ll sit i’ th’ midst.

Be large in mirth; anon we’ll drink a measure
The table round. There’s blood upon thy face.

MURDERER.
’Tis Banquo’s then.

MACBETH.
’Tis better thee without than he within.
Is he dispatch’d?

MURDERER.
My lord, his throat is cut. That I did for him.

MACBETH.
Thou art the best o’ th’ cut-throats;
Yet he’s good that did the like for Fleance:
If thou didst it, thou art the nonpareil.

MURDERER.
Most royal sir,
Fleance is ’scap’d.

MACBETH.
Then comes my fit again: I had else been perfect;
Whole as the marble, founded as the rock,
As broad and general as the casing air:
But now I am cabin’d, cribb’d, confin’d, bound in
To saucy doubts and fears. But Banquo’s safe?

MURDERER.
Ay, my good lord. Safe in a ditch he bides,
With twenty trenched gashes on his head;
The least a death to nature.

MACBETH.
Thanks for that.
There the grown serpent lies; the worm that’s fled
Hath nature that in time will venom breed,
No teeth for th’ present.—Get thee gone; tomorrow
We’ll hear, ourselves, again.

[Exit Murderer.]

LADY MACBETH.
My royal lord,
You do not give the cheer: the feast is sold
That is not often vouch’d, while ’tis a-making,
’Tis given with welcome. To feed were best at home;
From thence the sauce to meat is ceremony;
Meeting were bare without it.

The Ghost of Banquo rises, and sits in Macbeth’s place.

MACBETH.
Sweet remembrancer!—
Now, good digestion wait on appetite,
And health on both!

LENNOX.
May’t please your Highness sit.

MACBETH.
Here had we now our country’s honour roof’d,
Were the grac’d person of our Banquo present;
Who may I rather challenge for unkindness
Than pity for mischance!

ROSS.
His absence, sir,
Lays blame upon his promise. Please’t your Highness
To grace us with your royal company?

MACBETH.
The table’s full.

LENNOX.
Here is a place reserv’d, sir.

MACBETH.
Where?

LENNOX.
Here, my good lord. What is’t that moves your Highness?

MACBETH.
Which of you have done this?

LORDS.
What, my good lord?

MACBETH.
Thou canst not say I did it. Never shake
Thy gory locks at me.

ROSS.
Gentlemen, rise; his Highness is not well.

LADY MACBETH.
Sit, worthy friends. My lord is often thus,
And hath been from his youth: pray you, keep seat;
The fit is momentary; upon a thought
He will again be well. If much you note him,
You shall offend him, and extend his passion.
Feed, and regard him not.—Are you a man?

MACBETH.
Ay, and a bold one, that dare look on that
Which might appal the devil.

LADY MACBETH.
O proper stuff!
This is the very painting of your fear:
This is the air-drawn dagger which you said,
Led you to Duncan. O, these flaws, and starts
(Impostors to true fear), would well become
A woman’s story at a winter’s fire,
Authoris’d by her grandam. Shame itself!
Why do you make such faces? When all’s done,
You look but on a stool.

MACBETH.
Pr’ythee, see there!
Behold! look! lo! how say you?
Why, what care I? If thou canst nod, speak too.—
If charnel houses and our graves must send
Those that we bury back, our monuments
Shall be the maws of kites.

[Ghost disappears.]

LADY MACBETH.
What, quite unmann’d in folly?

MACBETH.
If I stand here, I saw him.

LADY MACBETH.
Fie, for shame!

MACBETH.
Blood hath been shed ere now, i’ th’ olden time,
Ere humane statute purg’d the gentle weal;
Ay, and since too, murders have been perform’d
Too terrible for the ear: the time has been,
That, when the brains were out, the man would die,
And there an end; but now they rise again,
With twenty mortal murders on their crowns,
And push us from our stools. This is more strange
Than such a murder is.

LADY MACBETH.
My worthy lord,
Your noble friends do lack you.

MACBETH.
I do forget.—
Do not muse at me, my most worthy friends.
I have a strange infirmity, which is nothing
To those that know me. Come, love and health to all;
Then I’ll sit down.—Give me some wine, fill full.—
I drink to the general joy o’ th’ whole table,
And to our dear friend Banquo, whom we miss:
Would he were here.

Ghost rises again.

To all, and him, we thirst,
And all to all.

LORDS.
Our duties, and the pledge.

MACBETH.
Avaunt! and quit my sight! let the earth hide thee!
Thy bones are marrowless, thy blood is cold;
Thou hast no speculation in those eyes
Which thou dost glare with!

LADY MACBETH.
Think of this, good peers,
But as a thing of custom: ’tis no other,
Only it spoils the pleasure of the time.

MACBETH.
What man dare, I dare:
Approach thou like the rugged Russian bear,
The arm’d rhinoceros, or th’ Hyrcan tiger;
Take any shape but that, and my firm nerves
Shall never tremble: or be alive again,
And dare me to the desert with thy sword;
If trembling I inhabit then, protest me
The baby of a girl. Hence, horrible shadow!
Unreal mock’ry, hence!

[Ghost disappears.]

Why, so;—being gone,
I am a man again.—Pray you, sit still.

LADY MACBETH.
You have displaced the mirth, broke the good meeting
With most admir’d disorder.

MACBETH.
Can such things be,
And overcome us like a summer’s cloud,
Without our special wonder? You make me strange
Even to the disposition that I owe,
When now I think you can behold such sights,
And keep the natural ruby of your cheeks,
When mine are blanch’d with fear.

ROSS.
What sights, my lord?

LADY MACBETH.
I pray you, speak not; he grows worse and worse;
Question enrages him. At once, good night:—
Stand not upon the order of your going,
But go at once.

LENNOX.
Good night; and better health
Attend his Majesty!

LADY MACBETH.
A kind good night to all!

[Exeunt all Lords and Attendants.]

MACBETH.
It will have blood, they say, blood will have blood.
Stones have been known to move, and trees to speak;
Augurs, and understood relations, have
By magot-pies, and choughs, and rooks, brought forth
The secret’st man of blood.—What is the night?

LADY MACBETH.
Almost at odds with morning, which is which.

MACBETH.
How say’st thou, that Macduff denies his person
At our great bidding?

LADY MACBETH.
Did you send to him, sir?

MACBETH.
I hear it by the way; but I will send.
There’s not a one of them but in his house
I keep a servant fee’d. I will tomorrow
(And betimes I will) to the Weird Sisters:
More shall they speak; for now I am bent to know,
By the worst means, the worst. For mine own good,
All causes shall give way: I am in blood
Stepp’d in so far that, should I wade no more,
Returning were as tedious as go o’er.
Strange things I have in head, that will to hand,
Which must be acted ere they may be scann’d.

LADY MACBETH.
You lack the season of all natures, sleep.

MACBETH.
Come, we’ll to sleep. My strange and self-abuse
Is the initiate fear that wants hard use.
We are yet but young in deed.

[Exeunt.]
SCENE V. The heath.

Thunder. Enter the three Witches meeting Hecate.

FIRST WITCH.
Why, how now, Hecate? you look angerly.

HECATE.
Have I not reason, beldams as you are,
Saucy and overbold? How did you dare
To trade and traffic with Macbeth
In riddles and affairs of death;
And I, the mistress of your charms,
The close contriver of all harms,
Was never call’d to bear my part,
Or show the glory of our art?
And, which is worse, all you have done
Hath been but for a wayward son,
Spiteful and wrathful; who, as others do,
Loves for his own ends, not for you.
But make amends now: get you gone,
And at the pit of Acheron
Meet me i’ th’ morning: thither he
Will come to know his destiny.
Your vessels and your spells provide,
Your charms, and everything beside.
I am for th’ air; this night I’ll spend
Unto a dismal and a fatal end.
Great business must be wrought ere noon.
Upon the corner of the moon
There hangs a vap’rous drop profound;
I’ll catch it ere it come to ground:
And that, distill’d by magic sleights,
Shall raise such artificial sprites,
As, by the strength of their illusion,
Shall draw him on to his confusion.
He shall spurn fate, scorn death, and bear
His hopes ’bove wisdom, grace, and fear.
And you all know, security
Is mortals’ chiefest enemy.

[Music and song within, “Come away, come away” &c.]

Hark! I am call’d; my little spirit, see,
Sits in a foggy cloud and stays for me.

[Exit.]

FIRST WITCH.
Come, let’s make haste; she’ll soon be back again.

[Exeunt.]
SCENE VI. Forres. A Room in the Palace.

Enter Lennox and another Lord.

LENNOX.
My former speeches have but hit your thoughts,
Which can interpret farther: only, I say,
Thing’s have been strangely borne. The gracious Duncan
Was pitied of Macbeth:—marry, he was dead:—
And the right valiant Banquo walk’d too late;
Whom, you may say, if’t please you, Fleance kill’d,
For Fleance fled. Men must not walk too late.
Who cannot want the thought, how monstrous
It was for Malcolm and for Donalbain
To kill their gracious father? damned fact!
How it did grieve Macbeth! did he not straight,
In pious rage, the two delinquents tear
That were the slaves of drink and thralls of sleep?
Was not that nobly done? Ay, and wisely too;
For ’twould have anger’d any heart alive,
To hear the men deny’t. So that, I say,
He has borne all things well: and I do think,
That had he Duncan’s sons under his key
(As, and’t please heaven, he shall not) they should find
What ’twere to kill a father; so should Fleance.
But, peace!—for from broad words, and ’cause he fail’d
His presence at the tyrant’s feast, I hear,
Macduff lives in disgrace. Sir, can you tell
Where he bestows himself?

LORD.
The son of Duncan,
From whom this tyrant holds the due of birth,
Lives in the English court and is receiv’d
Of the most pious Edward with such grace
That the malevolence of fortune nothing
Takes from his high respect. Thither Macduff
Is gone to pray the holy king, upon his aid
To wake Northumberland, and warlike Siward
That, by the help of these (with Him above
To ratify the work), we may again
Give to our tables meat, sleep to our nights;
Free from our feasts and banquets bloody knives,
Do faithful homage, and receive free honours,
All which we pine for now. And this report
Hath so exasperate the King that he
Prepares for some attempt of war.

LENNOX.
Sent he to Macduff?

LORD.
He did: and with an absolute “Sir, not I,”
The cloudy messenger turns me his back,
And hums, as who should say, “You’ll rue the time
That clogs me with this answer.”

LENNOX.
And that well might
Advise him to a caution, t’ hold what distance
His wisdom can provide. Some holy angel
Fly to the court of England, and unfold
His message ere he come, that a swift blessing
May soon return to this our suffering country
Under a hand accurs’d!

LORD.
I’ll send my prayers with him.

[Exeunt.]
ACT IV
SCENE I. A dark Cave. In the middle, a Cauldron Boiling.

Thunder. Enter the three Witches.

FIRST WITCH.
Thrice the brinded cat hath mew’d.

SECOND WITCH.
Thrice, and once the hedge-pig whin’d.

THIRD WITCH.
Harpier cries:—’Tis time, ’tis time.

FIRST WITCH.
Round about the cauldron go;
In the poison’d entrails throw.—
Toad, that under cold stone
Days and nights has thirty-one
Swelter’d venom sleeping got,
Boil thou first i’ th’ charmed pot!

ALL.
Double, double, toil and trouble;
Fire, burn; and cauldron, bubble.

SECOND WITCH.
Fillet of a fenny snake,
In the cauldron boil and bake;
Eye of newt, and toe of frog,
Wool of bat, and tongue of dog,
Adder’s fork, and blind-worm’s sting,
Lizard’s leg, and howlet’s wing,
For a charm of powerful trouble,
Like a hell-broth boil and bubble.

ALL.
Double, double, toil and trouble;
Fire, burn; and cauldron, bubble.

THIRD WITCH.
Scale of dragon, tooth of wolf,
Witch’s mummy, maw and gulf
Of the ravin’d salt-sea shark,
Root of hemlock digg’d i’ th’ dark,
Liver of blaspheming Jew,
Gall of goat, and slips of yew
Sliver’d in the moon’s eclipse,
Nose of Turk, and Tartar’s lips,
Finger of birth-strangled babe
Ditch-deliver’d by a drab,
Make the gruel thick and slab:
Add thereto a tiger’s chaudron,
For th’ ingredients of our cauldron.

ALL.
Double, double, toil and trouble;
Fire, burn; and cauldron, bubble.

SECOND WITCH.
Cool it with a baboon’s blood.
Then the charm is firm and good.

Enter Hecate.

HECATE.
O, well done! I commend your pains,
And everyone shall share i’ th’ gains.
And now about the cauldron sing,
Like elves and fairies in a ring,
Enchanting all that you put in.

[Music and a song: “Black Spirits,” &c.]

[Exit Hecate.]

SECOND WITCH.
By the pricking of my thumbs,
Something wicked this way comes.
Open, locks,
Whoever knocks!

MALCOLM.
Be’t their comfort
We are coming thither. Gracious England hath
Lent us good Siward and ten thousand men;
An older and a better soldier none
That Christendom gives out.

ROSS.
Would I could answer
This comfort with the like! But I have words
That would be howl’d out in the desert air,
Where hearing should not latch them.

MACDUFF.
What concern they?
The general cause? or is it a fee-grief
Due to some single breast?

ROSS.
No mind that’s honest
But in it shares some woe, though the main part
Pertains to you alone.

MACDUFF.
If it be mine,
Keep it not from me, quickly let me have it.

ROSS.
Let not your ears despise my tongue for ever,
Which shall possess them with the heaviest sound
That ever yet they heard.

MACDUFF.
Humh! I guess at it.

ROSS.
Your castle is surpris’d; your wife and babes
Savagely slaughter’d. To relate the manner
Were, on the quarry of these murder’d deer,
To add the death of you.

MALCOLM.
Merciful heaven!—
What, man! ne’er pull your hat upon your brows.
Give sorrow words. The grief that does not speak
Whispers the o’er-fraught heart, and bids it break.

MACDUFF.
My children too?

ROSS.
Wife, children, servants, all
That could be found.

MACDUFF.
And I must be from thence!
My wife kill’d too?

ROSS.
I have said.

MALCOLM.
Be comforted:
Let’s make us med’cines of our great revenge,
To cure this deadly grief.

MACDUFF.
He has no children.—All my pretty ones?
Did you say all?—O hell-kite!—All?
What, all my pretty chickens and their dam
At one fell swoop?

MALCOLM.
Dispute it like a man.

MACDUFF.
I shall do so;
But I must also feel it as a man:
I cannot but remember such things were,
That were most precious to me.—Did heaven look on,
And would not take their part? Sinful Macduff,
They were all struck for thee! Naught that I am,
Not for their own demerits, but for mine,
Fell slaughter on their souls: heaven rest them now!

MALCOLM.
Be this the whetstone of your sword. Let grief
Convert to anger; blunt not the heart, enrage it.

MACDUFF.
O, I could play the woman with mine eyes,
And braggart with my tongue!—But, gentle heavens,
Cut short all intermission; front to front,
Bring thou this fiend of Scotland and myself;
Within my sword’s length set him; if he ’scape,
Heaven forgive him too!

MALCOLM.
This tune goes manly.
Come, go we to the King. Our power is ready;
Our lack is nothing but our leave. Macbeth
Is ripe for shaking, and the powers above
Put on their instruments. Receive what cheer you may;
The night is long that never finds the day.

[Exeunt.]
ACT V
SCENE I. Dunsinane. A Room in the Castle.

Enter a Doctor of Physic and a Waiting-Gentlewoman.

DOCTOR.
I have two nights watched with you, but can perceive no truth in your report. When was it she last walked?

GENTLEWOMAN.
Since his Majesty went into the field, I have seen her rise from her bed, throw her nightgown upon her, unlock her closet, take forth paper, fold it, write upon’t, read it, afterwards seal it, and again return to bed; yet all this while in a most fast sleep.

DOCTOR.
A great perturbation in nature, to receive at once the benefit of sleep, and do the effects of watching. In this slumbery agitation, besides her walking and other actual performances, what, at any time, have you heard her say?

GENTLEWOMAN.
That, sir, which I will not report after her.

DOCTOR.
You may to me; and ’tis most meet you should.

GENTLEWOMAN.
Neither to you nor anyone; having no witness to confirm my speech.

Enter Lady Macbeth with a taper.

Lo you, here she comes! This is her very guise; and, upon my life, fast asleep. Observe her; stand close.

DOCTOR.
How came she by that light?

GENTLEWOMAN.
Why, it stood by her: she has light by her continually; ’tis her command.

DOCTOR.
You see, her eyes are open.

GENTLEWOMAN.
Ay, but their sense are shut.

DOCTOR.
What is it she does now? Look how she rubs her hands.

GENTLEWOMAN.
It is an accustomed action with her, to seem thus washing her hands. I have known her continue in this a quarter of an hour.

LADY MACBETH.
Yet here’s a spot.

DOCTOR.
Hark, she speaks. I will set down what comes from her, to satisfy my remembrance the more strongly.

LADY MACBETH.
Out, damned spot! out, I say! One; two. Why, then ’tis time to do’t. Hell is murky! Fie, my lord, fie! a soldier, and afeard? What need we fear who knows it, when none can call our power to account? Yet who would have thought the old man to have had so much blood in him?

DOCTOR.
Do you mark that?

LADY MACBETH.
The Thane of Fife had a wife. Where is she now?—What, will these hands ne’er be clean? No more o’ that, my lord, no more o’ that: you mar all with this starting.

DOCTOR.
Go to, go to. You have known what you should not.

GENTLEWOMAN.
She has spoke what she should not, I am sure of that: heaven knows what she has known.

LADY MACBETH.
Here’s the smell of the blood still: all the perfumes of Arabia will not sweeten this little hand. Oh, oh, oh!

DOCTOR.
What a sigh is there! The heart is sorely charged.

GENTLEWOMAN.
I would not have such a heart in my bosom for the dignity of the whole body.

DOCTOR.
Well, well, well.

GENTLEWOMAN.
Pray God it be, sir.

DOCTOR.
This disease is beyond my practice: yet I have known those which have walked in their sleep, who have died holily in their beds.

LADY MACBETH.
Wash your hands, put on your nightgown; look not so pale. I tell you yet again, Banquo’s buried; he cannot come out on’s grave.

DOCTOR.
Even so?

LADY MACBETH.
To bed, to bed. There’s knocking at the gate. Come, come, come, come, give me your hand. What’s done cannot be undone. To bed, to bed, to bed.

[Exit.]

DOCTOR.
Will she go now to bed?

GENTLEWOMAN.
Directly.

DOCTOR.
Foul whisp’rings are abroad. Unnatural deeds
Do breed unnatural troubles: infected minds
To their deaf pillows will discharge their secrets.
More needs she the divine than the physician.—
God, God, forgive us all! Look after her;
Remove from her the means of all annoyance,
And still keep eyes upon her. So, good night:
My mind she has mated, and amaz’d my sight.
I think, but dare not speak.

GENTLEWOMAN.
Good night, good doctor.

[Exeunt.]
SCENE II. The Country near Dunsinane.

Enter, with drum and colours Menteith, Caithness, Angus, Lennox and Soldiers.

MENTEITH.
The English power is near, led on by Malcolm,
His uncle Siward, and the good Macduff.
Revenges burn in them; for their dear causes
Would to the bleeding and the grim alarm
Excite the mortified man.

ANGUS.
Near Birnam wood
Shall we well meet them. That way are they coming.

CAITHNESS.
Who knows if Donalbain be with his brother?

LENNOX.
For certain, sir, he is not. I have a file
Of all the gentry: there is Siward’s son
And many unrough youths, that even now
Protest their first of manhood.

MENTEITH.
What does the tyrant?

CAITHNESS.
Great Dunsinane he strongly fortifies.
Some say he’s mad; others, that lesser hate him,
Do call it valiant fury: but, for certain,
He cannot buckle his distemper’d cause
Within the belt of rule.

ANGUS.
Now does he feel
His secret murders sticking on his hands;
Now minutely revolts upbraid his faith-breach;
Those he commands move only in command,
Nothing in love: now does he feel his title
Hang loose about him, like a giant’s robe
Upon a dwarfish thief.

MENTEITH.
Who, then, shall blame
His pester’d senses to recoil and start,
When all that is within him does condemn
Itself for being there?

CAITHNESS.
Well, march we on,
To give obedience where ’tis truly ow’d:
Meet we the med’cine of the sickly weal;
And with him pour we, in our country’s purge,
Each drop of us.

LENNOX.
Or so much as it needs
To dew the sovereign flower, and drown the weeds.
Make we our march towards Birnam.

[Exeunt, marching.]
SCENE III. Dunsinane. A Room in the Castle.

Enter Macbeth, Doctor and Attendants.

MACBETH.
Bring me no more reports; let them fly all:
Till Birnam wood remove to Dunsinane
I cannot taint with fear. What’s the boy Malcolm?
Was he not born of woman? The spirits that know
All mortal consequences have pronounc’d me thus:
“Fear not, Macbeth; no man that’s born of woman
Shall e’er have power upon thee.”—Then fly, false thanes,
And mingle with the English epicures:
The mind I sway by, and the heart I bear,
Shall never sag with doubt nor shake with fear.

Enter a Servant.

The devil damn thee black, thou cream-fac’d loon!
Where gott’st thou that goose look?

SERVANT.
There is ten thousand—

MACBETH.
Geese, villain?

SERVANT.
Soldiers, sir.

MACBETH.
Go prick thy face and over-red thy fear,
Thou lily-liver’d boy. What soldiers, patch?
Death of thy soul! those linen cheeks of thine
Are counsellors to fear. What soldiers, whey-face?

SERVANT.
The English force, so please you.

MACBETH.
Take thy face hence.

[Exit Servant.]

Seyton!—I am sick at heart,
When I behold—Seyton, I say!—This push
Will cheer me ever or disseat me now.
I have liv’d long enough: my way of life
Is fall’n into the sere, the yellow leaf;
And that which should accompany old age,
As honour, love, obedience, troops of friends,
I must not look to have; but, in their stead,
Curses, not loud but deep, mouth-honour, breath,
Which the poor heart would fain deny, and dare not.
Seyton!—

Enter Seyton.

SEYTON.
What’s your gracious pleasure?

MACBETH.
What news more?

SEYTON.
All is confirm’d, my lord, which was reported.

MACBETH.
I’ll fight till from my bones my flesh be hack’d.
Give me my armour.

SEYTON.
’Tis not needed yet.

MACBETH.
I’ll put it on.
Send out more horses, skirr the country round;
Hang those that talk of fear. Give me mine armour.—
How does your patient, doctor?

DOCTOR.
Not so sick, my lord,
As she is troubled with thick-coming fancies,
That keep her from her rest.

MACBETH.
Cure her of that:
Canst thou not minister to a mind diseas’d,
Pluck from the memory a rooted sorrow,
Raze out the written troubles of the brain,
And with some sweet oblivious antidote
Cleanse the stuff’d bosom of that perilous stuff
Which weighs upon the heart?

DOCTOR.
Therein the patient
Must minister to himself.

MACBETH.
Throw physic to the dogs, I’ll none of it.
Come, put mine armour on; give me my staff:
Seyton, send out.—Doctor, the Thanes fly from me.—
Come, sir, despatch.—If thou couldst, doctor, cast
The water of my land, find her disease,
And purge it to a sound and pristine health,
I would applaud thee to the very echo,
That should applaud again.—Pull’t off, I say.—
What rhubarb, senna, or what purgative drug,
Would scour these English hence? Hear’st thou of them?

DOCTOR.
Ay, my good lord. Your royal preparation
Makes us hear something.

MACBETH.
Bring it after me.—
I will not be afraid of death and bane,
Till Birnam forest come to Dunsinane.

[Exeunt all except Doctor.]

DOCTOR.
Were I from Dunsinane away and clear,
Profit again should hardly draw me here.

[Exit.]
SCENE IV. Country near Dunsinane: a Wood in view.

Enter, with drum and colours Malcolm, old Siward and his Son, Macduff, Menteith, Caithness, Angus, Lennox, Ross and Soldiers, marching.

MALCOLM.
Cousins, I hope the days are near at hand
That chambers will be safe.

MENTEITH.
We doubt it nothing.

SIWARD.
What wood is this before us?

MENTEITH.
The wood of Birnam.

MALCOLM.
Let every soldier hew him down a bough,
And bear’t before him. Thereby shall we shadow
The numbers of our host, and make discovery
Err in report of us.

SOLDIERS.
It shall be done.

SIWARD.
We learn no other but the confident tyrant
Keeps still in Dunsinane, and will endure
Our setting down before’t.

MALCOLM.
’Tis his main hope;
For where there is advantage to be given,
Both more and less have given him the revolt,
And none serve with him but constrained things,
Whose hearts are absent too.

MACDUFF.
Let our just censures
Attend the true event, and put we on
Industrious soldiership.

SIWARD.
The time approaches,
That will with due decision make us know
What we shall say we have, and what we owe.
Thoughts speculative their unsure hopes relate,
But certain issue strokes must arbitrate;
Towards which advance the war.

[Exeunt, marching.]
SCENE V. Dunsinane. Within the castle.

Enter with drum and colours, Macbeth, Seyton and Soldiers.

MACBETH.
Hang out our banners on the outward walls;
The cry is still, “They come!” Our castle’s strength
Will laugh a siege to scorn: here let them lie
Till famine and the ague eat them up.
Were they not forc’d with those that should be ours,
We might have met them dareful, beard to beard,
And beat them backward home.

[A cry of women within.]

What is that noise?

SEYTON.
It is the cry of women, my good lord.

[Exit.]

MACBETH.
I have almost forgot the taste of fears.
The time has been, my senses would have cool’d
To hear a night-shriek; and my fell of hair
Would at a dismal treatise rouse and stir
As life were in’t. I have supp’d full with horrors;
Direness, familiar to my slaughterous thoughts,
Cannot once start me.

Enter Seyton.

Wherefore was that cry?

SEYTON.
The Queen, my lord, is dead.

MACBETH.
She should have died hereafter.
There would have been a time for such a word.
Tomorrow, and tomorrow, and tomorrow,
Creeps in this petty pace from day to day,
To the last syllable of recorded time;
And all our yesterdays have lighted fools
The way to dusty death. Out, out, brief candle!
Life’s but a walking shadow; a poor player,
That struts and frets his hour upon the stage,
And then is heard no more: it is a tale
Told by an idiot, full of sound and fury,
Signifying nothing.

Enter a Messenger.

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
  while (!outputBox.innerHTML.includes("***")) {
    run(3)
    outputBox.innerHTML = outputText
  }
}

//STUFF THAT RUNS ON LOAD

mainBody.addEventListener('load',loadFunc())
function loadFunc() {
  eatData(data)
  seedWhitelist = seedWhitelist.filter((k)=>!(seedBlacklist.includes(k)||punctuation.includes(k)))
  console.log("seedWhitelist:",seedWhitelist)
}