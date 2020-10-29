// movement
 const card=document.querySelector('.card');
 const container=document.querySelector('.container');



 const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info');
const sizes = document.querySelector('.sizes');



//  movement animation
container.addEventListener('mousemove', (e) => {
   
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.tranform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener("mouse", (e) =>{
    card.style.transition="none";
    title.style.tranform="translateZ(150px)";
    sneaker.style.tranform="translateZ(200px) rotateZ(-45deg)
    description.style.tranform="translateZ(120px)";
    purchase.style.tranform="translateZ(100px)";
    sizes.style.tranform="translateZ(70px)";
});
container.addEventListener('mouseenter', e =>{
card.style.transition='none';
});
container.addEventListener('mouseLeave', e => {
card.style.transition= "all 0.5s ease";
card.style.tranform = `rotateY(0deg) rotateX(0deg)` ;
title.sytle.tranform= "translateZ(0px)";
sneaker.style.tranform="translateZ(0px) rotateZ(0deg)";
description.style.tranform="translateZ(0px)";
purchase.style.tranform="translateZ(0px)";
sizes.style.tranform="translateZ(0px)";
});









 
 
 
 
 

 
 

 
 
 
 
 
 


 
 



 
 
 
 
 
 
 































