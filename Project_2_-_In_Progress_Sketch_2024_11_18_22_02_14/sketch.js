//Index statements and Array statements
let drawingArray = [];
let drawingIndex = 0;
let fortuneIndex = 0;
//States history per image.
let historyArray = [
  "A crow - 1720 - Tachibana Morikuni, A leading eighteenth century painter, illustrator and writer, Tachibana Morikuni was a master of both Kano and Tosa styles. A student of Tsuruzawa Tanzan, Morikuni lived and worked in Osaka.",
  "A singing bird- 1720 - Tachibana Morikuni, A leading eighteenth century painter, illustrator and writer, Tachibana Morikuni was a master of both Kano and Tosa styles. A student of Tsuruzawa Tanzan, Morikuni lived and worked in Osaka. ",
  "Coolie recruiting office - 1896 - Kobayashi Kiyochika, was a Japanese ukiyo-e artist, best known for his colour woodblock prints and newspaper illustrations. His work documents the rapid modernization and Westernization Japan underwent during the Meiji period (1868–1912)",
  "The English Balloonist Spencer - 1893 - Toyohara Kunichika, was a Japanese woodblock print artist. Talented as a child, at about thirteen he became a student of Tokyo's then-leading print maker, Utagawa Kunisada.",
  "Pulling the Elephant - 1852 - Utagawa Kunisada, also known as Utagawa Toyokuni III, was a Japanese ukiyo-e artist. He is considered the most popular, prolific and commercially successful designer of ukiyo-e woodblock prints in 19th-century Japan.",
  "The Falls at Aoigaoka in the Eastern Capital - 1832 - Katsuhika Hokusai, known mononymously as Hokusai, was a Japanese ukiyo-e artist of the Edo period, active as a painter and printmaker. His woodblock print series Thirty-Six Views of Mount Fuji includes the iconic print The Great Wave off Kanagawa. ",
  "The Repeller of Demons - 1852 - Utagawa Kunisada, also known as Utagawa Toyokuni III, was a Japanese ukiyo-e artist. He is considered the most popular, prolific and commercially successful designer of ukiyo-e woodblock prints in 19th-century Japan.  ",
  "The serious illness of a Russian warship - 1904 - Baido Hosai, originally named Takenouchi Hidehisa, was born in 1848. Active during the Meiji era, he gained recognition as a skilled woodblock printmaker. He is alternatively known by other artistic names, including Kunimasa IV, Kochoro, Kunisada III, and Toyokuni IV/V.",
  "The sinking of a train - 1904 - Baido Hosai, originally named Takenouchi Hidehisa, was born in 1848. Active during the Meiji era, he gained recognition as a skilled woodblock printmaker. He is alternatively known by other artistic names, including Kunimasa IV, Kochoro, Kunisada III, and Toyokuni IV/V. ",
  "Two women - one holding falcon, the other a small bird - 1781 - 1828 - Utagawa Toyohiro, birth name Okajima Tōjiro (1773–1828), was a Japanese ukiyo-e artist and painter. He was a member of the Utagawa school and studied under Utagawa Toyoharu, the school's founder. His works include a number of ukiyo-e landscape series, as well as many depictions of the daily activities in the Yoshiwara entertainment quarter. ",
  "White Rat - 1720 - Tachibana Morikuni, A leading eighteenth century painter, illustrator and writer, Tachibana Morikuni was a master of both Kano and Tosa styles. A student of Tsuruzawa Tanzan, Morikuni lived and worked in Osaka.",
  "Woman with letter (?) in belt - 1801 - 1825 - Ikeda Eisen, produced a number of surimono , erotic prints, and landscapes, including The Sixty-nine Stations of the Kiso Kaidō, which he started and which was completed by Hiroshige. "
];

//Fortunre line array
let fortuneArray = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "A dubious friend may be an enemy in camouflage.",
  "A faithful friend is a strong defense.",
  "A feather in the hand is better than a bird in the air.",
  "A fresh start will put you on your way",
  "A friend asks only for your time not your money",
  "A friend is a present you give yourself",
  "A gambler not only will lose what he has, but also will lose what he doesn’t have",
  "A golden egg of opportunity falls into your lap this month",
  "A good friendship is often more important than a passionate romance",
  "A good time to finish up old tasks",
  "A hunch is creativity trying to tell you something",
  "A lifetime friend shall soon be made",
  "A lifetime of happiness lies ahead of you",
  "A light heart carries you through all the hard times",
  "A new outlook brightens your image and brings new friends",
  "A new perspective will come with the new year",
  "A person is never to (sic) old to learn",
  "A person of words and not deeds is like a garden full of weeds",
  "A pleasant surprise is waiting for you",
  "A short pencil is usually better than a long memory any day",
  "A small donation is call for. It’s the right thing to do",
  "A smile is your personal welcome mat",
  "A smooth long journey! Great expectations",
  "A soft voice may be awfully persuasive",
  "A truly rich life contains love and art in abundance",
  "Accept something that you cannot change, and you will feel better",
  "Adventure can be real happiness",
  "Advice is like kissing. It costs nothing and is a pleasant thing to do",
  "Advice, when most needed, is least heeded",
  "All the effort you are making will ultimately pay off",
  "All the troubles you have will pass away very quickly",
  "All will go well with your new project",
  "All your hard work will soon pay off",
  "Allow compassion to guide your decisions",
  "An acquaintance of the past will affect you in the near future",
  "An agreeable romance might begin to take on the appearance",
  "An important person will offer you support",
  "An inch of time is an inch of-gold",
  "Any day above ground is a good day",
  "Any decision you have to make tomorrow is a good decision",
  "At the touch of love, everyone becomes a poet",
  "Be careful or you could fall for some tricks today",
  "Beauty in its various forms appeals to you",
  "Because you demand more from yourself, others respect you deeply",
  "Believe in yourself and others will too",
  "Believe it can be done",
  "Better ask twice than lose yourself once",
  "Bide your time, for success is near",
  "Carve your name on your heart and not on marble",
  "Chance favors those in motion",
  "Change is happening in your life, so go with the flow",
  "Competence like yours is underrated",
  "Congratulations! You are on your way",
  "Could I get some directions to your heart",
  "Courtesy begins in the home",
  "Courtesy is contagious",
  "Curiosity kills boredom. Nothing can kill curiosity",
  "Dedicate yourself with a calm mind to the task at hand",
  "Depart not from the path which fate has you assigned",
  "Determination is what you need now",
  "Diligence and modesty can raise your social status",
  "Disbelief destroys the magic",
  "Distance yourself from the vain",
  "Do not be intimidated by the eloquence of others",
  "Do not demand for someone’s soul if you already got his heart",
  "Do not let ambitions overshadow small success",
  "Do not make extra work for yourself",
  "Do not underestimate yourself. Human beings have unlimited potentials",
  "Do you know that the busiest person has the largest amount of time",
  "Don’t be discouraged, because every wrong attempt discarded is another step forward",
  "Don’t confuse recklessness with confidence",
  "Don’t expect romantic attachments to be strictly logical or rational",
  "Don’t just spend time. Invest it",
  "Don’t just think, act",
  "Don’t let friends impose on you, work calmly and silently",
  "Don’t let the past and useless detail choke your existence",
  "Don’t let your limitations overshadow your talents",
  "Don’t worry; prosperity will knock on your door soon",
  "Each day, compel yourself to do something you would rather not do",
  "Education is the ability to meet life’s situations",
  "Embrace this love relationship you have",
  "Emulate what you admire in your parents",
  "Emulate what you respect in your friends",
  "Every flower blooms in its own sweet time",
  "Every wise man started out by asking many questions",
  "Everyday in your life is a special occasion",
  "Everywhere you choose to go, friendly faces will greet you",
  "Expect much of yourself and little of others",
  "Failure is the chance to do better next time",
  "Failure is the path of lease persistence",
  "Fear and desire – two sides of the same coin",
  "Fearless courage is the foundation of victory",
  "Feeding a cow with roses does not get extra appreciation",
  "First think of what you want to do; then do what you have to do",
  "Follow the middle path. Neither extreme will make you happy",
  "For hate is never conquered by hate. Hate is conquered by love",
  "For the things we have to learn before we can do them, we learn by doing them",
  "Fortune Not Found: Abort, Retry, Ignore",
  "From listening comes wisdom and from speaking repentance",
  "From now on your kindness will lead you to success",
  "Get your mind set – confidence will lead you on",
  "Go for the-gold today! You’ll be the champion of whatever",
  "Go take a rest; you deserve it",
  "Good news will be brought to you by mail",
  "Good news will come to you by mail",
  "Good to begin well, better to end well",
  "Happiness begins with facing life with a smile and a wink",
  "Happiness will bring you good luck",
  "Happy life is just in front of you",
];

var sounds = [];

//Chime sound plays
let chime;

//Where font is stated.
let myFont;

//Frame Around Image
let frame;
let frameTwo;

let whistle;
let isRandomizing = false;

let colorBack = ("#f2f0ce");
//image preload for all images in assetfolder and preloads it for the drawing array
function preload() {
  frameTwo = loadImage("./archBack.png");
  sounds.push(loadSound('./whistle.mp3'));
  sounds.push(loadSound('./koto.mp3'));
  frame = loadImage("./FrameHolderCC.png");
  myFont = loadFont('./EduAUVICWANTPre-Medium.ttf');
  chime = loadSound("./chime.mp3");
  //Asighning Whistle.mp3 to var
  whistle = sounds[0]; 
  
  for(let i = 0; i < 12; i++){
    drawingArray[i] = loadImage("./assets/drawing-" + i + ".jpg");
    
  }
}


function setup() {
  var canvas = createCanvas(500,600);
  canvas.parent("sketch-holder");
  
  //Button that changes the fortune using the Array.
  var button1 = createButton("Test Your Fortune?");
  button1.parent("button-holder");
  //Calls function changeFortune
  button1.mousePressed(changeFortune);
  
  //Button that calls the drawings
  var button = createButton("Change Drawing?");
  button.parent("button-holder");
  //Calls the function changeDrawing
  button.mousePressed(startRandomizing);
  
  //Calls Link for button
  var button2 = createButton("More Info?");
  button2.parent("button-holder");
  //Calls function linkOpen
  button2.mousePressed(linkOpen);
  
  //Calls a random image when starting the project
  drawingIndex =  int(random(drawingArray.length));
  
  //Changes Font to the same font as the rest of the project
  textFont(myFont);
  //Original history
  updateHistoryText(); 
  
  
}

function draw() {
  background(colorBack);
  frameTwoPlace();
  if (isRandomizing) {
    // Change drawing index while whistle is playing
    drawingIndex = int(random(drawingArray.length));
    if (!whistle.isPlaying()) {
      // Stop randomizing when whistle ends
      isRandomizing = false;
      updateHistoryText();
    }
  }

  // Display current image and text
  image(drawingArray[drawingIndex], width/4, height/6, width/2, height/2);
  fill(0);
  textSize(20);
  textAlign(CENTER);
  //Fortune text before fortune is stated
  text("Your Chosen Fortune:", width/2, height * 0.8);
  textSize(10);
  text(fortuneArray[fortuneIndex], width/2, height * 0.85);
  image(frame, width/5.88235294, height/10.9090909, width/1.5, height/1.5);
}


function startRandomizing() {
  whistle.play();
  isRandomizing = true;
}

//Randoms the Fortune
function changeFortune()  {
  fortuneIndex = int(random(fortuneArray.length));
  chime.play();
  
}

//Researched for hours to figure out how to do this.
function updateHistoryText() {
  const historyTextElement = document.getElementById("image-history");
  if (historyTextElement) {
    historyTextElement.textContent = historyArray[drawingIndex];
  }
}

//Mouse Pressed Link
function linkOpen(){         window.open("https://digitalcollections.nypl.org/collections/japanese-prints#/?tab=navigation");
}

function frameTwoPlace(){
  image(frameTwo,width/10.14285714, height/1.42857143, width/1.26, height/3.33333333);
}

