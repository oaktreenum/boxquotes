//Allon Goldberg



let table, i
let wW, wH
let ts

function preload() {
  table = loadTable('assets/quotes.csv', 'csv')
}


function setup() {
  wW = windowWidth
  wH = windowHeight
  createCanvas(wW, wH)
   i = int(random(table.getRowCount()))
}

function draw() {
  background('rgb(196, 224, 236)')
  let sl = table.getString(i,0).length/60
  sl = 16/(sl)
  
  
  
  
  //quote
  fill('rgba(0,0,0, 0.64)')
  textStyle(ITALIC)
  textAlign(LEFT, TOP)
  textFont('abril fatface')
  textSize(32+sl)
  rectMode(CORNERS)
  text(table.getString(i,0),wW/4,216, wW/2, wH/2)
  
  
  textSize(16)
  //person
  fill('rgba(0,0,0, 0.24)')
  textStyle(BOLD)
  textAlign(LEFT, TOP)
  textFont('helvetica neue')
  textSize(18)
  rectMode(CORNER)
  text(table.getString(i,1),wW/20+wW/2,wH/2+100,3/4*wW,2/3*wH)
  
  //title
  textAlign(LEFT, TOP)
  textStyle(ITALIC)
  rectMode(CORNER)
  textSize(12)
  text(table.getString(i,2),2+wW/20+wW/2,wH/2 + 124, wW/6, wH)
  
  //Chi citation
  fill('rgba(0,0,0, 0.64)')
  textFont('IBM Plex Mono')
  
  textStyle(ITALIC)
  textSize(8)
  textAlign(RIGHT, BOTTOM)
  rectMode(CORNERS)
  text(table.getString(i,3),5*wW/6-36,0, wW/6,wH-36)

  
}




/*
Divine, Mark. 2016. “A Navy Seal Breathing Technique to Stay Calm and Focused.” Time. May 4, 2016. https://time.com/4316151/breathing-technique-navy-seal-calm-focused/.

Nazish, Noma. 2019. “How To De-Stress In 5 Minutes Or Less, According To A Navy SEAL.” Forbes. May 30, 2019. https://www.forbes.com/sites/nomanazish/2019/05/30/how-to-de-stress-in-5-minutes-or-less-according-to-a-navy-seal/.

Publishing, Harvard Health. 2014. “Breath Meditation: A Great Way to Relieve Stress.” Harvard Health. April 2014. https://www.health.harvard.edu/mind-and-mood/breath-meditation-a-great-way-to-relieve-stress.

Publishing, Harvard Health. 2015. “Relaxation Techniques: Breath Control Helps Quell Errant Stress Response.” Harvard Health. January 2015. https://www.health.harvard.edu/mind-and-mood/relaxation-techniques-breath-control-helps-quell-errant-stress-response.

Vozza, Stephanie. 2019. “These Navy SEAL Tricks Will Help You Perform Better under Pressure.” Fast Company. May 25, 2019. https://www.fastcompany.com/90354456/these-navy-seal-tricks-will-help-you-perform-better-under-pressure.

Zaccaro, Andrea, Andrea Piarulli, Marco Laurino, Erika Garbella, Danilo Menicucci, Bruno Neri, and Angelo Gemignani. 2018. “How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing.” Frontiers in Human Neuroscience 12 (September). https://doi.org/10.3389/fnhum.2018.00353.



WHY BOX BREATHING: https://www.sciencedirect.com/science/article/abs/pii/S0167876013003346
*/