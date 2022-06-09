const tree=document.getElementsByClassName('tree')[0];
const flower = document.getElementById('flower')
const clouds=document.getElementById("clouds")
const gazar = document.getElementsByClassName('gazar')[0];
const line  = document.querySelectorAll(".line");
const grass = document.getElementsByClassName("grass")[0];

for(let i = 0 ; i<line.length; i++){
     line[i].style.opacity = "0"
}
console.log(line)
// line.style.opacity = "0"
// console.log(x)

// line.style.opacity = "0"
let tween=new TimelineLite();
let controller=new ScrollMagic.Controller();

const modanim = tween.fromTo(tree ,10,{width:5,height:5,},{width:30+"%",height:70+"%"})

.from(line , 7 ,{opacity:1 ,} , {opacity:0,})

.from(flower ,7,{width:0,height:0},{width:2+"%",height:5+"%"} )

.from(grass , 7 ,{bottom: 10 + "vh"} , {bottom: 14 + "vh"} )

.fromTo(gazar , 7 , 
     { backgroundImage: 'linear-gradient(transparent 0%, rgb(217, 188, 152) 3.5%, rgb(107, 78, 50) 100%)' }, 
     {backgroundImage: 'linear-gradient(transparent 0%, rgb(107, 78, 50) 5%, rgb(107, 78, 50) 5%)'} , "-=7"
)
.fromTo(".grassfirst" ,  7   , {opacity: 0} , {opacity: 1}, "-=7")
.fromTo(".grass1one" ,7, {opacity: 0} , {opacity: 1})
.fromTo(".grass1" ,7, {opacity: 0} , {opacity: 1}, "-=6.5")

.fromTo(".grass2two" ,7, {opacity: 0} , {opacity: 1})
.fromTo(".grass2" ,7, {opacity: 0} , {opacity: 1}, "-=6.5")

// { backgroundImage: 'linear-gradient(transparent 0%,rgb(181, 153, 122) 0%, rgb(107, 78, 50) 90%)' }, 
// {backgroundImage: 'linear-gradient(transparent 0%, rgb(181, 153, 122) 0%, rgb(107, 78, 50) 5%)'}

let scene1=new ScrollMagic.Scene({
     triggerElement:".urgahheseg",
     duration:3000,
     triggerHook:0,
})
.setTween(modanim)
.setPin('.urgahheseg')
.addIndicators()
.addTo(controller)


function gg() {
     scene1.on("update" , e =>{
          scrollpos = e.scrollPos / 100
          console.log(scrollpos)
          gazar.style.background = "linear-gradient(#b5997a 0%, #3a2316 ${`scrollpos`}0%)"

          // if(scrollpos>=4000){
          //      gazar.style.background = "linear-gradient(#3a2316, #3a2316)"
          // }
          // else {
          //      gazar.style.background = "linear-gradient(#b5997a 0%, #3a2316 90%)"
          // }
               // if(scrollpos>=2750){
               //      gazar.style.backgroundColor = "#a68f4e"
               // }
               // if(scrollpos>=3000){
               //      gazar.style.backgroundColor = "#a08a4b"
               // }
               // if(scrollpos>=3250){
               //      gazar.style.backgroundColor = "#9b8649"
               // }
               // if(scrollpos>=3500){
               //      gazar.style.backgroundColor = "#958146"
               // } 
               // if(scrollpos>=3750){
               //      gazar.style.backgroundColor = "#907c43"
               // } 
               // if(scrollpos>=4000){
               //      gazar.style.backgroundColor = "#8a7741"
               // }
          
          
          // gazar.style.backgroundColor = "#ac9450"
     }) 
}
// console.log(window.scrollpos)
// gg();
// let scrollr = 0; 
// function myFunction(x) {
//      if (x.matches) { // If media query matches
//        tree.style.width = "50px";
//      } else {
//        gazar.style.background = "pink";
//      }
//    }
   
//    var x = window.matchMedia("(max-width: 1200px)")
//    myFunction(x) // Call listener function at run time
//    x.addListener(myFunction)
// window.addEventListener("scroll", () =>{
//      scrollr  = scrollY;
//      console.log(scrollr)
// })
