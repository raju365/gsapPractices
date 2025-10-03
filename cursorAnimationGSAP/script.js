var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imagediv = document.querySelector("#image");
main.addEventListener("mousemove", (dets) => {
 gsap.to(cursor, {
  x: dets.x,
  y: dets.y,
  duration: 0.8,
 
 });


});
imagediv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "view more"
  gsap.to(cursor, {
    scale:4,
     backgroundColor: "#ffffff8a",


  })
});
imagediv.addEventListener("mouseleave", () => {
  cursor.innerHTML = ""
  gsap.to(cursor, {
    scale:1,
     backgroundColor: "#fff",

  })
});