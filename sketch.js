/*In my Coding Project 1, the face expressions (mouth, eyebrows, and eye size) are randomized each time the code runs, providing a unique combination of emotional expressions for each face.*/

/***************************
*  Name: Leroy-David Musa  *
*  Coding Project 1        *
/***************************/

//setup()
function setup() {
  createCanvas(800, 400);
  noLoop();
}

//draw()
function draw() {
  // striped background
  drawStripedBackground();

  // face drawings
  drawFaces();
}

//------ auxiliary functions from here ------
function drawStripedBackground() {
  let numStripes = 10;
  let stripeWidth = width / numStripes;
  
  //loop
  for (let i = 0; i < numStripes; i++) {
    // random colors
    let r = random(180, 255);
    let g = random(180, 255);
    let b = random(180, 255);
    fill(r, g, b);
    noStroke(); //no outline in stripes for better pop!
    rect(i * stripeWidth, 0, stripeWidth, height);  //draw stripe
  }
}

function drawFaces() {
  // face 1
  drawFace(150, 150, 120, 130, getRandomEyeSize(), getRandomColor(), getRandomMouthType(), 50, 30, getRandomColor(), '', 15, getRandomEyebrowType(), 'circle', getRandomSkinColor(), getRandomColor(), true);
  
  // face 2
  drawFace(350, 150, 130, 100, getRandomEyeSize(), getRandomColor(), getRandomMouthType(), 40, 15, getRandomColor(), 'straight', 10, getRandomEyebrowType(), 'square', getRandomSkinColor(), getRandomColor(), true);
  
  // face 3
  drawFace(450, 300, 100, 120, getRandomEyeSize(), getRandomColor(), getRandomMouthType(), 60, 40, getRandomColor(), 'straight', 30, getRandomEyebrowType(), 'rectangular', getRandomSkinColor(), getRandomColor(), false);
  
  // face 4
  drawFace(250, 300, 140, 140, getRandomEyeSize(), getRandomColor(), getRandomMouthType(), 50, 20, '', 'bald', 20, getRandomEyebrowType(), 'circle', getRandomSkinColor(), getRandomColor(), true);
  
  // face 5
  drawFace(620, 300, 140, 140, getRandomEyeSize(), getRandomColor(), getRandomMouthType(), 50, 20, '', 'bald', 20, getRandomEyebrowType(), 'circle', getRandomSkinColor(), getRandomColor(), true);
  
  // face 6
  drawFace(550, 150, 120, 130, getRandomEyeSize(), getRandomColor(), getRandomMouthType(), 50, 30, getRandomColor(), '', 15, getRandomEyebrowType(), 'circle', getRandomSkinColor(), getRandomColor(), true);
}

function drawFace(x, y, fw, fh, es, ec, mType, mw, mh, hc, hStyle, earSize, eyebrowType, faceShape, sc, mc, bothEarsVisible) {
  
  // x, y: position of the face (center)
  // fw, fh: face width and height
  // es: eye size
  // ec: eye color
  // mType: mouth type (smile, neutral, sad)
  // mw, mh: mouth width and height
  // hc: hair color
  // hStyle: hair style (straight, bald)
  // earSize: size of the ears
  // eyebrowType: type of eyebrows (thin, thick, curved)
  // faceShape: shape of the face (circle, square, rectangular)
  // sc: skin color (face color)
  // mc: mouth color
  // bothEarsVisible: boolean indicating if both ears are visible (true/false)
  
  stroke(0);         // Set stroke color to black for the face outline
  strokeWeight(1.5); // Set stroke thickness
  fill(sc);          // Set the face color
  
  if (faceShape === 'circle') {
    ellipse(x, y, fw, fh);
  } else if (faceShape === 'square') {
    rect(x - fw / 2, y - fh / 2, fw, fh, 20);
  } else if (faceShape === 'rectangular') {
    rect(x - fw / 2, y - fh / 2, fw * 0.8, fh, 10);
  }

  // Ear placements
  fill(sc);
  stroke(0);
  strokeWeight(1.5); 
  if (bothEarsVisible) { 
    drawear(x - fw / 2, y, earSize, sc); // Left ear
    drawear(x + fw / 2, y, earSize, sc); // Right ear
  } else {
    drawear(x - fw / 2, y, earSize, sc); // Facing to the side face
  }

  // Eyes
  fill(ec);
  stroke(0);
  strokeWeight(1.5);
  ellipse(x - fw / 4, y - fh / 6, es, es); // Left eye
  ellipse(x + fw / 4, y - fh / 6, es, es); // Right eye

  // Mouth
  fill(mc);  // Variable mouth color
  stroke(0);
  if (mType === 'smile') { // Happy
    arc(x, y + fh / 4, mw, mh, 0, PI, CHORD);
  } else if (mType === 'neutral') { // Neutral
    line(x - mw / 2, y + fh / 4, x + mw / 2, y + fh / 4);
  } else if (mType === 'sad') { // Sad
    arc(x, y + fh / 4, mw, mh, PI, 0, CHORD);
  }

  // Eyebrows
  stroke(0);
  strokeWeight(2); //thick eyebrows to make it pop!
  if (eyebrowType === 'thin') {
    line(x - fw / 4 - 10, y - fh / 4, x - fw / 4 + 10, y - fh / 4);
    line(x + fw / 4 - 10, y - fh / 4, x + fw / 4 + 10, y - fh / 4);
  } else if (eyebrowType === 'thick') {
    line(x - fw / 4 - 15, y - fh / 4, x - fw / 4 + 15, y - fh / 4);
    line(x + fw / 4 - 15, y - fh / 4, x + fw / 4 + 15, y - fh / 4);
  } else if (eyebrowType === 'curved') {
    noFill();
    arc(x - fw / 4, y - fh / 4, 30, 10, PI, TWO_PI);
    arc(x + fw / 4, y - fh / 4, 30, 10, PI, TWO_PI);
  }

  // Draw Hair
  drawHair(x, y, fw, fh, hc, hStyle);
}

function drawHair(x, y, fw, fh, hc, hStyle) {
  fill(hc);
  strokeWeight(1); // Hair should have a stroke as well
  if (hStyle === 'straight') {
    rect(x - fw / 2, y - fh / 2 - 18, fw, 40);
  } else if (hStyle === 'bald') {
    // Bald, no hair
  }
}

function drawear(x, y, earSize, fc) {
  strokeWeight(1); 
  fill(fc); // set ear color to match the face color
  push();
  translate(x, y); // move to ear position
  beginShape(); // start drawing ear
  vertex(0, -earSize / 2); // top of the ear
  // define ear shape with curves
  bezierVertex(earSize / 2, -earSize / 2, earSize / 2, earSize / 2, 0, earSize / 2);
  bezierVertex(-earSize / 2, earSize / 2, -earSize / 2, -earSize / 2, 0, -earSize / 2);
  endShape(CLOSE); // close the ear shape
  pop(); // restore original state
}

// Randomized Features!
function getRandomMouthType() {
  let mouthTypes = ['smile', 'neutral', 'sad']; //mouth expressions
  return random(mouthTypes);
}

function getRandomEyebrowType() {
  let eyebrowTypes = ['thin', 'thick', 'curved']; //eyebrow expressions
  return random(eyebrowTypes);
}

function getRandomColor() {
  return color(random(100, 255), random(100, 255), random(100, 255)); //random color for eyes, mouth, hair
}

function getRandomSkinColor() {
  return color(random(180, 255), random(180, 255), random(180, 255)); //random face tones
}

function getRandomEyeSize() {
  return random(10, 30);  //random eye size
}
