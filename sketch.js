let images = []; // for image positions
let texts = [];  // for text objects
let textBox;
let timer = 0;
let interval = 30;
let words = ['p5.js', 'is', 'a', 'JavaScript', 'library', 'for', 'creative',
  'coding', 'with', 'a', 'focus', 'on', 'making', 'coding', 'accessible', 'and',
  'inclusive', 'for', 'artists', 'designers', 'educators', 'beginners', 'and',
  'anyone', 'else!', 'p5.js', 'is', 'free', 'and', 'open-source', 'because', 
  'we', 'believe', 'software', 'and', 'the', 'tools', 'to', 'learn', 'it',
  'should', 'be', 'accessible', 'to', 'everyone', 'Using', 'the', 'metaphor',
  'of', 'a', 'sketch', 'p5.js', 'has', 'a', 'full', 'set', 'of', 'drawing',
  'functionality', 'However', "you're", 'not', 'limited', 'to', 'your',
  'drawing', 'canvas', 'You', 'can', 'think', 'of', 'your', 'whole', 'browser',
  'page', 'as', 'your', 'sketch', 'including', 'HTML5', 'objects', 'for', 'text',
  'input', 'video', 'webcam', 'and', 'sound'];


function preload (){
  textBox = loadImage("Text.png");
}

function setup() {
  background(55,0,0);
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont("Helvetica");
  colorMode(HSB);
 
}
 
function draw() {
 background(55,0,0)// dark blue
  // Draw all images
  for (let pos of images) {
    image(textBox, pos.x, pos.y, textBox.width / 20, textBox.height / 20);
  }

  // Draw all words
  for (let t of texts) {
    fill(t.color);
    textSize(t.size);
    text(t.text, t.x, t.y);
  }

  // Every interval frames, add image + text
  timer++;
  if (timer % interval === 0 && images.length < 30) {

    let newX = random(0, windowWidth);
    let newY = random(0, windowHeight);
    images.push({x: newX, y: newY});

    
    let word = random(words);
    let fontSize = random(16, 36);
    let hue = random(180, 360);
    let brightness = random(80, 100);
    texts.push({
      text: word,
      x: random(0, windowWidth),
      y: random(0, windowHeight),
      size: fontSize,
      color: color(hue, 80, brightness)
    });
  }
}
