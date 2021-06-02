'use strict';
let nextA =document.querySelector(".right-arrow");
let prewA =document.querySelector(".left-arrow");
let vision =document.querySelector(".vision");
let vision2 =document.querySelectorAll(".vision");
let wrapslider =document.querySelector(".wrap-slider");
let maxWidth = null;
window.addEventListener('load', function(){
maxWidth = vision2[0].children.length * vision2[0].children[0].offsetHeight;

});
let indexSlider = Number(vision.style.left);
nextA.addEventListener('click', function(){
    indexSlider = indexSlider-318
    vision.style.left =  indexSlider+'px';
    if(indexSlider===maxWidth*(-1)-(318*(-2))){
        vision.style.left = 0+'px';
        indexSlider = 0;
    }    
});
prewA.addEventListener('click', function(){
    indexSlider = indexSlider+318
    vision.style.left =  indexSlider+'px';
    if(indexSlider>0){
        vision.style.left = maxWidth*(-1)-vision2[0].children[0].offsetHeight*(-2)+'px';
        indexSlider = maxWidth*(-1)-vision2[0].children[0].offsetHeight*(-4);
    }
});
