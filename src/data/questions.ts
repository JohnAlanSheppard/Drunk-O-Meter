import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "You try to take a selfie. What is the result?",
    answers: [
      { text: "Perfect angle, great lighting, post-worthy", score: 0 },
      { text: "Took 47 attempts, one looks okay-ish", score: 2 },
      { text: "You're in the photo. So is half the ceiling and someone's elbow", score: 4 },
      { text: "Your phone is now in selfie mode facing the wall", score: 5 }
    ]
  },
  {
    id: 2,
    text: "You attempt a pickup line. How does it go?",
    answers: [
      { text: "Smooth, charming, got their number", score: 0 },
      { text: "Decent opener, they smiled politely", score: 2 },
      { text: "You complimented their 'personality' while staring at their shoes", score: 4 },
      { text: "You asked if they believe in love at first sight, then immediately tripped", score: 5 }
    ]
  },
  {
    id: 3,
    text: "Someone bumps into you. Your reaction?",
    answers: [
      { text: "'No worries!' and continue on", score: 0 },
      { text: "Steady yourself and give them the side-eye", score: 2 },
      { text: "Aplogize profusely even though they hit you", score: 4 },
      { text: "Challenge them to a duel", score: 5 }
    ]
  },
  {
    id: 4,
    text: "Someone challenges you to karaoke. What do you do?",
    answers: [
      { text: "Politely decline, maybe another time", score: 0 },
      { text: "Accept, pick a safe crowd-pleaser", score: 2 },
      { text: "Belt out Bohemian Rhapsody despite knowing 3 words", score: 4 },
      { text: "Attempt opera in a language you don't speak", score: 5 }
    ]
  },
  {
    id: 5,
    text: "You need to use the restroom. How does it go?",
    answers: [
      { text: "Walk there normally, complete mission successfully", score: 0 },
      { text: "Bumped one wall, recovered gracefully", score: 2 },
      { text: "Used three walls for support, made it eventually", score: 4 },
      { text: "Tried the broom closet twice first", score: 5 }
    ]
  },
  {
    id: 6,
    text: "You scroll through your phone. What catches your attention?",
    answers: [
      { text: "Checking messages, reading news articles", score: 0 },
      { text: "Laughing at memes you've seen 400 times", score: 2 },
      { text: "Typing then deleting a risky text for 20 minutes", score: 4 },
      { text: "Watching videos with no sound trying to read lips", score: 5 }
    ]
  },
  {
    id: 7,
    text: "You order food. What comes out of your mouth?",
    answers: [
      { text: "Clear, articulate order with correct specifications", score: 0 },
      { text: "Mostly coherent, had to repeat the side order", score: 2 },
      { text: "Ordered a cheeseburger pizza taco supreme", score: 4 },
      { text: "You're pretty sure you just proposed marriage to the menu", score: 5 }
    ]
  },
  {
    id: 8,
    text: "How's your balance right now?",
    answers: [
      { text: "Perfectly steady, could walk a tightrope", score: 0 },
      { text: "Mostly good, occasional wobble", score: 2 },
      { text: "The floor is moving. Definitely moving.", score: 4 },
      { text: "You've become one with the wall", score: 5 }
    ]
  },
  {
    id: 9,
    text: "Time to send a text. What happens?",
    answers: [
      { text: "Type normally, reread, send with confidence", score: 0 },
      { text: "Few typos, autocorrect saved you", score: 2 },
      { text: "Sent 'Whetr arr yiu?' and hoped for the best", score: 4 },
      { text: "Sent 47 emojis and a screenshot of your lock screen", score: 5 }
    ]
  },
  {
    id: 10,
    text: "Your ex walks into the bar. You:",
    answers: [
      { text: "Wave politely, continue with your night", score: 0 },
      { text: "Strategically avoid eye contact for 2 hours", score: 2 },
      { text: "Loudly announce you're doing GREAT", score: 4 },
      { text: "Challenge them to shots while crying", score: 5 }
    ]
  },
  {
    id: 11,
    text: "Your reflection in the mirror looks back. What do you think?",
    answers: [
      { text: "'Looking good tonight!'", score: 0 },
      { text: "'Could be worse, could be better'", score: 2 },
      { text: "'Who is this attractive stranger?'", score: 4 },
      { text: "You wink at yourself for 3 minutes straight", score: 5 }
    ]
  },
  {
    id: 12,
    text: "You drop something on the floor. What's your move?",
    answers: [
      { text: "Bend down, pick it up, no big deal", score: 0 },
      { text: "Carefully squat down to maintain balance", score: 2 },
      { text: "Accidentally kick it under something unreachable", score: 4 },
      { text: "You're still trying to locate the floor", score: 5 }
    ]
  },
  {
    id: 13,
    text: "You try to stand up from your chair. What happens?",
    answers: [
      { text: "Stand up smoothly, no issues", score: 0 },
      { text: "One hand on the table for stability", score: 2 },
      { text: "Used both arms, made groaning noises", score: 4 },
      { text: "Negotiated with gravity, gravity won", score: 5 }
    ]
  },
  {
    id: 14,
    text: "How many drinks have you had? Be honest.",
    answers: [
      { text: "Zero to two, keeping it light", score: 0 },
      { text: "Three or four, feeling nice", score: 2 },
      { text: "Lost count around seven", score: 4 },
      { text: "You're now measuring in 'bottles' not 'drinks'", score: 5 }
    ]
  },
  {
    id: 15,
    text: "You try to flirt. How bad does it go?",
    answers: [
      { text: "Natural charm, making them laugh", score: 0 },
      { text: "Decent conversation, no disasters", score: 2 },
      { text: "Complimented their 'face structure' aggressively", score: 4 },
      { text: "You told them about your cryptocurrency investments", score: 5 }
    ]
  },
  {
    id: 16,
    text: "A random song plays. What do you proclaim?",
    answers: [
      { text: "'Oh I like this song'", score: 0 },
      { text: "'This is MY song!' (it's not)", score: 2 },
      { text: "'THIS SONG DEFINED MY CHILDHOOD!'", score: 4 },
      { text: "Start crying because 'the lyrics speak to you'", score: 5 }
    ]
  },
  {
    id: 17,
    text: "You accidentally text the wrong person. What were you trying to do?",
    answers: [
      { text: "Send a harmless meme, they'll understand", score: 0 },
      { text: "Sent a mild complaint to your mom instead of your friend", score: 2 },
      { text: "Sent a thirst trap to your boss", score: 4 },
      { text: "Declared your love to your dentist", score: 5 }
    ]
  },
  {
    id: 18,
    text: "Someone asks what drink you're on. You say:",
    answers: [
      { text: "'This is my second beer'", score: 0 },
      { text: "'Third... or fourth? But who's counting'", score: 2 },
      { text: "'Time is a construct, beverages are eternal'", score: 4 },
      { text: "Hold up fingers that don't match reality", score: 5 }
    ]
  },
  {
    id: 19,
    text: "You need to tell a story. How's your narration?",
    answers: [
      { text: "Clear, concise, entertaining storytelling", score: 0 },
      { text: "A bit rambly but got to the point", score: 2 },
      { text: "Started at the end, circled back three times", score: 4 },
      { text: "Forgot what you were talking about mid-sentence", score: 5 }
    ]
  },
  {
    id: 20,
    text: "You see someone attractive across the bar. What happens next?",
    answers: [
      { text: "Smile, maybe approach if vibes are right", score: 0 },
      { text: "Stare for way too long, then panic-look away", score: 2 },
      { text: "Send your friend to 'investigate' like middle school", score: 4 },
      { text: "Loudly announce your availability to anyone nearby", score: 5 }
    ]
  },
  {
    id: 21,
    text: "What's your walking style right now?",
    answers: [
      { text: "Normal stride, regular human walking", score: 0 },
      { text: "Slightly wider stance for stability", score: 2 },
      { text: "Zigzag pattern, claiming it's 'more fun'", score: 4 },
      { text: "You're basically doing the Macarena", score: 5 }
    ]
  },
  {
    id: 22,
    text: "You attempt to pay your tab. What happens?",
    answers: [
      { text: "Card out, payment made, tip calculated properly", score: 0 },
      { text: "Struggled with the card reader for a minute", score: 2 },
      { text: "Signed your name as a abstract squiggle", score: 4 },
      { text: "Tried to pay with your library card", score: 5 }
    ]
  },
  {
    id: 23,
    text: "Someone tells a joke. Your reaction:",
    answers: [
      { text: "Laugh appropriately at the punchline", score: 0 },
      { text: "Laugh a bit too hard, snort a little", score: 2 },
      { text: "Laugh before they finish, don't know why", score: 4 },
      { text: "Ask them to explain it three times", score: 5 }
    ]
  },
  {
    id: 24,
    text: "Rate your decision-making abilities right now:",
    answers: [
      { text: "Sharp, rational, making good choices", score: 0 },
      { text: "Decent, maybe one questionable decision", score: 2 },
      { text: "You just bought everyone shots you can't afford", score: 4 },
      { text: "You're planning to get a tattoo RIGHT NOW", score: 5 }
    ]
  },
  {
    id: 25,
    text: "How confident are you feeling?",
    answers: [
      { text: "Normal confidence levels, staying grounded", score: 0 },
      { text: "Pretty confident, feeling good", score: 2 },
      { text: "You could definitely win a bar fight with a bear", score: 4 },
      { text: "You've started referring to yourself in third person", score: 5 }
    ]
  },
  {
    id: 26,
    text: "You check your phone. What surprises you?",
    answers: [
      { text: "Normal notifications, nothing crazy", score: 0 },
      { text: "A few messages you don't remember receiving", score: 2 },
      { text: "37 photos of the ceiling", score: 4 },
      { text: "You've been live-streaming on accident", score: 5 }
    ]
  },
  {
    id: 27,
    text: "A bartender asks you a simple question. How do you reply?",
    answers: [
      { text: "Answer clearly and directly", score: 0 },
      { text: "Answer but had to think about it first", score: 2 },
      { text: "Answer a completely different question", score: 4 },
      { text: "Tell them your life story instead", score: 5 }
    ]
  },
  {
    id: 28,
    text: "You're offered another drink. Your response:",
    answers: [
      { text: "'No thanks, I'm good'", score: 0 },
      { text: "'Maybe just one more'", score: 2 },
      { text: "'YOLO!' then immediately regret it", score: 4 },
      { text: "'I am a responsible adult' while ordering three", score: 5 }
    ]
  },
  {
    id: 29,
    text: "Time check. What time do you think it is?",
    answers: [
      { text: "Check phone, accurate awareness", score: 0 },
      { text: "Off by about an hour", score: 2 },
      { text: "It's either 10pm or 3am, no in between", score: 4 },
      { text: "Time is a flat circle", score: 5 }
    ]
  },
  {
    id: 30,
    text: "You're asked to do math. How does it go?",
    answers: [
      { text: "Basic arithmetic, no problem", score: 0 },
      { text: "Used your phone calculator", score: 2 },
      { text: "Counting on fingers, showing your work", score: 4 },
      { text: "Numbers are just suggestions anyway", score: 5 }
    ]
  },
  {
    id: 31,
    text: "Your friends suggest leaving. Your reaction:",
    answers: [
      { text: "'Yeah, sounds good, let's go'", score: 0 },
      { text: "'Maybe one more drink first'", score: 2 },
      { text: "'But the night is YOUNG!' (it's 2am)", score: 4 },
      { text: "Start a protest chant", score: 5 }
    ]
  },
  {
    id: 32,
    text: "You're trying to remember someone's name. Status:",
    answers: [
      { text: "Got it, no problem", score: 0 },
      { text: "Took a second but got there", score: 2 },
      { text: "Called them 'buddy' for 30 minutes", score: 4 },
      { text: "Made up a nickname, they're 'Steve' now", score: 5 }
    ]
  },
  {
    id: 33,
    text: "Someone bumps into you again. This time:",
    answers: [
      { text: "Still polite, still cool about it", score: 0 },
      { text: "Getting slightly annoyed", score: 2 },
      { text: "Take it as an invitation to make a new friend", score: 4 },
      { text: "Declare them your arch-nemesis", score: 5 }
    ]
  },
  {
    id: 34,
    text: "You drop your drink. What do you say?",
    answers: [
      { text: "'Oops, accidents happen'", score: 0 },
      { text: "'Nooo, not the drink!'", score: 2 },
      { text: "Blame physics and gravity", score: 4 },
      { text: "Pour one out for the fallen homies", score: 5 }
    ]
  },
  {
    id: 35,
    text: "You need to find your friends. Your approach:",
    answers: [
      { text: "Look around calmly, spot them quickly", score: 0 },
      { text: "Check phone, send a 'where are you' text", score: 2 },
      { text: "Wander aimlessly while calling their names", score: 4 },
      { text: "Make a general announcement to the entire bar", score: 5 }
    ]
  },
  {
    id: 36,
    text: "Rate your volume control right now:",
    answers: [
      { text: "Speaking at normal, appropriate volumes", score: 0 },
      { text: "Slightly louder than necessary", score: 2 },
      { text: "WHAT DO YOU MEAN I'M YELLING", score: 4 },
      { text: "You're basically screaming whispers", score: 5 }
    ]
  },
  {
    id: 37,
    text: "A stranger waves at you. What do you do?",
    answers: [
      { text: "Wave back politely", score: 0 },
      { text: "Awkward half-wave, unsure if they meant you", score: 2 },
      { text: "Full enthusiastic wave like long-lost friend", score: 4 },
      { text: "Run over and hug them", score: 5 }
    ]
  },
  {
    id: 38,
    text: "You're telling a joke. How's it landing?",
    answers: [
      { text: "Good delivery, people are laughing", score: 0 },
      { text: "Decent response, couple chuckles", score: 2 },
      { text: "You're laughing more than anyone else", score: 4 },
      { text: "Forgot the punchline, made up a new one", score: 5 }
    ]
  },
  {
    id: 39,
    text: "You're asked to describe your night so far:",
    answers: [
      { text: "Coherent summary with timeline", score: 0 },
      { text: "General overview, few details fuzzy", score: 2 },
      { text: "Use only hand gestures and sound effects", score: 4 },
      { text: "'It all started in a previous life...'", score: 5 }
    ]
  },
  {
    id: 40,
    text: "Your phone is at 5% battery. Your reaction:",
    answers: [
      { text: "Find a charger, stay responsible", score: 0 },
      { text: "Mild panic but you'll survive", score: 2 },
      { text: "This is a CRISIS", score: 4 },
      { text: "Phone? What phone? You're free now", score: 5 }
    ]
  },
  {
    id: 41,
    text: "Someone suggests taking shots. You:",
    answers: [
      { text: "Politely decline, know your limits", score: 0 },
      { text: "'Maybe just one'", score: 2 },
      { text: "'I'll have whatever's strongest'", score: 4 },
      { text: "Suggest doing a round for everyone in the bar", score: 5 }
    ]
  },
  {
    id: 42,
    text: "You're making eye contact. How's that going?",
    answers: [
      { text: "Normal, appropriate eye contact", score: 0 },
      { text: "Occasionally zoning out mid-conversation", score: 2 },
      { text: "Intensely staring without blinking", score: 4 },
      { text: "Eyes are pointing in different directions", score: 5 }
    ]
  },
  {
    id: 43,
    text: "Your friend asks if you're okay. What's your answer?",
    answers: [
      { text: "'Yeah I'm good, thanks'", score: 0 },
      { text: "'I'm great!' (slightly too enthusiastic)", score: 2 },
      { text: "'I've never been better in my LIFE'", score: 4 },
      { text: "Start crying about something unrelated", score: 5 }
    ]
  },
  {
    id: 44,
    text: "You need to communicate something important. How clear are you?",
    answers: [
      { text: "Clear, direct, message received", score: 0 },
      { text: "Took a few tries but got the point across", score: 2 },
      { text: "Used interpretive dance as backup", score: 4 },
      { text: "Gave up and sent telepathic vibes instead", score: 5 }
    ]
  },
  {
    id: 45,
    text: "You're selecting music. What's your criteria?",
    answers: [
      { text: "Pick crowd favorites, read the room", score: 0 },
      { text: "Something upbeat everyone knows", score: 2 },
      { text: "Your deep cuts playlist from 2007", score: 4 },
      { text: "Death metal followed by opera", score: 5 }
    ]
  },
  {
    id: 46,
    text: "You try to multitask. Results:",
    answers: [
      { text: "Handle two things at once competently", score: 0 },
      { text: "One thing at a time is better actually", score: 2 },
      { text: "Started three tasks, finished none", score: 4 },
      { text: "Forgot what you were doing entirely", score: 5 }
    ]
  },
  {
    id: 47,
    text: "Someone mentions your ex. You:",
    answers: [
      { text: "Shrug it off, you're over it", score: 0 },
      { text: "Change subject slightly too quickly", score: 2 },
      { text: "Spend 20 minutes explaining why you're over it", score: 4 },
      { text: "Call them immediately to prove you're doing great", score: 5 }
    ]
  },
  {
    id: 48,
    text: "You're eating bar snacks. Describe your technique:",
    answers: [
      { text: "One at a time, civilized eating", score: 0 },
      { text: "Handful, slightly aggressive", score: 2 },
      { text: "Shove entire bowl toward your face", score: 4 },
      { text: "Miss your mouth, blame the peanuts", score: 5 }
    ]
  },
  {
    id: 49,
    text: "You try to quote a movie. How accurate is it?",
    answers: [
      { text: "Word for word, nailed it", score: 0 },
      { text: "Got the general idea across", score: 2 },
      { text: "Combined three different movies", score: 4 },
      { text: "Just made up a quote and insisted it's real", score: 5 }
    ]
  },
  {
    id: 50,
    text: "How's your spatial awareness?",
    answers: [
      { text: "Navigating easily, no collisions", score: 0 },
      { text: "Bumped into one thing, no big deal", score: 2 },
      { text: "Why is everything so close together?", score: 4 },
      { text: "The room is definitely spinning", score: 5 }
    ]
  },
  {
    id: 51,
    text: "You're complimented by someone. Your response:",
    answers: [
      { text: "'Thank you!' graciously", score: 0 },
      { text: "Deflect awkwardly but kindly", score: 2 },
      { text: "Agree too enthusiastically", score: 4 },
      { text: "Start listing all your other great qualities", score: 5 }
    ]
  },
  {
    id: 52,
    text: "You have an opinion about something. How are you sharing it?",
    answers: [
      { text: "Respectful discussion, open to other views", score: 0 },
      { text: "Slightly passionate but reasonable", score: 2 },
      { text: "This is your TED Talk now", score: 4 },
      { text: "Started a philosophical debate about pizza toppings", score: 5 }
    ]
  },
  {
    id: 53,
    text: "It's time to go home. Your exit strategy:",
    answers: [
      { text: "Say goodbyes, order rideshare, leave smoothly", score: 0 },
      { text: "Drawn-out goodbyes, 'one more minute'", score: 2 },
      { text: "Hug everyone multiple times", score: 4 },
      { text: "Irish goodbye but forgot your jacket", score: 5 }
    ]
  },
  {
    id: 54,
    text: "You're describing someone. How specific are you?",
    answers: [
      { text: "Clear details, helpful description", score: 0 },
      { text: "'You know, that person with the face'", score: 2 },
      { text: "Use only vague hand gestures", score: 4 },
      { text: "'The tall short person with the hair'", score: 5 }
    ]
  },
  {
    id: 55,
    text: "You're telling someone how much you appreciate them:",
    answers: [
      { text: "Sincere and appropriate", score: 0 },
      { text: "Getting a bit sappy", score: 2 },
      { text: "Full speech about your friendship", score: 4 },
      { text: "Crying while declaring them your soulmate", score: 5 }
    ]
  },
  {
    id: 56,
    text: "You need to make a phone call. Confidence level:",
    answers: [
      { text: "Dial, speak clearly, handle business", score: 0 },
      { text: "Slight hesitation but you got this", score: 2 },
      { text: "Rehearse what you'll say for 5 minutes first", score: 4 },
      { text: "Send a voice memo instead because phones are hard", score: 5 }
    ]
  },
  {
    id: 57,
    text: "Someone asks for advice. You give them:",
    answers: [
      { text: "Thoughtful, measured advice", score: 0 },
      { text: "Decent advice with personal anecdotes", score: 2 },
      { text: "Life-changing wisdom about topics you know nothing about", score: 4 },
      { text: "Ancient proverbs you just made up", score: 5 }
    ]
  },
  {
    id: 58,
    text: "You see someone you vaguely know. Your greeting:",
    answers: [
      { text: "'Hey! Good to see you!'", score: 0 },
      { text: "Panic-wave from across the room", score: 2 },
      { text: "Pretend you're best friends, can't remember their name", score: 4 },
      { text: "Hide behind the nearest person", score: 5 }
    ]
  },
  {
    id: 59,
    text: "You're trying to be sneaky. How's that going?",
    answers: [
      { text: "Subtle, no one noticed", score: 0 },
      { text: "Mostly subtle with one slip-up", score: 2 },
      { text: "Announced what you're doing while doing it", score: 4 },
      { text: "Knocked over three things while 'sneaking'", score: 5 }
    ]
  },
  {
    id: 60,
    text: "Rate your current memory:",
    answers: [
      { text: "Sharp, remembering everything clearly", score: 0 },
      { text: "Pretty good, few small gaps", score: 2 },
      { text: "The last hour is fuzzy", score: 4 },
      { text: "Wait, where are we again?", score: 5 }
    ]
  },
  {
    id: 61,
    text: "You're debating something trivial. Intensity level:",
    answers: [
      { text: "Light discussion, no big deal", score: 0 },
      { text: "Getting slightly heated but fun", score: 2 },
      { text: "This is the MOST important topic ever", score: 4 },
      { text: "Ready to write a dissertation on hot dog sandwich theory", score: 5 }
    ]
  },
  {
    id: 62,
    text: "You're trying to be funny. Success rate:",
    answers: [
      { text: "Landing jokes, people are laughing", score: 0 },
      { text: "Hit or miss, mostly hits", score: 2 },
      { text: "Only you find yourself hilarious", score: 4 },
      { text: "Making anti-jokes unintentionally", score: 5 }
    ]
  },
  {
    id: 63,
    text: "You attempt to dance. Describe the scene:",
    answers: [
      { text: "Decent moves, feeling the music", score: 0 },
      { text: "Rhythm is there... somewhere", score: 2 },
      { text: "Full interpretive dance to EDM", score: 4 },
      { text: "Invented a new form of movement", score: 5 }
    ]
  },
  {
    id: 64,
    text: "Someone asks 'where are you from?' You:",
    answers: [
      { text: "Answer with your hometown", score: 0 },
      { text: "Give them your whole geographic history", score: 2 },
      { text: "Start with your birth story", score: 4 },
      { text: "Existential response about origins of consciousness", score: 5 }
    ]
  },
  {
    id: 65,
    text: "You're planning tomorrow. How realistic are your plans?",
    answers: [
      { text: "Reasonable schedule, achievable goals", score: 0 },
      { text: "Slightly ambitious but doable", score: 2 },
      { text: "Gym at 6am after 4 hours sleep? Sure!", score: 4 },
      { text: "You're going to learn 3 languages and run a marathon", score: 5 }
    ]
  },
  {
    id: 66,
    text: "You're asked what you want to eat. Decision-making:",
    answers: [
      { text: "Know exactly what you want", score: 0 },
      { text: "Need a minute but you'll decide", score: 2 },
      { text: "List 47 options, choose none of them", score: 4 },
      { text: "'Surprise me' then reject all suggestions", score: 5 }
    ]
  },
  {
    id: 67,
    text: "How are your secrets staying secret?",
    answers: [
      { text: "Locked down, Fort Knox level", score: 0 },
      { text: "Safe for now, maybe slip tomorrow", score: 2 },
      { text: "Already told 3 people 'in confidence'", score: 4 },
      { text: "What secrets? You're an open book", score: 5 }
    ]
  },
  {
    id: 68,
    text: "Someone asks if you're having fun. Honest answer:",
    answers: [
      { text: "'Yes, nice time' proportional enthusiasm", score: 0 },
      { text: "'This is great!' slightly elevated", score: 2 },
      { text: "'BEST NIGHT OF MY LIFE'", score: 4 },
      { text: "Emotional speech about the meaning of friendship", score: 5 }
    ]
  },
  {
    id: 69,
    text: "You're using stairs. Status report:",
    answers: [
      { text: "Normal walking up/down, no issues", score: 0 },
      { text: "One hand on railing for safety", score: 2 },
      { text: "Both hands, taking one step at a time", score: 4 },
      { text: "Considered sitting and scooting", score: 5 }
    ]
  },
  {
    id: 70,
    text: "Someone tells you a secret. Your reaction:",
    answers: [
      { text: "'Your secret is safe with me'", score: 0 },
      { text: "Genuinely intend to keep it", score: 2 },
      { text: "Immediately tell your best friend 'in confidence'", score: 4 },
      { text: "Post a vague-tweet about it 5 minutes later", score: 5 }
    ]
  },
  {
    id: 71,
    text: "You're asked to describe your job. Clarity:",
    answers: [
      { text: "Clear, concise professional description", score: 0 },
      { text: "General field, few details", score: 2 },
      { text: "20-minute explanation that confuses everyone", score: 4 },
      { text: "'I'm basically Batman' (you work in IT)", score: 5 }
    ]
  },
  {
    id: 72,
    text: "There's a spill. You:",
    answers: [
      { text: "Alert staff, help clean it up", score: 0 },
      { text: "Point it out, step around it", score: 2 },
      { text: "Stare at it contemplatively", score: 4 },
      { text: "You ARE the spill", score: 5 }
    ]
  },
  {
    id: 73,
    text: "Someone's playing bad music. Your response:",
    answers: [
      { text: "Tolerate it, not your business", score: 0 },
      { text: "Make a face, keep opinions to yourself", score: 2 },
      { text: "Loudly critique their music taste", score: 4 },
      { text: "Start a petition to change songs", score: 5 }
    ]
  },
  {
    id: 74,
    text: "You're putting on a jacket. Complexity level:",
    answers: [
      { text: "One smooth motion, done", score: 0 },
      { text: "Needed two attempts", score: 2 },
      { text: "Fought with sleeves for 90 seconds", score: 4 },
      { text: "Gave up, it's a scarf now", score: 5 }
    ]
  },
  {
    id: 75,
    text: "Someone asks 'what are you thinking about?' Truth:",
    answers: [
      { text: "Honestly describe your actual thoughts", score: 0 },
      { text: "Give the polite version", score: 2 },
      { text: "Share the weird thought spiral", score: 4 },
      { text: "Can't remember, brain is just elevator music", score: 5 }
    ]
  },
  {
    id: 76,
    text: "You're making weekend plans. Ambition level:",
    answers: [
      { text: "Realistic activities with friends", score: 0 },
      { text: "Slightly overscheduled but possible", score: 2 },
      { text: "Plan 17 events between sunrise Saturday to noon Sunday", score: 4 },
      { text: "Booking flights to three countries", score: 5 }
    ]
  },
  {
    id: 77,
    text: "The music is loud. Your conversation strategy:",
    answers: [
      { text: "Lean in, project voice, communicate clearly", score: 0 },
      { text: "'WHAT?' only twice per sentence", score: 2 },
      { text: "Just nod and agree to everything", score: 4 },
      { text: "Full charades, gave up on words", score: 5 }
    ]
  },
  {
    id: 78,
    text: "You're looking for something you just put down. Where is it?",
    answers: [
      { text: "Right where you left it, found immediately", score: 0 },
      { text: "Took a minute but located", score: 2 },
      { text: "It's in your hand", score: 4 },
      { text: "Accusing others of stealing it", score: 5 }
    ]
  },
  {
    id: 79,
    text: "Rate your current filter:",
    answers: [
      { text: "Thinking before speaking, appropriate comments", score: 0 },
      { text: "Said one thing you maybe shouldn't have", score: 2 },
      { text: "Filter? What filter?", score: 4 },
      { text: "Sharing every thought as it happens", score: 5 }
    ]
  },
  {
    id: 80,
    text: "You need to find an exit. Navigation skills:",
    answers: [
      { text: "See it, walk toward it, easy", score: 0 },
      { text: "Took scenic route but got there", score: 2 },
      { text: "Three wrong turns, found bathroom twice", score: 4 },
      { text: "You're now in the kitchen somehow", score: 5 }
    ]
  },
  {
    id: 81,
    text: "Someone asks if you're cold. You:",
    answers: [
      { text: "Give accurate temperature assessment", score: 0 },
      { text: "'A little but I'm fine'", score: 2 },
      { text: "20-minute analysis of thermal dynamics", score: 4 },
      { text: "Can't feel your face, assume that's normal", score: 5 }
    ]
  },
  {
    id: 82,
    text: "You're selecting a drink. Decision process:",
    answers: [
      { text: "Know what you want, order it", score: 0 },
      { text: "Debate between two options", score: 2 },
      { text: "Ask bartender to 'surprise you'", score: 4 },
      { text: "Point at random bottle and hope", score: 5 }
    ]
  },
  {
    id: 83,
    text: "Someone mentions a current event. Your take:",
    answers: [
      { text: "Informed opinion, civil discussion", score: 0 },
      { text: "Vaguely remember hearing about it", score: 2 },
      { text: "Confuse it with a movie plot", score: 4 },
      { text: "Conspiracy theory you made up on the spot", score: 5 }
    ]
  },
  {
    id: 84,
    text: "You're trying to remember a name. Tactics:",
    answers: [
      { text: "Got it right away", score: 0 },
      { text: "Had to think but retrieved it", score: 2 },
      { text: "Describe them to others hoping someone knows", score: 4 },
      { text: "'Hey you!' for the next 2 hours", score: 5 }
    ]
  },
  {
    id: 85,
    text: "How's your poker face?",
    answers: [
      { text: "Excellent, keeping thoughts private", score: 0 },
      { text: "Decent, few tells slipping through", score: 2 },
      { text: "Every thought is on your face", score: 4 },
      { text: "You're narrating your thoughts out loud", score: 5 }
    ]
  },
  {
    id: 86,
    text: "Someone asks for your opinion on their outfit. Honesty:",
    answers: [
      { text: "Tactful truth, helpful feedback", score: 0 },
      { text: "White lie to protect feelings", score: 2 },
      { text: "Brutal honesty they didn't ask for", score: 4 },
      { text: "Start redesigning their entire wardrobe", score: 5 }
    ]
  },
  {
    id: 87,
    text: "You're trying to be supportive. Execution:",
    answers: [
      { text: "Appropriate comfort and encouragement", score: 0 },
      { text: "Well-meaning but slightly awkward", score: 2 },
      { text: "Share your own problems instead", score: 4 },
      { text: "Turn it into interpretive dance", score: 5 }
    ]
  },
  {
    id: 88,
    text: "What's your relationship with gravity right now?",
    answers: [
      { text: "Mutually respectful, stable", score: 0 },
      { text: "Testing boundaries occasionally", score: 2 },
      { text: "Currently in negotiations", score: 4 },
      { text: "Open hostility, gravity is winning", score: 5 }
    ]
  },
  {
    id: 89,
    text: "You're asked to read something. Results:",
    answers: [
      { text: "Read clearly, comprehended content", score: 0 },
      { text: "Squinting but managing", score: 2 },
      { text: "Words are dancing", score: 4 },
      { text: "Pretty sure that's English but can't confirm", score: 5 }
    ]
  },
  {
    id: 90,
    text: "Someone says something ridiculous. Your reaction:",
    answers: [
      { text: "Polite skepticism, ask questions", score: 0 },
      { text: "Visible confusion but staying quiet", score: 2 },
      { text: "Agree enthusiastically with their nonsense", score: 4 },
      { text: "Add even more ridiculous claims", score: 5 }
    ]
  },
  {
    id: 91,
    text: "You're trying to be mysterious. How's it working?",
    answers: [
      { text: "Subtle intrigue, working well", score: 0 },
      { text: "More confusing than mysterious", score: 2 },
      { text: "Just being weird", score: 4 },
      { text: "Everyone is concerned about you", score: 5 }
    ]
  },
  {
    id: 92,
    text: "Coordination check - touch your nose:",
    answers: [
      { text: "Direct hit, no problem", score: 0 },
      { text: "Got there after brief recalibration", score: 2 },
      { text: "Hit your cheek, close enough", score: 4 },
      { text: "Poked yourself in the eye", score: 5 }
    ]
  },
  {
    id: 93,
    text: "How's your sense of time passing?",
    answers: [
      { text: "Accurate awareness, tracking time well", score: 0 },
      { text: "Slightly slower/faster than reality", score: 2 },
      { text: "5 minutes feels like an hour or vice versa", score: 4 },
      { text: "Time is soup", score: 5 }
    ]
  },
  {
    id: 94,
    text: "Someone asks what you do for fun. You describe:",
    answers: [
      { text: "Actual hobbies you regularly do", score: 0 },
      { text: "Things you did once in 2019", score: 2 },
      { text: "Hobbies you've only considered having", score: 4 },
      { text: "An elaborate lie about extreme sports", score: 5 }
    ]
  },
  {
    id: 95,
    text: "You're attempting to whisper. Volume check:",
    answers: [
      { text: "Actual whisper, very quiet", score: 0 },
      { text: "Loud whisper, meant well", score: 2 },
      { text: "Regular speaking voice with intense eye contact", score: 4 },
      { text: "Accidentally shouted the secret", score: 5 }
    ]
  },
  {
    id: 96,
    text: "Someone asks for directions. Your guidance:",
    answers: [
      { text: "Clear landmarks, turn-by-turn instructions", score: 0 },
      { text: "General direction, approximate distance", score: 2 },
      { text: "Gesture vaguely, 'over there somewhere'", score: 4 },
      { text: "Give them a quest with riddles", score: 5 }
    ]
  },
  {
    id: 97,
    text: "You're trying to make a point. Clarity:",
    answers: [
      { text: "Articulate, well-reasoned argument", score: 0 },
      { text: "Solid point with minor rambling", score: 2 },
      { text: "Lost the thread halfway through", score: 4 },
      { text: "Made opposite point you intended", score: 5 }
    ]
  },
  {
    id: 98,
    text: "Rate your situational awareness:",
    answers: [
      { text: "Aware of surroundings and social dynamics", score: 0 },
      { text: "Generally tuned in, minor blind spots", score: 2 },
      { text: "Tunnel vision on one thing", score: 4 },
      { text: "What situation? Where are we?", score: 5 }
    ]
  },
  {
    id: 99,
    text: "You're asked to recommend something. Quality of rec:",
    answers: [
      { text: "Thoughtful suggestion based on their tastes", score: 0 },
      { text: "Decent recommendation, a bit generic", score: 2 },
      { text: "Recommend your personal favorite regardless", score: 4 },
      { text: "Recommend something you've never tried", score: 5 }
    ]
  },
  {
    id: 100,
    text: "Final question - how drunk do YOU think you are?",
    answers: [
      { text: "Completely sober, clear-headed", score: 0 },
      { text: "Slightly buzzed, still got it together", score: 2 },
      { text: "Pretty drunk but functioning", score: 4 },
      { text: "What are we talking about again?", score: 5 }
    ]
  }
];

