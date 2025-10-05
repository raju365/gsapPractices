function breakTheText(){
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");

  var halfValue = Math.floor(splittedText.length/2);

var clutter = ""

  splittedText.forEach((elem,idx) => {
   if(idx<halfValue){
        clutter += `<span class="a">${elem}</span>`;
   }
    else{
        clutter += `<span class="b">${elem}</span>`;

    }
  });
    h1.innerHTML = clutter;
  
}; 
breakTheText();

gsap.from("h1 .a",{
    y:80,
    duration:0.8,
    opacity:0,
    delay:0.5,
    stagger:0.15,
   

})
gsap.from("h1 .b",{
    y:80,
    duration:0.8,
    opacity:0,
    delay:0.5,
    stagger:-0.15,
   

})