var hr,mim,sec;
var hrangle,secangle,minangle;
const THS = 12;
const TFHS =24;
var currentState = THS;

function setup() {
  createCanvas(windowWidth,windowHeight);
   angleMode(DEGREES)
}

function draw() {
  if(currentState === THS){
    background("black");
    stroke("white")
    textSize(40)
    text(hr%12+":"+min+":"+sec,windowWidth/2-60,100)
    
    translate(windowWidth/2,windowHeight/2)
    rotate(-90)
    //calculating  time using predefined function
    hr = hour();
    min= minute();
    sec = second();
  
 
 if(touches.length>0){
   currentState=TFHS
 touches=[];
}
    //to create interactive rotation
    secangle= map(sec,0,60,0,360);
    minangle= map(min,0,60,0,360);
    hrangle= map(hr%12,0,12,0,360);
    //second hand
    push();
    rotate(secangle);
   
    stroke("green");
    strokeWeight(5);
    line(0,0,100,0);
    pop();
  
    //minute hand
    push();
    rotate(minangle);
    
    stroke("yellow");
    strokeWeight(5);
    line(0,0,80,0);
    pop();
  
    //hour hand
    push();
    rotate(hrangle);
    
    stroke("blue");
    strokeWeight(5);
    line(0,0,50,0);
    pop();
  
    stroke("blue");
    point(0,0);
   
    //drawing arc
    strokeWeight(8);
    noFill();
    stroke("green")
    arc(0,0,300,300,0,secangle);
    stroke("yellow")
    arc(0,0,280,280,0,minangle);
    stroke("blue")
    arc(0,0,260,260,0,hrangle);
  
    
    
  }

  if(currentState===TFHS){
    background("black");
    stroke("white")
    textSize(40)
    text(hr+":"+min+":"+sec,windowWidth/2-60,100)
    
    translate(windowWidth/2,windowHeight/2)
    rotate(-90)
    //calculating  time using predefined function
    hr = hour();
    min= minute();
    sec = second();
  
   if(touches.length>0){
    currentState=THS
  touches=[];
 }
    //to create interactive rotation
    secangle= map(sec,0,60,0,360);
    minangle= map(min,0,60,0,360);
    hrangle= map(hr%12,0,12,0,360);
    //second hand
    push();
    rotate(secangle);
   
    stroke("green");
    strokeWeight(5);
    line(0,0,100,0);
    pop();
  
    //minute hand
    push();
    rotate(minangle);
    
    stroke("yellow");
    strokeWeight(5);
    line(0,0,80,0);
    pop();
  
    //hour hand
    push();
    rotate(hrangle);
    
    stroke("blue");
    strokeWeight(5);
    line(0,0,50,0);
    pop();
  
    stroke("blue");
    point(0,0);
   
    //drawing arc
    strokeWeight(8);
    noFill();
    stroke("green")
    arc(0,0,300,300,0,secangle);
    stroke("yellow")
    arc(0,0,280,280,0,minangle);
    stroke("blue")
    arc(0,0,260,260,0,hrangle);
  
    
    
  }
}
