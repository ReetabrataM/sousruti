SOU BIRTHDAY WEBSITE: how to use and edit
==========================================

OPEN IT
  Double click index.html (any browser). Internet is only needed for the fonts.

PASSWORD
  Your birthday as DDMM. 20 April = 2004

THE FILES (what to edit)
  js/config.js   THE ONE TO EDIT: her name, age, password, the letter,
                 12 reasons, story chapters, school memories, fortunes.
  js/photos.js   list of photos. The photos/ folder holds the pictures.
  css/style.css  colours (top of the file) and design.
  music/husn.mp3       background song. Plays after she unlocks, loops.
  music/birthday.mp3   birthday song. Plays when she cuts the cake. Husn pauses
                       meanwhile and starts again when she leaves the Cake page.
                       (Missing file = a simple built-in tune plays instead.)
  images/school.jpg    a real school photo (optional).
  js/pages/      one file per page (home.js, gallery.js, cake.js ...).
  js/core.js and js/app.js are the engine. Normally no need to touch them.

CHANGE A PHOTO  overwrite photos/05.jpg with another picture (same name).
ADD A PHOTO     copy it into photos/ and add 'photos/24.jpg', to js/photos.js
CHANGE TEXT     open js/config.js in Notepad, edit the words inside the quotes, save, refresh.

PUT IT ONLINE (free): go to https://app.netlify.com/drop and drag this whole
folder onto the page (keep the music and images folders inside it).
