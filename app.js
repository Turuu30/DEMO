let Turuu=new TimelineLite();
let tween1=new TimelineLite();
let controller=new ScrollMagic.Controller();


function myFunction(x) {
     if(x.matches){
          tween1.fromTo(".ur1",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:44+"%",left:7+"%"})
          .fromTo(".ur2",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:42+"%",left:16+"%"})
          .fromTo(".ur3",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:47+"%",left:16+"%"})
          .fromTo(".ur4",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:48+"%",left:25+"%"})
          .fromTo(".ur5",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:40+"%",left:27+"%"})
          .fromTo(".ur6",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:45+"%",left:36+"%"})
          .fromTo(".ur7",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:49+"%",left:50+"%"})
          .fromTo(".ur8",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:42+"%",left:45+"%"})
          .fromTo(".ur9",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:34+"%",left:40+"%"})
          .fromTo(".ur10",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:25+"%",left:37+"%"})
          .fromTo(".ur11",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:38+"%",left:67+"%"})
          .fromTo(".ur12",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:25+"%",left:47+"%"})
          .fromTo(".ur13",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:27+"%",left:53+"%"})
          .fromTo(".ur14",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:19+"%",left:55+"%"})
          .fromTo(".ur15",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:19.5+"%",left:55+"%"})
          .fromTo(".ur16",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:27+"%",left:55+"%"})
          .fromTo(".ur17",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:18+"%",left:68+"%"})
          .fromTo(".ur18",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:20+"%",left:75+"%"})
          .fromTo(".ur19",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:15+"%",left:78+"%"})
          .fromTo(".ur20",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:11+"%",left:48+"%"})
          .fromTo(".ur21",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:10+"px",height:10+"px",top:15+"%",left:62+"%"})

     }
     else{
          tween1.fromTo(".ur1",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:40+"%",left:23+"%"})
          .fromTo(".ur2",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:35+"%",left:30+"%"})
          .fromTo(".ur3",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:45+"%",left:28+"%"})
          .fromTo(".ur4",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:52+"%",left:35+"%"})
          .fromTo(".ur5",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:35+"%",left:35+"%"})
          .fromTo(".ur6",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:45+"%",left:42+"%"})
          .fromTo(".ur7",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:32+"%",left:44+"%"})
          .fromTo(".ur8",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:55+"%",left:50+"%"})
          .fromTo(".ur9",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:40+"%",left:48+"%"})
          .fromTo(".ur10",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:40+"%",left:54+"%"})
          .fromTo(".ur11",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:10+"%",left:42+"%"})
          .fromTo(".ur12",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:13+"%",left:48+"%"})
          .fromTo(".ur13",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:22+"%",left:54+"%"})
          .fromTo(".ur14",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:8+"%",left:52+"%"})
          .fromTo(".ur15",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:32+"%",left:60+"%"})
          .fromTo(".ur16",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:10+"%",left:62+"%"})
          .fromTo(".ur17",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:18+"%",left:67+"%"})
          .fromTo(".ur18",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:5+"%",left:68+"%"})
          .fromTo(".ur19",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:13+"%",left:58.3+"%"})
          .fromTo(".ur20",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:-4+"%",left:50.5+"%"})
          .fromTo(".ur21",1,{width:0+"px",height:0+"px",top:0+"%",left:0+"%"},{width:20+"px",height:20+"px",top:-7+"%",left:54+"%"})
     }
}
let x=window.matchMedia("(max-width:700px)");
myFunction(x)
x.addListener(myFunction);

let scene=new ScrollMagic.Scene({
    triggerElement:".urBigContainer",
    duration:1000,
    triggerHook:0
    })
.setTween(tween1)
.setPin(".urBigContainer")
.addTo(controller);

//------------------q


const tree=document.getElementsByClassName('tree')[0];
const clouds=document.getElementById("clouds")
const gazar = document.getElementsByClassName('gazar')[0];
const line  = document.querySelectorAll(".line");
const grass = document.getElementsByClassName("grass")[0];
const seed =document.getElementsByClassName("seed")[0]
const root =document.getElementsByClassName("root")[0]
for(let i = 0 ; i<line.length; i++){
     line[i].style.opacity = "0"
}

function Myanga(MyangaRES) {
     if(MyangaRES.matches){
          Turuu.fromTo(
               seed , 5 , {
                    bottom: 25+ "vh" ,width: 10  + "%", rotation:-180 , opacity:1
               } , {
                    bottom: 2 + "vh" ,width: 10  + "%", rotation:260,   opacity:0
               }
          )
          .fromTo(
               root , 1 , {
                    opacity:0,bottom: 5+ "vh" , width: 2+ "%", height: 13+ "%"
               } , {
                    opacity:1,bottom: 6+ "vh" , width: 35+ "%", height: 30+ "%"
               }, "-=3"
          )

          .fromTo(
               tree ,3, {
                    opacity:0,
               } , {
                    opacity:1,
               }
          )
          .fromTo(
               tree ,7,{
                    width: 7+"%" ,height: 30+"%"
               },{
                    width:65+"%",height:55+"%"
               } , "-=3"
          )
          .fromTo(
               root ,2 ,{
                    opacity:1
               },{
                    opacity:0
               } , "-=7"
          )
          .fromTo(
               ".mainRoot" ,3 ,{
                    opacity:0, width: 0 , height: 0
               } , {
                    opacity:1, width: 55 + "%" , height: 25 + "%"
               }
          )
          .from(
               line , 7 ,{
                    opacity:1,
               } , {
                    opacity:0,
               }
          )
          .from(
               grass , 10 ,{
                    bottom: 0 + "vh"
               } , {
                    bottom: 14 + "vh"
               } 
          )

          .fromTo(
               gazar , 7 , 
               { 
                    backgroundImage: 'linear-gradient(transparent 0%, rgb(217, 188, 152) 3.5%, rgb(107, 78, 50) 100%)' 
               }, {
                    backgroundImage: 'linear-gradient(transparent 0%, rgb(107, 78, 50) 5%, rgb(107, 78, 50) 5%)'
               } , "-=7"
          )
          .fromTo(
               ".grassfirst" ,  7   , {
                    opacity: 0
               } , {
                    opacity: 1
               }, "-=7"
          )
          .fromTo(
               ".grass1one" ,7, {
                    opacity: 0
               } , {
                    opacity: 1
               }
          )
          .fromTo(
               ".grass1" ,7, {
                    opacity: 0
               } , {
                    opacity: 1
               }, "-=6.5"
          )
          .fromTo(
               ".grass2two" ,7, {
                    opacity: 0
               } , {
                    opacity: 1
               }
          )
          .fromTo(
               ".grass2" ,7, {
                    opacity: 0
               } , {
                    opacity: 1
               }, "-=6.5"
          )
          .fromTo(
               "#flower , #flower1 , #flower2 , #flower3" ,7 ,{
                    width:0,height:0,
               },{
                    width:7+"%",height:6+"%"
               } , "-=5"
          )
          .fromTo(
               "#SmallTree , #smalltree-one", 3 , {
                    width: 0 , height: 0,
               } , {
                    width: 20 + "%" , height: 15 + "%",
               }, "-=2"
          )
          .fromTo(
               "#GrassTall ,#grasstall-one ,#grasstall-two", 3 , {
                    width: 0 , height: 0,
               } , {
                    width: 20 + "%" , height: 12 + "%",
               }, "-=1"
          )
          .fromTo(
               "#GrassMany , #grassmany-one , #grassmany-two , #grassmany-three, #grassmany-four", 3 , {
                    width: 0 , height: 0,
               } , {
                    width: 20 + "%" , height: 7 + "%",
               }
          )
          .fromTo(
               "#FlowerGrass , #flowergrass-one , #flowergrass-two ,#flowergrass-three , #flowergrass-four", 3 , {
                    width: 0 , height: 0,
               } , {
                    width: 16 + "%" , height: 10 + "%",
               }, "+=1"
          )
     }
     else{
          Turuu.fromTo(
               seed , 3 , {
                    bottom: 25+ "vh" , rotation:-180 , opacity:1
               } , {
                    bottom: 2 + "vh" ,   rotation:260,opacity:0
               }
          )
          .fromTo(
               root , 1 , {
                    opacity:0,bottom: 5+ "vh" , width: 2+ "%", height: 13+ "%"
               } , {
                    opacity:1,bottom: 6+ "vh" , width: 15+ "%", height: 30+ "%"
               }, "-=3"
          )

          .fromTo(
               tree ,3, {
                    opacity:0,
               } , {
                    opacity:1,
               }
          )
          .fromTo(
               tree ,7,{
                    width: 7+"%" ,height: 30+"%"
               },{
                    width:30+"%",height:70+"%"
               } , "-=3"
          )
          .fromTo(
               root ,2 ,{
                    opacity:1
               },{
                    opacity:0
               } , "-=7"
          )
          .fromTo(
               ".mainRoot" ,1 ,{
                    opacity:0,
               } , {
                    opacity:1,
               }
          )
          .from(
               line , 7 ,{
                    opacity:1,
               } , {
                    opacity:0,
               }
          )
          .from(
               grass , 7 ,{
                    bottom: 0 + "vh"
               } , {
                    bottom: 14 + "vh"
               } 
          )

          .fromTo(
               gazar , 7 , 
               { 
                    backgroundImage: 'linear-gradient(transparent 0%, rgb(217, 188, 152) 3.5%, rgb(107, 78, 50) 100%)' 
               }, {
                    backgroundImage: 'linear-gradient(transparent 0%, rgb(107, 78, 50) 5%, rgb(107, 78, 50) 5%)'
               } , "-=7"
          )
          .fromTo(
               ".grassfirst" ,  7   , {
                    opacity: 0
               } , {
                    opacity: 1
               }, "-=7"
          )
          .fromTo(
               ".grass1one" ,7, {
                    opacity: 0
               } , {
                    opacity: 1
               }
          )
          .fromTo(
               ".grass1" ,7, {
                    opacity: 0
               } , {
                    opacity: 1
               }, "-=6.5"
          )
          .fromTo(
               ".grass2two" ,7, {
                    opacity: 0
               } , {
                    opacity: 1
               }
          )
          .fromTo(
               ".grass2" ,7, {
                    opacity: 0
               } , {
                    opacity: 1
               }, "-=6.5"
          )
          .fromTo(
               "#flower , #flower1 , #flower2 , #flower3" ,7 ,{
                    width:0,height:0,
               },{
                    width:3+"%",height:6+"%"
               } , "-=5"
          )
          .fromTo(
               "#SmallTree , #smalltree-one", 3 , {
                    width: 0 , height: 0,
               } , {
                    width: 10 + "%" , height: 20 + "%",
               }, "-=2"
          )
          .fromTo(
               "#GrassTall ,#grasstall-one ,#grasstall-two", 3 , {
                    width: 0 , height: 0,
               } , {
                    width: 10 + "%" , height: 17 + "%",
               }, "-=1"
          )
          .fromTo(
               "#GrassMany , #grassmany-one , #grassmany-two , #grassmany-three, #grassmany-four", 3 , {
                    width: 0 , height: 0,
               } , {
                    width: 10 + "%" , height: 12 + "%",
               }
          )
          .fromTo(
               "#FlowerGrass , #flowergrass-one , #flowergrass-two ,#flowergrass-three , #flowergrass-four", 3 , {
                    width: 0 , height: 0,
               } , {
                    width: 6 + "%" , height: 15 + "%",
               }, "+=1"
          )

     }
}
let MyangaRES=window.matchMedia("(max-width:1000px)");
Myanga(MyangaRES)
MyangaRES.addListener(Myanga);

let scene2=new ScrollMagic.Scene({
     triggerElement:".urgahheseg",
     duration:3000,
    triggerHook:0
})
.setTween(Turuu)
.setPin('.urgahheseg')
.addTo(controller)