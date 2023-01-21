
// Mouse Follower
const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
        '-pointer': 'a,button',
        '-hidden': 'iframe',
    },
    visible: true,
    visibleOnState: false,
    speed: 0.55,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 2,
    skewingIcon: 2,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300
});

// const btns = document.querySelectorAll('.datamagnetic');

// btns.forEach((datamagnetic) => {
//     datamagnetic.addEventListener("mousemove", function(e){
//         const position = datamagnetic.getBoundingClientRect();
//         const x = e.pageX - position.left - position.width / 2;
//         const y = e.pageY - position.top - position.height / 2;

//         datamagnetic.childern[0].style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
//     });
// });

// btns.forEach((datamagnetic) => {
//     datamagnetic.addEventListener("mouseout", function(e){
//         datamagnetic.childern[0].style.transform = "translate(0px, 0px)";
//     });
// });


function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

// $('[data-magnetic]').each(function () {new Magnetic(this);});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

function preLoader() {
    setTimeout(function(){        
        $('#loading').fadeOut();
        $('#loading').delay(150).fadeOut('slow'); 
    }, 2000);
}

gsap.registerPlugin(ScrollTrigger);

var bodyScrollbar = window.Scrollbar;

function MobilePlugin() {
  bodyScrollbar.ScrollbarPlugin.apply(this, arguments);
}

MobilePlugin.prototype = Object.create(bodyScrollbar.ScrollbarPlugin.prototype);

MobilePlugin.prototype.transformDelta = function(delta, fromEvent) {
  if (fromEvent.type !== 'touchend') {
    return delta;
  }

  return {
    x: delta.x * this.options.speed,
    y: delta.y * this.options.speed,
  };
};

MobilePlugin.pluginName = 'filterEvent';
MobilePlugin.defaultOptions = {
  speed: 0.5,
};

// Overscroll plugin
bodyScrollbar.use(OverscrollPlugin);

// Mobile plugin
bodyScrollbar.use(MobilePlugin);

var ScrollbarOptions = {
    damping: 0.04,
    thumbMinSize: 5,
    renderByPixel: true,
    alwaysShowTracks: true,
    continuousScrolling: true,
    plugins: {
      overscroll: {
        effect: 'glow',
        damping: 0.2,
        maxOverscroll: 150,
        glowColor: '#222a2d'
      },
      mobile: {
        speed: 0.5
      }
    },
  };


let bodyScrollBar = Scrollbar.init(document.querySelector('#main-scrollbar'), ScrollbarOptions);
 
bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();

ScrollTrigger.scrollerProxy(document.querySelector('#main-scrollbar'), {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});

bodyScrollBar.addListener(ScrollTrigger.update);

ScrollTrigger.defaults({
    scroller: "#main-scrollbar",
    pinType: 'transform',
});

$( document ).ready(function() {
    headerToggle();
    heroTransition();
    headerSubToggle();
    scrollDiv();
    aboutSectionImg();
    aboutSectionText();
    imageOpacity();
    recentWorks();
    accordionOpacity();
    accordionOpen();
    portfolioLoad();
    portfolioMain();
    showTime();
});

function headerLeaveTransition() {  
    var headerLeave = gsap.timeline();

    headerLeave.to("#header", {
        height: '80vh',
    });

    headerLeave.to(".header-top", {
        opacity: 0,
    });

    headerLeave.to(".header-list-left > li", 1,{
        y: origin,
        opacity: 0, 
        ease: Expo.easeOut,
    }, "0.03","-=0.2");

    headerLeave.to(".header-list-right > li", 0.5,{
        y: origin,
        opacity: 0, 
        ease: Expo.easeOut,
    }, "0.03","-=0.8");

    headerLeave.to(".header-bottom > div", 0.5,{
        y: origin,
        opacity: 0, 
        ease: Expo.easeOut 
    }, "0.1","-=0.8");
}

// function headerEnterTransition() {
//     var headerEnter = gsap.timeline();

//     headerEnter.to("#header", 1,{
//         height: '70vh',
//         top: '-100%'
//     });

//     headerEnter.set("#header",{
//         height: '70vh',
//         top: '-100%'
//     });

//     headerEnter.set('#body' ,{
//         overflow: 'scroll',
//     });
    
//     headerEnter.to(".toggle-line", 1, {
//         rotate: 0,
//         ease: Expo.easeInOut,
//     });

//     headerEnter.set(".toggle-line", {
//         rotate: 0,

//     });

//     headerEnter.to(".toggle-line-n", 1, {
//         marginTop: '12px',
//         rotate: 0,
//         ease: Expo.easeInOut,
//     }, '-=1');

//     headerEnter.set(".toggle-line-n", {
//         marginTop: '12px',
//         rotate: 0,
//     });
// }

function pageTransitionOut() {
    var pageTransOut = gsap.timeline();

    pageTransOut.to('ul.transition li', {
        duration: 0.5, scaleY: 1, transformOrigin: "bottom left", stagger: 0.05});
    }

function pageTransitionIn() {
    var pageTransIn = gsap.timeline();

    pageTransIn.to('ul.transition li', {
        duration: 0.5, scaleY: 0, transformOrigin: "bottom left", stagger: 0.05});
}

// pageExitTransition = () => {
//     var timeline = gsap.timeline();

//     timeline.to(".page-transition", {
//         duration: .5,
//         height: "100%",
//         top: "0%",
//         ease: 'power3.Out',
//     });

//     timeline.from(".loading-wait > h1", {
//         y: 200,
//         skewY: 15,
//         duration: 1,
//         ease: 'power1.Out',
//     });
// }


// pageEnterTransition = () => {
//     var timeline = gsap.timeline();

//     timeline.to(".loading-wait > h1", {
//         y: -180,
//         duration: 1,
//         ease: 'power1.Out',
//     });

//     timeline.to(".page-transition", {
//         duration: .5,
//         height: "0%",
//         top: "0%",
//         ease: 'power3.Out',
//     });

//     timeline.set(".loading-wait > h1", {
//         y: 0,
//     });


// }

delay = (n) => {
    n = n || 3000;
    return new Promise((done)=> {
        setTimeout(()=> {
            done();
        }, n);
    })
}




function headerToggle() {
// Menu-Toggle Header
let menuToggle = gsap.timeline({ paused: true});

    menuToggle.to(".toggle-line", .5, {
        rotate: -45,
        ease: 'power1.Out',
    });

    menuToggle.to(".toggle-line-n", .5, {
        marginTop: 0,
        rotate: -135,
        ease: 'power1.Out',
    }, '-=0.5');

    menuToggle.to("#header", .5, {
        top: 0,
        ease: 'power1.Out',
    }, '-=0.5');

    menuToggle.from(".header-list-left > li", 0.5,{
        y: 100,
        opacity: 0,
        stagger: 0.05, 
        ease: 'power1.Out',
    },"-=0.1");

    menuToggle.from(".header-list-right > li", 0.5,{
        y: 100,
        opacity: 0, 
        ease: 'power1.Out',
    }, '-=0.5');

    menuToggle.from(".header-bottom > div", 0.5,{
        y: 80,
        opacity: 0, 
        ease: 'power1.Out',
    },"-=0.5");

    menuToggle.fromTo('body', {
        overflow: 'auto',
    },{
        overflow: "hidden",
    });

    menuToggle.reverse();
        $(document).on("click", ".navigation-toggle", function () {
            menuToggle.reversed(!menuToggle.reversed());
        });
    }

    headerSubToggle = () => {
// Sub-Menu
let subToggle = new TimelineMax({ paused: true});

    subToggle.from(".sub-menu-close", 0.5, {
        opacity: 0,
        ease: Expo.easeInOut,
    }); 

    subToggle.fromTo(".header-list-left > li", 0.5, {
        opacity: 1,
        y: origin,
    },
    {
        opacity: 0,
        y: -50,
        stagger: 0.02,
        ease: Expo.easeInOut,
        
    }, "-=0.5");

    subToggle.to(".sub-menu-list", 0.1, {
        zIndex: 1,
        ease: Expo.easeInOut,
    }, "-=1.5",);

    subToggle.from(".sub-menu-list-item", 0.5, {
        y: 30,
        opacity: 0,
        stagger: 0.05,
        ease: Expo.easeInOut,
    });

        subToggle.reverse(1);
        $(document).on("click", ".has-sub-menu > a", function () {
            subToggle.reversed(!subToggle.reversed());
        });

        $(document).on("click", ".sub-menu-close", function () {
            subToggle.reversed(!subToggle.reversed());
        });
    }


// Hero-Home
heroTransition = () => {

let tl= gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top",
        end: "bottom",
        scrub: 2,
        pin: true,
        // markers: true,
    }
});

tl.fromTo("#e", {
        y: -220,
        x: -60,
        scale: 3.5,
    },
    {    
        scale: .6,
        y: 8,
        x: 200,
        ease: "power3.out",
        duration: 3
});

tl.fromTo("#n", {
    y: -350,
    x: 100,
    opacity: 0
},
{    
    x: 130,
    scale: .6,
    y: 8,
    opacity: 1,
    ease: "power3.out",
    duration: 2,
    delay: -2
});

tl.fromTo("#i", {
    y: 350,
    x: 150, 
    opacity: 0
},
{    
    scale: .6,
    y: 25,
    x: 70,
    opacity: 1,
    ease: "power3.out",
    duration: 2,
    delay: -1
});

tl.fromTo("#g", {
    y: -350,
    x: 100,
    opacity: 0,
},
{    
    scale: .6,
    x: 25,
    y: 25,
    opacity: 1,
    ease: "power3.out",
    duration: 2,
    delay: -1
});

tl.fromTo("#m", {
    y: -350,
    opacity: 0,
},
{    
    scale: .6,
    x: -45,
    y: 8,
    opacity: 1,
    ease: "power3.out",
    duration: 2,
    delay: -1.5
});

tl.fromTo("#a", {
    x: 20,
    opacity: 0,
    scale: 2,
    y: 350
},
{    
    scale: .6,
    y: 8,
    x: -154,
    opacity: 1,
    ease: "power3.out",
    duration: 2
});


tl.fromTo(".main-line",{
    y: 170,
    opacity: 0
},
{   
    y: 160,
    opacity: 1,
    duration: 3,
    delay: -1.1
}, 9);

tl.fromTo(".second-scroll", {
    opacity: 0
},{
    opacity: 1,
    ease: "circ.in",
    duration: 4
});

tl.to(".concept-1", {
    opacity: 1,
    duration: 2
}, 15);

tl.to(".concept-2", {
    opacity: 1,
    duration: 2
});

tl.to(".concept-3", {
    opacity: 1,
    duration: 2
});

tl.to(".concept-4", {
    opacity: 1,
    duration: 2
});

tl.fromTo(".main-concept", {
    scale: 1
},{
    scale: 2.3, duration: 3,
    ease: "circ.in" 
});

tl.fromTo(".change-1", {
    opacity: 0
}, 
{
    opacity: 1,
    duration: .1
});

tl.fromTo(".change-2", {
    opacity: 0,
    scale: 2.3
},
{
    opacity: 1,
    scale: 1,
    duration: 4, 
    delay: -0.1
});

tl.fromTo(".lapi", {
    y: 200,
    opacity: 0,
    filter: "blur(8px)",
    scale: 1.2
},  
{   
    y: -100,
    opacity: 1,
    scale: .8,
    filter: "blur(0px)",
    duration: 4,
    delay: -2
}, 30);

tl.to(".change-2" , {
    opacity: 0,
    duration: 3, 
    delay: -2
});

tl.to(".lapi", {
    opacity: 0,
    scale: 1.3, 
    ease: "power1.Out",
    duration: 3
}, 35);

tl.to(".split-div", {
    opacity: 1,
    duration: 2
});

tl.fromTo(".split-1", {
    gridTemplateColumns: "50% 0% 50%" 
}, 
{
    gridTemplateColumns: "20% 60% 20%",   
    duration: 15,
    ease: "slow(0.7, 0.7, false)"
}, 50);

tl.to(".split-text", {
    scale: 1.2,
    duration: 5,
    ease: 'power3.inOut',
    delay: -2,
});    
}



scrollDiv = () => {
// Scroll Div-----------------------------------------

let scrollY = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-items",
        start: "top 95%",
        end: "bottom 5%",
        scrub: 0.5,
    }
});

scrollY.to(".scroll-items", {
    opacity: 1,
    duration: 1,
})

scrollY.fromTo(".scroll-item-1", { 
    x: 200
}, 
{   x: -200, 
    duration: 5,
    delay: -2
})

scrollY.fromTo(".scroll-item-2", { 
    x: -500
}, 
{   x: 100, 
    duration: 5,
    delay: -5
})

scrollY.fromTo(".scroll-item-3", { 
    x: 400
}, 
{   x: -600, 
    duration: 5,
    delay: -4
})

scrollY.fromTo(".scroll-item-4", { 
    x: -600
}, 
{   x: 600, 
    duration: 5,
    delay: -5
})

scrollY.fromTo(".scroll-item-5", { 
    x: 500
}, 
{   x: -200, 
    duration: 5,
    delay: -4
});

}

aboutSectionImg = () => {
// About Section-------------------------------
let aboutImg = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-img",
        start: "top 40%",
        end: "bottom", 
        // toggleActions: "restart none none none",
        // markers: true,
    }
});

aboutImg.from(".about-img-img", 1,{
    scale: 2,
    opacity: 0,
    duration: 0.5,
}, "-=.3");
}

aboutSectionText = () => {
let about = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top",
        end: "bottom", 
        scrub: 1,
        pin: true,
    }
});

about.fromTo(".about-text-text",{
    y: 500,  
    opacity: 0,
},{
    opacity:1,
    y: origin,
    duration: 2 ,
});
}


// Recent Works
function imageOpacity(){
    let imageOpacity = gsap.timeline({
        scrollTrigger: {
            trigger: ".works-main",
            start: 'top 80%', 
            toggleActions: "restart none none none",
            // markers: true,
        }
    });
    
    imageOpacity.to('.project-img-img', {
        opacity: 1,
        scale: 1,
        duration: .5,
        
    });
}

function recentWorks() {
    let recentWorks = gsap.timeline({
        scrollTrigger: {
            trigger: ".recent-works",
            start: "top -5%",
            end: "bottom", 
            pin: true,
            scrub: 3,
            toggleActions: "restart none reverse none",
            // markers: true,
        }
    });
    
    recentWorks.to('.recent-works-content',{
        left: '-260rem',
        ease: 'power2.out',
        duration: 5,
    });
    
    recentWorks.to('.works-bg-text',{
        left: '35%',
        ease: 'power2.out',
        duration: 5,
        delay: -5
    });
    
    recentWorks.to('.view-project',{
        bottom: 0,
        ease: 'power2.out',
        duration: 2,
        delay: -2
    });
}

// Service Accordion
function accordionOpen() {
	$(".accordion-items").on("click", ".accordion-heading", function () {
		$(this).toggleClass("active").next().slideToggle();

		$(".accordion-content").not($(this).next()).slideUp(300);

		$(this).siblings().removeClass("active");
	});
}

// // Accordion-Gsap
function accordionOpacity() {
    let serviceAccordion = gsap.timeline({
        scrollTrigger: {
            trigger: ".accordion-main",
            start: "top 70%",
            end: "top 70%",
            // toggleActions: "restart none reverse none",
            // markers: true,
        }
    });
    
    serviceAccordion.from('.accordion-list',{
        opacity: 0,
        stagger: .5,
        y:100,
        duration: 2,
    });
}

// Portfolio Page-------------------------------------
// porfolio-Main
function portfolioLoad(){
    gsap.from('.portfolio', {opacity: 0, duration: 1, ease: 'power3.Out',  stagger: 0.5}, '+=0.1');

gsap.from('.port-image-container', {
    left: '-600%',
    duration: 3,
    ease: 'power1.In'
}, '-=1');

gsap.from('.port-bg-text', {
    x: '100%',
    duration: 3,
    ease: 'power1.In'
}, '-=3');

gsap.to('.port-text-line > span', {
    opacity: 1,
    duaration: 3,
    ease: 'power3.Out',
}, '-=0.4');

gsap.from('.cas-progress', {
    width: '0',
    duaration: 1,
    ease: 'power3.Out',
}, '-=0.1');
}

function portfolioMain(){
    let portMain = gsap.timeline({
        scrollTrigger: {
            trigger: ".portfolio",
            start: "top",
            end: "bottom", 
            pin: true,
            scrub: 3,
        }
    });
    
    portMain.fromTo('.port-text-line > span',{
        y: '0%',
    },   
    {   
        y: '-100%',
        duration: 1,
        ease: 'power2.out',
    });
    
    portMain.fromTo('.port-image-container',{ 
        left: '90%',
    },   
    {   
        left: '-505%',
        duration: 15,
        ease: 'power3.Out',
    }, '-=1');
    
    portMain.fromTo('.port-bg-text',{ 
        x: '-30%',
    },   
    {   
        x: '70%',
        duration: 15,
        ease: 'power1.Out',
    }, '-=15');
    
    portMain.to('.cas-progress > span',{ 
        width: '100%',
        duration: 15,
        ease: 'power1.Out',
    }, '-=15');
    
    portMain.to('.port-head-container',{ 
        y: '-88%',
        duration: 15,
        ease: 'power3.Out',
    }, '-=15');
}

barba.init({
    sync: true,
    transitions: [
        {
            async once(data){
                preLoader();
            },

            async leave(data){
                const done = this.async();
                // headerLeaveTransition();
                // pageExitTransition();
                pageTransitionOut();
                await delay(1000);
                done();
            },

            async enter(data){
                pageTransitionIn();
                // pageEnterTransition();
                $(window).scrollTop(0);
                headerToggle();
                headerSubToggle();
                heroTransition();
                scrollDiv();
                aboutSectionImg();
                aboutSectionText();
                imageOpacity();
                recentWorks();
                accordionOpacity();
                accordionOpen();
                portfolioLoad();
                portfolioMain();
            },
        }
    ]
});
