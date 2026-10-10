/* =====================================================================
   config.js : EDIT THIS FILE to change names, words and settings.
   Open it in Notepad (or VS Code), change the text inside the quotes,
   save, and refresh the page in your browser.
   Keep the quotes " ", commas , and brackets [ ] exactly as they are.
   ===================================================================== */

const NAME   = "Sou";       // her name (used all over the site)
const AGE    = 20;          // her age this birthday
const PW     = "2004";      // opening password = your birthday as DDMM   (20 April -> 2004)
const SINCE  = 0;           // year you became friends, e.g. 2012  (0 = hide the "years of us" line)
const SCHOOL = "Vidyasagar Shishu Niketan";   // school name on the School page

// Photo numbers below = file numbers in the photos/ folder  (1 = photos/01.jpg, 2 = photos/02.jpg ...)
const GATE_PHOTO    = 9;                      // photo shown inside the giant name + the big "20"
const GATE_CORNERS  = [7, 11, 13, 10];        // 4 small polaroids on the opening page
const MEMORY_PHOTOS = [7, 8, 9, 10, 11, 13, 18, 21];   // 8 photos used in the memory game

// ---- Handwritten captions under the polaroids (they repeat in order)
const CAP = [
  "my favourite",
  "that smile",
  "caught you",
  "golden hour",
  "pure magic",
  "can't look away",
  "just you",
  "always",
  "so pretty",
  "the vibe",
  "hello, sunshine",
  "forever",
];

// ---- THE LETTER (page: Letter). Write it normally, press Enter for new lines.
const LETTER = `Dear ${NAME},

They say the best things can't be planned. They just walk in and rearrange everything. That's what you did.

Your laugh has become my favourite sound, and your smile quietly fixes days I never even told you were bad. I built this little corner of the internet because ordinary words felt too small for you.

On your birthday I wish you slow mornings, loud laughter, endless chai, and a year that loves you back as much as you deserve.

Happy Birthday, beautiful. ♥

Yours always,
smiling because of you`;

// ---- 12 little reasons (page: Jar of Notes)
const REASONS = [
  "Your smile rewrites my whole day.",
  "You're the calm inside my loudest moments.",
  "The way your eyes light up for good food.",
  "You turn ordinary streets into movie scenes.",
  "Your kindness, even when nobody's watching.",
  "You look unfairly good in every single photo.",
  "Your laugh. Obviously.",
  "You're brave in the quietest ways.",
  "You remember the tiny things.",
  "Your voice notes could fix anything.",
  "You make me want to be better.",
  "Because it's you. Always you.",
];

// ---- Our Story chapters:  [ "title", "text", [photo number, photo number] ]
const CH = [
  ["Hello, you", "Some people walk in like they were always meant to be there. You did.", [9, 4]],
  ["Coffee & chaos", "Tables for two, cold drinks, and conversations that never really end.", [2, 8]],
  ["Golden hours", "Sunsets look better when you're in the frame.", [10, 20]],
  ["Lights, music, us", "Nights that glow a little brighter beside you.", [6, 19]],
  ["Quiet moments", "The small, still ones are my favourites.", [13, 1]],
  ["And now, 16 October", "Another trip around the sun, and the world gets to have you for one more year.", [11, 18]],
];

// ---- School memories:  [ "emoji", "title", "text" ]
const SCH = [
  ["🎒", "Day one", "The first time we sat together, neither of us knew we would never really leave that bench."],
  ["🍱", "Tiffin treaties", "You always “just wanted a bite” and somehow finished half my lunch. I never once minded."],
  ["📓", "Notes & whispers", "Folded paper, secret codes, and giggling in the middle of class until the teacher noticed."],
  ["🏃", "Bad ideas, best stories", "Terrible plans that somehow became the stories we still laugh about."],
  ["🎓", "The last bell", "We said we would stay in touch, and for once we actually meant it."],
  ["💞", "And somehow, still us", "Different lives, busy days, same you and me. Years later, you are still my first call."],
];

// ---- Fortune teller answers (8 of them, keep exactly 8)
const FT = [
  "This year someone will say yes to your wildest idea. (Hint: it's me.)",
  "A trip you keep postponing will finally happen.",
  "Your next favourite song will find you on a quiet evening.",
  "You will laugh so hard this year your stomach will hurt, at least twelve times.",
  "A tiny surprise is waiting for you soon. Keep an eye on your phone 😉",
  "Someone close to you thinks about you far more than you know.",
  "The answer you have been waiting for is yes.",
  "You are going to be unreasonably happy this year.",
];

// ---- Home page "Where to next?" list:  [ "page", "title", "small text", photo number ]
const CT = [
  ["/gallery", "The Polaroid Wall", "every frame, pinned up", 7],
  ["/school", "Since School Days", "the back bench years", 9],
  ["/story", "Our Story", "chapters written in laughter", 11],
  ["/letter", "A Letter", "sealed with a heart", 13],
  ["/reasons", "Jar of Notes", "twelve little reasons", 10],
  ["/cake", "Your Cake", "light it, wish, blow", 18],
  ["/play", "Games", "memory & catch the hearts", 21],
  ["/fortune", "Fortune Teller", "the paper kind, from class", 8],
  ["/surprise", "One More Thing", "a very small question", 22],
];
