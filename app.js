let t1=gsap.timeline()   //timeline for sychronous animation


t1.from(".logo h1",{
    y:-25,
    opacity:0,
    duration:0.7
})
t1.from(".panel li",{
    y:-25,
    opacity:0,
    duration:0.7
})
t1.from(".signin",{
    y:-25,
    opacity:0,
    duration:0.7
})
t1.from(".left h1",{
    x:-25,
    opacity:0,
    duration:0.7,
    stagger:0.4
})
t1.from(".right img",{
    x:-25,
    scale:0,
    opacity:0,
    duration:0.7
})
t1.from("hr",{
    opacity:0,
    x:12
})
t1.from(".hrsection",{
    x:-25,
    scale:0,
    opacity:0,
    duration:0.7
})
t1.from(".scrollbtn p",{
    y:12,
    repeat:-1,
    opacity:0,
    yoyo:true,
    duration:1
})

gsap.from(".box",{
    opacity:0,
    y: 80,
    scrollTrigger:{
        start:"top 55%",
        end:"top 10%",
        trigger:".page2",
        scroller:"body",
        scrub:3
    }

})