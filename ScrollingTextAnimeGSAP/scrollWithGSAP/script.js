marqueAnumation = () => {
  window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
      gsap.to(".marque", {
        x: "-200%",
        duration: 4,
        repeat: -1,
        ease: "none",
        overwrite: "true",
      });
      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      gsap.to(".marque", {
        x: "0%",
        duration: 4,
        repeat: -1,
        ease: "none",
        overwrite: "true",
      });
      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  });
};
marqueAnumation();
