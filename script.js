gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();













let tl = gsap.timeline()



tl.to(".maintext h1", {
    x: -3000,
    scrollTrigger: {
        trigger: ".maintext h1",
        scroller: "#main",
        start: "top 14%",
        end: "top -200%",
        scrub: 1,
    }
})
tl.to(".leftdiv", {
    x: -900,
    scrollTrigger: {
        trigger: ".maintext h1",
        scroller: "#main",
        start: "top 14%",
        end: "top -200%",
        scrub: 1,
    }
})
tl.to(".rightdiv", {
    x: 400,
    scrollTrigger: {
        trigger: ".maintext h1",
        scroller: "#main",
        start: "top 14%",
        end: "top -200%",
        scrub: 1,
    }
})
tl.from(".fortext", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".second",
        scroller: "#main",
        start: "top 54%",
        end: "top 50%",
        scrub: 1,
    }
})
tl.from(".maindiv", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".third",
        scroller: "#main",
        start: "top 54%",
        end: "top 50%",
        scrub: 1,
    }
})

tl.from(".upperdiv",{
    scrollTrigger:{
        trigger:".lowerpicsdiv",
        scroller:"#main",
        start:"top top",
        end:"bottom bottom",
        pin:".upperdiv"
    }
})

tl.from(".sixthdiv", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".sixth",
        scroller: "#main",
        start: "top 54%",
        end: "top 50%",
        scrub: 1,
    }
})
tl.from(".seventh h2", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".seventh",
        scroller: "#main",
        start: "top 54%",
        end: "top 50%",
        scrub: 1,
    }
})
tl.from(".eight", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".eight",
        scroller: "#main",
        start: "top 54%",
        end: "top 50%",
        scrub: 1,
    }
})
tl.from(".tenth", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".tenth",
        scroller: "#main",
        start: "top 54%",
        end: "top 50%",
        scrub: 1,
    }
})
tl.from(".eleventh", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".eleventh",
        scroller: "#main",
        start: "top 54%",
        end: "top 50%",
        scrub: 1,
    }
})




let menu = document.querySelector(".hamburger");
let intropage = document.querySelector(".intro");
let flag = 0;
menu.addEventListener("click", function () {
    if (flag == 0) {
        intropage.style.display = "block";
        menu.style.rotate = "45deg";
        flag = 1;
    } else {
        intropage.style.display = "none";
        menu.style.rotate = "0deg";
        flag = 0;
    }
});


let mm = gsap.matchMedia();

mm.add("(max-width: 900px)", () => {

    let tl2 = gsap.timeline();

    tl2.to(".maintext h1", {
        x: -3000,
        scrollTrigger: {
            trigger: ".maintext h1",
            scroller: "#main",
            start: "top 37%",
            end: "top -200%",
            scrub: 1,
        }
    })

})
