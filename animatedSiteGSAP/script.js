gsap.to("#page2 h1", {
    x:"-120%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top top",
        end:"bottom top",
        scrub:2,
        pin:true,

    }
})