var menu = document.querySelector("#nav i")
var close = document.querySelector("#full i")


var tl = gsap.timeline()
tl.to("#full",{
    right: "0%",
    duration: 0.5,
   
})
tl.from("#full h4",{
    x:150,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    
}) 
tl.from("#full i",{
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)"
})
tl.paused();

menu.addEventListener("click",()=>{
    tl.play();
}) 
close.addEventListener("click",()=>{
    tl.reverse();
})