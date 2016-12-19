var context = document.getElementById('can').getContext("2d");
var i = 10;
for(let a=0;a<5;a++){
  context.fillStyle=`rgb(${255 - (a * 30)}, 0, 0)`;
  context.fillRect(a*150,25,100,100);
}
for(let asd=0;asd<5;asd++){
  context.fillStyle=`rgb(0, ${255 - (asd * 30)}, 0)`;
  context.beginPath();
  context.moveTo(0+(asd*150),250);
  context.lineTo(100+(asd*150),250);
  context.lineTo(50+(asd*150),145);
  context.fill();
}
for(let b=0;b<5;b++){
  context.strokeStyle=`rgb(0,0,${255 - (b * 30)})`;
  context.lineWidth = b*3;
    context.beginPath();
    context.arc(b*150+30,350,60,0,Math.PI * (b + 1) * 0.3,false);
    //context.moveTo(1,65);
    context.stroke();
}
